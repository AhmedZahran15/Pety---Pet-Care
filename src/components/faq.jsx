import { useState } from "react";
import ArrowSvg from "../../public/images/homepage/ArrowSvg";
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
    <div className="mx-32 mt-12">
      <h1 className="mb-6 text-center text-5xl font-bold uppercase">
        Frequently Asked Questions
      </h1>
      {faqs.map((item, index) => (
        <AccordionItem
          key={index}
          isOpen={isOpen}
          item={item}
          index={index}
          toggle={toggle}
        >
          <div
            className={`overflow-hidden transition-all duration-200 ${
              isOpen === index ? "max-h-48 ease-in-out" : "max-h-0"
            }`}
          >
            <p>{item.text}</p>
          </div>
        </AccordionItem>
      ))}
    </div>
  );
}
function AccordionItem({ item, index, isOpen, toggle, children }) {
  return (
    <div
      className={`cursor-pointer border-b-[3px] px-2 py-4 text-xl`}
      onClick={() => toggle(index)}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-primary">{item.title}</span>
        {isOpen === index ? <ArrowSvg direction="up" /> : <ArrowSvg />}
      </div>
      {children}
    </div>
  );
}
