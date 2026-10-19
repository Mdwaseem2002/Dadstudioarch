"use client";

import { motion } from "framer-motion";
import { Search, PenTool, ClipboardCheck, Hammer, ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Discover", desc: "Understanding site context, goals, and lifestyle requirements.", icon: Search },
  { num: "02", title: "Design", desc: "Developing spatial layouts, facade concepts, and 3D architectural models.", icon: PenTool },
  { num: "03", title: "Plan", desc: "Coordinating engineering drawings, material schedules, and scope.", icon: ClipboardCheck },
  { num: "04", title: "Build & Deliver", desc: "Disciplined execution and multi-stage quality reviews through handover.", icon: Hammer }
];

export default function OurApproach() {
  return (
    <section className="py-20 lg:py-28 bg-[#111312] border-t border-white/5 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.3 }} 
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#A9855B]"></span>
              <p className="text-[#A9855B] font-bold tracking-widest text-xs uppercase font-general">Our Process</p>
            </div>
            <h2 className="font-instrument text-3xl sm:text-5xl font-normal leading-tight text-white">
              A Structured Journey From Concept to Reality
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.3 }} 
            className="text-gray-400 max-w-md text-xs sm:text-sm leading-relaxed"
          >
            By coordinating architecture, engineering, and execution under one studio, we protect design purity and ensure seamless delivery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.3 }} 
              transition={{ delay: idx * 0.12 }} 
              className="p-6 rounded-lg bg-[#161817] border border-white/10 hover:border-[#A9855B] transition-colors relative flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#A9855B]">
                    STAGE {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#A9855B]">
                    <step.icon size={18} />
                  </div>
                </div>
                <h4 className="text-white font-bold text-base mb-2 font-general">{step.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>

              <div className="w-full h-1 bg-white/10 mt-6 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#A9855B]" 
                  style={{ width: `${(idx + 1) * 25}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
