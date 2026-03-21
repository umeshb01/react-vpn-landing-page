import React from 'react';
import { ShieldCheck, Lock, Globe, Zap } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Centered Top Paragraph */}
        <div className="text-center max-w-5xl mx-auto mt-4 mb-16 sm:mb-20 px-6 sm:px-12">
          <p className="text-white text-xl md:text-4xl font-bold tracking-wide leading-relaxed lg:px-16">
            Built for your online needs, this vpn offers fast performance,solid security,and full access on any device.Wheather you browse,streame or work,it keeps you protected with smooth experience.
          </p>
        </div>

        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium mb-6 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <Zap className="w-4 h-4 text-white" />
              VPN Benefits
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Powerful security <br className="hidden md:block" />
              for everyday use
            </h2>
          </div>

          {/* Right Side Description */}
          <div className="md:max-w-md">
            <p className="text-white text-lg leading-relaxed">
              Experience the internet without borders. We provide industry-leading encryption and high-speed servers to keep your digital life completely secure and private no matter where you browse from.
            </p>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 min-h-[300px] lg:min-h-[400px] flex flex-col justify-start hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] group">

            <h3 className="text-2xl font-bold text-white mb-4">Private Browsing</h3>
            <p className="text-white leading-relaxed">
              Hide your IP address and encrypt your internet traffic so no one can see what you do online. Protect your digital identity and history completely from ISPs and trackers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 min-h-[300px] lg:min-h-[400px] flex flex-col justify-start hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] group">

            <h3 className="text-2xl font-bold text-white mb-4">Secure Connection</h3>
            <p className="text-white leading-relaxed">
              Military-grade AES-256 encryption ensures your data stays safe, even on public Wi-Fi networks. If your connection drops, our automatic kill switch shields your data.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 min-h-[300px] lg:min-h-[400px] flex flex-col justify-start hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] group">

            <h3 className="text-2xl font-bold text-white mb-4">Open Access</h3>
            <p className="text-white leading-relaxed">
              Bypass geo-restrictions, heavy censorship, and institutional firewalls. Access global media, streaming TV, and social platforms from absolutely anywhere in the world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
