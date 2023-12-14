import React from 'react';

const SignupSection = () => {
  return (
    <div className="flex  justify-around  mx-20 my-8 ">



   <div className='flex-col gap-4  flex w-5/12  mr-[-150px] '>
   <span className="text-black text-6xl font-bold font-['Product Sans']">
   WHO SHOULD USE PETY?
   </span>
   <span className="text-black text-6xl font-normal font-['Product Sans']">
   Lorem ipsum dolor sit amet 
   </span>
<div>
<button className=" hover:bg-teal-800 transition-all duration-300 bg-[#00777B]  rounded-xl py-3 px-4  tracking-wide text-center text-white text-3xl font-bold font-['Roboto Flex']">
SIGN UP
</button>
</div>
   </div>


   <img className="hidden sm:flex w-4/12 " src="public/images/homepage/Vector 3.png" alt="cat" />

    </div>
  );
};

export default SignupSection;
