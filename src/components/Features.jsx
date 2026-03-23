import React from 'react';
import { ShieldCheck, ArrowRight, Globe, Lock, CheckCircle2, Server } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">

          {/* Left Side */}
          <div className="flex flex-col h-full space-y-10 lg:space-y-0 lg:justify-between py-4">
            {/* Small VPN Connected Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center space-x-4 w-max hover:bg-white/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-2.5 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">VPN Connected</p>
                <p className="text-white text-xs font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  Protected
                </p>
              </div>
            </div>

            {/* Content gap buffer for layout flow if not using justify-between entirely depending on screen size */}
            <div className="flex-grow flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Online freedom
              </h2>
              <p className="text-white text-base md:text-lg leading-relaxed mb-8 max-w-md">
                Evade all geographical restrictions and maintain your true privacy at all times. Experience an unrestricted web with maximum security.
              </p>
              <a href="#plans" className="inline-flex items-center text-white font-bold hover:text-gray-300 transition-colors group w-max">
                See our plans
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300 w-full mt-auto">
              <div className="flex-1 pr-4 sm:pr-6 border-r border-white/10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-lg mb-1">Global Access</p>
                  <p className="text-white text-sm">
                    explore sites from any server
                  </p>
                </div>
                <Globe className="w-8 h-8 text-white shrink-0 hidden sm:block" />
              </div>
              <div className="flex-1 pl-4 sm:pl-6 flex items-center">
                <span className="text-white font-bold text-sm sm:text-base">127+ worldwide servers</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="h-full">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 h-full flex flex-col hover:bg-white/[0.07] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-all duration-500 relative overflow-hidden group">

              {/* Optional glowing orb inside the card */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-indigo-500/20 rounded-full blur-[80px] group-hover:bg-indigo-500/30 transition-colors duration-500 pointer-events-none"></div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative z-10 leading-snug tracking-tight">
                Borderless the internet without Limits
              </h3>

              <p className="text-white text-lg leading-relaxed mb-10 relative z-10">
                Move freely across the internet with open access to platforms,sites,and services that help you explore without limit and restrictions.
              </p>

              <ul className="space-y-6 mb-12 relative z-10 flex-grow">
                <li className="flex items-start">
                  <Globe className="w-6 h-6 text-white mt-0.5 shrink-0" />
                  <span className="ml-4 text-white font-medium text-lg">Access restricted content</span>
                </li>
                <li className="flex items-start">
                  <Lock className="w-6 h-6 text-white mt-0.5 shrink-0" />
                  <span className="ml-4 text-white font-medium text-lg">Encrypted Internet traffic</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-white mt-0.5 shrink-0" />
                  <span className="ml-4 text-white font-medium text-lg">Secure Private Browsing</span>
                </li>
              </ul>

              <button className="self-start w-full sm:w-max px-6 py-2 shadow-md rounded-md bg-white text-black font-bold text-md hover:from-cyan-400 hover:to-indigo-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-300 transform hover:-translate-y-1 relative z-10">
                Get Started
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
