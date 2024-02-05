import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div className="box-border flex h-screen w-screen overflow-hidden bg-[#F4F4F4] bg-cover p-10 lg:bg-[url('/231.jpg')]">
      <Outlet />
    </div>
  );
}

export default Auth;
