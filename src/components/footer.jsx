const FooterLink = ({ href, text }) => {
  return (
    <a
      href={href}
      className="font-['Product Sans Light'] text-2xl font-normal text-gray-600 transition-all duration-100 hover:font-medium
      hover:text-primary"
    >
      {text}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="mx-10 my-8 flex flex-wrap items-start justify-start gap-y-4 pt-10 sm:justify-around">
      <div className="w-48">
        <div className="mb-2 text-3xl font-bold">Pety</div>
        <FooterLink href="#" text="Terms of Service" />
      </div>
      <div className="flex w-40 flex-col gap-3">
        <div className="font-['Product Sans'] text-3xl font-bold">Features</div>
        <FooterLink href="#" text="Vet Booking" />
        <FooterLink href="#" text="Pet Sitting" />
        <FooterLink href="#" text="Pet Grooming" />
      </div>
      <div className="flex flex-row items-start justify-start gap-6 sm:flex-col ">
        <div>
          <div className="font-['Product Sans'] text-3xl font-bold">
            Contact US
          </div>
          <FooterLink href="#" text="Support Center" />
        </div>
        <div className='font-["Product Sans"] flex w-48 flex-wrap text-3xl font-bold'>
          Stay in Touch
          <div className="my-5 flex flex-row  gap-2">
            <a href="#">
              <img src="/images/homepage/footer/Facebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img src="/images/homepage/footer/Twitter.svg" alt="Twitter" />
            </a>
            <a href="#">
              <img
                src="/images/homepage/footer/Instagram.svg"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img src="/images/homepage/footer/LinkedIn.svg" alt="LinkedIn" />
            </a>
            <a href="#">
              <img src="/images/homepage/footer/Group.svg" alt="youtube" />
            </a>
            <a href="#">
              <img src="/images/homepage/footer/Discord.svg" alt="discord" />
            </a>
            <a href="#">
              <img src="/images/homepage/footer/whatsapp.svg" alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
