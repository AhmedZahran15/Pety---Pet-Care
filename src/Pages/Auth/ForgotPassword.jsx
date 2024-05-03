import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import toast from "react-hot-toast";
import Modal from "../../components/Modal";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dialogRef = useRef(null);
  const navigate = useNavigate();
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
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/users/forgetPassword`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );
      const data = await response.json();
      if (data.status === "success") {
        toggleDialog();
        setTimeout(() => {
          navigate("/");
        }, 10000);
      } else toast.error(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="z-10 flex w-full flex-col gap-6 overflow-y-auto rounded-3xl bg-white px-6 py-6 shadow-md shadow-neutral-400 transition-all duration-300 no-scrollbar sm:px-10 md:w-8/12 lg:p-16 lg:pr-36 xl:pr-64">
      <Link to="/">
        <img src="/Logo Placeholder.png" alt="Logo" />
      </Link>
      <div>
        <h2 className="font-fredoka text-4xl font-semibold">
          Forgot your password ?
        </h2>
        <p className="text-base font-medium text-neutral-500">
          No worries! Enter your email address and we will send you a link to
          reset your password.
        </p>
      </div>
      <Modal ref={dialogRef} toggleDialog={toggleDialog}>
        <div className="flex flex-col gap-y-4 p-4">
          <h2 className="text-lg font-semibold text-neutral-900">
            Email sent successfully
          </h2>
          <p className="text-neutral-700">
            We have sent you an email with instructions to reset your password.
          </p>
          <p>
            <span className="font-semibold">Note:</span> Please check your spam
            folder if you can&apos;t find the email.
          </p>
          <p>
            you will now be directed to the homepage in 10 seconds. If you are
            not redirected, click{" "}
            <Link className="text-lg font-bold text-primary" to="/">
              here
            </Link>
          </p>
        </div>
      </Modal>
      <form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          required
          className="w-full rounded-lg border-2 border-neutral-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex basis-1/2 items-center gap-x-4">
          <Link
            to="/auth/login"
            role="button"
            className="basis-full rounded-lg border-2 border-white bg-neutral-100 p-3 text-center font-semibold text-primary outline-primary transition-all duration-300 hover:border-primary hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary sm:basis-1/3 xl:basis-1/4"
          >
            Back to login
          </Link>
          <button
            type="submit"
            className="basis-full rounded-lg bg-primary p-3 font-semibold text-white transition-all duration-300 hover:bg-[#015d61] focus:outline-none focus:ring-2 focus:ring-primary sm:basis-1/3 xl:basis-1/4"
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
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
