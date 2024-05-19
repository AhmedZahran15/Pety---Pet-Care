import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function Auth() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="relative box-border flex min-h-screen w-screen items-center overflow-hidden bg-gradient-to-t from-[#eaeaea] to-[#f3f3f3] bg-contain bg-right bg-no-repeat p-4 sm:p-10">
      <Outlet />
      <div className="absolute right-0 z-[0] hidden h-screen md:block">
        <img className="h-screen" src="/bg.png" alt="Auth Image" />
      </div>
    </div>
  );
}

export default Auth;
