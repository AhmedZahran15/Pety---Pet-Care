import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../Pages/HomePage";
import Auth from "../Pages/Auth";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import Footer from "../components/Footer";
import Services from "../Pages/Services";
import BecomeAPety from "../Pages/BecomeAPety";
import ContactUs from "../Pages/ContactUs";

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
          <Route path="becomeAPety" element={<BecomeAPety />} />
          <Route path="contact" element={<ContactUs />} />
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
