import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col'>

<div className="p-3 relative flex flex-row justify-around  items-start">


<div className=" text-black text-3xl font-bold font-['Product Sans']">Pety</div>
<div className="flex-col justify-start items-start gap-3 flex">
<div  className="text-black text-3xl font-bold font-['Product Sans']">Features</div>
<a href='' className="text-black text-2xl font-light font-['Product Sans Light'] hover:font-normal transition-all duration-50">Vet booking</a>
<a href='' className=" text-black text-2xl font-light font-['Product Sans Light'] hover:font-normal transition-all duration-50">Pet sitting</a>
<a href='' className=" text-black text-2xl font-light font-['Product Sans Light'] hover:font-normal transition-all duration-50">Pet grooming</a>
</div>
<div className="flex flex-col justify-start items-start gap-3 ">
<a href='' className="text-black text-3xl font-bold font-['Product Sans']">Contact us</a>
<a href='' className="text-black text-2xl font-light font-['Product Sans Light'] hover:font-normal transition-all duration-50">Terms of service</a>
<a href='' className="text-black text-2xl font-light font-['Product Sans Light'] hover:font-normal transition-all duration-50">Support center</a>

<div className=' text-black text-3xl font-bold font-["Product Sans"] items-end'>
Stay in Touch

<div className='flex flex-row my-5  gap-2'>
<a href="#" >
<img src="public/images/homepage/footer/Facebook.svg" alt="facebook" />

</a>

<a href="#">
<img src="public/images/homepage/footer/Twitter.svg" alt="Twitter" />

</a>
<a href="#">
<img src="public/images/homepage/footer/Instagram.svg" alt="Instagram" />

</a>
<a href="#">
<img src="public/images/homepage/footer/LinkedIn.svg" alt="LinkedIn" />

</a>
<a href="#">
<img src="public/images/homepage/footer/Group.svg" alt="youtube" />

</a>
<a href="#">
<img src="public/images/homepage/footer/discord.svg" alt="discord" />

</a>
<a href="#">
<img src="public/images/homepage/footer/whatsapp.svg" alt="whatsapp" />

</a>
</div>

</div>
</div>

</div>

    </footer>
  );
};

export default Footer;
