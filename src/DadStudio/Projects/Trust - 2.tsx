"use client";

import { Compass, Hammer, Sparkles, DoorClosed } from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  { icon: Compass, title: "Architecture & Planning", label: "Schematics to detailed BIM" },
  { icon: Hammer, title: "Construction & Build", label: "Laser-aligned structural formwork" },
  { icon: Sparkles, title: "Interior Architecture", label: "Custom millwork & tactile finishes" },
  { icon: DoorClosed, title: "UPVC & Fenestration", label: "Thermal & acoustic glass suites" },
];

export default function Trust2() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#141615] rounded-xl border border-white/10 py-6 px-4 lg:py-8 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-white"
    >
      {capabilities.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg border border-[#A9855B]/40 bg-[#A9855B]/10 flex items-center justify-center text-[#A9855B] shrink-0">
            <item.icon size={20} />
          </div>
          <div>
            <h4 className="font-general font-bold text-xs sm:text-sm text-white">{item.title}</h4>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">{item.label}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
