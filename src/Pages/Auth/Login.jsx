import { Link } from "react-router-dom";
import { FullButton } from "../../components/FullButton";
import Input from "../../components/Input";

function Login() {
  return (
    <container className="no-scrollbar md:px-18 flex h-screen w-full flex-col gap-3 overflow-y-auto px-20 pt-20 sm:pl-12 lg:px-28">
      <Link
        to={"/"}
        className="mb-6 w-full text-left text-5xl font-extrabold text-primary"
      >
        SiteLogo
      </Link>
      <h1 className="text-center text-6xl font-medium">Sign in</h1>
      <Input text="Email" type="email" />
      <Input text="Password" type="password" />
      <Link
        to={"/auth/forgot-password"}
        className="mb-[-14px] ml-1 mt-[-8px] cursor-pointer text-left font-bold text-primary"
      >
        Forgot Password?
      </Link>
      <FullButton text="Sign in" />
      <h2 className="text-center text-lg">
        Don't have an account? &nbsp;
        <Link
          to={"/auth/register"}
          className=" cursor-pointer font-bold text-primary"
        >
          Sign up
        </Link>
      </h2>
      <Separator />
    </container>
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
