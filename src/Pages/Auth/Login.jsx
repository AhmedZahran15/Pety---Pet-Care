import { Link } from "react-router-dom";
import { FullButton } from "../../components/FullButton";
import Input from "../../components/Input";

function Login() {
  return (
    <form className="flex flex-col gap-3 overflow-y-auto rounded-3xl border-2  border-[#FFFFFF] bg-[#FFFFFF] p-16 pr-64 shadow-md shadow-gray-400 no-scrollbar md:w-8/12">
      <Link to="/">
        <img src="/Logo Placeholder.png" alt="Logo" />
      </Link>
      <div>
        <p className="px-2 text-left font-fredoka text-8xl font-semibold">
          Welcome Back
        </p>
        <p className="px-4 text-left text-2xl font-normal">
          Sign in to your account
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-4">
        <Input text="Email Address" type="email" />
        <Input text="Password" type="password" />
      </div>
      <Link
        to={"/auth/forgot-password"}
        className="mb-[-14px] ml-1 mt-[-8px] cursor-pointer text-left font-bold text-primary"
      >
        Forgot Password?
      </Link>
      <FullButton text="Sign in" />
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
