"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact-us" className="relative z-10 px-6 py-32 max-w-6xl mx-auto bg-neutral-950 text-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        {/* Left Sidebar (40% approximation: col-span-5) */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-3xl font-bold uppercase tracking-wide mb-16 leading-snug"
            >
              See what our platform delivers:
            </motion.h2>
            <div className="space-y-10">
              {[
                "A next-generation navigation solution powered by Low Earth Orbit (LEO) satellites",
                "High-reliability positioning in challenging environments like urban canyons",
                "A scalable infrastructure enabling autonomous driving and advanced mobility systems"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-6 group"
                >
                  <Plus className="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  <p className="text-neutral-300 text-sm md:text-base font-normal leading-relaxed group-hover:text-neutral-200 transition-colors duration-500">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-20 md:mt-0">
            <p className="text-[10px] text-neutral-400 font-mono leading-relaxed mt-auto">
              *Required fields. We will use your information in accordance with our privacy policy.
            </p>
          </div>
        </div>

        {/* Right Form (60% approximation: col-span-7) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:col-span-7"
        >
          <form className="flex flex-col space-y-12">
            {/* Row 1 */}
            <div className="relative group">
              <label className="block text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-400 mb-3">How we can help you? *</label>
              <textarea 
                className="w-full bg-transparent border-b-[0.5px] border-neutral-600 text-white px-0 py-3 focus:outline-none focus:border-white transition-all duration-500 min-h-[120px] resize-none hover:border-neutral-500 focus:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.15)] font-normal"
                required
              ></textarea>
            </div>
            
            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-400 mb-3">First Name *</label>
                <input 
                  type="text"
                  className="w-full bg-transparent border-b-[0.5px] border-neutral-600 text-white px-0 py-3 focus:outline-none focus:border-white transition-all duration-500 hover:border-neutral-500 focus:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.15)] font-normal"
                  required
                />
              </div>
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-400 mb-3">Last Name *</label>
                <input 
                  type="text"
                  className="w-full bg-transparent border-b-[0.5px] border-neutral-600 text-white px-0 py-3 focus:outline-none focus:border-white transition-all duration-500 hover:border-neutral-500 focus:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.15)] font-normal"
                  required
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-400 mb-3">Email Address *</label>
                <input 
                  type="email"
                  className="w-full bg-transparent border-b-[0.5px] border-neutral-600 text-white px-0 py-3 focus:outline-none focus:border-white transition-all duration-500 hover:border-neutral-500 focus:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.15)] font-normal"
                  required
                />
              </div>
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-400 mb-3">Phone Number</label>
                <input 
                  type="tel"
                  className="w-full bg-transparent border-b-[0.5px] border-neutral-600 text-white px-0 py-3 focus:outline-none focus:border-white transition-all duration-500 hover:border-neutral-500 focus:shadow-[0_2px_15px_-3px_rgba(255,255,255,0.15)] font-normal"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-12">
              <button 
                type="submit"
                className="bg-white text-black px-12 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:scale-105 hover:bg-neutral-200 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] will-change-transform"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
