"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, MapPin, Calendar, User, Mail } from "lucide-react";
import Container from "@/shared/components/ui/Container";

/**
 * JourneyPlanner Component
 * A high-impact final section featuring a cinematic slow-mo video and premium enquiry form.
 */
const JourneyPlanner = () => {
  const videoRef = useRef(null);

  // Apply slow motion effect (50% speed)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="py-8 md:py-20 overflow-hidden bg-brand-soft" aria-labelledby="planner-heading">
      <Container className="px-0 md:px-4">
        <div className="relative bg-white rounded-none md:rounded-[4rem] overflow-hidden shadow-none md:shadow-2xl flex flex-col lg:flex-row min-h-[600px] border-y md:border border-slate-100">
          
          {/* Left Side: Cinematic Video */}
          <div className="lg:w-1/2 relative min-h-[250px] sm:min-h-[300px] lg:min-h-full overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/crt_the_country_202604211331.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay Gradient for integration */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent lg:hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Floating Brand Badge */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
              <span className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">
                Cinematic Series
              </span>
            </div>

            {/* Bottom Inscription */}
            <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 z-20 max-w-[240px] md:max-w-xs">
              <h3 className="text-white text-xl md:text-3xl font-bold tracking-tight mb-2">
                Unscripted Moments.
              </h3>
              <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed italic font-editorial">
                "Travel is the only thing you buy that makes you richer."
              </p>
            </div>
          </div>

          {/* Right Side: Premium Enquiry Form */}
          <div className="lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-8 md:mb-10">
                <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-2 md:mb-3 block text-center md:text-left">
                  Tailor Your Journey
                </span>
                <h2 id="planner-heading" className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight text-center md:text-left">
                  Design Your <span className="text-brand-blue">Signature</span> Edit.
                </h2>
                <p className="text-slate-500 mt-3 md:mt-4 text-sm md:text-base font-medium leading-relaxed text-center md:text-left">
                  Our specialists are ready to architect your next non-linear escape. Tell us where your curiosity leads.
                </p>
              </div>

              <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name Field */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-brand-blue">
                    <User size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-11 md:pl-12 pr-4 outline-none transition-all focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 text-slate-900 text-sm md:text-base font-medium placeholder:text-slate-400"
                  />
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-brand-blue">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-11 md:pl-12 pr-4 outline-none transition-all focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 text-slate-900 text-sm md:text-base font-medium placeholder:text-slate-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  {/* Destination Field */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-brand-blue">
                      <MapPin size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Destination" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-11 md:pl-12 pr-4 outline-none transition-all focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 text-slate-900 text-sm md:text-base font-medium placeholder:text-slate-400"
                    />
                  </div>

                  {/* Month Field */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-brand-blue">
                      <Calendar size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Preferred Month" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-11 md:pl-12 pr-4 outline-none transition-all focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 text-slate-900 text-sm md:text-base font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-brand-blue text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold transition-all shadow-lg md:shadow-xl shadow-brand-blue/20 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 md:gap-3 mt-4 group overflow-hidden relative"
                >
                  <span className="relative z-10 text-sm md:text-base">Start Dreaming</span>
                  <Send size={18} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  
                  {/* Subtle Background Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shine" />
                </button>
              </form>

              {/* Status Message */}
              <p className="text-[10px] text-slate-400 mt-6 text-center uppercase tracking-widest font-black flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-success" />
                Specialist response time: ~2 hours
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JourneyPlanner;
