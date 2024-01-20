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
    <div className="mx-24 mt-12 space-y-2">
      {faqs.map((item, index) => (
        <AccordionItem key={index} item={item} index={index} toggle={toggle}>
          {isOpen === index ? (
            <div className="">
              <p>{item.text}</p>
            </div>
          ) : null}
        </AccordionItem>
      ))}
    </div>
  );
}
function AccordionItem({ item, index, toggle, children }) {
  return (
    <div
      className={`${children ? "open" : ""} cursor-pointer`}
      onClick={() => toggle(index)}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">{item.title}</span>
        {children ? <ArrowSvg direction="up" color="#00777B" /> : <ArrowSvg />}
      </div>
      {children}
    </div>
  );
}
