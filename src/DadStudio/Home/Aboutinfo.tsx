"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck, Layers, Sparkles } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BRAND } from "@/config/brand";

gsap.registerPlugin(ScrollTrigger);

const aboutImages = [
  "/images/about/about-design-studio.jpg",
  "/images/about/about-craftsmanship.jpg"
];

const pillars = [
  {
    icon: Compass,
    title: "Thoughtful Planning",
    desc: "Every layout is calibrated to site topography, natural light, and functional circulation."
  },
  {
    icon: Layers,
    title: "Integrated Design & Build",
    desc: "Architects, engineers, and fenestration specialists collaborate without contractor disconnects."
  },
  {
    icon: ShieldCheck,
    title: "Material Integrity",
    desc: "Rigorous standards for structural concrete, natural stone, joinery, and thermal UPVC."
  },
  {
    icon: Sparkles,
    title: "Coordinated Execution",
    desc: "Attention to architectural detailing, laser tolerances, and cohesive project delivery."
  }
];

export default function Aboutinfo() {
  const [currentImg, setCurrentImg] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(leftImageRef.current, 
      { x: -60, opacity: 0, scale: 0.96 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    tl.fromTo(".stagger-about-item",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12 },
      "<0.2"
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-[#F7F5F0] text-[#202321] py-12 lg:py-6 xl:py-10 min-h-full flex flex-col justify-center relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Visual Showcase Side */}
          <div 
            ref={leftImageRef}
            className="relative w-full lg:col-span-5 h-[300px] sm:h-[380px] lg:h-[440px] xl:h-[480px]"
          >
            <div className="absolute inset-0 bg-[#A9855B] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 z-0"></div>
            <div className="relative z-10 w-full h-full shadow-2xl overflow-hidden bg-[#202321]">
              <AnimatePresence initial={false}>
                <motion.img 
                  key={currentImg}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  src={aboutImages[currentImg]} 
                  alt="DADSTUDIOARCH Architectural Studio" 
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
              </AnimatePresence>

              {/* Brand Emblem Stamp */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-[#202321]/90 backdrop-blur-md p-2.5 rounded-lg border border-[#A9855B]/40 shadow-xl">
                <img 
                  src="/brand/dadstudioarch-favicon.svg" 
                  alt="DADSTUDIOARCH Emblem" 
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Caption pill */}
              <div className="absolute bottom-4 left-4 z-20 bg-[#202321]/80 backdrop-blur-md px-3.5 py-1.5 rounded text-[11px] font-medium text-white border border-white/10">
                Design Studio &amp; Build Coordination
              </div>
            </div>
          </div>

          {/* Text Content & Pillars Side */}
          <div className="w-full lg:col-span-7 flex flex-col">
            <div className="stagger-about-item flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#A9855B]"></span>
              <p className="text-[#A9855B] font-bold tracking-widest text-[11px] sm:text-xs uppercase font-general">
                About DADSTUDIOARCH
              </p>
            </div>

            <h2 className="stagger-about-item font-instrument text-3xl sm:text-4xl lg:text-5xl font-normal mb-5 text-[#202321] leading-[1.15]">
              A Complete Approach to Creating Better Spaces.
            </h2>

            <p className="stagger-about-item text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
              DADSTUDIOARCH is a multidisciplinary design-and-build practice uniting architectural innovation, construction craftsmanship, interior refinement, exterior facade design, and high-performance UPVC window and door solutions.
            </p>

            <p className="stagger-about-item text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
              Rather than separating design concepts from jobsite reality, our practice connects spatial planning, material curation, structural engineering, and precision installation under a single coordinated workflow—ensuring each environment is functional, durable, and refined.
            </p>

            {/* Foundational Principles Grid (Zero Fabricated Metrics) */}
            <div className="stagger-about-item grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white border border-black/5 shadow-sm hover:border-[#A9855B]/40 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#A9855B]/10 flex items-center justify-center text-[#A9855B] mb-2.5">
                    <pillar.icon size={16} strokeWidth={2} />
                  </div>
                  <h4 className="font-bold text-sm text-[#202321] mb-1 font-general">{pillar.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="stagger-about-item">
              <Link 
                href="/about" 
                className="font-general bg-[#202321] text-white hover:bg-[#A9855B] hover:text-white px-7 py-3.5 text-xs font-bold tracking-widest uppercase inline-flex items-center gap-3 transition-colors duration-300"
              >
                Learn About Our Philosophy <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
