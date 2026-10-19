"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Award, Settings, Users, MousePointerClick, Compass, Hammer, Sparkles, Building, DoorClosed, ArrowRight, ShieldCheck, Layers, Ruler } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BRAND } from "@/config/brand";

const reasons = [
  { icon: <Compass size={24} />, title: "Integrated Delivery", desc: "Design, structural engineering, and finish craftsmanship handled as one unified discipline.", image: "/images/about/about-craftsmanship.jpg" },
  { icon: <ShieldCheck size={24} />, title: "Precision Engineering", desc: "Rigorous quality protocols, laser site tolerances, and engineered structural standards.", image: "/images/services/service-construction.jpg" },
  { icon: <Sparkles size={24} />, title: "Material Authenticity", desc: "Direct curation of authentic natural stone, architectural joinery, and premium UPVC suites.", image: "/images/services/service-interior.jpg" }
];

export default function CinematicSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tlIntro = gsap.timeline({
          scrollTrigger: {
            trigger: ".section-1",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          }
        });
        tlIntro.fromTo(".hero-intro-anim", 
          { y: 35, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" }
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top", 
            end: "+=3200",
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
          }
        });

        gsap.set(".sec2-left-panel", { x: -60, opacity: 0, scale: 0.96 });
        gsap.set(".discover-item-anim", { y: 35, opacity: 0, scale: 0.95 });
        gsap.set(".discover-right-header-anim", { y: 20, opacity: 0 });

        gsap.set(".section-3", { xPercent: -100 });
        gsap.set(".who-heading", { opacity: 0, y: 40, scale: 0.97 });
        gsap.set(".who-p", { opacity: 0, y: 30 });
        gsap.set(".who-stat", { opacity: 0, y: 30 });
        gsap.set(".who-img-container", { clipPath: "inset(100% 0% 0% 0%)", scale: 1.06 });

        gsap.set(".section-4", { yPercent: 100 });
        gsap.set(".offer-label", { opacity: 0, y: 20 });
        gsap.set(".offer-heading", { opacity: 0, y: 50, scale: 0.97 });
        gsap.set(".offer-card-anim", { opacity: 0, y: 50, scale: 0.96 });

        tl.to(".hero-center-content", { y: -80, opacity: 0, scale: 0.96, duration: 0.8, ease: "power2.inOut" }, "split")
          .to(".hero-bg-cover", { scale: 1.08, opacity: 0, duration: 0.8, ease: "power2.inOut" }, "split")
          .set(".section-1", { autoAlpha: 0 }, "split+=0.8")
          
          .to(".sec2-left-panel", { x: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" }, "split+=0.6")
          .to(".discover-right-header-anim", { y: 0, opacity: 1, duration: 0.4, ease: "power4.out" }, "split+=0.6")
          .to(".discover-item-anim", { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.12, ease: "power4.out" }, "split+=0.65")
          
          .to({}, { duration: 0.4 }) 

          .to(".section-2", { xPercent: 100, duration: 1, ease: "power3.inOut" }, "slideH")
          .to(".section-3", { xPercent: 0, duration: 1, ease: "power3.inOut" }, "slideH")

          .to(".who-heading", { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" }, "slideH+=0.5")
          .to(".who-p", { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "slideH+=0.65") 
          .to(".who-img-container", { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1, stagger: 0.12, ease: "power4.out" }, "slideH+=0.5")
          .to(".who-stat", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power4.out" }, "slideH+=0.7")

          .to({}, { duration: 0.3 })

          .to(".section-4", { yPercent: 0, duration: 1.0, ease: "power2.inOut" }, "slideV")
          
          .to(".offer-label", { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }, "slideV+=0.4")
          .to(".offer-heading", { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" }, "slideV+=0.4")
          .to(".offer-card-anim", { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.12, ease: "power4.out" }, "slideV+=0.5");
      });

      mm.add("(max-width: 1023px)", () => {
        const sections = gsap.utils.toArray(".section-1, .section-2, .section-3, .section-4");
        sections.forEach((sec: any) => {
          gsap.from(sec, {
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full lg:h-screen lg:overflow-hidden bg-[#0a0a0a] flex flex-col lg:block">
      
      {/* SECTION 4 (What We Offer - Starts Bottom) */}
      <section className="section-4 relative lg:absolute lg:inset-0 z-40 flex items-center justify-center py-8 lg:py-0 lg:pt-[72px] bg-[#0a0a0a] order-4">
        <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="offer-header flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#A9855B]"></span>
                <h3 className="offer-label text-[#A9855B] font-bold tracking-widest text-xs uppercase font-general">Core Offerings</h3>
              </div>
              <h2 className="offer-heading font-instrument text-3xl md:text-5xl font-normal leading-tight text-white">
                Coordinated Architecture, Build &amp; Fenestration
              </h2>
            </div>
            <Link 
              href="/contact" 
              className="border border-[#A9855B] text-[#A9855B] hover:bg-[#A9855B] hover:text-black px-6 py-2.5 text-xs font-bold tracking-widest uppercase transition-colors"
            >
              Discuss Scope
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { id: "01", title: "Architecture & Planning", desc: "Site analysis, volumetric massing, 3D spatial models, and comprehensive permit-ready working drawings.", icon: <Compass size={28} /> },
              { id: "02", title: "Construction & Build", desc: "Turnkey residential and villa construction with laser-guided structural execution and milestone reviews.", icon: <Hammer size={28} />, active: true },
              { id: "03", title: "UPVC Windows & Doors", desc: "Acoustic, thermally-insulated multi-chamber UPVC sliding door suites and contemporary window systems.", icon: <DoorClosed size={28} /> },
            ].map((card, idx) => (
              <div 
                key={idx} 
                className={`offer-card-anim relative p-6 lg:p-8 rounded-lg flex flex-col justify-between h-full min-h-[260px] lg:min-h-[320px] transition-all duration-500 border ${
                  card.active 
                    ? "bg-[#141615] border-[#A9855B] shadow-xl" 
                    : "bg-[#111] text-white border-white/10 hover:border-[#A9855B]/50"
                } group`}
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
                  <h4 className="text-lg lg:text-xl font-bold text-white font-general">{card.title}</h4>
                  <p className="text-xs lg:text-sm leading-relaxed text-gray-400">
                    {card.desc}
                  </p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold text-[#A9855B] uppercase pt-2 tracking-wider group-hover:text-white transition-colors">
                    Service Scope <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 (Who We Are - Starts Left) */}
      <section className="section-3 relative lg:absolute lg:inset-0 z-20 flex items-center justify-center py-8 lg:py-0 lg:pt-[72px] bg-[#0a0a0a] order-3">
        <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 h-auto lg:h-[600px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <div className="w-full lg:w-5/12 space-y-4 lg:space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#A9855B]"></span>
              <h3 className="who-heading text-[#A9855B] font-bold tracking-widest text-xs uppercase font-general">About Studio</h3>
            </div>
            <h2 className="who-heading font-instrument text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
              From Concept to Enduring Living Spaces
            </h2>
            <p className="who-p text-gray-400 text-xs sm:text-sm leading-relaxed">
              DADSTUDIOARCH eliminates contractor fragmentation. We harmonize architectural design, interior detailing, exterior envelopes, and UPVC systems into a single disciplined execution practice.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="who-stat p-3.5 rounded-lg bg-white/5 border border-white/5">
                <p className="text-sm font-bold text-white font-general mb-0.5">5 In-House Disciplines</p>
                <p className="text-[11px] text-gray-400 leading-tight">Architecture, Build, Interiors, Facades &amp; UPVC</p>
              </div>
              <div className="who-stat p-3.5 rounded-lg bg-white/5 border border-white/5">
                <p className="text-sm font-bold text-white font-general mb-0.5">Turnkey Integrity</p>
                <p className="text-[11px] text-gray-400 leading-tight">Design continuity through structural handover</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 relative h-[280px] sm:h-[380px] lg:h-[460px]">
            <div className="who-img-container absolute top-0 right-0 w-[85%] h-[75%] overflow-hidden rounded-lg border border-white/10 shadow-2xl">
              <img 
                src="/images/services/service-exterior.jpg" 
                alt="Exterior Detailing DADSTUDIOARCH" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="who-img-container absolute bottom-0 left-0 w-[65%] h-[65%] overflow-hidden shadow-2xl rounded-lg border-2 border-[#161817]">
              <img 
                src="/images/hero/hero-interior-living.jpg" 
                alt="Interior & UPVC Living DADSTUDIOARCH" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 (Why Clients Trust Us) */}
      <section className="section-2 relative lg:absolute lg:inset-0 z-10 flex items-center justify-center py-8 lg:py-0 lg:pt-[72px] bg-[#0a0a0a] order-2">
        <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 h-auto lg:h-[600px] grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0 bg-[#111312] border border-white/5 rounded-lg overflow-hidden">
          
          <div className="sec2-left-panel lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/5 relative overflow-hidden p-6 lg:p-12 flex flex-col justify-end min-h-[260px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex === null ? 'default' : activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0"
              >
                <img 
                  src={activeIndex === null ? "/images/about/about-craftsmanship.jpg" : reasons[activeIndex].image} 
                  alt={activeIndex === null ? "Craftsmanship" : reasons[activeIndex].title} 
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111312] via-[#111312]/80 to-[#111312]/40" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 w-full space-y-4">
              <div className="w-12 h-12 rounded-full border border-[#A9855B]/40 flex items-center justify-center bg-[#A9855B]/10 text-[#A9855B] backdrop-blur-md">
                {activeIndex === null ? <Building2 size={24} /> : reasons[activeIndex].icon}
              </div>
              <h2 className="font-instrument text-2xl lg:text-4xl font-normal text-white">
                {activeIndex === null ? "Why Clients Partner With Us" : reasons[activeIndex].title}
              </h2>
              <p className="text-gray-300 text-xs lg:text-sm leading-relaxed max-w-sm">
                {activeIndex === null 
                  ? "We unite design sensibility, material curation, and engineering precision under a transparent workflow." 
                  : reasons[activeIndex].desc}
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 p-6 lg:p-12 flex flex-col justify-center">
            <h3 className="discover-right-header-anim text-base lg:text-xl font-bold mb-4 lg:mb-6 text-white font-general">
              Foundational Studio Standards
            </h3>
            <div className="space-y-4">
              {reasons.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className={`discover-item-anim flex items-center gap-4 group cursor-pointer border p-4 rounded-lg transition-all duration-300 ${
                    activeIndex === idx 
                      ? 'border-[#A9855B] bg-[#A9855B]/10' 
                      : 'border-white/5 hover:border-white/20 bg-white/[0.02]'
                  }`}
                >
                  <div className={`w-12 h-12 shrink-0 rounded-lg border flex items-center justify-center transition-colors ${
                    activeIndex === idx 
                      ? 'bg-[#A9855B]/20 border-[#A9855B] text-[#A9855B]' 
                      : 'border-white/10 text-[#A9855B] bg-black/40 group-hover:border-[#A9855B]/40'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-sm lg:text-base mb-1 transition-colors ${
                      activeIndex === idx ? 'text-[#A9855B]' : 'text-white group-hover:text-[#A9855B]'
                    }`}>
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                  <div className={`text-[#A9855B] transition-all ${
                    activeIndex === idx ? 'opacity-100 scale-110' : 'opacity-40 group-hover:opacity-100'
                  }`}>
                    <MousePointerClick size={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 1 - Panoramic Master Services Hero */}
      <section className="section-1 relative lg:absolute lg:inset-0 z-30 flex items-center justify-center pt-[100px] lg:pt-[72px] pb-12 lg:pb-0 overflow-hidden order-1 bg-[#0a0a0a]">
        
        {/* Single Cohesive Luxury Architectural Background Image */}
        <div className="hero-bg-cover absolute inset-0 z-0">
          <img 
            src="/images/hero/hero-villa-exterior.jpg" 
            alt="DADSTUDIOARCH Architecture, Construction, Interior & Exterior"
            className="w-full h-full object-cover opacity-50"
          />
          {/* Subtle gradient vignette overlays for contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-[#0a0a0a]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:26px_26px] pointer-events-none opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-[#A9855B]/10 rounded-full blur-[160px] pointer-events-none" />
        </div>

        {/* Centered Hero Content */}
        <div className="hero-center-content relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
          
          {/* Eyebrow Studio Badge */}
          <div className="hero-intro-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#A9855B]/40 text-[10px] sm:text-xs font-mono text-[#A9855B] uppercase tracking-[0.2em] mb-5 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#A9855B] animate-pulse"></span>
            <span>Integrated Architecture // Construction // Interior &amp; Exterior</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="hero-intro-anim font-instrument text-4xl sm:text-6xl lg:text-[68px] font-normal leading-[1.08] text-white max-w-4xl mb-5">
            Architecture. Construction. <br />
            <span className="italic text-[#A9855B] font-instrument">Interior &amp; Exterior Mastery.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="hero-intro-anim text-gray-300 text-xs sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-10">
            DADSTUDIOARCH delivers an integrated design-to-build continuum. Select a specialized practice below to explore dedicated project documentation, specifications, and portfolios.
          </p>

          {/* 3 SLIM CURVED (ROUNDED-FULL) BUTTONS - HALF HEIGHT */}
          <div className="hero-intro-anim grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 w-full max-w-5xl mb-12">
            
            {/* Button 1: Construction */}
            <Link 
              href="/services/construction"
              className="group relative px-5 py-2.5 sm:py-3 lg:px-7 rounded-full bg-[#121413]/90 hover:bg-[#A9855B] border-2 border-[#A9855B]/50 hover:border-[#A9855B] backdrop-blur-xl text-white hover:text-black transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(169,133,91,0.5)] flex items-center justify-between cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#A9855B]/20 group-hover:bg-black/15 border border-[#A9855B]/40 flex items-center justify-center shrink-0 transition-colors">
                  <Hammer size={16} className="text-[#A9855B] group-hover:text-black transition-colors" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#A9855B] group-hover:text-black/80 block font-bold leading-none mb-0.5">
                    01 // DISCIPLINE
                  </span>
                  <span className="text-xs sm:text-sm font-bold font-general tracking-wider block uppercase leading-none">
                    Construction
                  </span>
                </div>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 group-hover:bg-black/15 text-[#A9855B] group-hover:text-black border border-white/10 group-hover:border-black/30 flex items-center justify-center shrink-0 transition-all ml-2 group-hover:translate-x-1">
                <ArrowRight size={14} />
              </div>
            </Link>

            {/* Button 2: Architecture */}
            <Link 
              href="/services/architecture"
              className="group relative px-5 py-2.5 sm:py-3 lg:px-7 rounded-full bg-[#121413]/90 hover:bg-[#A9855B] border-2 border-[#A9855B]/50 hover:border-[#A9855B] backdrop-blur-xl text-white hover:text-black transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(169,133,91,0.5)] flex items-center justify-between cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#A9855B]/20 group-hover:bg-black/15 border border-[#A9855B]/40 flex items-center justify-center shrink-0 transition-colors">
                  <Compass size={16} className="text-[#A9855B] group-hover:text-black transition-colors" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#A9855B] group-hover:text-black/80 block font-bold leading-none mb-0.5">
                    02 // DISCIPLINE
                  </span>
                  <span className="text-xs sm:text-sm font-bold font-general tracking-wider block uppercase leading-none">
                    Architecture
                  </span>
                </div>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 group-hover:bg-black/15 text-[#A9855B] group-hover:text-black border border-white/10 group-hover:border-black/30 flex items-center justify-center shrink-0 transition-all ml-2 group-hover:translate-x-1">
                <ArrowRight size={14} />
              </div>
            </Link>

            {/* Button 3: Interior & Exterior */}
            <Link 
              href="/services/interior-exterior"
              className="group relative px-5 py-2.5 sm:py-3 lg:px-7 rounded-full bg-[#121413]/90 hover:bg-[#A9855B] border-2 border-[#A9855B]/50 hover:border-[#A9855B] backdrop-blur-xl text-white hover:text-black transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(169,133,91,0.5)] flex items-center justify-between cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#A9855B]/20 group-hover:bg-black/15 border border-[#A9855B]/40 flex items-center justify-center shrink-0 transition-colors">
                  <Sparkles size={16} className="text-[#A9855B] group-hover:text-black transition-colors" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#A9855B] group-hover:text-black/80 block font-bold leading-none mb-0.5">
                    03 // DISCIPLINE
                  </span>
                  <span className="text-xs sm:text-sm font-bold font-general tracking-wider block uppercase leading-none">
                    Interior &amp; Exterior
                  </span>
                </div>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 group-hover:bg-black/15 text-[#A9855B] group-hover:text-black border border-white/10 group-hover:border-black/30 flex items-center justify-center shrink-0 transition-all ml-2 group-hover:translate-x-1">
                <ArrowRight size={14} />
              </div>
            </Link>

          </div>

          {/* Value Micro-Pills */}
          <div className="hero-intro-anim flex flex-wrap items-center justify-center gap-5 sm:gap-8 pt-1 text-[11px] font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#A9855B]" />
              <span>360° Site Coordination</span>
            </div>
            <div className="flex items-center gap-2">
              <Ruler size={14} className="text-[#A9855B]" />
              <span>Laser Tolerances &lt; 2mm</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 size={14} className="text-[#A9855B]" />
              <span>Turnkey Handover</span>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}
