import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div className="bg-left-center box-border flex h-screen w-screen overflow-hidden bg-[url('/231.jpg')] bg-cover p-10">
      <Outlet />
    </div>
  );
}

export default Auth;
