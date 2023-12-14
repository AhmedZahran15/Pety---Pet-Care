import React from 'react';

const FeatureBar = () => {
  return (
   
    <div className=' mx-5 sm:flex grid grid-cols-2  sm:justify-between sm:mx-[100px]  justify-end' >
<a href='' className=''>
<img className=" w-32 h-32" src="public/images/features/Vet.png" />
<p className='sm:text-center  text-teal-700 text-2xl font-normal  font-["Product Sans Light"] hover:text-teal-900 transition-all duration-300 '>Vet</p>
</a>

<a href='' className=''>
<img className=" w-32 h-32" src="images/features/Pet Setting.png" />
<p className="text-black text-2xl font-normal font-['Product Sans Light'] sm:text-center hover:text-slate-700 transition-all duration-300" >Pet Sitting</p>
</a>
<a href='' className=''>
<img className=" w-32 h-32" src="images/features/Pet Grooming.png" />
<p className="sm:text-center hover:text-amber-600 transition-all duration-300 text-amber-500 text-2xl font-normal font-['Product Sans Light']">Pet Grooming</p>
</a>
<div className='flex flex-col  justify-between   '>
  <a  href="#" className=' mt-20 '>
    <svg className='' width="54" height="12" viewBox="0 0 54 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="more">
        <circle id="Ellipse 11" cx="6" cy="6" r="6" fill="#00777B" />
        <circle id="Ellipse 12" cx="27" cy="6" r="6" fill="#00777B" />
        <circle id="Ellipse 13" cx="48" cy="6" r="6" fill="#00777B" />
      </g>
    </svg>
  </a>
<button className=" text-teal-700 text-2xl font-normal hover:text-teal-800 transition-all duration-300 sm:text-center text-start  font-['Product Sans Light']" >
  More
</button>
</div>


</div>

  
  );
}

export default FeatureBar;