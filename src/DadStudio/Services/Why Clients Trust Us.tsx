"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Compass, ShieldCheck, Sparkles, MousePointerClick } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  { icon: <Compass size={24} />, title: "Integrated Delivery", desc: "Design, structural engineering, and finish craftsmanship handled as one unified discipline.", image: "/images/about/about-craftsmanship.jpg" },
  { icon: <ShieldCheck size={24} />, title: "Precision Engineering", desc: "Rigorous quality protocols, laser site tolerances, and engineered structural standards.", image: "/images/services/service-construction.jpg" },
  { icon: <Sparkles size={24} />, title: "Material Authenticity", desc: "Direct curation of authentic natural stone, architectural joinery, and premium UPVC suites.", image: "/images/services/service-interior.jpg" }
];

export default function WhyClientsTrustUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(".discover-left", 
          { x: -40, autoAlpha: 0 },
          { scrollTrigger: { trigger: containerRef.current, start: "top 95%", toggleActions: "play reverse play reverse" }, x: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out" }
        );
        gsap.fromTo(".discover-right-header", 
          { y: 20, autoAlpha: 0 },
          { scrollTrigger: { trigger: containerRef.current, start: "top 95%", toggleActions: "play reverse play reverse" }, y: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out" }
        );
        gsap.fromTo(".discover-item", 
          { x: 40, autoAlpha: 0 },
          { scrollTrigger: { trigger: containerRef.current, start: "top 90%", toggleActions: "play reverse play reverse" }, x: 0, autoAlpha: 1, duration: 0.4, stagger: 0.05, ease: "power3.out" }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* MOBILE VIEW */}
      <section className="lg:hidden py-4 text-white">
        <div className="mb-8 text-center px-4">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-[#A9855B]/40 flex items-center justify-center bg-[#A9855B]/10 text-[#A9855B]">
            <Building2 size={24} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-general">Why Clients Partner With Us</h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-sm mx-auto">We combine design sensibility, material curation, and engineering precision under a transparent workflow.</p>
        </div>
        
        <div className="flex flex-col gap-5 px-4">
          {reasons.map((item, idx) => (
             <div key={idx} className="relative rounded-xl overflow-hidden min-h-[260px] flex flex-col justify-end p-6 border border-white/10 shadow-xl">
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-[#111]/30" />
                
                <div className="relative z-10">
                   <div className="w-10 h-10 mb-3 rounded-lg border border-[#A9855B] bg-[#A9855B]/20 text-[#A9855B] flex items-center justify-center backdrop-blur-md">
                     {item.icon}
                   </div>
                   <h3 className="text-lg font-bold text-white mb-1.5 font-general">{item.title}</h3>
                   <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* DESKTOP VIEW */}
      <section ref={containerRef} className="hidden lg:grid grid-cols-12 gap-0 bg-[#111312] border border-white/5 rounded-lg overflow-hidden min-h-[480px] text-white">
        <div className="col-span-5 border-r border-white/5 relative overflow-hidden p-12 flex flex-col justify-end">
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111312] via-[#111312]/80 to-[#111312]/30" />
            </motion.div>
          </AnimatePresence>

          <div className="discover-left relative z-10 w-full space-y-4">
            <div className="w-12 h-12 rounded-full border border-[#A9855B]/40 flex items-center justify-center bg-[#A9855B]/10 text-[#A9855B] backdrop-blur-md">
              {activeIndex === null ? <Building2 size={24} /> : reasons[activeIndex].icon}
            </div>
            <h2 className="font-instrument text-2xl lg:text-3xl font-normal text-white">
              {activeIndex === null ? "Why Clients Partner With Us" : reasons[activeIndex].title}
            </h2>
            <p className="text-gray-300 text-xs lg:text-sm leading-relaxed max-w-sm">
              {activeIndex === null 
                ? "We unite design sensibility, material curation, and engineering precision under a transparent workflow." 
                : reasons[activeIndex].desc}
            </p>
          </div>
        </div>
        
        <div className="col-span-7 p-12 flex flex-col justify-center">
          <h3 className="discover-right-header text-lg lg:text-xl font-bold mb-6 text-white font-general">
            Foundational Studio Standards
          </h3>
          <div className="space-y-4">
            {reasons.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className={`discover-item flex items-center gap-4 group cursor-pointer border p-4 rounded-lg transition-all duration-300 ${
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
                  <h4 className={`font-bold text-sm lg:text-base mb-1 transition-colors font-general ${
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
      </section>
    </>
  );
}
