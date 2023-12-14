import React from 'react';

const InputFields = () => {
  return ( 
  <div>
    <div className=" w-[1240px] h-[54px] justify-start items-start gap-5 flex-col sm:flex sm:flex-row my-5 mx-[100px] pt-[65px] pb-[92px]">
      <select className=" w-[1240px] h-[54px] px-3 bg-white rounded-lg border mb-5 border-neutral-500 justify-start items-center gap-2.5 flex">
        <option className=" opacity-50 text-neutral-500 text-xl font-normal font-['TS Rotger'] hidden">what are you looking for?</option>
        <option className=" opacity-50 text-neutral-500 text-xl font-normal font-['TS Rotger']">Vet</option>
        <option className=" opacity-50 text-neutral-500 text-xl font-normal font-['TS Rotger']">Pet Setting</option>
        <option className=" opacity-50 text-neutral-500 text-xl font-normal font-['TS Rotger']">Pet Grooming</option>
      </select>
      <select className=" w-[1240px] mb-2 h-[54px] px-3 bg-white rounded-lg border border-neutral-500 justify-start items-center gap-2.5 flex">
        <option className=" opacity-50 text-neutral-500 text-xl font-normal font-['TS Rotger']">select your location</option>
      </select>
    <div className=' flex  justify-center mt-5 '>
    <button className="w-[348px] h-14 px-6 py-3  bg-amber-500 rounded-lg justify-center items-center gap-2.5 inline-flex text-center text-white text-xl font-bold font-['Roboto Flex'] ">
       Search
      </button>
    </div>
    
    </div>
    <div className="w-[1240px] h-0.5 opacity-20 bg-amber-500 mb-[68px] inline-flex mx-[100px] " />
    </div>
  );
};

export default InputFields;


