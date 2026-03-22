import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Linkedin, Music2, AtSign } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

          {/* Left Section: Branding */}
          <div className="flex flex-col items-start max-w-md">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="bg-gradient-to-br from-cyan-400 to-indigo-600 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Veilux
              </span>
            </div>
            <p className="text-white/60 text-lg leading-relaxed mb-8 font-bold">
              fast and secured vpn designed for privacy ,protection and open access on every device
            </p>
          </div>

          {/* Right Section: Links & Socials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-24">

            {/* Pages Section */}
            <div>
              <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                Pages
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-cyan-500"></div>
              </h4>
              <ul className="space-y-4">
                {['Home page', 'Contact us', '404 page', 'Term of use', 'Privacy policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 flex items-center group font-bold">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Section */}
            <div>
              <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                Social
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-indigo-500"></div>
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Facebook', icon: Facebook },
                  { name: 'X', icon: Twitter },
                  { name: 'Instagram', icon: Instagram },
                  { name: 'LinkedIn', icon: Linkedin },
                  { name: 'TikTok', icon: Music2 },
                  { name: 'Threads', icon: AtSign },
                ].map((social) => (
                  <li key={social.name}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-3 group font-bold">
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-medium">
            Designed by <span className="text-white/80">umesh bhandari</span>
          </p>
          <div className="text-white/40 text-sm">
            © 2026 Veilux VPN. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
