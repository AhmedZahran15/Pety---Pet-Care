import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function Auth() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  return (
    <div className="box-border flex h-screen w-screen overflow-hidden bg-[#F4F4F4] bg-cover p-10 lg:bg-[url('/231.jpg')]">
      <Outlet />
    </div>
  );
}

export default Auth;
