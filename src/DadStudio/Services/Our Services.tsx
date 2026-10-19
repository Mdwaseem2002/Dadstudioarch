"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAND } from "@/config/brand";

export default function OurServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.fromTo(".hero-text > *", 
        { y: 40, autoAlpha: 0 },
        { 
          y: 0, 
          autoAlpha: 1, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power3.out", 
          delay: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
      gsap.fromTo(".hero-img", 
        { x: 40, autoAlpha: 0 },
        { 
          x: 0, 
          autoAlpha: 1, 
          duration: 1.2, 
          ease: "power3.out", 
          delay: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      <div className="hero-text w-full lg:w-1/2 space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#A9855B]"></span>
          <h3 className="text-[#A9855B] font-bold tracking-widest text-xs uppercase font-general">Our Capabilities</h3>
        </div>
        <h1 className="font-instrument text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white">
          Coordinated Architecture, <br />
          <span className="italic text-[#A9855B]">Interiors &amp; Construction.</span>
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-lg leading-relaxed">
          At DADSTUDIOARCH, we provide an integrated continuum across architectural concepts, structural execution, interior refinement, facade design, and UPVC fenestration.
        </p>
      </div>
      <div className="hero-img w-full lg:w-1/2">
        <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="/images/services/service-architecture.jpg" 
            alt="DADSTUDIOARCH Architectural Services" 
            className="w-full h-[380px] md:h-[480px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
