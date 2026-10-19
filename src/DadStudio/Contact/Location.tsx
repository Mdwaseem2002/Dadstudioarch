"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Calendar, Compass, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/config/brand";

export default function Location() {
  return (
    <section className="relative bg-[#0a0a0a] pt-14 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-t border-white/5 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16 gap-6"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9855B]"></span>
              <p className="text-[#A9855B] font-bold tracking-[0.2em] text-xs uppercase font-general">
                Studio Engagements
              </p>
            </div>
            <h2 className="font-instrument text-3xl md:text-5xl lg:text-6xl font-normal leading-tight">
              Design Consultations <br />
              <span className="italic text-[#A9855B]">&amp; Project Coordination</span>
            </h2>
          </div>

          <div className="flex-1 flex md:justify-end">
            <p className="text-gray-400 md:text-right max-w-md text-xs sm:text-sm leading-relaxed">
              Every project begins with a structured design session. We examine site topography, structural requirements, interior lighting, and UPVC specifications to chart a cohesive roadmap.
            </p>
          </div>
        </motion.div>

        {/* Studio Engagement Feature Card */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#141615]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Side */}
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-black">
              <img 
                src="/images/about/about-design-studio.jpg" 
                alt="DADSTUDIOARCH Architectural Studio" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                <img src="/brand/dadstudioarch-favicon.svg" alt="DADSTUDIOARCH" className="w-5 h-5 object-contain" />
                <span className="text-xs font-bold text-white font-general">DADSTUDIOARCH</span>
              </div>
            </div>

            {/* Information & Consultation Steps */}
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#A9855B] tracking-widest uppercase block mb-1">
                  Project Discussion Protocol
                </span>
                <h3 className="font-instrument text-2xl sm:text-3xl font-normal text-white mb-2">
                  Scheduled By Appointment
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  To ensure uninterrupted focus on your site drawings and spatial requirements, all architectural consultations are scheduled in advance.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  { title: "Site & Concept Review", desc: "Analyzing spatial flow, solar path, and zoning parameters." },
                  { title: "Material & Detail Curation", desc: "Reviewing natural stone, architectural joinery, and UPVC profiles." },
                  { title: "Turnkey Roadmap", desc: "Aligning architectural deliverables with site execution milestones." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-[#A9855B]/20 text-[#A9855B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-general font-bold text-xs sm:text-sm text-white">{item.title}</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link 
                  href="/contact" 
                  className="w-full bg-[#A9855B] text-black hover:bg-white transition-colors py-3.5 px-6 rounded-lg text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  <Calendar size={15} /> Book Architectural Consultation
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
