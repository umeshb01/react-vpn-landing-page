import React from 'react';
import { Smartphone, Zap, Globe, Route, ShieldAlert, Monitor, Laptop, Server, Wifi, Download } from 'lucide-react';

const ToolsSection = () => {
  return (
    <section id="tools" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 border border-white/10 rounded-[2.5rem] relative z-10 bg-[#050505]/30 backdrop-blur-sm">

        {/* 1. TOP SECTION (Showcase) */}
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-12 items-center pb-20 mb-20 border-b border-white/10">
          {/* Left Side: Mockup Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Mockup Frame */}
            <div className="w-[300px] h-[600px] bg-[#050505] rounded-[3rem] border-[8px] border-white/10 shadow-[0_20px_50px_rgba(56,189,248,0.15)] relative overflow-hidden flex flex-col group hover:shadow-[0_20px_60px_rgba(56,189,248,0.25)] transition-all duration-500">
              <div className="w-1/2 h-6 bg-white/10 mx-auto rounded-b-xl absolute top-0 inset-x-0 z-20"></div>
              {/* Simulated UI inside phone */}
              <div className="flex-1 p-6 flex flex-col justify-center gap-12 mt-8 relative z-10">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center p-0.5 mb-6 shadow-[0_0_30px_rgba(56,189,248,0.4)] animate-pulse">
                    <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
                      <ShieldAlert className="w-10 h-10 text-cyan-400" />
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-2xl">Connected</h4>
                  <p className="text-emerald-400 text-sm mt-1 font-medium">Your IP is hidden</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl p-4 flex items-center justify-between border border-white/10">
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-xs uppercase tracking-wider mb-1">Location</span>
                      <span className="text-white font-bold text-sm">Paris, France</span>
                    </div>
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <button className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-xl py-3.5 font-bold shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    Disconnect
                  </button>
                </div>
              </div>
              {/* Ambient glow inside phone */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/10 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-cyan-400" />
              VPN FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Tools That Make Your VPN More Powerful
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
              Take complete control over your internet connection. Customize your security protocols, manage per-app routing, and automatically select the fastest servers available worldwide with just a single tap.
            </p>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-lg hover:from-cyan-400 hover:to-indigo-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
          </div>
        </div>

        {/* 2. FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-32 relative z-10 border border-white/10">
          {/* Card 1 */}
          <div className="p-8 lg:p-12 border-b md:border-r border-white/10 flex items-start gap-5 lg:gap-6 group hover:bg-white/[0.02] transition-colors">
            <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Quick Connect</h3>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Automatically identify and connect to the fastest server available for your specific location in just one click, ensuring optimal speeds without any manual testing.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="p-8 lg:p-12 border-b border-white/10 flex items-start gap-5 lg:gap-6 group hover:bg-white/[0.02] transition-colors">
            <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Global Server Control</h3>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Hand-pick your preferred jurisdiction from our massive list of high-speed servers natively spread across dozens of countries worldwide.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 flex items-start gap-5 lg:gap-6 group hover:bg-white/[0.02] transition-colors">
            <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300">
              <Route className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Intelligent Routing</h3>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Also known as Split Tunneling. Choose which specific apps go through the encrypted VPN tunnel while others access the internet directly.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="p-8 lg:p-12 flex items-start gap-5 lg:gap-6 group hover:bg-white/[0.02] transition-colors">
            <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300">
              <ShieldAlert className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Connection Safety Tools</h3>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Integrated DNS leak protection, advanced kill switch capabilities, and ad-blocking layers built directly into the client.
              </p>
            </div>
          </div>
        </div>

        {/* 3. DEVICE SUPPORT SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Your VPN Ready on Every Device
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A single subscription covers your entire tech ecosystem. Native applications perfectly optimized for all major operating systems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">

          {/* Windows */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)] hover:-translate-y-1 backdrop-blur-sm">
            <Monitor className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-4 text-base md:text-lg">Windows</h4>
            <div className="text-white opacity-60 text-sm font-medium flex items-center group-hover:opacity-100 transition-opacity">
              <Download className="w-4 h-4 mr-1" />
              Download
            </div>
          </div>

          {/* Android */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-[0_10px_30px_rgba(52,211,153,0.15)] hover:-translate-y-1 backdrop-blur-sm">
            <Smartphone className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-4 text-base md:text-lg">Android</h4>
            <div className="text-white opacity-60 text-sm font-medium flex items-center group-hover:opacity-100 transition-opacity">
              <Download className="w-4 h-4 mr-1" />
              Download
            </div>
          </div>

          {/* macOS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:-translate-y-1 backdrop-blur-sm">
            <Laptop className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-4 text-base md:text-lg">macOS</h4>
            <div className="text-white opacity-60 text-sm font-medium flex items-center group-hover:opacity-100 transition-opacity">
              <Download className="w-4 h-4 mr-1" />
              Download
            </div>
          </div>

          {/* iOS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 backdrop-blur-sm">
            <Smartphone className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-4 text-base md:text-lg">iOS</h4>
            <div className="text-white opacity-60 text-sm font-medium flex items-center group-hover:opacity-100 transition-opacity">
              <Download className="w-4 h-4 mr-1" />
              Download
            </div>
          </div>

          {/* Linux */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-[0_10px_30px_rgba(250,204,21,0.15)] hover:-translate-y-1 backdrop-blur-sm">
            <Server className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-4 text-base md:text-lg">Linux</h4>
            <div className="text-white opacity-60 text-sm font-medium flex items-center group-hover:opacity-100 transition-opacity">
              <Download className="w-4 h-4 mr-1" />
              Download
            </div>
          </div>

          {/* Routers */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] hover:-translate-y-1 backdrop-blur-sm">
            <Wifi className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-white font-bold mb-4 text-base md:text-lg">Routers</h4>
            <div className="text-white opacity-60 text-sm font-medium flex items-center group-hover:opacity-100 transition-opacity">
              <Download className="w-4 h-4 mr-1" />
              Download
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
