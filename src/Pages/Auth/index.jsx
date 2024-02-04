import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div className="flex h-screen flex-row overflow-hidden">
      <container className="w-full md:w-6/12">
        <Outlet />
      </container>
      <div className="hidden h-screen w-6/12 bg-primary clip-path-auth sm:block ">
        <img
          src="/images/1.png"
          alt="cat"
          className=" relative hidden h-full min-w-fit md:left-[100px] md:block "
        />
      </div>
    </div>
  );
}

export default Auth;
