import { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import toast from "react-hot-toast";
import { Loader } from "../../components/Loader";
import {
  validateConfirmPassword,
  validatePassword,
} from "../../utils/validationFunctions";
function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dialogRef = useRef(null);
  const { token } = useParams();
  const navigate = useNavigate();
  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  }
  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(validateConfirmPassword(password, e.target.value));
  }
  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordError || confirmPasswordError) {
      toast.error("Please fill the form correctly");
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/users/resetPassword/${token}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password, passwordConfirm: confirmPassword }),
        },
      );
      const data = await response.json();
      if (data.status === "success") {
        toggleDialog();
        setTimeout(() => {
          navigate("/auth/login");
        }, 5000);
      } else toast.error(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="z-10 flex w-full flex-col gap-6 overflow-y-auto rounded-3xl bg-white px-6 py-6 shadow-md shadow-neutral-400 transition-all duration-300 no-scrollbar sm:px-10 md:w-8/12 lg:p-16 lg:pr-36 xl:pr-64">
      <Link
        to="/"
        className="flex w-fit items-center justify-center gap-x-2 px-4 py-2"
      >
        <div className="h-7 w-7 rounded-full bg-black"></div>
        <span className="text-3xl font-bold text-black">PETY</span>
      </Link>
      <div>
        <h2 className="font-fredoka text-4xl font-semibold">
          Reset your password
        </h2>
        <p className="text-base font-medium text-neutral-500">
          Enter your new password below.
        </p>
      </div>
      <Modal ref={dialogRef} toggleDialog={toggleDialog}>
        <div className="flex flex-col gap-y-4 p-4">
          <h2 className="text-lg font-semibold text-neutral-900">
            You have successfully reset your password
          </h2>
          <p>
            You will be redirected to the login page in 5 seconds. If you are
            not redirected,&nbsp;
            <Link className="text-lg font-bold text-primary" to="/auth/login">
              click here
            </Link>
          </p>
        </div>
      </Modal>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="password"
            value={password}
            required
            className="w-full rounded-lg border-2 border-neutral-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <span className="text-sm text-primary">{passwordError}</span>
          )}
        </div>
        <div>
          <input
            type="password"
            value={confirmPassword}
            required
            className="w-full rounded-lg border-2 border-neutral-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
          />
          {confirmPasswordError && (
            <span className="text-sm text-primary">{confirmPasswordError}</span>
          )}
        </div>
        <button
          type="submit"
          className="hover:bg-primaryDark w-full max-w-sm self-center rounded-lg bg-primary p-3 font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-x-2">
              <Loader />
              <span>Loading...</span>
            </div>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
