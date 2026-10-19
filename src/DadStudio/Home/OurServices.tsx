"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Hammer, Sparkles, Building, DoorClosed, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/config/brand";

const icons = [Compass, Hammer, Sparkles, Building, DoorClosed];

export default function OurServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-8 sm:py-10 lg:py-4 xl:py-8 bg-[#111111] relative flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5 lg:mb-4 xl:mb-6">
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="w-6 h-[1px] bg-[#A9855B]"></span>
            <p className="text-[#A9855B] font-semibold tracking-[0.25em] text-[10px] sm:text-xs uppercase font-general">
              Our Capabilities
            </p>
            <span className="w-6 h-[1px] bg-[#A9855B]"></span>
          </div>
          <h2 className="font-instrument text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-normal text-white mb-1.5 leading-tight">
            Five Core Disciplines. One Seamless Practice.
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            From architectural massing and structural engineering to bespoke interiors, facade detailing, and UPVC fenestration—every discipline works together under DADSTUDIOARCH.
          </p>
        </div>

        {/* 5-Service Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-3.5 xl:gap-5 text-white">
          {BRAND.services.map((service, idx) => {
            const Icon = icons[idx] || Compass;

            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-xl border border-white/10 hover:border-[#A9855B]/80 transition-all duration-500 flex flex-col justify-between h-48 sm:h-52 lg:h-[185px] xl:h-[215px] shadow-lg cursor-pointer ${
                  idx === 0 ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <Link href="/services" className="absolute inset-0 z-30" aria-label={service.title} />

                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35 group-hover:via-black/45 transition-colors duration-500" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-4 sm:p-4 lg:p-3.5 xl:p-4 flex justify-between items-start pointer-events-none">
                  <div className="w-8 h-8 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#A9855B] shadow-md">
                    <Icon size={16} strokeWidth={2} />
                  </div>
                  <span className="text-[9px] tracking-widest uppercase font-mono font-semibold text-gray-300 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    0{idx + 1}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-4 sm:p-4 lg:p-3.5 xl:p-4 pt-0 pointer-events-none">
                  <h3 className="font-general text-base sm:text-lg lg:text-base xl:text-lg font-bold mb-1 text-white group-hover:text-[#A9855B] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed mb-2 line-clamp-2 text-white/85">
                    {service.shortDesc}
                  </p>
                  
                  <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#A9855B] group-hover:text-white uppercase transition-colors">
                    <span>Explore Service</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Discreet Link */}
        <div className="mt-3.5 sm:mt-4 lg:mt-3 xl:mt-4 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-[11px] text-gray-400 hover:text-[#A9855B] transition-colors tracking-wider uppercase font-medium"
          >
            <span>View Comprehensive Discipline Specifications</span>
            <ArrowRight size={12} />
          </Link>
        </div>

      </div>
    </section>
  );
}
