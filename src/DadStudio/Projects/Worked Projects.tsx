"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Sparkles, X, ArrowRight, Layers, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { BRAND } from "@/config/brand";

const categories = [
  "All Showcases",
  "Modern Villas",
  "Residential Architecture",
  "Interior Spaces",
  "Commercial Projects",
  "UPVC Installations",
];

export default function WorkedProjects() {
  const [activeCategory, setActiveCategory] = useState("All Showcases");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects = activeCategory === "All Showcases"
    ? BRAND.illustrativeProjects
    : BRAND.illustrativeProjects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 5)));

  useEffect(() => {
    const immediateTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 20);

    const finalTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400); 
    
    return () => {
      clearTimeout(immediateTimeout);
      clearTimeout(finalTimeout);
    };
  }, [activeCategory]);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3 mb-8 lg:mb-12 px-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeCategory === category
                ? "bg-[#A9855B] text-black font-bold"
                : "text-gray-400 hover:text-white border border-white/10 hover:border-white/20 bg-white/5"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative min-h-[300px]">
        <AnimatePresence initial={false} mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(project)}
              className="project-card group cursor-pointer rounded-xl overflow-hidden border border-white/10 hover:border-[#A9855B] bg-[#141615] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-semibold text-[#A9855B] uppercase tracking-wider border border-white/10">
                  {project.category}
                </div>
                
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] text-gray-300 uppercase">
                  {project.scope}
                </div>
              </div>

              <div className="p-5">
                <p className="text-[10px] uppercase font-bold text-[#A9855B] tracking-widest mb-1 font-general">
                  {project.serviceType}
                </p>
                <h4 className="font-general font-bold text-base lg:text-lg text-white group-hover:text-[#A9855B] transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {project.features.map((feat: string, fIdx: number) => (
                    <span key={fIdx} className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-300">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Details Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl bg-[#141615] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black transition-colors"
                >
                  <X size={18} />
                </button>

                {/* Modal Visual */}
                <div className="md:w-1/2 relative min-h-[260px] md:min-h-[420px] bg-black">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs text-[#A9855B] font-bold uppercase tracking-wider border border-white/10">
                    {selectedProject.category}
                  </div>
                </div>

                {/* Modal Content */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <span className="text-xs uppercase font-bold text-[#A9855B] tracking-widest block mb-1">
                      {selectedProject.serviceType}
                    </span>
                    <h3 className="font-instrument text-2xl md:text-3xl text-white font-normal mb-2 leading-tight">
                      {selectedProject.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 pb-4 border-b border-white/5">
                      <Sparkles size={14} className="text-[#A9855B]" />
                      <span>{selectedProject.scope}</span>
                    </div>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {selectedProject.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Integrated Specifications</p>
                      <div className="space-y-1.5">
                        {selectedProject.features.map((feat: string, i: number) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                            <CheckCircle size={14} className="text-[#A9855B]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Discuss custom scope:</span>
                    <Link 
                      href="/contact" 
                      onClick={() => setSelectedProject(null)}
                      className="bg-[#A9855B] text-black hover:bg-white hover:text-black px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                    >
                      Inquire <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
