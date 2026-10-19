import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Link from "next/link";
import { 
  Compass, 
  Layers, 
  Ruler, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Hammer,
  Eye
} from "lucide-react";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "Architecture & Spatial Planning | DADSTUDIOARCH",
  description:
    "Visionary architectural design, spatial planning, 3D CAD visualizations, structural drawings, and municipal permitting by DADSTUDIOARCH.",
};

const architectureDisciplines = [
  {
    title: "Conceptual & Schematic Design",
    desc: "Translating client aspirations into distinct spatial volumes, site massing diagrams, orientation analyses, and preliminary architectural sketches.",
    tag: "CONCEPTS",
    specs: ["Site & Solar Orientation", "Zoning & Setback Analysis", "Volumetric Massing Models", "Hand & Digital Concept Sketches"]
  },
  {
    title: "Spatial Planning & Layout Optimization",
    desc: "Harmonizing functional movement, natural illumination, sightlines, and circulation corridors across residential villas and commercial spaces.",
    tag: "PLANNING",
    specs: ["Floor Plan Optimization", "Double-Height Volume Design", "Indoor-Outdoor Circulation", "Acoustic Separation Layouts"]
  },
  {
    title: "Photorealistic 3D Visualization",
    desc: "High-fidelity architectural renderings, lighting studies at dusk and daylight, material texturing, and virtual walkthroughs before ground is broken.",
    tag: "3D VISUALIZATION",
    specs: ["Cinematic Exterior Renders", "Day/Night Lighting Studies", "Material Texture Mapping", "VR Spatial Walkthroughs"]
  },
  {
    title: "Detailed Working & Permit Drawings",
    desc: "Comprehensive engineering-grade construction drawing sets, MEP coordination sheets, window/door schedules, and municipal approval dossiers.",
    tag: "WORKING DRAWINGS",
    specs: ["Municipal Sanction Sets", "Structural Coordination Sheets", "Fenestration & Joinery Details", "Full Dimensioned Working Drawings"]
  }
];

const architectureGallery = [
  {
    image: "/images/services/service-architecture.jpg",
    title: "Scale Architectural Model & Schematics",
    subtitle: "Villa Blueprint & Concept Massing // Studio Workspace",
    category: "CONCEPT DESIGN"
  },
  {
    image: "/images/about/about-design-studio.jpg",
    title: "Design Studio Drafting & Material Testing",
    subtitle: "Architectural Detailing // Tactile Samples",
    category: "STUDIO DRAFTING"
  },
  {
    image: "/images/projects/project-courtyard-home.jpg",
    title: "Courtyard Spatial Layout & Light Well",
    subtitle: "Biophilic Architectural Flow // Residential Estate",
    category: "SPATIAL ARCHITECTURE"
  },
  {
    image: "/images/projects/project-modern-bungalow.jpg",
    title: "Cantilevered Volumetric Geometry",
    subtitle: "Modern Architectural Elevation // Geometric Volumes",
    category: "ELEVATION DESIGN"
  }
];

