"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";
import AboutHero from "./AboutHero";
import OurApproach from "./OurApproach";
import OurValues from "./OurValues";

gsap.registerPlugin(ScrollTrigger);

export default function StackedTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // 1. Curtain closes (Studio Philosophy & Craftsmanship)
      tl.to(leftPanelRef.current, { x: "0%", ease: "power2.out" }, 0)
        .to(rightPanelRef.current, { x: "0%", ease: "power2.out" }, 0)
      
      // 2. Our Values layer slides up smoothly
        .to(valuesRef.current, { y: "0%", ease: "none" }, 1)
        
      // 3. Our Approach layer slides up smoothly
        .to(approachRef.current, { y: "0%", ease: "none" }, 2)

      // 4. Hold the "Our Approach" section on screen before unpinning
        .to({}, { duration: 1.2 });
        
      return () => {
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full lg:h-screen overflow-x-hidden lg:overflow-hidden bg-[#0a0a0a] flex flex-col lg:block">
      {/* 1. Background Layer: Hero */}
      <div className="relative lg:absolute lg:inset-0 w-full lg:h-full pointer-events-auto lg:pointer-events-none z-0">
        <AboutHero />
      </div>

      {/* 2. Middle Layer: Curtains (Studio Philosophy) */}
      <div className="relative lg:absolute lg:inset-0 w-full lg:h-full flex flex-col lg:flex-row pointer-events-none lg:z-10 bg-[#0a0a0a] lg:bg-transparent">
        {/* Left Curtain */}
        <div 
          ref={leftPanelRef} 
          className="w-full lg:w-1/2 lg:h-full bg-[#0e100f] lg:-translate-x-full pointer-events-auto flex items-center justify-center lg:justify-end px-5 sm:px-8 py-12 lg:py-0 lg:px-14 border-b lg:border-b-0 lg:border-r border-white/5 order-2 lg:order-1"
        >
          <div className="w-full max-w-[580px] lg:ml-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#A9855B]"></span>
              <p className="text-[#A9855B] font-bold tracking-widest text-xs uppercase font-general">Studio Philosophy</p>
            </div>
            <h2 className="font-instrument text-3xl sm:text-4xl lg:text-5xl font-normal mb-5 leading-tight text-white">
              Redefining the Architecture &amp; Build Experience
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed text-xs sm:text-sm">
              DADSTUDIOARCH operates on a unified model where conceptual designers work alongside structural engineers, interior stylists, and fenestration craftspeople.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed text-xs sm:text-sm">
              By maintaining continuity across all disciplines, we eliminate communication gaps, safeguard budget efficiency, and produce residences, villas, and commercial spaces of lasting distinction.
            </p>
            <Link 
              href="/services" 
              className="border border-[#A9855B] text-[#A9855B] hover:bg-[#A9855B] hover:text-black transition-colors duration-300 px-6 py-3 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-2 w-fit font-general"
            >
              Explore All Disciplines <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Curtain */}
        <div 
          ref={rightPanelRef} 
          className="w-full lg:w-1/2 lg:h-full bg-[#0e100f] lg:translate-x-full pointer-events-auto flex items-center justify-center lg:justify-start px-5 sm:px-8 pt-12 pb-6 lg:py-0 lg:px-14 order-1 lg:order-2"
        >
          <div className="w-full max-w-[580px] lg:mr-auto relative mt-4 lg:mt-0">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/images/about/about-craftsmanship.jpg" 
                alt="DADSTUDIOARCH Craftsmanship" 
                className="w-full h-auto object-cover" 
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-[#161817]/95 backdrop-blur-md border border-[#A9855B]/40 p-4 rounded-lg flex items-center gap-3 shadow-2xl z-10">
              <div className="w-10 h-10 rounded-full bg-[#A9855B]/15 border border-[#A9855B] flex items-center justify-center shrink-0 text-[#A9855B]">
                <Compass size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-white font-general">Design-and-Build</p>
                <p className="text-[11px] text-gray-400">Integrated Project Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Top Layer: Our Values */}
      <div 
        ref={valuesRef}
        className="relative lg:absolute lg:inset-0 w-full lg:h-full lg:translate-y-full lg:z-20 lg:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-[#0a0a0a] overflow-y-auto flex items-center"
      >
        <div className="w-full pointer-events-auto">
          <OurValues />
        </div>
      </div>

      {/* 4. Topmost Layer: Our Approach */}
      <div 
        ref={approachRef}
        className="relative lg:absolute lg:inset-0 w-full lg:h-full lg:translate-y-full lg:z-30 lg:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-[#111312] overflow-y-auto flex items-center"
      >
        <div className="w-full pointer-events-auto">
          <OurApproach />
        </div>
      </div>

    </section>
  );
}
