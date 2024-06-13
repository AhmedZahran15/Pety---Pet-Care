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
import ResetPassword from "../Pages/Auth/ResetPassword";
import PageNotFound from "../Pages/PageNotFound";
import Overview from "../Pages/Dashboard/Overview";
import History from "../Pages/Dashboard/History";
import CustomerHistory from "../Pages/Dashboard/CustomerHistory";
import Community from "../Pages/Community";
import MyPosts from "../Pages/Community/MyPosts";
import Bookmarks from "../Pages/Community/Bookmarks";
import NewPost from "../Pages/Community/NewPost";
import Home from "../Pages/Community/Home";
const AppLayout = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-screen-2xl">
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
            <Route path="Reservation/:id" element={<Reservation />} />
          </Route>
          <Route path="community" element={<Community />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />}>
              <Route path="new-post" element={<NewPost />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="my-posts" element={<MyPosts />}>
                <Route path="new-post" element={<NewPost />} />
              </Route>
              <Route path="bookmarks" element={<Bookmarks />} />
            </Route>
            {/* <Route path="post/:id" element={<Post />} />
              <Route path="editPost/:id" element={<EditPost />} />
              <Route path="deletePost/:id" element={<DeletePost />} /> */}
          </Route>
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Navigate replace to="overview" />} />
            <Route path="overview" element={<Overview />} />
            <Route path="profile" element={<Profile />} />
            <Route path="vet/reservations" element={<Reservations />} />
            <Route
              path="vet/history/:userId"
              element={<CustomerHistory />}
            />
            <Route path="vet/timeSlots" element={<TimeSlots />} />
            <Route path="vet/settings" element={<Settings />} />
            <Route path="petSitter/reservations" element={<Reservations />} />
            <Route
              path="petSitter/history/:userId"
              element={<CustomerHistory />}
            />
            <Route path="petSitter/timeSlots" element={<TimeSlots />} />
            <Route path="petSitter/settings" element={<Settings />} />
            <Route path="groomer/reservations" element={<Reservations />} />
            <Route
              path="groomer/history/:userId"
              element={<CustomerHistory />}
            />
            <Route path="groomer/timeSlots" element={<TimeSlots />} />
            <Route path="groomer/settings" element={<Settings />} />
            <Route path="history" element={<History />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default MainRouter;
