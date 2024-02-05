import { Link } from "react-router-dom";
import { FullButton } from "../../components/FullButton";
import Input from "../../components/Input";
import { validateEmail } from "../../utils/validationFunctions";
import { useContext, useReducer } from "react";
import AuthContext from "../../contexts/AuthContext";

const validatePassword = (password) => {
  if (password.trim() === "") {
    return "Password is required";
  }
  return "";
};
const enableLogin = (state) => {
  return (
    validateEmail(state.email) === "" && validatePassword(state.password) === ""
  );
};

const initialState = {
  email: "",
  password: "",
  btnEnable: false,
  errors: {
    email: "",
    password: "",
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
        errors: {
          ...state.errors,
          email: validateEmail(action.payload),
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
    case "SET_LOGIN":
      return {
        ...state,
        btnEnable: enableLogin(state),
      };
    default:
      return state;
  }
};
function Login() {
  const [{ email, password, errors, btnEnable }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const { loginUser } = useContext(AuthContext);
  const handleEmailChange = (e) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
    dispatch({ type: "SET_LOGIN" });
  };
  const handlePasswordChange = (e) => {
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
    dispatch({ type: "SET_LOGIN" });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };
  return (
    <form className="flex w-full flex-col gap-3 overflow-y-auto rounded-3xl border-2 border-[#FFFFFF] bg-[#FFFFFF]  px-12 py-6 shadow-md shadow-gray-400 transition-all duration-300 no-scrollbar lg:w-8/12 lg:p-16 lg:pr-36 xl:pr-64">
      <Link to="/">
        <img src="/Logo Placeholder.png" alt="Logo" />
      </Link>
      <div>
        <p className="px-2 text-left font-fredoka text-6xl font-semibold lg:text-7xl">
          Welcome Back
        </p>
        <p className="px-4 text-left text-2xl font-normal">
          Sign in to your account
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-4">
        <Input
          text="Email Address"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={errors.email}
        />
        <Input
          text="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={errors.password}
        />
      </div>
      <Link
        to={"/auth/forgot-password"}
        className="mb-[-14px] ml-1 mt-[-8px] cursor-pointer text-left font-bold text-primary"
      >
        Forgot Password?
      </Link>
      <FullButton text="Sign in" enabled={btnEnable} onClick={handleLogin} />
      <div className="text-center text-lg">
        Don&apos;t have an account? &nbsp;
        <Link
          to={"/auth/register"}
          className=" cursor-pointer font-bold text-primary"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}

export default Login;

function Separator() {
  return (
    <div className="flex flex-row items-center">
      <hr className="h-[2px] w-1/2 bg-gray-300" />
      <span className=" mx-1 text-lg font-semibold">OR</span>
      <hr className="h-[2px] w-1/2 bg-gray-300" />
    </div>
  );
}
