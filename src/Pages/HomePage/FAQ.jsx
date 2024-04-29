import { useState } from "react";
import ArrowSvg from "../../assets/ArrowSvg";
import PropTypes from "prop-types";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function FAQ() {
  const [isOpen, setIsOpen] = useState(null);
  function toggle(index) {
    setIsOpen((prev) => (index === prev ? null : index));
  }
  return (
    <div className="mx-8 mt-20 flex flex-col items-center gap-y-10 sm:container sm:mx-auto">
      <h1 className="font-fredoka text-3xl font-bold text-neutral-900 sm:text-4xl md:text-5xl">
        Frequently Asked Questions
      </h1>
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
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
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
      className={`w-full cursor-pointer border-b-[3px] py-2 font-['Montserrat'] text-xl`}
      onClick={() => toggle(index)}
    >
      <div className="flex items-center justify-between ">
        <span
          className={`font-['Montserrat'] text-xl font-bold  ${
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
            } transition-all duration-200 ${
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
