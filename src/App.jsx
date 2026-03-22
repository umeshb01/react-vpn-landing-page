import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import ToolsSection from './components/ToolsSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Benefits />
        <ToolsSection />
      </main>
    </div>
  );
}

export default App;
