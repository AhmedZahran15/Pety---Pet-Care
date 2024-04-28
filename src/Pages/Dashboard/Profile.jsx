import { useContext, useEffect, useReducer, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import Input from "../../components/InputXX";
import {
  validateEmail,
  validatePhone,
  validateString,
} from "../../utils/validationFunctions";
import { BlockLoader } from "../../components/Loader";
import Breadcrumb from "./Breadcrumb";
import toast from "react-hot-toast";
import ImageUpload from "./ImageUpload";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  photo: null,
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
};
function reducer(state, action) {
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
        phone: action.payload,
        errors: {
          ...state.errors,
          phone: validatePhone(action.payload),
        },
      };
    case "SET_PHOTO":
      return {
        ...state,
        photo: action.payload,
      };
    default:
      return state;
  }
}
function Profile() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [imageAsPreview, setImageAsPreview] = useState(null);
  const { userData, setUserData } = useContext(AuthContext);
  useEffect(() => {
    if (userData) {
      dispatch({ type: "SET_FIRST_NAME", payload: userData?.firstName || "" });
      dispatch({ type: "SET_LAST_NAME", payload: userData?.lastName || "" });
      dispatch({ type: "SET_EMAIL", payload: userData?.email || "" });
      dispatch({ type: "SET_PHONE", payload: userData?.phone || "" });
      dispatch({ type: "SET_PHOTO", payload: userData?.photo?.url || null });
    }
  }, [userData]);
  const handleChange = (e) => {
    dispatch({
      type: `SET_${e.target.name.toUpperCase()}`,
      payload: e.target.value,
    });
  };
  const handleImageChange = (e) => {
    dispatch({ type: "SET_PHOTO", payload: e.target.files[0] });
    setImageAsPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        state.errors.firstName ||
        state.errors.lastName ||
        state.errors.email ||
        state.errors.phone
      ) {
        toast.error("Please fill in all fields correctly");
        return;
      }
      setIsLoading(true);
      const formData = new FormData();
      formData.append("firstName", state.firstName);
      formData.append("lastName", state.lastName);
      formData.append("email", state.email);
      formData.append("phone", state.phone);
      formData.append("photo", state.photo);
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/users/updateMe`,
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
          localStorage.setItem("userData", JSON.stringify(data.user));
          setUserData(data.user);
          toast.success("Profile updated successfully");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again");
    }
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <BlockLoader />
      ) : (
        <div className="flex w-full flex-col">
          <Breadcrumb pageName="Profile" />
          <form
            onSubmit={handleSubmit}
            className="mb-auto grid h-4/6 w-full max-w-6xl grid-cols-1 items-start gap-x-16 gap-y-4 py-4  min-[600px]:grid-cols-2"
          >
            <Input
              name="first_Name"
              label="First Name"
              value={state.firstName}
              onChange={handleChange}
              error={state.errors.firstName}
            />
            <Input
              name="last_Name"
              label="Last Name"
              value={state.lastName}
              onChange={handleChange}
              error={state.errors.lastName}
            />
            <Input
              name="email"
              onChange={handleChange}
              label="Email"
              value={state.email}
              error={state.errors.email}
            />
            <Input
              onChange={handleChange}
              name="phone"
              label="Phone Number"
              value={state.phone}
              error={state.errors.phone}
            />
            <ImageUpload
              imageAsPreview={imageAsPreview}
              handleImageChange={handleImageChange}
              photo={state.photo}
            />
            <button className="rounded-md bg-[#34a1a5] px-4 py-3 text-white hover:bg-primary">
              Update Profile
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Profile;
