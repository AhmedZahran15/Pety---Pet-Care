import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; 
  return (
 <div className="container"> 
<div class="md:hidden flex items-center">
	<button  onClick={toggleMenu} class="outline-none mobile-menu-button ">
		<svg
			class="w-6 h-6 text-gray-500"
			x-show="!showMenu"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
		<path d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
	</button>
</div>
    
<div  className={`${
          isOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto transition-all   bg-[#E3F0F1]`}
        style={{ left: "auto", right: 0 }}>
	<ul className="">
		<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-black hover:bg-[#00777B] transition duration-100 font-semibold">Home</a></li>
		<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-[#00777B] transition duration-100">Services</a></li>
		<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-[#00777B] transition duration-100">About</a></li>
		<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-[#00777B] transition duration-100">Contact Us</a></li>
	</ul>
</div>





</div>  
  );
};

export default Navbar;
