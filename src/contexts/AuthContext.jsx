import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
const API_URL = "https://petcare-znql.onrender.com";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("token") || null);
  const [userData, setUserData] = useState(
    localStorage.getItem("userData") || null,
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = localStorage.getItem("userData");
    if (token) {
      setUser(token);
    }
    if (data) {
      setUserData(data);
    }
  }, []);

  const loginUser = async (userData) => {
    setIsLoading(true);
    const res = await fetch(`${API_URL}/api/users/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (data.success) {
      setUser(data.token);
      //  setUserData(data.user);
      localStorage.setItem("token", data.token);
      //   localStorage.setItem("userData", JSON.stringify(data.user));
      toast.success("Login successful", {
        id: "login-success-toast",
      });
    }
    if (!data.success) {
      toast.error(data.error, {
        id: "login-error-toast",
      });
    }
    setIsLoading(false);
  };

  const registerUser = async (userData) => {
    setIsLoading(true);
    const res = await fetch(`${API_URL}/api/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (data.success) {
      setUser(data.token);
      //   setUserData(data.user);
      // save to local storage
      localStorage.setItem("token", data.token);
      //localStorage.setItem("userData", JSON.stringify(data.user));
      toast.success("Registration successful", {
        id: "register-success-toast",
      });
    }
    if (!data.success) {
      toast.error(data.error, {
        id: "register-error-toast",
      });
    }
    setIsLoading(false);
  };

  const logoutUser = async () => {
    setUser(null);
    localStorage.removeItem("token");
    toast.success("Logout successful", {
      id: "logout-success-toast",
    });
  };

  const contextData = {
    isLoading,
    user,
    userData,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthContext;
