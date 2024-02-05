import HeroSection from "./HeroSection";
import FeaturesBar from "../../components/FeaturesBar";
import Search from "../../components/Search";
import CustomerStories from "./CustomerStories";
import FAQ from "./FAQ";
import SignUpSection from "./SignUpSection";
function HomePage() {
  return (
    <div className="m-auto flex flex-col bg-neutral-100">
      <FeaturesBar imgSrc={"images/homepage/homepageHead.png"} />
      <Search />
      <HeroSection />
      <SignUpSection />
      <CustomerStories />
      <FAQ />
    </div>
  );
}

export default HomePage;
