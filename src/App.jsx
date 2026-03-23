import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import PricingPlans from './components/PricingPlans';
import Features from './components/Features';
import ToolsSection from './components/ToolsSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Benefits />
        <ToolsSection />
        <Testimonials />
        <PricingPlans />
      </main>

      <Footer />
    </div>
  );
}

export default App;
