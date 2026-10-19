"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/config/brand";

export default function Trust() {
  return (
    <section className="bg-[#0b0d0c] py-20 md:py-28 border-t border-white/5 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section 7 Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#A9855B]"></span>
              <p className="text-[#A9855B] font-semibold tracking-[0.25em] text-xs uppercase font-general">
                Section 07 • Material &amp; Detail Showcase
              </p>
            </div>
            <h2 className="font-instrument text-3xl sm:text-5xl font-normal leading-tight">
              Tactile Authenticity. Engineered Precision.
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md leading-relaxed">
            Every architectural surface we assemble is selected for texture, durability, thermal performance, and visual longevity.
          </p>
        </div>

        {/* Curated Material Composition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND.materials.map((mat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-lg overflow-hidden border border-white/10 hover:border-[#A9855B]/70 transition-all duration-500 bg-[#141615] flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-black">
                <img 
                  src={mat.image} 
                  alt={mat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <span className="absolute top-3 right-3 text-[10px] font-mono text-gray-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                  SPEC 0{idx + 1}
                </span>
              </div>

              <div className="p-5">
                <h4 className="font-general font-bold text-base text-white group-hover:text-[#A9855B] transition-colors mb-2">
                  {mat.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {mat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
