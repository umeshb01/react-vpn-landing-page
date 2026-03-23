import React from 'react';
import { MessageSquare, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Freelance Designer",
    content: "The connection speed is absolutely mind-blowing. I can stream 4K content and upload heavy design files without a single hiccup. Best VPN I've used.",
    rating: 5,
    avatar: "AR"
  },
  {
    name: "Sarah Jenkins",
    role: "SecOps Engineer",
    content: "As someone who works in security, I'm very picky about encryption. Veilux's zero-log policy and military-grade protocols and routing give me total peace of mind.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "David Chen",
    role: "Digital Nomad",
    content: "Traveling through countries with strict internet filters used to be a nightmare. Now, I have open access to everything I need with just one tap. Lifesaver!",
    rating: 5,
    avatar: "DC"
  },
  {
    name: "Emily Watson",
    role: "Content Creator",
    content: "Steady protection that doesn't battery drain my devices. The interface is clean, the connection is stable, and the support team is actually helpful.",
    rating: 5,
    avatar: "EW"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            <MessageSquare className="w-4 h-4 text-white" />
            CUSTOMER REVIEWS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Trusted by Who Want Faster and Safer Internet
          </h2>
          <p className="text-white text-lg md:text-xl leading-relaxed opacity-80">
            see why user trust the app for fast connection open access ,and steady protection
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] p-6 lg:p-5 xl:p-8 backdrop-blur-lg hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(147,51,234,0.1)] hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white text-lg md:text-xl leading-relaxed mb-10 italic">
                "{item.content}"
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black font-extrabold text-xl border-2 border-white/10 shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{item.name}</h4>
                  <p className="text-white opacity-60 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
