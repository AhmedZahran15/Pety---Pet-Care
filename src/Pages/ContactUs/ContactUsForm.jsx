import { useReducer } from "react";
import {
  validatePhone,
  validateString,
  validateEmail,
} from "../../utils/validationFunctions";
import Input from "../../components/InputXX";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  },
};

function validateTextArea(text) {
  if (text.length < 150) return "Message must be at least 150 characters long";
  return "";
}

function btnEnable(state) {
  return (
    !validateString(state.firstName) &&
    !validateString(state.lastName) &&
    !validateEmail(state.email) &&
    !validatePhone(state.phoneNumber) &&
    !validateTextArea(state.message)
  );
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
        errors: {
          ...state.errors,
          firstName: validateString(action.payload, "First name "),
        },
      };
    case "SET_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
        errors: {
          ...state.errors,
          lastName: validateString(action.payload, "Last name "),
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
    case "SET_Message":
      return {
        ...state,
        message: action.payload,
        errors: {
          ...state.errors,
          message: validateTextArea(action.payload),
        },
      };
    default:
      return state;
  }
};

function ContactUsForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleFirstNameChange(e) {
    dispatch({ type: "SET_FIRST_NAME", payload: e.target.value });
  }
  function handleLastNameChange(e) {
    dispatch({ type: "SET_LAST_NAME", payload: e.target.value });
  }
  function handleEmailChange(e) {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  }
  function handlePhoneChange(e) {
    dispatch({ type: "SET_PHONE", payload: e.target.value });
  }
  function handleMessageChange(e) {
    dispatch({ type: "SET_Message", payload: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-start gap-y-[26px] self-center rounded-2xl border-[1px] border-neutral-300 bg-white p-8 text-gray-500 shadow-lg shadow-neutral-200 sm:w-2/3 md:w-full lg:w-full xl:w-7/12"
    >
      <div className="flex flex-col">
        <p className="font-fredoka text-4xl font-semibold text-neutral-800">
          Get In Touch
        </p>
        <p className="text-lg font-medium text-neutral-500">
          You can reach us anytime.
        </p>
      </div>
      <div className="flex w-full flex-col gap-[26px] lg:flex-row">
        <Input
          value={state.firstName}
          style="noLabel"
          onChange={handleFirstNameChange}
          error={state.errors.firstName}
          placeholder="First Name"
        />
        <Input
          value={state.lastName}
          style="noLabel"
          onChange={handleLastNameChange}
          error={state.errors.lastName}
          placeholder="Last Name"
        />
      </div>
      <Input
        value={state.email}
        onChange={handleEmailChange}
        style="noLabel"
        error={state.errors.email}
        placeholder="Your email"
      />
      <Input
        value={state.phoneNumber}
        onChange={handlePhoneChange}
        style="noLabel"
        error={state.errors.phoneNumber}
        placeholder="Phone Number"
      />
      <div className="w-full">
        <div className="relative">
          <textarea
            className="w-full rounded-lg px-3 py-1 font-semibold text-neutral-800 shadow-md shadow-neutral-100 outline-primary ring-1 ring-neutral-300 placeholder:font-semibold placeholder:text-neutral-400"
            placeholder="Message"
            rows={5}
            maxLength={300}
            value={state.message}
            onChange={handleMessageChange}
          />
          <div className="absolute bottom-2 right-2">
            {state.message.length}/300
          </div>
        </div>
        <div className="px-1 text-sm font-medium text-primary">
          {state.errors.message}
        </div>
      </div>
      <button
        disabled={!btnEnable(state)}
        className={`w-full rounded-full bg-[#ffa500] py-3 text-lg font-bold text-white hover:bg-amber-400 disabled:cursor-not-allowed disabled:bg-[#dddddd]`}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactUsForm;
