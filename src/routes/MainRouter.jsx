import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage/index";
import Auth from "../pages/Auth/index";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Footer from "../components/Footer";
import Services from "../Pages/Services";
import BecomeAPety from "../Pages/BecomeAPety";
import StepOne from "../Pages/BecomeAPety/stepOne";
import StepTwo from "../Pages/BecomeAPety/StepTwo";
import StepThree from "../Pages/BecomeAPety/StepThree";

const AppLayout = () => {
  return (
    <div className="mx-auto max-h-screen w-full max-w-screen-2xl">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<Services />} />
          <Route path="becomeAPety" element={<BecomeAPety />}>
            <Route index element={<Navigate replace to="stepOne" />} />
            <Route path="stepOne" element={<StepOne />} />
            <Route path="stepTwo" element={<StepTwo />} />
            <Route path="stepThree" element={<StepThree />} />
          </Route>
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
