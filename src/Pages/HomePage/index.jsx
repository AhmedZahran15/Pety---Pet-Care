import HeroSection from "./HeroSection";
import FeaturesBar from "../../components/FeaturesBar";
import Search from "../../components/Search";
import CustomerStories from "./CustomerStories";
import Footer from "../../components/Footer";
import FAQ from "./FAQ";
import SignUpSection from "./SignUpSection";
function HomePage() {
  return (
    <div className="m-auto flex flex-col bg-neutral-100">
      <FeaturesBar />
      <Search />
      <HeroSection />
      <SignUpSection />
      <CustomerStories />
      <FAQ />
      <Footer />
    </div>
  );
}

export default HomePage;
