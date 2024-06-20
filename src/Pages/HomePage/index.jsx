import HeroSection from "./HeroSection";
import Search from "../../components/Search";
import CustomerStories from "./CustomerStories";
import FAQ from "./FAQ";
import SignUpSection from "./SignUpSection";
import FeaturesSection from "./FeaturesSection";
function HomePage() {
  return (
    <div className="m-auto flex flex-col overflow-x-hidden bg-neutral-100">
      <HeroSection />
      <SignUpSection />
      <FeaturesSection />
      <Search />
      <CustomerStories />
      <FAQ />
    </div>
  );
}

export default HomePage;
