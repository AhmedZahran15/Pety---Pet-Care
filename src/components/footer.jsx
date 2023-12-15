const FooterLink = ({ href, text }) => {
  return (
    <a
      href={href}
      className="font-['Product Sans Light'] duration-50 text-2xl font-light text-black transition-all hover:font-normal
      hover:text-primary"
    >
      {text}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="relative flex flex-row items-start justify-around  p-3">
        <div className=" font-['Product Sans'] text-3xl font-bold text-black">
          Pety
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="font-['Product Sans'] text-3xl font-bold text-black">
            Features
          </div>
          <FooterLink href="#" text="Vet Booking" />
          <FooterLink href="#" text="Pet Sitting" />
          <FooterLink href="#" text="Pet Grooming" />
        </div>
        <div className="flex flex-col items-start justify-start gap-3 ">
          <FooterLink href="#" text="Contact US" />
          <FooterLink href="#" text="Terms of Service" />
          <FooterLink href="#" text="Support Center" />

          <div className=' font-["Product Sans"] items-end text-3xl font-bold text-black'>
            Stay in Touch
            <div className="my-5 flex flex-row  gap-2">
              <a href="#">
                <img
                  src="public/images/homepage/footer/Facebook.svg"
                  alt="facebook"
                />
              </a>

              <a href="#">
                <img
                  src="public/images/homepage/footer/Twitter.svg"
                  alt="Twitter"
                />
              </a>
              <a href="#">
                <img
                  src="public/images/homepage/footer/Instagram.svg"
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <img
                  src="public/images/homepage/footer/LinkedIn.svg"
                  alt="LinkedIn"
                />
              </a>
              <a href="#">
                <img
                  src="public/images/homepage/footer/Group.svg"
                  alt="youtube"
                />
              </a>
              <a href="#">
                <img
                  src="public/images/homepage/footer/discord.svg"
                  alt="discord"
                />
              </a>
              <a href="#">
                <img
                  src="public/images/homepage/footer/whatsapp.svg"
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
