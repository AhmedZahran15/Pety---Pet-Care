import PropTypes from 'prop-types';
const SocialLink = ({ href, src, alt }) => {
  return (
    <a href={href}>
      <img src={src} alt={alt} />
    </a>
  );
};

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
function TeamMember({ name, role, photo,alt }) {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2 text-neutral-500 font-medium  body-font text-lg ">
    <div className="h-full flex flex-col items-center text-center  divide-y-2 ">
<div className="flex flex-col " >
<img alt={alt} className="flex  rounded-lg w-full h-full mb-4" src={photo}/>
         <h2 className="title-font  font-medium text-lg text-neutral-800">{name}</h2>
        <h3 className="  mb-3 ">{role}</h3>

</div>
      <div className="w-full  ">
     
        <span className="flex  	mt-3">
          <a className="transition-all duration-200 hover:scale-150  ">
          <SocialLink
              href="#"
              src="/images/homepage/footer/Facebook.svg"
              alt="facebook"
            />
          </a>
          <a className="ml-2 text-primary">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-2  text-primary">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </div>
  );}
  TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  };
 function TeamSection() {
  return (
<div>
<div className="text-neutral-500 font-medium  body-font text-lg">
  <div className=" px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-bold title-font mb-4 text-neutral-800 font-fredoka ">Our Dream Team</h1>
      <p className="lg:w-2/3 mx-auto ">We have spent months scaling start-ups, building out digital
experiences and working at big tech ~ including Google, Amazon,
Fitbit, D2L, Typeform, Lazer, and Redbull.</p>
    </div>
  
    <div className="flex flex-wrap -m-4   justify-center ">

<TeamMember name="Ghazy" role="Leader/ Data scientist" photo="public/images/AboutUs/Rectangle 1037.png"/>
<TeamMember name="Ghazy" role="Leader/ Data scientist" photo="public/images/AboutUs/Rectangle 1037.png"/>
<TeamMember name="Ghazy" role="Leader/ Data scientist" photo="public/images/AboutUs/Rectangle 1037.png"/>
<TeamMember name="Ghazy" role="Leader/ Data scientist" photo="public/images/AboutUs/Rectangle 1037.png"/>
<TeamMember name="Ghazy" role="Leader/ Data scientist" photo="public/images/AboutUs/Rectangle 1037.png"/>
<TeamMember name="Ghazy" role="Leader/ Data scientist" photo="public/images/AboutUs/Rectangle 1037.png"/>
<TeamMember name="Ghazy" role="Leader/ Data scientist" photo="public/images/AboutUs/Rectangle 1037.png"/>
<TeamMember name="Ghazy" role="Leader/ Data scientist" photo="public/images/AboutUs/Rectangle 1037.png"/>
<TeamMember name="Ghazy" role="Leader/ Data scientist" photo="public/images/AboutUs/Rectangle 1037.png"/>
<TeamMember name="Ghazy" role="Leader/ Data scientist" photo="public/images/AboutUs/Rectangle 1037.png"/>


    </div>
  </div>
</div>
</div>
  )
}
export default  TeamSection