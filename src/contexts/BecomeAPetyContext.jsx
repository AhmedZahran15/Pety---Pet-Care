const API_URL = "https://petcare-znql.onrender.com";
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import {
  validateEmail,
  validatePhone,
  validateString,
} from "../utils/validationFunctions";
import { getCoordinates } from "../utils/helpers";
const initialState = {
  step: 1,
  petyName: "",
  clinicalName: "",
  address: "",
  price: "",
  phoneNumber: "",
  animals: [],
  description: "",
  email: "",
  role: "",
  errors: {
    petyName: "",
    clinicalName: "",
    address: "",
    price: "",
    phoneNumber: "",
    animals: "",
    description: "",
    email: "",
    role: "",
  },
};
function validateRole(role) {
  if (role === "") {
    return "Please choose a role.";
  }
  return "";
}
function validateAnimals(array) {
  if (array.length === 0) {
    return "At least one animal must be selected";
  }
  return "";
}
function reducer(state, action) {
  switch (action.type) {
    case "SET_PETY_NAME":
      return {
        ...state,
        petyName: action.payload,
        errors: {
          ...state.errors,
          petyName: validateString(action.payload, "Pety name "),
        },
      };
    case "SET_CLINICAL_NAME":
      return {
        ...state,
        clinicalName: action.payload,
        errors: {
          ...state.errors,
          clinicalName: validateString(action.payload, "Clinical name "),
        },
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
        errors: {
          ...state.errors,
          address: validateString(action.payload, "Address "),
        },
      };
    case "SET_PRICE":
      return {
        ...state,
        price: action.payload,
        errors: {
          ...state.errors,
          price: action.payload === "" ? "Price is required" : "",
        },
      };
    case "SET_PHONE_NUMBER":
      return {
        ...state,
        phoneNumber: action.payload,
        errors: {
          ...state.errors,
          phoneNumber: validatePhone(action.payload),
        },
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
        errors: {
          ...state.errors,
          description: validateString(action.payload, "Description "),
        },
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
        errors: {
          ...state.errors,
          email: validateEmail(action.payload),
        },
      };
    case "SET_ROLE":
      return {
        ...state,
        role: action.payload,
        errors: {
          ...state.errors,
          role: validateRole(action.payload),
        },
      };
    case "SET_STEP":
      return {
        ...state,
        step: action.payload,
      };
    case "validateStepOne":
      return {
        ...state,
        errors: {
          petyName: validateString(state.petyName, "Pety name "),
          clinicalName: validateString(state.clinicalName, "Clinical name "),
        },
      };
    case "validateStepTwo":
      return {
        ...state,
        errors: {
          price: state.price === "" ? "Price is required" : "",
          role: validateRole(state.role),
          description: validateString(state.description, "Description "),
          animals: validateAnimals(state.animals),
        },
      };
    case "validateStepThree":
      return {
        ...state,
        errors: {
          phoneNumber: validatePhone(state.phoneNumber),
          email: validateEmail(state.email),
          address: validateString(state.address, "Address "),
          animals: validateAnimals(state.animals),
        },
      };
    case "ADD_ANIMAL":
      return {
        ...state,
        animals: [...state.animals, action.payload],
        errors: {
          ...state.errors,
          animals: validateAnimals([...state.animals, action.payload]),
        },
      };
    case "REMOVE_ANIMAL":
      return {
        ...state,
        animals: state.animals.filter((animal) => animal !== action.payload),
        errors: {
          ...state.errors,
          animals: validateAnimals(
            state.animals.filter((animal) => animal !== action.payload),
          ),
        },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
const BecomeAPetyContext = createContext();
export const BecomeAPetyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const registerPety = async () => {
    const token = localStorage.getItem("token");
    const lnglat = await getCoordinates(state.address);
    const response = await fetch(`${API_URL}/api/pety`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        petyName: state.petyName,
        clinicalName: state.clinicalName,
        address: state.address,
        location: {
          type: "Point",
          coordinates: lnglat,
        },
        price: state.price,
        phoneNumber: state.phoneNumber,
        animals: state.animals,
        description: state.description,
        email: state.email,
        role: state.role,
      }),
    });
    const data = await response.json();
    return data;
  };
  const contextData = {
    registerPety,
    state,
    dispatch,
  };
  return (
    <BecomeAPetyContext.Provider value={contextData}>
      {children}
    </BecomeAPetyContext.Provider>
  );
};
BecomeAPetyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default BecomeAPetyContext;
