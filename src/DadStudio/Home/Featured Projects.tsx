"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BRAND } from "@/config/brand";

gsap.registerPlugin(ScrollTrigger);

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  serviceType: string;
  scope: string;
  image: string;
  desc: string;
  features: string[];
}

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [apiProjects, setApiProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.projects?.length) {
          setApiProjects(
            data.projects.map((p: any) => ({
              id: p._id,
              title: p.title,
              category: p.category,
              serviceType: p.category,
              scope: p.location || "Client Project",
              image: p.images?.[0] || "/images/placeholder.jpg",
              desc: p.description,
              features: [
                p.year && `Year: ${p.year}`,
                p.client && `Client: ${p.client}`,
                p.location && `Location: ${p.location}`,
              ].filter(Boolean) as string[],
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const allProjects: ProjectItem[] = [...apiProjects, ...BRAND.illustrativeProjects];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const getScrollAmount = () => {
        if (!trackRef.current || !trackRef.current.parentElement) return 0;
        const trackWidth = trackRef.current.scrollWidth;
        const containerWidth = trackRef.current.parentElement.offsetWidth;
        return -(trackWidth - containerWidth);
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount()) * 1.4}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
      
      tl.to({}, { duration: 0.2 })
        .to(trackRef.current, {
          x: getScrollAmount,
          ease: "none",
          duration: 1
        })
        .to({}, { duration: 0.2 });
      
      return () => {
        tl.kill();
      };
    });
  }, { scope: sectionRef, dependencies: [apiProjects] });

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-28 lg:pt-36 bg-[#0d0f0e] relative border-t border-white/5 overflow-hidden text-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#A9855B]"></span>
              <p className="text-[#A9855B] font-semibold tracking-[0.25em] text-xs uppercase font-general">
                Project Portfolio
              </p>
            </div>
            <h2 className="font-instrument text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
              Curated Architectural Showcases
            </h2>
            <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
              <Sparkles size={13} className="text-[#A9855B]" />
              <span>Conceptual Design Showcases &amp; Illustrative Architectural Concepts</span>
            </div>
          </div>
          
          <Link 
            href="/projects" 
            className="border border-[#A9855B]/40 hover:border-[#A9855B] hover:bg-[#A9855B] text-white hover:text-black px-5 py-2.5 text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-all duration-300"
          >
            Explore All Showcases <ArrowRight size={14} />
          </Link>
        </div>

        {/* Scroll Track / Grid */}
        <div className="w-full overflow-visible">
          <div ref={trackRef} className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-5 lg:gap-8 w-full lg:w-max">
            {allProjects.map((project, idx) => (
              <div 
                key={project.id}
                className="group w-full lg:w-[380px] xl:w-[420px] shrink-0 rounded-lg overflow-hidden border border-white/10 hover:border-[#A9855B]/60 transition-colors duration-500 bg-[#161817] flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[16/10] bg-black">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-medium text-gray-300 uppercase tracking-wider border border-white/10">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#A9855B]/90 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-semibold text-black uppercase tracking-wider">
                    {project.scope}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-[#A9855B] font-semibold tracking-widest uppercase block mb-1">
                      {project.serviceType}
                    </span>
                    <h4 className="font-general font-bold text-lg text-white group-hover:text-[#A9855B] transition-colors mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {project.desc}
                    </p>
                  </div>

                  {/* Features Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {project.features.map((feat, fIdx) => (
                      <span key={fIdx} className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-300">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
