import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default HomePage;
