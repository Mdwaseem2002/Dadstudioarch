import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Link from "next/link";
import { 
  Sparkles, 
  DoorClosed, 
  Layers, 
  Sun, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Hammer,
  Compass,
  Palette
} from "lucide-react";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "Interior Design & Exterior Detailing | DADSTUDIOARCH",
  description:
    "Curated luxury interiors, exterior facades, natural stone cladding, architectural bronze louvers, and German multi-chamber UPVC fenestration by DADSTUDIOARCH.",
};

const interiorDisciplines = [
  {
    title: "Luxury Residential Interiors",
    desc: "Custom living environments curated with natural travertine, fluted oak panels, bespoke joinery, and concealed ambient cove illumination.",
    tag: "INTERIOR LIVING",
    specs: ["2700K Warm Ambient Lighting", "Vein-Cut Travertine Walls", "Bespoke Fluted Oak Millwork", "Concealed AC & Linear Diffusers"]
  },
  {
    title: "Modular Kitchens & Wardrobes",
    desc: "Precision German hardware, quartz and porcelain countertops, soft-close mechanisms, and ergonomic spatial layouts.",
    tag: "JOINERY & STORAGE",
    specs: ["Quartz Seamless Worktops", "Concealed LED Strip Trims", "High-Moisture Resistance Cores", "Full Extension Drawers"]
  },
  {
    title: "Exterior Facades & Cladding",
    desc: "Dynamic architectural facades combining monolithic natural stone cladding, textured render, and dark bronze architectural louvers.",
    tag: "EXTERIOR FACADES",
    specs: ["Ventilated Stone Cladding", "Solar Shading Bronze Louvers", "Weather-Resistant Coatings", "Architectural Facade Grazing"]
  },
  {
    title: "Multi-Chamber UPVC Fenestration",
    desc: "German-engineered UPVC window and door systems with galvanized steel reinforcements, acoustic double glazing, and perimeter multi-point locks.",
    tag: "UPVC SYSTEMS",
    specs: ["Multi-Chamber Thermal Profiles", "Acoustic Double Glazing (38dB)", "Multi-Point Perimeter Locking", "EPDM Compression Gaskets"]
  }
];

const interiorExteriorGallery = [
  {
    image: "/images/hero/hero-interior-living.jpg",
    title: "Luxury Travertine Living & Ambient Cove Lighting",
    subtitle: "Interior Architecture // 2700K Indirect Illumination",
    category: "INTERIOR DESIGN"
  },
  {
    image: "/images/hero/hero-villa-exterior.jpg",
    title: "Modern Villa Exterior Facade & Louvers",
    subtitle: "Exterior Architecture // Monolithic Stone & Shading",
    category: "EXTERIOR FACADE"
  },
  {
    image: "/images/services/service-interior.jpg",
    title: "Curated Material Dialogue & Bespoke Joinery",
    subtitle: "Tactile Materials // Fluted Oak & Blackened Metal",
    category: "INTERIOR DETAILING"
  },
  {
    image: "/images/hero/hero-facade-stone.jpg",
    title: "Architectural Stone Cladding & Cantilevers",
    subtitle: "Facade Volumetrics // Weather-Resistant Stone",
    category: "FACADE CLADDING"
  },
  {
    image: "/images/services/service-exterior.jpg",
    title: "Indoor-Outdoor Terrace & Seamless Thresholds",
    subtitle: "Landscape Integration // Flush Patio Transitions",
    category: "EXTERIOR LIVING"
  },
  {
    image: "/images/services/service-upvc.jpg",
    title: "High-Performance Multi-Chamber UPVC Sliding Suite",
    subtitle: "Acoustic & Thermal Fenestration // Slim Sightlines",
    category: "UPVC FENESTRATION"
  }
];

const materialPalettes = [
  {
    title: "Vein-Cut Travertine",
    desc: "Sourced natural stone with honed tactile surface, used for dramatic feature walls and bathroom sanctuaries.",
    image: "/images/materials/material-travertine-stone.jpg"
  },
  {
    title: "Fluted Architectural Oak",
    desc: "Precision-milled hardwood panels providing rich acoustic dampening and organic warmth to interior spaces.",
    image: "/images/materials/material-fluted-wood.jpg"
  },
  {
    title: "Multi-Chamber UPVC",
    desc: "Heavy-duty steel-core UPVC profiles in architectural matte charcoal for zero maintenance and superior insulation.",
    image: "/images/materials/material-upvc-profile.jpg"
  },
  {
    title: "Warm Ambient Lighting",
    desc: "Concealed 2700K low-glare architectural cove fixtures and magnetic track spotlights for layered nighttime mood.",
    image: "/images/materials/material-ambient-lighting.jpg"
  }
];

