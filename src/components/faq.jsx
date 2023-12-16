import React, { useState, useRef, useEffect }  from 'react'


export default function faq({ qs, answ,answcolor,href }) {
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
        <div className=' mb-10 mx-10'>
          <button
            className={` flex w-full bg-transparent border-t-4 border-{#6E6E6E} } ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className=" flex text-left  ">
                <h4 className=" text-primary text-2xl font-bold font-['Product
Sans'] ">
                {qs}
                </h4>
                <div >
             {active ? <img src="/images/homepage/openfaq.svg"/>: <img src="/images/homepage/closedfaq.svg"/>}
  
     </div>
              </div>
  
            </div>
          </button>
          <div
                ref={contentRef}
                className=' transition-all duration-400  overflow-hidden flex text-left'
              >
                <p className='text-[#18191A] text-xl font-light font-["Product
Sans
Light"]'>{answ} <a className='text-primary text-xl font-normal' href={href}  >{answcolor}</a></p>
              </div>
        </div>
      </div>
    </>
  );
}
