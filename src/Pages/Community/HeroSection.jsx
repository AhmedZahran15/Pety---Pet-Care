function HeroSection() {
  return (
    <div className="mb-10 w-full bg-[url('/images/community/heroBg.svg')] bg-cover bg-bottom">
      <div className="container mx-auto flex flex-col items-center justify-center gap-x-8 overflow-hidden px-8 md:flex-row lg:gap-0">
        <div className="flex h-full w-fit flex-col gap-y-6 py-8 text-white transition-all duration-300 md:basis-1/3">
          <h1 className="font-Pacifico text-3xl sm:text-5xl">Pety Community</h1>
          <p className="font-Montserrat text-xl font-normal">
            Join the community of pet lovers and share your experiences with
            other pet owners.
          </p>
        </div>
        <div className="-mb-6 w-72 transition-all duration-300">
          <img src="/images/community/heroImg.png" alt="Community Image" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
