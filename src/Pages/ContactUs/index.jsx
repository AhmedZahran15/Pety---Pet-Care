import ContactUsForm from "./ContactUsForm";
import Info from "./Info";

function ContactUS() {
  return (
    <div className="flex flex-col items-center justify-between gap-16 bg-neutral-100 px-4 py-8 md:flex-row md:px-8 lg:gap-4 xl:px-28">
      <Info />
      <ContactUsForm />
    </div>
  );
}

export default ContactUS;
