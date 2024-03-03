import { Outlet } from "react-router-dom";
import ContactPage from "./ContactPage";


function ContactUS() {
  return (

    <div className="h-full w-full bg-neutral-100">
      <Outlet />
      <ContactPage />
    </div>

  );
}

export default ContactUS;
