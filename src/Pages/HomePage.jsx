import HeroSection from "../components/HeroSection";
import Features from "../components/FeaturesBar";
import Search from "../components/Search";
import SignUpSection from "../components/SignUpSection";
import CustomerStories from "../components/CustomerStories";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <div className="m-auto flex flex-col">
      <HeroSection />
      <Features />
      <Search />
      <SignUpSection />
      <CustomerStories />
      <Footer />
    </div>
  );
}

export default HomePage;
