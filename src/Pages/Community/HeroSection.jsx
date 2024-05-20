function HeroSection() {
  return (
    <div className="flex h-44 items-center justify-center gap-4 bg-[#0866FF]">
      <img
        src="/images/community/communityHome.png"
        alt="Community"
        className="h-36"
      />
      <div className="flex flex-col items-center justify-center gap-2 text-white">
        <h1 className="font-fredoka text-5xl font-bold ">Pety Community</h1>
        <p className="w-[370px] text-center  text-lg">
          Join the community of pet lovers and share your experiences with other
          pet owners.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
