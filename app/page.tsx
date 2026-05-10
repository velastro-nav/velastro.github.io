"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Crosshair, Orbit, ShieldCheck, Activity } from "lucide-react";
import ContactSection from "./components/ContactSection";
import velastroLogo from "../Velastro_logos-3.png";

const NAV_LINKS = ["HOME", "SOLUTION", "TEAM", "CONTACT US"];

const STATS = [
  { label: "Precision", value: "<1cm" },
  { label: "Uptime", value: "99.999%" },
  { label: "Latency", value: "2ms" },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titleText = "THE NEXT LAYER OF NAVIGATION".split(" ");

  return (
    <main className="min-h-screen bg-neutral-950 overflow-hidden relative text-white font-sans selection:bg-white/20">
      {/* Background Grid & 3D Lines Simulation */}
      <div className="fixed inset-0 z-0 bg-grid-dots opacity-10 pointer-events-none" />
      
      <motion.div 
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x * -1,
          y: mousePosition.y * -1,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {/* Orbital Ring 1 */}
        <div className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-white/10 animate-spin-slow">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_4px_rgba(255,255,255,0.8)] -translate-x-1/2 -translate-y-1/2" />
        </div>
        {/* Orbital Ring 2 */}
        <div className="absolute w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full border border-white/5 animate-spin-slow-reverse">
          <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-white/80 rounded-full shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] translate-x-1/2 translate-y-1/2" />
        </div>
      </motion.div>

      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-500 will-change-transform ${
          isScrolled ? "bg-neutral-950/60 backdrop-blur-xl border-b border-white/10" : "bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex w-1/3 items-center gap-3">
          <a
            href="#home"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/40 opacity-80 transition-all duration-300 hover:border-white/30 hover:opacity-100 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] md:hidden"
            aria-label="Velastro home"
          >
            <Image
              src={velastroLogo}
              alt=""
              width={40}
              height={40}
              priority
              className="h-full w-full object-cover"
            />
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white transition-all duration-300 hover:border-white/30 hover:bg-black/60"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-px w-4 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-px w-4 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-4 bg-current transition-transform duration-300 ${isMobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-8 text-[11px] font-medium tracking-[0.15em] md:flex">
          <a
            href="#home"
            className="relative mr-1 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/40 opacity-80 transition-all duration-300 hover:border-white/30 hover:opacity-100 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
            aria-label="Velastro home"
          >
            <Image
              src={velastroLogo}
              alt=""
              width={40}
              height={40}
              priority
              className="h-full w-full object-cover"
            />
          </a>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-neutral-300 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            >
              {link}
            </a>
          ))}
          <a
            href="#investors"
            className="px-5 py-2.5 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] ml-4"
          >
            INVESTORS
          </a>
        </div>

        {isMobileMenuOpen ? (
          <div
            id="mobile-navigation"
            className="absolute left-0 top-full w-full border-b border-white/10 bg-neutral-950/95 px-6 py-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 text-[11px] font-medium tracking-[0.18em]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-300 transition-colors duration-300 hover:text-white"
                >
                  {link}
                </a>
              ))}
              <a
                href="#investors"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center border border-white/20 px-5 py-3 text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                INVESTORS
              </a>
            </div>
          </div>
        ) : null}
      </motion.nav>

      {/* Floating Live Stats */}
      <motion.div 
        className="fixed bottom-8 left-8 z-40 border border-white/10 bg-neutral-950/40 backdrop-blur-md p-4 hidden md:block hover:border-white/30 transition-colors duration-500"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex items-center gap-2 mb-3 text-[10px] text-neutral-400 uppercase tracking-widest">
          <Activity className="w-3 h-3 text-white/70" /> Live Telemetry
        </div>
        <div className="space-y-2">
          {STATS.map((stat, i) => (
            <div key={i} className="flex justify-between items-center gap-8 border-b border-white/5 pb-1 last:border-0 last:pb-0">
              <span className="text-xs text-neutral-300 font-mono">{stat.label}</span>
              <span className="text-sm font-mono tracking-wider animate-pulse text-white">{stat.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        <motion.h1 
          className="relative z-10 text-6xl md:text-9xl font-black tracking-[0.25em] mb-8"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          VELASTRO
        </motion.h1>
        
        <div className="relative z-10 text-sm md:text-lg text-neutral-300 font-normal tracking-[0.3em] mb-16 uppercase overflow-hidden flex gap-2 flex-wrap justify-center">
          {titleText.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 2, delay: 2.5 }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-neutral-400 hover:text-white transition-colors duration-500"
        >
          <span className="text-[10px] uppercase tracking-widest">Explore Architecture</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-current to-transparent" />
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="relative z-10 py-20 border-y border-white/5 bg-neutral-950/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] text-center text-neutral-400 uppercase tracking-[0.3em] mb-12">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
             {/* Mock Logos using text for structural matching */}
            {['LOCKHEED', 'NORTHROP', 'AIRBUS', 'THALES', 'BOEING'].map((partner, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, opacity: 1, filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))" }}
                className="text-xl md:text-2xl font-bold tracking-widest text-neutral-300 cursor-default transition-all duration-500"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Comparison Section */}
      <section className="relative z-10 px-6 py-32 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border-[0.5px] border-white/20 bg-neutral-950/40 backdrop-blur-2xl p-8 md:p-16 hover:border-white/40 transition-colors duration-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 relative group">
            <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-neutral-800 group-hover:bg-neutral-600 transition-colors duration-500" />
            <div>
              <h3 className="text-2xl md:text-4xl font-normal tracking-wide mb-3">Navigating the resilient future</h3>
              <p className="text-neutral-400 tracking-wider text-sm md:text-base">— from Earth to deep space.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-neutral-300 text-xs md:text-sm leading-relaxed font-normal">
            <div className="space-y-6 group cursor-default">
              <Crosshair className="text-neutral-400 w-5 h-5 mb-8 group-hover:text-white transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <div className="font-semibold text-white tracking-wider uppercase mb-4 text-[10px] md:text-xs">Precision Control</div>
              <p className="group-hover:text-neutral-300 transition-colors duration-500">Sub-millimeter accuracy through decentralized satellite networking. Eradicating single points of failure in traditional GNSS architectures.</p>
            </div>
            
            <div className="space-y-6 relative md:pl-12 group cursor-default">
              <div className="hidden md:block absolute left-0 top-0 w-[0.5px] h-full bg-neutral-800 transition-colors duration-500 group-hover:bg-neutral-600" />
              <ShieldCheck className="text-neutral-400 w-5 h-5 mb-8 group-hover:text-white transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <div className="font-semibold text-white tracking-wider uppercase mb-4 text-[10px] md:text-xs">Cryptographic Resilience</div>
              <p className="group-hover:text-neutral-300 transition-colors duration-500">Military-grade anti-spoofing and anti-jamming protocols natively embedded at the hardware layer with quantum-resistant encryption.</p>
            </div>
            
            <div className="space-y-6 relative md:pl-12 group cursor-default">
              <div className="hidden md:block absolute left-0 top-0 w-[0.5px] h-full bg-neutral-800 transition-colors duration-500 group-hover:bg-neutral-600" />
              <Orbit className="text-neutral-400 w-5 h-5 mb-8 group-hover:text-white transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <div className="font-semibold text-white tracking-wider uppercase mb-4 text-[10px] md:text-xs">Deep Space Ready</div>
              <p className="group-hover:text-neutral-300 transition-colors duration-500">Extended operational range designed for cislunar navigation and multi-planetary autonomous fleet management scaling.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
