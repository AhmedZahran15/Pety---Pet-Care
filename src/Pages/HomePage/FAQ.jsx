import { useState } from "react";
import ArrowSvg from "../../assets/ArrowSvg";
import PropTypes from "prop-types";
const faqs = [
  {
    title: "How can I create an account on PETY?",
    text: "To create an account on PETY, simply click on the 'Sign Up' button on the homepage and follow the instructions to provide your details. Once registered, you can log in securely to access all the features of our platform.",
  },
  {
    title: "How do I book an appointment with a pet service provider?",
    text: "Booking an appointment with a pet service provider on PETY is easy! Simply browse through the available services, select the one you're interested in, choose a provider, and follow the prompts to schedule your appointment.",
  },
  {
    title: "Is my personal information safe and secure on PETY?",
    text: "Yes, we take the security and privacy of your personal information very seriously. PETY employs industry-standard encryption protocols and security measures to safeguard your data. Your information will only be used for the purpose of providing our services and will not be shared with third parties without your consent.",
  },
  {
    title: "How can I leave a review for a pet service I've used?",
    text: "After booking and receiving a pet service through PETY, you'll have the option to leave a review and rating for the service provider. Simply log in to your account, navigate to the service you've used, and share your feedback to help other users make informed decisions.",
  },
];

export default function FAQ() {
  const [isOpen, setIsOpen] = useState(null);
  function toggle(index) {
    setIsOpen((prev) => (index === prev ? null : index));
  }
  return (
    <div className="container mx-auto mt-20 flex flex-col items-center px-8">
      <div className="-mb-8 flex items-center self-start">
        <h1 className="font-Pacifico text-3xl text-black sm:text-4xl md:text-5xl">
          FAQ
        </h1>
        <img
          className="w-60"
          src="/images/homepage/helloCat.png"
          alt="Cat saying hello."
        />
      </div>
      <div className="flex flex-col gap-y-6">
        {faqs.map((item, index) => (
          <AccordionItem
            key={index}
            isOpen={isOpen}
            item={item}
            index={index}
            toggle={toggle}
          >
            <div
              className={`overflow-hidden font-sans font-normal transition-all duration-200 ease-in-out ${
                isOpen === index ? "max-h-80" : "max-h-0"
              }`}
            >
              <p>{item.text}</p>
            </div>
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}
function AccordionItem({ item, index, isOpen, toggle, children }) {
  return (
    <div
      className={`font-Montserrat w-full cursor-pointer border-b-[3px] py-2 text-xl`}
      onClick={() => toggle(index)}
    >
      <div className="group flex items-center justify-between font-medium ">
        <span
          className={`text-xl font-bold transition-all duration-300 group-hover:text-primary  ${
            isOpen === index ? "text-primary" : "text-neutral-900"
          }`}
        >
          {item.title}
        </span>
        <span className="w-8">
          <ArrowSvg
            className={`${
              isOpen === index
                ? "fill-primary stroke-primary"
                : "fill-neutral-900 stroke-neutral-900"
            } transition-all duration-300 group-hover:fill-primary group-hover:stroke-primary ${
              isOpen === index ? "rotate-180" : ""
            }`}
          />
        </span>
      </div>
      {children}
    </div>
  );
}
AccordionItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  isOpen: PropTypes.number,
  toggle: PropTypes.func,
  children: PropTypes.node,
};
