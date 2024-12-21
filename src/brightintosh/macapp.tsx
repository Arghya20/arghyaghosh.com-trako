import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/FeatureCard";
import Compatibility from "./components/Compatibility";
import HowItWorks from "./components/HowItWorks";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";

function BrightIntosh() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Compatibility />
        <HowItWorks />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
}

export default BrightIntosh;
