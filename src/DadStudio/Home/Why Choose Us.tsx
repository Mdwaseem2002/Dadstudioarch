"use client";

import { useRef, useState } from "react";
import { Search, PenTool, ClipboardCheck, Hammer, ArrowRight, ShieldCheck, Sparkles, Layers, Sliders, CheckCircle2, ChevronRight, Activity } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BRAND } from "@/config/brand";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
  {
    num: "01",
    phase: "INCEPTION",
    title: "Discover",
    desc: "Understand your lifestyle needs, site parameters, and project goals.",
    deliverables: ["Site Brief", "Zoning & Solar", "Feasibility"],
    icon: Search
  },
  {
    num: "02",
    phase: "CONCEPTS",
    title: "Design",
    desc: "Develop cohesive architectural, interior, and exterior design concepts.",
    deliverables: ["Spatial 3D", "Massing Renders", "Material Palette"],
    icon: PenTool
  },
  {
    num: "03",
    phase: "TECHNICAL",
    title: "Plan",
    desc: "Coordinate technical working drawings, materials, specifications, and execution plan.",
    deliverables: ["Working CAD", "UPVC Fenestration", "BOQ & Schedule"],
    icon: ClipboardCheck
  },
  {
    num: "04",
    phase: "HANDOVER",
    title: "Build & Deliver",
    desc: "Execute agreed project scope with on-site quality reviews through handover.",
    deliverables: ["Precision Build", "Laser QA Check", "Keys Handover"],
    icon: Hammer
  }
];

const principles = [
  {
    title: "Integrated Design & Build",
    desc: "Architecture, engineering, interiors, and UPVC systems coordinated seamlessly under one practice.",
  },
  {
    title: "Coordinated Execution",
    desc: "Disciplined planning from initial concept schematics to structural milestone delivery.",
  },
  {
    title: "Balanced & Functional Spaces",
    desc: "Form follows living patterns—prioritizing spatial circulation, acoustics, and daylighting.",
  },
  {
    title: "Considered Material Selection",
    desc: "Curating authentic stone, architectural woodwork, and high-specification UPVC fenestration.",
  },
  {
    title: "Architectural Detail Attention",
    desc: "Precision in laser tolerances, flush floor transitions, and concealed ambient lighting.",
  },
  {
    title: "Tailored Project Solutions",
    desc: "Bespoke design responses crafted specifically for each unique site and client requirement.",
  },
];

