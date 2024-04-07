import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleEmailChange = (e) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
    dispatch({ type: "SET_LOGIN" });
  };
  const handlePasswordChange = (e) => {
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
    dispatch({ type: "SET_LOGIN" });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await loginUser({ email, password });
    if (res) navigate(from, { replace: true });
  };
  return (
    <form className="z-10 flex w-full flex-col gap-3 overflow-y-auto rounded-3xl border-2 border-[#FFFFFF] bg-[#FFFFFF]  px-6 py-6 shadow-md shadow-gray-400 transition-all duration-300 no-scrollbar sm:px-10 md:w-8/12 lg:p-16 lg:pr-36 xl:pr-64">
      <Link to="/">
        <img src="/Logo Placeholder.png" alt="Logo" />
      </Link>
      <div>
        <p className="text-left font-fredoka text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome Back
        </p>
        <p className="text-left text-lg font-normal sm:px-4 sm:text-xl md:text-2xl">
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
          state={{ from: location?.state?.from }}
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}

export default Login;
