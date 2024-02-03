import HeroSection from "../components/HeroSection";
import FeaturesBar from "../components/FeaturesBar";
import Search from "../components/Search";
import CustomerStories from "../components/CustomerStories";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import HeaderPic from "../components/HeaderPic";
import SignUpSection from "../components/SignUpSection";
function HomePage() {
  return (
    <div className="m-auto flex flex-col bg-neutral-100">
      <HeaderPic />
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