const designStages = [
  {
    stage: "01",
    title: "Context & Briefing",
    desc: "Topography analysis, solar trajectory study, client programmatic brief, and spatial requirements."
  },
  {
    stage: "02",
    title: "Concept Massing",
    desc: "Iterative architectural sketches, scale volumetric blocks, and initial floor layouts."
  },
  {
    stage: "03",
    title: "3D CAD Visualization",
    desc: "Detailed digital modelling, lighting simulations, material exploration, and client reviews."
  },
  {
    stage: "04",
    title: "Working Drawing Sets",
    desc: "Complete millimeter-dimensioned architectural plans, elevations, sections, and joinery details."
  },
  {
    stage: "05",
    title: "BIM & Regulatory Approvals",
    desc: "Structural and MEP coordination, municipal approval sets, and site construction handoff."
  }
];

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-[#A9855B] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Background Image with Blueprint Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/services/service-architecture.jpg" 
            alt="Architecture & Spatial Planning DADSTUDIOARCH"
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
              ARCHITECTURE &amp; PLANNING
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#A9855B]/40 text-[11px] font-mono text-[#A9855B] uppercase tracking-wider mb-6">
            <Compass size={13} className="text-[#A9855B]" />
            <span>Spatial Concepts // Millimeter-Precision Schematics</span>
          </div>

          <h1 className="font-instrument text-4xl sm:text-6xl lg:text-7xl font-normal text-white max-w-4xl mx-auto leading-[1.08] mb-6">
            Visionary Form. <br />
            <span className="italic text-[#A9855B] font-instrument">Thoughtful Spatial Flow.</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            From initial site context and programmatic massing to photorealistic 3D visualization and comprehensive permit drawings, our architecture practice shapes spaces that inspire.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-[#A9855B] hover:bg-white text-black font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2.5 shadow-lg shadow-[#A9855B]/20"
            >
              <span>Commission Architectural Blueprint</span>
              <ArrowRight size={15} />
            </Link>

            <Link 
              href="/projects"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-mono transition-all duration-300"
            >
              Explore Architecture Portfolio
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
              href="/services/interior-exterior"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#A9855B] text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-2"
            >
              <Sparkles size={13} className="text-[#A9855B]" />
              <span>Interior &amp; Exterior</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE CAPABILITIES */}
      <section className="py-20 lg:py-28 bg-[#0e100f] border-t border-b border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-[#A9855B]"></span>
                <span className="text-[#A9855B] font-bold tracking-[0.25em] text-xs uppercase font-mono">
                  ARCHITECTURAL SCOPE
                </span>
              </div>
              <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white">
                Architectural Disciplines
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Every design harmonizes site geography, solar pathing, volumetric massing, and construction feasibility into enduring form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {architectureDisciplines.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#141615] border border-white/10 hover:border-[#A9855B]/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A9855B]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A9855B] px-3 py-1 rounded bg-[#A9855B]/10 border border-[#A9855B]/20 font-bold">
                    {item.tag}
                  </span>
                  <Compass size={20} className="text-gray-500 group-hover:text-[#A9855B] transition-colors" />
                </div>

                <h3 className="font-instrument text-2xl lg:text-3xl font-normal text-white mb-3 group-hover:text-[#A9855B] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">Drawing Sets Included:</span>
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

      {/* ARCHITECTURE GALLERY */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#A9855B] font-mono text-xs uppercase tracking-widest font-bold block mb-2">
              SCHEMATICS &amp; VISUALIZATIONS
            </span>
            <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white mb-4">
              Architecture &amp; Drafting Gallery
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              From physical scale study models and drafting boards to photorealistic architectural renders and built elevations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {architectureGallery.map((item, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#141615] aspect-[16/10] shadow-xl"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black bg-[#A9855B] px-3 py-1 rounded font-bold">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-instrument text-2xl font-normal text-white group-hover:text-[#A9855B] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs font-mono">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN STAGES */}
      <section className="py-20 lg:py-28 bg-[#0e100f] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-[#A9855B] font-mono text-xs uppercase tracking-widest font-bold block mb-2">
              DESIGN CONTINUUM
            </span>
            <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white mb-4">
              5-Stage Architectural Process
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Our step-by-step design framework ensures every square foot aligns with natural light, structural elegance, and your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {designStages.map((stage, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-[#141615] border border-white/10 relative hover:border-[#A9855B] transition-colors"
              >
                <span className="font-mono text-3xl font-bold text-[#A9855B]/40 block mb-3">
                  {stage.stage}
                </span>
                <h4 className="font-general text-sm font-bold text-white mb-2">
                  {stage.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0e100f] to-black border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <Compass size={36} className="text-[#A9855B] mx-auto mb-4" />
          <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white mb-4">
            Bring Your Architectural Vision to Life
          </h2>
          <p className="text-gray-300 text-xs sm:text-base leading-relaxed mb-8">
            Schedule an architectural design consultation with our principal architects to review your site, spatial needs, and zoning opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-[#A9855B] hover:bg-white text-black font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2 shadow-xl"
            >
              <span>Schedule Architecture Discussion</span>
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
