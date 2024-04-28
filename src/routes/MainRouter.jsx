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
import Reservation from "../Pages/Reservation";
import ProtectedRoute from "../components/ProtectedRoute";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUS";
import Dashboard from "../Pages/Dashboard";
import Reservations from "../Pages/Dashboard/Reservations";
import TimeSlots from "../Pages/Dashboard/TimeSlots";
import Settings from "../Pages/Dashboard/Settings";
import Profile from "../Pages/Dashboard/Profile";
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
          <Route element={<ProtectedRoute />}>
            <Route path="becomeAPety" element={<BecomeAPety />} />
            <Route path="Reservation" element={<Reservation />} />
          </Route>
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Navigate replace to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="vet/reservations" element={<Reservations />} />
            <Route path="vet/timeSlots" element={<TimeSlots />} />
            <Route path="vet/settings" element={<Settings />} />
            <Route path="petSitter/reservations" element={<Reservations />} />
            <Route path="petSitter/timeSlots" element={<TimeSlots />} />
            <Route path="petSitter/settings" element={<Settings />} />
            <Route path="groomer/reservations" element={<Reservations />} />
            <Route path="groomer/timeSlots" element={<TimeSlots />} />
            <Route path="groomer/settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