export default function InteriorExteriorPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-[#A9855B] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero/hero-interior-living.jpg" 
            alt="Interior & Exterior Design DADSTUDIOARCH"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A9855B]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 text-center">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/services" className="text-xs font-mono text-gray-400 hover:text-[#A9855B] transition-colors">
              SERVICES
            </Link>
            <span className="text-gray-600 text-xs font-mono">/</span>
            <span className="text-xs font-mono text-[#A9855B] font-bold">
              INTERIOR &amp; EXTERIOR
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#A9855B]/40 text-[11px] font-mono text-[#A9855B] uppercase tracking-wider mb-6">
            <Sparkles size={13} className="text-[#A9855B]" />
            <span>Tactile Materiality // Indoor-Outdoor Harmony</span>
          </div>

          <h1 className="font-instrument text-4xl sm:text-6xl lg:text-7xl font-normal text-white max-w-4xl mx-auto leading-[1.08] mb-6">
            Atmospheric Interiors. <br />
            <span className="italic text-[#A9855B] font-instrument">Sculptural Facades.</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Harmonizing tactile natural materials, warm ambient illumination, and bespoke millwork on the inside with striking stone facades, architectural louvers, and UPVC fenestration on the exterior.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-[#A9855B] hover:bg-white text-black font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2.5 shadow-lg shadow-[#A9855B]/20"
            >
              <span>Discuss Interior &amp; Exterior Transformation</span>
              <ArrowRight size={15} />
            </Link>

            <Link 
              href="/projects"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-mono transition-all duration-300"
            >
              Explore Living Spaces
            </Link>
          </div>

          {/* Quick Discipline Switcher */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-[11px] font-mono text-gray-400 mr-2 uppercase tracking-wider">Explore Other Disciplines:</span>
            <Link 
              href="/services/construction"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#A9855B] text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-2"
            >
              <Hammer size={13} className="text-[#A9855B]" />
              <span>Construction &amp; Build</span>
            </Link>
            <Link 
              href="/services/architecture"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#A9855B] text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-2"
            >
              <Compass size={13} className="text-[#A9855B]" />
              <span>Architecture &amp; Planning</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="py-20 lg:py-28 bg-[#0e100f] border-t border-b border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-[#A9855B]"></span>
                <span className="text-[#A9855B] font-bold tracking-[0.25em] text-xs uppercase font-mono">
                  DISCIPLINES &amp; CRAFTSMANSHIP
                </span>
              </div>
              <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white">
                Interior &amp; Exterior Capabilities
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Every detail is tailored to balance aesthetics with daily functionality, acoustic tranquility, and weather resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {interiorDisciplines.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#141615] border border-white/10 hover:border-[#A9855B]/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A9855B]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A9855B] px-3 py-1 rounded bg-[#A9855B]/10 border border-[#A9855B]/20 font-bold">
                    {item.tag}
                  </span>
                  <Palette size={20} className="text-gray-500 group-hover:text-[#A9855B] transition-colors" />
                </div>

                <h3 className="font-instrument text-2xl lg:text-3xl font-normal text-white mb-3 group-hover:text-[#A9855B] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">Highlights Included:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                        <CheckCircle2 size={12} className="text-[#A9855B] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL PHOTO GALLERY */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#A9855B] font-mono text-xs uppercase tracking-widest font-bold block mb-2">
              CURATED SHOWCASE
            </span>
            <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white mb-4">
              Interior &amp; Exterior Gallery
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Explore our portfolio of atmospheric living spaces, bespoke woodcraft, stone facade elevations, and UPVC installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorExteriorGallery.map((item, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#141615] aspect-[4/3] shadow-xl"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-black bg-[#A9855B] px-2.5 py-1 rounded font-bold">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-instrument text-xl font-normal text-white group-hover:text-[#A9855B] transition-colors mb-0.5 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-[11px] font-mono line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAL PALETTES */}
      <section className="py-20 lg:py-28 bg-[#0e100f] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-[#A9855B] font-mono text-xs uppercase tracking-widest font-bold block mb-2">
              TACTILE AUTHENTICITY
            </span>
            <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white mb-4">
              Signature Materials &amp; Fenestration
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              We curate honest, natural textures that age gracefully alongside high-performance engineering suites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materialPalettes.map((mat, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-[#141615] border border-white/10 hover:border-[#A9855B] transition-all group"
              >
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-4 border border-white/5">
                  <img 
                    src={mat.image} 
                    alt={mat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-general text-sm font-bold text-white mb-1.5 group-hover:text-[#A9855B] transition-colors">
                  {mat.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {mat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0e100f] to-black border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <Sparkles size={36} className="text-[#A9855B] mx-auto mb-4" />
          <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white mb-4">
            Elevate Your Space Inside &amp; Out
          </h2>
          <p className="text-gray-300 text-xs sm:text-base leading-relaxed mb-8">
            Consult with our interior architects and facade specialists for a bespoke material palette, 3D visualization, and fenestration audit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-[#A9855B] hover:bg-white text-black font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2 shadow-xl"
            >
              <span>Schedule Design Consultation</span>
              <ArrowRight size={15} />
            </Link>
            <Link 
              href="/services"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-mono transition-all duration-300"
            >
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
