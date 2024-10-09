import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DownloadPage from "./components/Download";
import Footer from "./components/Footer";
import ScrollAnimationWrapper from "./components/ScrollAnimationWrapper";

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-green-900 to-blue-900 opacity-20 animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <ScrollAnimationWrapper>
          <Hero />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Features />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <DownloadPage />
        </ScrollAnimationWrapper>
        <Footer />
      </div>
    </div>
  );
}

export default App;
