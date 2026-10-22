"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/config/brand";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [apiProjects, setApiProjects] = useState<ProjectItem[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [allProjects]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = 400; // approximate card width + gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#0d0f0e] relative border-t border-white/5 text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#A9855B]"></span>
              <p className="text-[#A9855B] font-semibold tracking-[0.25em] text-xs uppercase font-general">
                Project Portfolio
              </p>
            </div>
            <h2 className="font-instrument text-2xl sm:text-4xl md:text-5xl font-normal leading-tight">
              Curated Architectural Showcases
            </h2>
            <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
              <Sparkles size={13} className="text-[#A9855B]" />
              <span>Conceptual Design Showcases &amp; Illustrative Architectural Concepts</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous projects"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? "border-white/20 text-white hover:border-[#A9855B] hover:text-[#A9855B] bg-white/5"
                    : "border-white/5 text-gray-600 cursor-not-allowed bg-transparent"
                }`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next projects"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  canScrollRight
                    ? "border-white/20 text-white hover:border-[#A9855B] hover:text-[#A9855B] bg-white/5"
                    : "border-white/5 text-gray-600 cursor-not-allowed bg-transparent"
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <Link 
              href="/projects" 
              className="border border-[#A9855B]/40 hover:border-[#A9855B] hover:bg-[#A9855B] text-white hover:text-black px-4 sm:px-5 py-2.5 text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-all duration-300 whitespace-nowrap"
            >
              Explore All <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {allProjects.map((project) => (
            <div 
              key={project.id}
              style={{ scrollSnapAlign: "start" }}
              className="group w-[300px] sm:w-[360px] lg:w-[400px] shrink-0 rounded-xl overflow-hidden border border-white/10 hover:border-[#A9855B]/60 transition-all duration-500 bg-[#161817] flex flex-col justify-between shadow-lg"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10] bg-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-semibold text-[#A9855B] uppercase tracking-wider border border-white/10">
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
                  <h4 className="font-general font-bold text-base sm:text-lg text-white group-hover:text-[#A9855B] transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {project.desc}
                  </p>
                </div>

                {/* Features Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {project.features.slice(0, 3).map((feat, fIdx) => (
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
    </section>
  );
}
