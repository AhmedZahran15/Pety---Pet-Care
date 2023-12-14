import React from 'react';

import { Link } from "react-router-dom";
const HomePageContainer = () => {
  return (
    <div className="flex  gap-[200px] bg-[url('images/homepage/herobackground.png')] bg-no-repeat bg-hero-bg w-full h-[750px] bg-bottom  items-center bg-cover  ">
      
      <img className="w-4/12 hidden sm:flex  " src="images/homepage/cat in blob 1 1.png" alt="cat" />

      <div className=" flex   flex-col mx-auto  mt-[-100px]  gap-[18px]  w-5/12  ">
        <div className="text-black text-6xl font-bold font-product-sans ">HEALTH CARE FOR YOUR PET</div>
        <div className=" text-black text-6xl font-normal font-product-sans">Lorem ipsum dolor sit dolor amet</div>
        <div className="">
         <div>
          <button className=" text-center text-white text-3xl font-bold font-Roboto Flex px-[40px] py-[18px] hover:bg-amber-400 transition-all duration-300 bg-amber-500 rounded-xl ">
            <Link to="/about">Learn more</Link>
          </button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default HomePageContainer;
