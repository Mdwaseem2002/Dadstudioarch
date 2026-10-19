"use client";

import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Mouse } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BRAND } from "@/config/brand";

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  "/images/hero/hero-villa-exterior.jpg",
  "/images/hero/hero-facade-stone.jpg",
  "/images/hero/hero-interior-living.jpg",
  "/images/hero/hero-construction-build.jpg"
];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);
  const [prevImg, setPrevImg] = useState(-1);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "bottom bottom",
      end: "+=120%",
      pin: true,
      pinSpacing: false,
    });
  }, { scope: heroRef });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => {
        setPrevImg(prev);
        return (prev + 1) % heroImages.length;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 }
    }
  };

  return (
    <>
      <div ref={heroRef} className="relative w-full">
        <div className="relative h-screen flex items-center pt-20 overflow-hidden">
          {/* Background Images Crossfade */}
          <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
            {heroImages.map((src, index) => {
              const isActive = currentImg === index;
              const isPrev = prevImg === index;

              let zIndex = 0;
              let clipPath = "inset(0 0 0 100%)";
              let scale = 1.08;

              if (prevImg === -1 && index === 0) {
                zIndex = 10;
                clipPath = "inset(0 0 0 0%)";
                scale = 1;
              } else if (isActive) {
                zIndex = 10;
                clipPath = "inset(0 0 0 0%)";
                scale = 1;
              } else if (isPrev) {
                zIndex = 5;
                clipPath = "inset(0 0 0 0%)";
                scale = 1;
              }

              return (
                <motion.img 
                  key={src}
                  src={src}
                  alt="DADSTUDIOARCH Architecture & Construction"
                  initial={false}
                  animate={{ clipPath, zIndex, scale }}
                  transition={{
                    clipPath: isActive ? { duration: 1.4, ease: [0.77, 0, 0.175, 1] } : { duration: 0 },
                    scale: isActive ? { duration: 5, ease: "linear" } : { duration: 0 }
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              );
            })}
            
            {/* Architectural Gradient Masks for Contrast and Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/60 z-20 pointer-events-none" />
          </div>

          <div className="w-full px-5 sm:px-6 lg:px-12 xl:px-16 relative z-20 flex flex-col justify-center max-w-4xl -mt-10 sm:mt-0">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="w-full"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="w-8 sm:w-12 h-[1px] bg-[#A9855B]"></span>
                <p className="text-[#A9855B] font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase font-general">
                  DADSTUDIOARCH STUDIO
                </p>
              </motion.div>

              <motion.h1 
                variants={fadeInUp} 
                className="font-instrument font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-5 sm:mb-6 text-white"
              >
                Thoughtfully Designed. <br />
                <span className="italic text-[#A9855B] font-serif">Beautifully Built.</span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp} 
                className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl leading-relaxed font-sans"
              >
                {BRAND.heroSubheadline}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Link 
                  href="/projects" 
                  className="font-general bg-[#A9855B] text-black hover:bg-white hover:text-black transition-colors duration-300 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-wider flex items-center justify-center gap-2 group"
                >
                  Explore Our Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="font-general border border-white/30 hover:border-[#A9855B] hover:text-[#A9855B] bg-black/40 backdrop-blur-sm text-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-medium tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  Discuss Your Project
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
          >
            <span className="text-[10px] tracking-[0.25em] text-gray-400 uppercase font-general">Explore Studio</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Mouse size={20} className="text-[#A9855B]" strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </div>

        {/* Disciplines Bar */}
        <div className="border-y border-white/10 bg-[#0e100f] py-6 overflow-hidden relative text-white">
          <div className="flex w-full overflow-hidden">
            <motion.div 
              className="flex items-center opacity-80 whitespace-nowrap min-w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <div className="flex items-center gap-8 sm:gap-14 md:gap-20 pr-8 sm:pr-14 md:pr-20 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gray-300">
                <span>Architecture &amp; Planning</span>
                <span className="text-[#A9855B]">•</span>
                <span>Residential Construction</span>
                <span className="text-[#A9855B]">•</span>
                <span>Interior Design</span>
                <span className="text-[#A9855B]">•</span>
                <span>Exterior &amp; Facade Detailing</span>
                <span className="text-[#A9855B]">•</span>
                <span>UPVC Windows &amp; Doors</span>
                <span className="text-[#A9855B]">•</span>
                <span>Complete Design-to-Build</span>
                <span className="text-[#A9855B]">•</span>
              </div>
              <div className="flex items-center gap-8 sm:gap-14 md:gap-20 pr-8 sm:pr-14 md:pr-20 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gray-300">
                <span>Architecture &amp; Planning</span>
                <span className="text-[#A9855B]">•</span>
                <span>Residential Construction</span>
                <span className="text-[#A9855B]">•</span>
                <span>Interior Design</span>
                <span className="text-[#A9855B]">•</span>
                <span>Exterior &amp; Facade Detailing</span>
                <span className="text-[#A9855B]">•</span>
                <span>UPVC Windows &amp; Doors</span>
                <span className="text-[#A9855B]">•</span>
                <span>Complete Design-to-Build</span>
                <span className="text-[#A9855B]">•</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Spacer to keep smooth scroll pin behavior */}
      <div className="h-[25vh] w-full pointer-events-none opacity-0"></div>
    </>
  );
}
