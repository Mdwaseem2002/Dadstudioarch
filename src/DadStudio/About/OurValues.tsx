"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Diamond, Users, Sparkles, Compass, CheckCircle } from "lucide-react";

export default function OurValues() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0a] border-y border-white/5 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.3 }} 
              transition={{ duration: 0.8 }}
              className="mb-8 lg:mb-12"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[1px] bg-[#A9855B]"></span>
                <p className="text-[#A9855B] font-bold tracking-widest text-xs uppercase font-general">Core Values</p>
              </div>
              <h2 className="font-instrument text-3xl sm:text-5xl font-normal leading-tight text-white">
                The Principles Guiding Every Blueprint and Build
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Compass, title: "Design Clarity", desc: "Every architectural volume and aperture serves a clear purpose in light, flow, and living comfort." },
                { icon: Diamond, title: "Material Rigor", desc: "Zero compromises on grade—curating authentic stone, engineered lumber, and precision UPVC systems." },
                { icon: ShieldCheck, title: "Engineering Precision", desc: "Rigorous structural execution, laser tolerances, and disciplined phase gate inspections." },
                { icon: Users, title: "Client Alignment", desc: "Open communication, transparent specifications, and respect for project timelines." }
              ].map((val, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: false, amount: 0.3 }} 
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col sm:pl-4 ${idx !== 0 ? 'sm:border-l border-white/10' : ''}`}
                >
                  <val.icon className="text-[#A9855B] mb-3 w-6 h-6" />
                  <h4 className="text-white font-bold text-sm lg:text-base mb-2 font-general">{val.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Studio Focus Box (Zero Fabricated Metrics) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 0.8 }} 
            className="lg:col-span-4 bg-[#141615] p-6 lg:p-8 rounded-xl border border-white/10 shadow-2xl space-y-6"
          >
            <h4 className="text-[#A9855B] font-bold text-xs uppercase tracking-widest font-general">
              Studio Capabilities
            </h4>
            
            <div className="space-y-4">
              {[
                { label: "Architecture & Structural", detail: "Concept, 3D visualization, detailed drawing packages" },
                { label: "Turnkey Construction", detail: "Reinforced structures, MEP, and project coordination" },
                { label: "Refined Interiors", detail: "Custom joinery, lighting plans, and material curation" },
                { label: "UPVC & Fenestration", detail: "Soundproof, thermal double-glazed window and door suites" },
              ].map((item, idx) => (
                <div key={idx} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle size={14} className="text-[#A9855B]" />
                    <p className="text-sm font-bold text-white">{item.label}</p>
                  </div>
                  <p className="text-xs text-gray-400 pl-6 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