export default function WhyChooseDadStudioArch() {
  const sectionRef = useRef<HTMLElement>(null);
  const processContainerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Desktop: Pinned scrub animation — cards and pipeline reveal 1-by-1
    mm.add("(min-width: 1024px)", () => {
      // Set initial states
      gsap.set(".flow-card-0, .flow-card-1, .flow-card-2, .flow-card-3", {
        opacity: 0.15,
        y: 35,
        scale: 0.95,
      });
      gsap.set(".flow-node-0, .flow-node-1, .flow-node-2, .flow-node-3", {
        opacity: 0.35,
        scale: 0.85,
        borderColor: "rgba(255,255,255,0.15)",
        backgroundColor: "#161817",
      });
      gsap.set(".flow-line-0, .flow-line-1, .flow-line-2", {
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set(".flow-bar-0, .flow-bar-1, .flow-bar-2, .flow-bar-3", {
        width: "0%",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: processContainerRef.current,
          start: "top 12%",
          end: "+=1200",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.25) setActiveStep(0);
            else if (p < 0.5) setActiveStep(1);
            else if (p < 0.75) setActiveStep(2);
            else setActiveStep(3);
          }
        }
      });

      // Brief intro pause
      tl.to({}, { duration: 0.1 });

      // ── STEP 1 ──
      tl.to(".flow-node-0", {
        opacity: 1,
        scale: 1.1,
        borderColor: "#A9855B",
        backgroundColor: "rgba(169,133,91,0.25)",
        duration: 0.3,
        ease: "power2.out"
      })
      .to(".flow-card-0", {
        opacity: 1,
        y: 0,
        scale: 1,
        borderColor: "rgba(169,133,91,0.7)",
        duration: 0.4,
        ease: "power2.out"
      }, "<")
      .to(".flow-bar-0", { width: "100%", duration: 0.3 }, "<0.1");

      // Draw Pipeline 1 ➔ 2
      tl.to(".flow-line-0", { scaleX: 1, duration: 0.45, ease: "none" });

      // ── STEP 2 ──
      tl.to(".flow-node-1", {
        opacity: 1,
        scale: 1.1,
        borderColor: "#A9855B",
        backgroundColor: "rgba(169,133,91,0.25)",
        duration: 0.3,
        ease: "power2.out"
      })
      .to(".flow-card-1", {
        opacity: 1,
        y: 0,
        scale: 1,
        borderColor: "rgba(169,133,91,0.7)",
        duration: 0.4,
        ease: "power2.out"
      }, "<")
      .to(".flow-bar-1", { width: "100%", duration: 0.3 }, "<0.1");

      // Draw Pipeline 2 ➔ 3
      tl.to(".flow-line-1", { scaleX: 1, duration: 0.45, ease: "none" });

      // ── STEP 3 ──
      tl.to(".flow-node-2", {
        opacity: 1,
        scale: 1.1,
        borderColor: "#A9855B",
        backgroundColor: "rgba(169,133,91,0.25)",
        duration: 0.3,
        ease: "power2.out"
      })
      .to(".flow-card-2", {
        opacity: 1,
        y: 0,
        scale: 1,
        borderColor: "rgba(169,133,91,0.7)",
        duration: 0.4,
        ease: "power2.out"
      }, "<")
      .to(".flow-bar-2", { width: "100%", duration: 0.3 }, "<0.1");

      // Draw Pipeline 3 ➔ 4
      tl.to(".flow-line-2", { scaleX: 1, duration: 0.45, ease: "none" });

      // ── STEP 4 ──
      tl.to(".flow-node-3", {
        opacity: 1,
        scale: 1.1,
        borderColor: "#A9855B",
        backgroundColor: "rgba(169,133,91,0.25)",
        duration: 0.3,
        ease: "power2.out"
      })
      .to(".flow-card-3", {
        opacity: 1,
        y: 0,
        scale: 1,
        borderColor: "rgba(169,133,91,0.7)",
        duration: 0.4,
        ease: "power2.out"
      }, "<")
      .to(".flow-bar-3", { width: "100%", duration: 0.3 }, "<0.1")
      .to(".flow-complete-stamp", {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(2)"
      }, "<0.1");

      // Hold fully completed flow diagram before scroll unpins
      tl.to({}, { duration: 0.3 });
    });

    // Mobile / Tablet: Stagger reveal on scroll
    mm.add("(max-width: 1023px)", () => {
      gsap.fromTo(".flow-card-0, .flow-card-1, .flow-card-2, .flow-card-3",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: processContainerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        }
      );
      gsap.to(".flow-bar-0, .flow-bar-1, .flow-bar-2, .flow-bar-3", {
        width: "100%",
        stagger: 0.2,
        duration: 0.7,
        scrollTrigger: {
          trigger: processContainerRef.current,
          start: "top 75%",
        }
      });
    });
  }, { scope: processContainerRef });

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-24 relative overflow-hidden text-white bg-[#0f1110]"
    >
      {/* Background Architectural Photo with Ambient Tint */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero/hero-facade-stone.jpg" 
          alt="Architectural Detailing" 
          className="w-full h-full object-cover opacity-20 blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1110] via-[#0f1110]/85 to-[#0f1110]" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section 5: Why Choose DADSTUDIOARCH (Principles) */}
        <div className="mb-20 md:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9855B]"></span>
              <p className="text-[#A9855B] font-semibold tracking-[0.25em] text-xs uppercase font-general">
                Why Choose DADSTUDIOARCH
              </p>
              <span className="w-8 h-[1px] bg-[#A9855B]"></span>
            </div>
            <h2 className="font-instrument text-3xl sm:text-5xl font-normal leading-tight mb-4">
              Disciplined Principles. Thoughtful Results.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We approach every residential, villa, and commercial project with foundational commitments to craft, engineering clarity, and material honesty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg bg-[#171a18]/80 backdrop-blur-md border border-white/10 hover:border-[#A9855B]/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#A9855B]/15 flex items-center justify-center text-[#A9855B]">
                    <CheckCircle2 size={16} />
                  </div>
                  <h4 className="font-general font-bold text-base text-white">{item.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pl-11">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Interactive Flow Diagram (Our Four-Step Process) */}
        <div 
          ref={processContainerRef}
          className="border-t border-white/10 pt-10 md:pt-16 pb-8 min-h-[550px] flex flex-col justify-center"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Context, Live Milestone Status & CTA */}
            <div className="lg:col-span-4 text-center lg:text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <span className="w-8 h-[1px] bg-[#A9855B]"></span>
                  <p className="text-[#A9855B] font-semibold tracking-widest text-xs uppercase font-general flex items-center gap-1.5">
                    <Activity size={12} className="animate-pulse" />
                    Process Flow Diagram
                  </p>
                </div>

                <h3 className="font-instrument text-3xl sm:text-4xl lg:text-5xl font-normal mb-3 leading-tight">
                  A Structured Path From Concept to Handover
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed text-xs sm:text-sm">
                  Each project progresses through a transparent, disciplined 4-stage roadmap designed to protect architectural intent, schedule integrity, and craftsmanship.
                </p>

                {/* Milestone Stepper Badge */}
                <div className="hidden lg:flex items-center gap-2 p-3 rounded-lg bg-[#161817] border border-white/10 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#A9855B] animate-ping" />
                  <span className="text-[11px] font-mono font-bold text-gray-300">
                    Active Milestone: <span className="text-[#A9855B]">{processSteps[activeStep]?.num} — {processSteps[activeStep]?.title}</span>
                  </span>
                </div>

                <p className="text-[11px] text-gray-500 italic mb-5">
                  * Note: Actual project stages may vary based on individual scope of work.
                </p>
              </div>

              <div>
                <Link 
                  href="/contact" 
                  className="border border-[#A9855B] text-[#A9855B] hover:bg-[#A9855B] hover:text-black transition-all duration-300 px-6 py-3 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 group"
                >
                  <span>Schedule A Project Review</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Flow Diagram Pipeline Track & 4 Sequential Cards */}
            <div className="lg:col-span-8">
              
              {/* FLOW DIAGRAM PIPELINE TRACK (Desktop) */}
              <div className="hidden lg:grid grid-cols-4 gap-4 mb-4 relative px-2">
                
                {/* Background Connecting Pipe */}
                <div className="absolute top-[20px] left-[12.5%] right-[12.5%] -translate-y-1/2 h-[2px] bg-white/10 z-0">
                  {/* Glowing scrubbed progress segments */}
                  <div className="flow-line-0 absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#A9855B] via-[#CBA052] to-[#A9855B] shadow-[0_0_8px_rgba(203,160,82,0.8)]" />
                  <div className="flow-line-1 absolute top-0 left-1/3 w-1/3 h-full bg-gradient-to-r from-[#A9855B] via-[#CBA052] to-[#A9855B] shadow-[0_0_8px_rgba(203,160,82,0.8)]" />
                  <div className="flow-line-2 absolute top-0 left-2/3 w-1/3 h-full bg-gradient-to-r from-[#A9855B] via-[#CBA052] to-[#E2C799] shadow-[0_0_8px_rgba(203,160,82,0.8)]" />
                </div>

                {/* 4 Pipeline Nodes */}
                {processSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center relative z-10">
                    <div 
                      className={`flow-node-${idx} w-10 h-10 rounded-full border-2 border-white/20 bg-[#161817] flex items-center justify-center text-xs font-mono font-bold text-white shadow-xl transition-all duration-300`}
                    >
                      <span className="text-[#A9855B]">{step.num}</span>
                    </div>
                    {/* Downward tick pointing into the card */}
                    <div className="w-[1px] h-3 bg-[#A9855B]/40 mt-1" />
                  </div>
                ))}
              </div>

              {/* 4 FLOW DIAGRAM MILESTONE CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {processSteps.map((step, idx) => (
                  <div 
                    key={idx}
                    className={`flow-card-${idx} p-4 sm:p-5 rounded-xl bg-[#161817] border border-white/10 hover:border-[#A9855B] transition-all duration-300 relative flex flex-col justify-between min-h-[250px] shadow-2xl group overflow-hidden`}
                  >
                    {/* Watermark Step Number */}
                    <span className="absolute -top-3 -right-2 font-mono text-5xl font-black text-white/[0.03] select-none pointer-events-none">
                      {step.num}
                    </span>

                    <div>
                      {/* Card Header */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-[10px] tracking-widest text-[#A9855B] font-mono bg-[#A9855B]/10 px-2 py-0.5 rounded border border-[#A9855B]/20">
                          STEP {step.num}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[#A9855B] group-hover:scale-110 group-hover:bg-[#A9855B]/20 transition-all">
                          <step.icon size={15} />
                        </div>
                      </div>

                      {/* Phase & Title */}
                      <span className="text-[9px] uppercase tracking-wider text-gray-500 font-mono block mb-0.5">
                        {step.phase}
                      </span>
                      <h4 className="font-general font-bold text-base sm:text-lg text-white mb-2 group-hover:text-[#A9855B] transition-colors leading-snug">
                        {step.title}
                      </h4>

                      <p className="text-xs text-gray-400 leading-relaxed mb-3">
                        {step.desc}
                      </p>

                      {/* Deliverables Chips */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {step.deliverables.map((item, dIdx) => (
                          <span 
                            key={dIdx} 
                            className="text-[9px] bg-white/5 border border-white/5 text-gray-300 px-1.5 py-0.5 rounded font-mono"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Milestone Progress Fill Bar */}
                    <div>
                      <div className="flex justify-between text-[9px] font-mono text-gray-500 mb-1">
                        <span>Milestone Stage</span>
                        <span>0{idx + 1} / 04</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`flow-bar-${idx} h-full bg-gradient-to-r from-[#A9855B] to-[#CBA052] rounded-full transition-all`}
                        />
                      </div>
                    </div>

                    {/* Flow arrow indicator to next card */}
                    {idx < 3 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                        <div className="w-6 h-6 rounded-full bg-[#0f1110] border border-white/20 flex items-center justify-center text-[#A9855B] shadow-md">
                          <ChevronRight size={12} />
                        </div>
                      </div>
                    )}

                    {/* Step 4 Completion Stamp */}
                    {idx === 3 && (
                      <div className="flow-complete-stamp opacity-0 lg:opacity-0 absolute top-2 right-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 px-2 py-0.5 rounded text-[8px] font-mono font-bold tracking-wider uppercase">
                        Ready
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
