import { useState, useRef, useEffect } from "react";

export default function Faq({ qs, answ, answcolor, href }) {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="App">
        <div className=" mx-10 mb-10">
          <button
            className={` border-{#6E6E6E} } flex w-full border-t-4 bg-transparent ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className=" flex text-left  ">
                <h4 className=" font-['Product Sans'] text-2xl font-bold text-primary ">
                  {qs}
                </h4>
                <div>
                  {active ? (
                    <img src="/images/homepage/openfaq.svg" />
                  ) : (
                    <img src="/images/homepage/closedfaq.svg" />
                  )}
                </div>
              </div>
            </div>
          </button>
          <div
            ref={contentRef}
            className=" duration-400 flex  overflow-hidden text-left transition-all"
          >
            <p className='font-["Product Sans Light"] text-xl font-light text-[#18191A]'>
              {answ}
              <a className="text-xl font-normal text-primary" href={href}>
                {answcolor}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
