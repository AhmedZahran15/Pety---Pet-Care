import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Auth from "../Pages/Auth";
import Login from "../components/Login";
import Register from "../components/Register";
import Navbar from "../components/Navbar";
import ForgotPassword from "../components/ForgotPassword";
import Test from "../components/Test";
import Navbartest from "../components/navbartest";
const NavLayout = () => {
  return (
    <div className="mx-auto h-screen w-full max-w-screen-2xl">
      {/* <AuthChecker />*/}
    

<Navbar />  
     <Navbartest />
      <Outlet />

    </div>
  );
};
function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
