import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefits', href: '#benefits' },
    { name: 'Features', href: '#features' },
    { name: 'Plans', href: '#plans' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl z-50 transition-all duration-300 rounded-2xl border ${isScrolled
        ? 'py-3 backdrop-blur-xl bg-[#0a0a0a]/80 shadow-[0_8px_30px_rgba(0,0,0,0.8)] border-white/10'
        : 'py-3 md:py-4 bg-[#0a0a0a] border-white/5 shadow-2xl shadow-black/50'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-gradient-to-br from-cyan-400 to-indigo-600 p-2 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent ">
              Veilux
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 text-sm font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}


          </div>
          <button className="hidden md:block ml-4 px-6 py-2 rounded-md bg-white  text-black shadow:md font-bold text-sm hover:from-cyan-400 hover:to-indigo-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 flex items-center justify-center focus:outline-none transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 ${mobileMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
          }`}
      >
        <div className="px-4 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 block px-4 py-3 rounded-lg text-base font-medium transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4 pb-2">
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-shadow">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
