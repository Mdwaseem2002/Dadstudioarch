"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/config/brand";

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden text-white flex items-center bg-[#0d0e0d] border-t border-white/5">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero/hero-villa-exterior.jpg" 
          alt="DADSTUDIOARCH Architectural Project" 
          className="w-full h-full object-cover scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/75 backdrop-blur-[2px] z-10 pointer-events-none" />
      </div>
      
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-[#A9855B]"></span>
          <p className="text-[#A9855B] font-semibold tracking-[0.25em] text-xs uppercase font-general">
            Begin Your Project
          </p>
          <span className="w-8 h-[1px] bg-[#A9855B]"></span>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-instrument text-3xl sm:text-5xl md:text-6xl font-normal mb-5 text-white leading-tight"
        >
          Let's Create a Space That Feels Like Yours.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Share your ideas, requirements, and project goals with DADSTUDIOARCH. Let's explore the right design and construction approach for your space.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <Link 
            href="/contact" 
            className="w-full sm:w-auto bg-[#A9855B] text-black hover:bg-white hover:text-black transition-colors duration-300 px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 group"
          >
            Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/projects" 
            className="w-full sm:w-auto border border-white/20 hover:border-white hover:bg-white/10 text-white transition-colors duration-300 px-8 py-4 text-xs sm:text-sm font-medium tracking-widest uppercase flex items-center justify-center"
          >
            Explore Our Projects
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
