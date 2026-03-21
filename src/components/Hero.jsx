import React from 'react';
import { Shield, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full  border border-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.1)]">
          <Shield className=' w-3 h-3 ' />
          zero-log vpn access
        </div>

        {/* Big Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 md:mb-8 drop-shadow-lg leading-tight px-2">
          Unlock Access with <br className="hidden sm:block" />
          <span className="text-white bg-clip-text">
            total privacy
          </span>
        </h1>

        {/* Short Description */}
        <p className="max-w-xs sm:max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 mb-10 md:mb-12 leading-relaxed">
          Explore freely and stay protected with advanced encryption, hidden IPs, and fast global servers that keep your connection secure always.
        </p>

        {/* Two Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-2 shadow-md rounded-md bg-white text-black font-bold text-md hover:from-cyan-400 hover:to-indigo-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-300 transform hover:-translate-y-1">
            Get Started
          </button>
          <button className="w-full sm:w-auto shadow-md px-6 py-2 rounded-md bg-black text-white border font-bold text-md hover:from-cyan-400 hover:to-indigo-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-300 transform hover:-translate-y-1">
            Learn More
          </button>
        </div>

        {/* Available For Icons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <p className="text-sm text-gray-500 font-medium tracking-wider whitespace-nowrap">Available for:</p>
          <div className="flex items-center justify-center gap-5 text-gray-400">

            {/* Windows Icon */}
            <div className="flex items-center justify-center     cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
            </div>

            {/* Android Icon */}
            <div className="flex items-center justify-center     cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m11.4045-6.02L19.645 6.2612c.1197-.2064.0494-.4707-.1578-.5905-.2057-.1197-.4707-.0501-.5904.1558l-1.8028 3.1118C15.547 8.2721 13.8344 7.8767 12 7.8767c-1.8344 0-3.547.3954-5.0939 1.0617L5.1033 5.8265c-.1197-.2058-.3847-.2755-.5904-.1558-.2071.1197-.2775.384-.1578.5905l1.7635 3.0602C2.6179 11.2335.2504 14.524 0 18.5135h24c-.2504-3.9895-2.6179-7.28-6.1185-9.1921" />
              </svg>
            </div>

            {/* Apple Icon */}
            <div className="flex items-center justify-center     cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                <path d="M16.145 2.193c1.077-1.306 1.8-3.045 1.6-4.793-1.506.06-3.355 1.002-4.468 2.302-.993 1.157-1.859 2.92-1.625 4.625 1.682.13 3.418-.826 4.493-2.134ZM11.666 19.982c-1.821 0-3.565-1.258-5.636-1.258-2.071 0-4.045 1.258-5.636 1.258-2.31 0-5.836-3.385-5.836-8.529 0-4.544 2.898-6.936 5.636-6.936 1.954 0 3.654 1.258 4.793 1.258 1.14 0 2.651-1.258 4.793-1.258 2.502 0 4.887 1.411 6.027 3.518-5.32 2.748-4.385 10.231.968 12.443-1.365 3.447-4.102 8.033-7.532 8.033Z" transform="translate(1.4 2)" />
              </svg>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
