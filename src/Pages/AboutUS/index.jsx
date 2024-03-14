import AboutUsSection from "./AboutUsSection";
import TeamSection from "./TeamSection";

function AboutUs() {
  return (
    <div className="flex flex-col items-center bg-neutral-100">
      <AboutUsSection />
      <TeamSection />
    </div>
  );
}

export default AboutUs;
