import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div className="flex flex-row overflow-hidden">
      <div className="w-full md:w-7/12">
        <Outlet />
      </div>
      <div className="w-5/12 h-screen hidden sm:block"
      style={{ background: 'linear-gradient(280deg, #007175, #007175 82%, white 83%, white)' }}>
        <img
          src="/images/1.png"
          alt="cat"
          className=" h-full min-w-fit  relative left-[-180px]"
        />
      </div>
    </div>
  );
}

export default Auth;
