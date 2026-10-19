"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Sparkles, Layers, ChevronLeft, ChevronRight, ArrowRight, Compass } from "lucide-react";
import { BRAND } from "@/config/brand";

const featuredProjects = BRAND.illustrativeProjects.map((proj) => ({
  title: proj.title,
  description: proj.desc,
  discipline: proj.serviceType,
  scope: proj.scope,
  category: proj.category,
  image: proj.image,
  features: proj.features,
}));

export default function FeaturedProjects() {
  const [carouselIndex, setCarouselIndex] = useState(featuredProjects.length * 2);

  const repeatedProjects = Array(5).fill(featuredProjects).flat();
  const activeProject = repeatedProjects[carouselIndex] || featuredProjects[0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-[#111312] rounded-2xl overflow-hidden border border-white/10 flex flex-col lg:flex-row shadow-2xl relative"
    >
      {/* Content */}
      <div className="p-6 lg:p-14 lg:w-2/5 flex flex-col justify-center relative z-20 bg-[#111312] overflow-hidden order-2 lg:order-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#A9855B]"></span>
              <p className="text-[#A9855B] font-bold tracking-widest text-[11px] uppercase font-general">Featured Showcase</p>
            </div>
            
            <h2 className="font-instrument text-2xl lg:text-4xl font-normal text-white mb-2 leading-tight">{activeProject.title}</h2>
            
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
              <Sparkles size={14} className="text-[#A9855B]" />
              <span>{activeProject.scope}</span>
              <span>•</span>
              <span className="text-[#A9855B]">{activeProject.category}</span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 text-xs sm:text-sm">
              {activeProject.description}
            </p>
            
            {/* Key Architectural Features */}
            <div className="space-y-2 mb-8">
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Design Features</p>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.features.map((feat: string, fIdx: number) => (
                  <span key={fIdx} className="text-xs bg-white/5 border border-white/5 px-2.5 py-1 rounded text-gray-300">
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            <Link 
              href="/contact" 
              className="border border-[#A9855B] text-[#A9855B] hover:bg-[#A9855B] hover:text-black transition-colors duration-300 px-6 py-3 rounded-none text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 w-fit font-general"
            >
              Consult On Similar Project <ArrowRight size={14} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image & Thumbnails */}
      <div className="lg:w-3/5 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[580px] overflow-hidden group order-1 lg:order-2 bg-black">
        <AnimatePresence mode="wait">
          <motion.img 
            key={activeProject.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={activeProject.image} 
            alt={activeProject.title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </AnimatePresence>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        {/* Thumbnails Overlay */}
        <div className="absolute bottom-6 left-0 w-full px-6 flex justify-center z-10 pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto max-w-full">
            <button 
              onClick={() => setCarouselIndex((prev) => Math.max(0, prev - 1))}
              className="w-10 h-10 shrink-0 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            
            {/* Scrollable Thumbnails Track */}
            <div className="flex gap-3 overflow-hidden" style={{ width: 'calc(4 * 5rem + 3 * 0.75rem)' }}>
              <motion.div 
                className="flex gap-3"
                animate={{ x: `calc(-${carouselIndex % featuredProjects.length} * (5rem + 0.75rem))` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {featuredProjects.map((proj, idx) => {
                  const isSelected = (carouselIndex % featuredProjects.length) === idx;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => setCarouselIndex(idx)}
                      className={`w-20 shrink-0 h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                        isSelected ? 'border-[#A9855B] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <button 
              onClick={() => setCarouselIndex((prev) => prev + 1)}
              className="w-10 h-10 shrink-0 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
