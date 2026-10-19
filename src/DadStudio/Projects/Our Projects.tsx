"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers } from "lucide-react";

export default function OurProjects() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12 mb-8 lg:mb-16">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-[#A9855B]"></span>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#A9855B] font-bold tracking-widest text-xs uppercase font-general">
            Project Showcase
          </motion.p>
        </div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-instrument text-4xl sm:text-5xl lg:text-7xl font-normal text-white mb-4 leading-[1.1]">
          Architectural Concepts. <br />
          <span className="italic text-[#A9855B]">Material Realities.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-300 text-xs sm:text-base leading-relaxed max-w-xl">
          Explore our illustrative design showcases spanning modern luxury villas, residential architecture, refined interiors, facade transformations, and high-performance UPVC fenestration.
        </motion.p>
      </div>

      {/* Honest Scope Note Box (Zero Fabricated Metrics) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.3 }} 
        className="bg-[#141615] border border-white/10 rounded-xl p-5 lg:p-6 flex flex-col justify-center gap-3 w-full lg:w-auto lg:min-w-[300px]"
      >
        <div className="flex items-center gap-2 text-[#A9855B] text-xs font-bold uppercase tracking-wider font-general">
          <Sparkles size={14} />
          <span>Design Showcases</span>
        </div>
        <p className="text-xs text-gray-300 leading-relaxed">
          Illustrative conceptual design showcases illustrating DADSTUDIOARCH's aesthetic direction, spatial standards, and material specifications.
        </p>
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
          <span>In-House Disciplines</span>
          <span className="font-mono text-[#A9855B] font-bold">5 Practice Areas</span>
        </div>
      </motion.div>
    </div>
  );
}
