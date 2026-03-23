import React from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: "1 Month",
      price: "9.99",
      period: "/mo",
      buttonText: "Get Started",
      buttonVariant: "outline",
      features: [
        "10+ Global Locations",
        "Military-Grade Encryption",
        "Connect 5 Devices",
        "Unlimited Bandwidth",
        "24/7 Support"
      ]
    },
    {
      name: "1 Year",
      price: "4.99",
      period: "/mo",
      buttonText: "Get 1 Year Plan",
      buttonVariant: "solid",
      popular: true,
      features: [
        "127+ Global Locations",
        "Military-Grade Encryption",
        "Connect 10 Devices",
        "Unlimited Bandwidth",
        "Priority 24/7 Support",
        "Ad & Malware Blocker"
      ]
    },
    {
      name: "2 Years",
      price: "3.49",
      period: "/mo",
      buttonText: "Get 2 Year Plan",
      buttonVariant: "outline",
      features: [
        "127+ Global Locations",
        "Military-Grade Encryption",
        "Connect Unlimited Devices",
        "Unlimited Bandwidth",
        "Priority 24/7 Support",
        "Ad & Malware Blocker",
        "Dedicated IP Address"
      ]
    }
  ];

  return (
    <section id="plans" className="py-24 bg-[#0f172a] relative overflow-hidden border-y border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 border border-white/10 rounded-[2.5rem] py-16 md:py-24 bg-white/[0.02] backdrop-blur-2xl shadow-inner shadow-white/5">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              VPN PLANS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold text-white mb-6 leading-tight">
              Choose the Plans That Fits Your Online Life
            </h2>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-bold">
              Annually - Save 30%
            </div>
          </div>
          <div className="max-w-md text-left lg:text-right">
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Unlock the full potential of your internet with a plan that scales with your growing digital needs and privacy requirements.
            </p>
            <div className="inline-flex items-center gap-2 text-white font-medium">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <span>30-day Money-Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative border ${plan.popular ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-white/10' : 'border-white/10 bg-white/5'} rounded-xl p-8 flex flex-col space-y-4 hover:shadow-2xl hover:border-white/20 transition-all duration-300 group backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-cyan-500 text-[#0f172a] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  Best Value
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-3xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 group/item">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-cyan-500/10 group-hover/item:bg-cyan-500/20 transition-colors">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-400 group-hover/item:text-gray-300 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-4 rounded-lg font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 ${
                  plan.popular 
                    ? 'bg-white text-[#0f172a] hover:bg-gray-100 shadow-[0_10px_20px_rgba(255,255,255,0.1)]' 
                    : plan.buttonVariant === 'solid'
                    ? 'bg-cyan-500 text-[#0f172a] hover:bg-cyan-400 shadow-[0_10px_20px_rgba(6,182,212,0.1)]'
                    : 'border border-white/20 text-white hover:bg-white/10'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
