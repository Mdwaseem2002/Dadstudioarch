"use client";

import { Compass, Hammer, DoorClosed, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/config/brand";

export default function WhatWeOffer() {
  return (
    <section className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#A9855B]"></span>
            <h3 className="text-[#A9855B] font-bold tracking-widest text-xs uppercase font-general">Core Disciplines</h3>
          </div>
          <h2 className="font-instrument text-3xl md:text-5xl font-normal leading-tight text-white">
            Comprehensive Design-to-Build Solutions
          </h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { id: "01", title: "Architecture & Planning", desc: "Volumetric massing, spatial circulation, 3D visualization, and complete permit-ready architectural drawing packages.", icon: <Compass size={28} /> },
          { id: "02", title: "Construction & Build", desc: "Precision turnkey residential and villa construction with laser-aligned structural formwork and milestone quality oversight.", icon: <Hammer size={28} />, active: true },
          { id: "03", title: "UPVC Windows & Doors", desc: "Acoustically soundproof, thermally insulated multi-chamber UPVC sliding door systems and contemporary window suites.", icon: <DoorClosed size={28} /> },
        ].map((card, idx) => (
          <div 
            key={idx} 
            className={`relative p-8 rounded-lg flex flex-col justify-between h-full min-h-[300px] border transition-all duration-300 ${
              card.active 
                ? "bg-[#141615] border-[#A9855B] shadow-xl" 
                : "bg-[#111] text-white border-white/10 hover:border-[#A9855B]/50"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="text-[#A9855B]">
                {card.icon}
              </div>
              <span className="font-mono text-xl font-bold text-[#A9855B]/60">
                {card.id}
              </span>
            </div>
            
            <div className="space-y-3 mt-auto">
              <h4 className="text-xl font-bold text-white font-general">{card.title}</h4>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
                {card.desc}
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold text-[#A9855B] uppercase pt-2 tracking-wider hover:text-white transition-colors">
                Explore Scope <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
