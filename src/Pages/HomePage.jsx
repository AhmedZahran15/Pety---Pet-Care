import HeroSection from "../components/HeroSection";
import Features from "../components/FeaturesBar";
import Search from "../components/Search";
import SignUpSection from "../components/SignUpSection";
import CustomerStories from "../components/CustomerStories";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import HeaderPic from "../components/HeaderPic";
function HomePage() {
  return (
    <div className="m-auto flex flex-col   bg-neutral-100">
<HeaderPic headimg="public/images/homepage/homepagehead.png"/>
<Features />
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
