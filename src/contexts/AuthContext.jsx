import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("token") || null);
  const [userData, setUserData] = useState(
    localStorage.getItem("userData") || null,
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token") || null;
    const data = localStorage.getItem("userData") || null;
    if (token) {
      setUser(token);
    }
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const loginUser = async (userData) => {
    setIsLoading(true);
    const res = await fetch(
      `${import.meta.env.VITE_API_LINK}/api/users/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      },
    );

    const data = await res.json();
    if (data.status === "success") {
      setUser(data.token);
      setUserData(data.data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userData", JSON.stringify(data.data));
      toast.success("Login successful", {
        id: "login-success-toast",
      });
    }
    if (data.status === "fail") {
      toast.error(data.message, {
        id: "login-error-toast",
      });
    }
    setIsLoading(false);
    return data.status === "success";
  };

  const registerUser = async (newUser) => {
    setIsLoading(true);
    const res = await fetch(
      `${import.meta.env.VITE_API_LINK}/api/users/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      },
    );
    const data = await res.json();
    if (data.status === "success") {
      setUser(data.token);
      setUserData(data.data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userData", JSON.stringify(data.data));
      toast.success("Registration successful", {
        id: "register-success-toast",
      });
    }
    if (data.status === "error") {
      toast.error(data.message, {
        id: "register-error-toast",
      });
    }
    setIsLoading(false);
    return data.status === "success";
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
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
    setUserData,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthContext;
