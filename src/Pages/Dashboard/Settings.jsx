import { useEffect, useReducer, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import Input from "../../components/InputXX";
import {
  validateEmail,
  validatePhone,
  validateString,
} from "../../utils/validationFunctions";
import { BlockLoader } from "../../components/Loader";
import Breadcrumb from "./Breadcrumb";
import ImageUpload from "./ImageUpload";
import { getCoordinates } from "../../utils/helpers";
import AnimalsCheck from "./AnimalsCheck";

const initialState = {
  petyName: "",
  clinicalName: "",
  address: "",
  email: "",
  phoneNumber: "",
  price: "",
  animals: [],
  description: "",
  offer: false,
  photo: null,
  errors: {
    petyName: "",
    clinicalName: "",
    email: "",
    address: "",
    phoneNumber: "",
    price: "",
    animals: "",
    description: "",
  },
};
function validateAnimals(array) {
  if (array.length === 0) {
    return "At least one animal must be selected";
  }
  return "";
}
function reducer(state, action) {
  switch (action.type) {
    case "SET_SETTINGS":
      return {
        ...state,
        petyName: action.payload.petyName,
        clinicalName: action.payload.clinicalName,
        address: action.payload.address,
        description: action.payload.description,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        price: action.payload.price,
        animals: action.payload.animals,
        offer: action.payload.offer,
        photo: action.payload.photo?.url,
      };
    case "SET_PROPERTY":
      return {
        ...state,
        [action.payload.property]: action.payload.value,
        errors: {
          ...state.errors,
          [action.payload.property]: validateString(
            action.payload.value,
            action.payload.property,
          ),
        },
      };
    case "SET_PHOTO":
      return {
        ...state,
        photo: action.payload,
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
    case "SET_OFFER":
      return {
        ...state,
        offer: action.payload,
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
    case "SET_PHONE":
      return {
        ...state,
        phoneNumber: action.payload,
        errors: {
          ...state.errors,
          phoneNumber: validatePhone(action.payload),
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
    default:
      return state;
  }
}
function Settings() {
  const { pathname } = useLocation();
  const role = pathname.split("/")[2];
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [imageAsPreview, setImageAsPreview] = useState(null);

  const handleImageChange = (e) => {
    dispatch({ type: "SET_PHOTO", payload: e.target.files[0] });
    setImageAsPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    dispatch({
      type: `SET_PROPERTY`,
      payload: {
        property: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("petyName", state.petyName);
      formData.append("role", role);
      formData.append("clinicalName", state.clinicalName);
      formData.append("address", state.address);
      formData.append("email", state.email);
      formData.append("phoneNumber", state.phoneNumber);
      formData.append("price", state.price);
      formData.append("description", state.description);
      formData.append("offer", state.offer);
      state.photo && formData.append("photo", state.photo);
      state.animals.forEach((animal) => {
        formData.append("animals", animal);
      });
      formData.append("coordinates", await getCoordinates(state.address));
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/dashboard/updatePety`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        },
      );
      if (response.ok) {
        const data = await response.json();
        if (data.status === "success") {
          dispatch({ type: "SET_SETTINGS", payload: data.data });
          toast.success("Profile updated successfully");
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/dashboard/petyInformation`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ role }),
          },
        );
        if (response.ok) {
          const data = await response.json();
          dispatch({ type: "SET_SETTINGS", payload: data.data[0] });
        }
      } catch (error) {
        toast.error("Something went wrong");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserSettings();
  }, [role]);

  return (
    <>
      {isLoading ? (
        <BlockLoader />
      ) : (
        <div className="flex w-full flex-col" onSubmit={handleSubmit}>
          <Breadcrumb pageName="Settings" />
          <form className="mb-auto grid h-4/6 w-full max-w-6xl grid-cols-1 items-start gap-x-8 gap-y-4 py-4  min-[600px]:grid-cols-2">
            <Input
              label="Name"
              name="petyName"
              value={state.petyName}
              onChange={handleChange}
              error={state.errors.petyName}
            />
            <div className="self-center min-[600px]:-mb-6">
              <ImageUpload
                imageAsPreview={imageAsPreview}
                handleImageChange={handleImageChange}
                photo={state.photo}
              />
            </div>
            <Input
              label="Clinic Name"
              name="clinicalName"
              value={state.clinicalName}
              onChange={handleChange}
              error={state.errors.clinicalName}
            />
            <Input
              label="Address"
              name="address"
              value={state.address}
              onChange={handleChange}
              error={state.errors.address}
            />
            <Input
              label="Email"
              name="email"
              value={state.email}
              onChange={(e) => {
                dispatch({
                  type: `SET_EMAIL`,
                  payload: e.target.value,
                });
              }}
              error={state.errors.email}
            />
            <Input
              label="Phone Number"
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={(e) => {
                dispatch({
                  type: `SET_PHONE`,
                  payload: e.target.value,
                });
              }}
              error={state.errors.phoneNumber}
            />
            <Input
              label="Price"
              type="number"
              name="price"
              value={state.price}
              onChange={(e) => {
                dispatch({
                  type: `SET_PRICE`,
                  payload: e.target.value,
                });
              }}
              error={state.errors.price}
            />
            <Input
              label="Description"
              name="description"
              value={state.description}
              onChange={handleChange}
              error={state.errors.description}
            />
            <AnimalsCheck
              animals={state.animals}
              dispatch={dispatch}
              error={state.errors.animals}
            />
            <button
              type="submit"
              className="rounded-md bg-[#267d80] px-4 py-3 text-white hover:bg-primary"
            >
              Update Settings
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Settings;
