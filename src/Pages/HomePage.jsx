import React from "react";
import Test from "../components/Test";
import Hero from "../components/Herosection";
import Vectortest from "../components/Vectortest";
import Features from "../components/featuresbar";
import Fields from "../components/inputfields";
import Signup from "../components/signupsection";
import SignupSection from "../components/signupsection";
import CustomerStories from "../components/CUSTOMER STORIES";
import Footer from "../components/footer";
function HomePage() {
return <div className="grid m-auto">
<Test />
<Hero />
<Features />
<Fields />
<SignupSection /> 
<CustomerStories />
<Footer/>
  </div> 
}

export default HomePage;
