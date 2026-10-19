"use client";

import { useEffect, useRef } from "react";
import { Building2, Compass, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhoWeAre() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(".who-text > *", 
          { y: 40, autoAlpha: 0 },
          { scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play reverse play reverse" }, y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
        );
        gsap.fromTo(".who-bg", 
          { scale: 0.9, autoAlpha: 0 },
          { scrollTrigger: { trigger: containerRef.current, start: "top 75%", toggleActions: "play reverse play reverse" }, scale: 1, autoAlpha: 1, duration: 1.2, ease: "power3.out" }
        );
        gsap.fromTo(".who-fg", 
          { y: 60, autoAlpha: 0 },
          { scrollTrigger: { trigger: containerRef.current, start: "top 60%", toggleActions: "play reverse play reverse" }, y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
      <div className="who-text w-full lg:w-5/12 space-y-4 lg:space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#A9855B]"></span>
          <h3 className="text-[#A9855B] font-bold tracking-widest text-xs uppercase font-general">About Studio</h3>
        </div>
        <h2 className="font-instrument text-3xl md:text-5xl font-normal leading-tight text-white">
          From Blueprint to <br />
          <span className="italic text-[#A9855B]">Enduring Structure</span>
        </h2>
        <p className="text-gray-300 text-xs lg:text-sm leading-relaxed max-w-md">
          DADSTUDIOARCH unites architecture, construction, interior curation, facade design, and UPVC systems into a single disciplined execution practice.
        </p>
        
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-lg bg-white/5 border border-white/5">
            <Layers className="text-[#A9855B] w-5 h-5 mb-1.5" />
            <h4 className="text-sm font-bold text-white font-general">5 Disciplines</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Architecture to UPVC</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/5">
            <Compass className="text-[#A9855B] w-5 h-5 mb-1.5" />
            <h4 className="text-sm font-bold text-white font-general">Turnkey Flow</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">Single studio accountability</p>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-7/12 relative h-[300px] sm:h-[400px] lg:h-[500px] mt-4 lg:mt-0">
        <div className="who-bg absolute top-0 right-0 w-[80%] h-[220px] sm:h-[320px] lg:h-[420px] overflow-hidden rounded-lg border border-white/10 shadow-2xl">
          <img 
            src="/images/services/service-exterior.jpg" 
            alt="DADSTUDIOARCH Exterior Architecture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="who-fg absolute bottom-0 left-0 w-[70%] h-[200px] sm:h-[260px] lg:h-[340px] overflow-hidden shadow-2xl rounded-lg border-4 border-[#0a0a0a]">
          <img 
            src="/images/hero/hero-interior-living.jpg" 
            alt="DADSTUDIOARCH Interior Living" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
