import HeroSection from "../components/Herosection";
import Features from "../components/featuresbar";
import Fields from "../components/inputfields";
import SignupSection from "../components/signupsection";
import CustomerStories from "../components/CUSTOMER STORIES";
import Footer from "../components/footer";
import Faq from "../components/faq";
function HomePage() {
  return (
    <div className="m-auto flex flex-col">
      <HeroSection />
      <Features />
      <Fields />
      <Faq qs="question" answ="answer" answcolor="red" />
      <SignupSection />
      <CustomerStories />
      <Footer />
    </div>
  );
}

export default HomePage;
