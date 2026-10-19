"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] md:min-h-screen flex items-end md:items-center pt-24 pb-12 sm:pb-16 md:pb-20 lg:pt-32 border-b border-white/5 bg-[#0a0a0a]">
      {/* Background Architectural Visual with Subtle Cinematic Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="/images/hero/hero-villa-exterior.jpg"
          alt="DADSTUDIOARCH Architectural Excellence"
          className="w-full h-full object-cover"
        />
        {/* Architectural Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/70 pointer-events-none" />
      </div>

      <div className="w-full relative z-10 px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="bg-[#0e100f]/85 backdrop-blur-md border border-[#A9855B]/30 rounded-2xl p-6 sm:p-10 lg:p-14 max-w-2xl shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#A9855B]"></span>
            <p className="text-[#A9855B] font-bold tracking-widest text-xs uppercase font-general">
              About DADSTUDIOARCH
            </p>
          </div>
          <h1 className="font-instrument text-3xl sm:text-5xl lg:text-6xl font-normal text-white mb-4 leading-[1.1]">
            Spatial Harmony. <br />
            <span className="italic text-[#A9855B]">Structural Rigor.</span>
          </h1>
          <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
            DADSTUDIOARCH brings architectural concepts, interior aesthetics, facade detailing, structural construction, and high-performance UPVC fenestration together into one cohesive design-and-build practice.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
