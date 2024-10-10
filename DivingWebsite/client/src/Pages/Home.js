import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturedDiveSites from "../Components/FeaturedDiveSites";
import HomeGallery from "../Components/HomeGallery";
import WhySection from "../Components/WhySection";
import FAQ from "../Components/FAQ";
import StayUpdated from "../Components/StayUpdated";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedDiveSites />
      <HomeGallery />
      <WhySection />
      <FAQ />
      <StayUpdated />
      <Footer />

      {/* Other components */}
    </div>
  );
};

export default Home;
