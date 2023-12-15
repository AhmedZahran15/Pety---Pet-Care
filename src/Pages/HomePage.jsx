import HeroSection from "../components/Herosection";
import Features from "../components/featuresbar";
import Fields from "../components/inputfields";
import SignupSection from "../components/signupsection";
import CustomerStories from "../components/CUSTOMER STORIES";
import Footer from "../components/footer";
function HomePage() {
  return (
    <div className="m-auto flex flex-col">
      <HeroSection />
      <Features />
      <Fields />
      <SignupSection />
      <CustomerStories />
      <Footer />
    </div>
  );
}

export default HomePage;
