"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, FileText, Layers } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/config/brand";

const commitments = [
  {
    icon: Layers,
    title: "Single-Source Accountability",
    desc: "From initial concept sketches to foundation concrete and final window glazing, you interface with one coordinated leadership team."
  },
  {
    icon: FileText,
    title: "Transparent Scope & Specifications",
    desc: "Every material grade, structural rebar specification, and fenestration profile is clearly itemized prior to ground-breaking."
  },
  {
    icon: Clock,
    title: "Disciplined Milestones",
    desc: "Structured phase gates ensure architectural approvals, structural inspections, and interior joinery proceed on scheduled timelines."
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Site Supervision",
    desc: "Engineered quality benchmarks with multi-stage verification at each critical structural and aesthetic junction."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#111312] relative border-t border-white/5 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Editorial Image & Studio Note */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-black">
              <img 
                src="/images/projects/project-aurora-penthouse.jpg" 
                alt="Interior Craftsmanship DADSTUDIOARCH" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-lg bg-[#0e100f]/85 backdrop-blur-md border border-white/10">
                <p className="text-[#A9855B] text-xs font-semibold tracking-widest uppercase mb-1">
                  Design &amp; Build Integrity
                </p>
                <p className="text-white text-xs sm:text-sm leading-relaxed">
                  "Thoughtful architecture is realized only when construction precision honors the subtlety of the original drawing."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Working Principles */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9855B]"></span>
              <p className="text-[#A9855B] font-semibold tracking-[0.25em] text-xs uppercase font-general">
                Client Collaboration
              </p>
            </div>

            <h2 className="font-instrument text-3xl sm:text-4xl md:text-5xl font-normal mb-5 leading-tight">
              Honest Partnerships. Dependable Craft.
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8">
              We replace ambiguities and contractor fragmentation with clear communication, scheduled stage reviews, and unwavering attention to finish quality.
            </p>

            <div className="space-y-4 mb-8">
              {commitments.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#A9855B]/40 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#A9855B]/15 flex items-center justify-center text-[#A9855B] shrink-0 mt-0.5">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-general font-bold text-sm text-white mb-0.5">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#A9855B] text-black hover:bg-white hover:text-black px-7 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors"
              >
                Start A Conversation <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
