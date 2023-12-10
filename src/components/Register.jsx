import { Link } from "react-router-dom";
import Input from "./Input.jsx";
import { FullButton } from "./FullButton";

function Register() {
  return (
    <container className="md:px-18 flex h-screen w-full flex-col 
    gap-1 overflow-y-auto px-20 pt-4  no-scrollbar sm:pl-12 lg:px-28 xl:px-36">
      <Link
        to={"/"}
        className="mb-6 w-full text-left text-5xl font-extrabold text-primary"
      >
        SiteLogo
      </Link>
      <h1 className=" mb-2 text-center text-6xl font-medium">Sign Up</h1>
      <div className="flex w-full flex-row gap-4">
        <Input text="First name" type="text" />
        <Input text="Last name" type="text" />
      </div>
      <Input text="Email" type="email" />
      <Input text="Password" type="password" />
      <Input type="password" text="Confirm password" />
      <Input type="text" text="Phone number" />
      <FullButton text="Sign Up" />
      <h2 className="text-center text-lg">
        Already have an account? &nbsp;
        <Link
          to={"/auth/login"}
          className=" cursor-pointer font-bold text-primary"
        >
          Sign in
        </Link>
      </h2>
    </container>
  );
}

export default Register;
