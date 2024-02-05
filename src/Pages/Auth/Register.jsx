import { Link } from "react-router-dom";
import Input from "../../components/Input.jsx";
import { FullButton } from "../../components/FullButton.jsx";
import {
  validateName,
  validateEmail,
  validatePhone,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validationFunctions.js";
import { useContext, useReducer } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";

const initialState = {
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
  email: "",
  phoneNumber: "",
  btnEnable: false,
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
  },
};

const enableRegister = (state) => {
  return (
    validateName(state.firstName, "First name ") === "" &&
    validateName(state.lastName, "Last name ") === "" &&
    validateEmail(state.email) === "" &&
    validatePhone(state.phoneNumber) === "" &&
    validatePassword(state.password) === "" &&
    validateConfirmPassword(state.password, state.confirmPassword) === ""
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
        errors: {
          ...state.errors,
          firstName: validateName(action.payload, "First name "),
        },
      };
    case "SET_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
        errors: {
          ...state.errors,
          lastName: validateName(action.payload, "Last name "),
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
    case "SET_PHONE":
      return {
        ...state,
        phoneNumber: action.payload,
        errors: {
          ...state.errors,
          phoneNumber: validatePhone(action.payload),
        },
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
        errors: {
          ...state.errors,
          password: validatePassword(action.payload),
        },
      };
    case "SET_CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: action.payload,
        errors: {
          ...state.errors,
          confirmPassword: validateConfirmPassword(
            state.password,
            action.payload,
          ),
        },
      };
    case "SET_REGISTER":
      return {
        ...state,
        btnEnable: enableRegister(state),
      };
    default:
      return state;
  }
};

function Register() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { registerUser } = useContext(AuthContext);
  function handleFirstNameChange(e) {
    dispatch({ type: "SET_FIRST_NAME", payload: e.target.value });
    dispatch({ type: "SET_REGISTER" });
  }
  function handleLastNameChange(e) {
    dispatch({ type: "SET_LAST_NAME", payload: e.target.value });
    dispatch({ type: "SET_REGISTER" });
  }
  function handleEmailChange(e) {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
    dispatch({ type: "SET_REGISTER" });
  }
  function handlePhoneChange(e) {
    dispatch({ type: "SET_PHONE", payload: e.target.value });
    dispatch({ type: "SET_REGISTER" });
  }
  function handlePasswordChange(e) {
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
    dispatch({ type: "SET_REGISTER" });
  }
  function handleConfirmPasswordChange(e) {
    dispatch({ type: "SET_CONFIRM_PASSWORD", payload: e.target.value });
    dispatch({ type: "SET_REGISTER" });
  }
  function handleRegister(e) {
    e.preventDefault();
    registerUser({
      firstname: state.firstName,
      lastname: state.lastName,
      email: state.email,
      password: state.password,
      passwordConfirm: state.confirmPassword,
      phoneNumber: state.phoneNumber,
    });
  }
  return (
    <form className="flex w-full flex-col gap-4 overflow-y-auto rounded-3xl border-2 border-[#FFFFFF]  bg-[#FFFFFF] px-12 py-2 shadow-md shadow-gray-400 transition-all duration-300 no-scrollbar lg:w-8/12 lg:pr-36 xl:px-16 xl:pr-64">
      <Link to="/">
        <img src="/Logo Placeholder.png" alt="Logo" />
      </Link>
      <div>
        <p className="px-2 text-left font-fredoka text-5xl font-semibold lg:text-6xl">
          Welcome
        </p>
      </div>
      <div className="flex w-full flex-row gap-4">
        <Input
          value={state.firstName}
          onChange={handleFirstNameChange}
          error={state.errors.firstName}
          text="First name"
          type="text"
        />
        <Input
          value={state.lastName}
          onChange={handleLastNameChange}
          error={state.errors.lastName}
          text="Last name"
          type="text"
        />
      </div>
      <Input
        value={state.email}
        onChange={handleEmailChange}
        error={state.errors.email}
        text="Email"
        type="email"
      />
      <Input
        value={state.password}
        onChange={handlePasswordChange}
        error={state.errors.password}
        text="Password"
        type="password"
      />
      <Input
        value={state.confirmPassword}
        onChange={handleConfirmPasswordChange}
        error={state.errors.confirmPassword}
        type="password"
        text="Confirm password"
      />
      <Input
        value={state.phoneNumber}
        onChange={handlePhoneChange}
        error={state.errors.phoneNumber}
        type="tel"
        text="Phone number"
      />
      <FullButton
        text="Sign Up"
        enabled={state.btnEnable}
        onClick={handleRegister}
      />
      <h2 className="text-center text-lg">
        Already have an account? &nbsp;
        <Link
          to={"/auth/login"}
          className=" cursor-pointer font-bold text-primary"
        >
          Sign in
        </Link>
      </h2>
    </form>
  );
}

export default Register;
