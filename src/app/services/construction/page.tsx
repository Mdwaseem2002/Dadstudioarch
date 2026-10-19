import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Link from "next/link";
import { 
  Building2, 
  Hammer, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Ruler, 
  HardHat, 
  Sparkles,
  PhoneCall
} from "lucide-react";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "Construction & Build Solutions | DADSTUDIOARCH",
  description:
    "End-to-end residential and commercial construction, structural engineering, precision formwork, and turnkey project execution by DADSTUDIOARCH.",
};

const constructionCapabilities = [
  {
    title: "Turnkey Residential Construction",
    desc: "Complete civil construction from excavation and foundation piling to slab casting, brickwork, and turnkey handover.",
    tag: "RESIDENTIAL",
    specs: ["Excavation & Piling", "Reinforced Concrete Frame", "AAC/Clay Masonry", "Waterproofing Membranes"]
  },
  {
    title: "Modern Villa & Estate Construction",
    desc: "Bespoke structural engineering for luxury villas featuring large cantilevered slabs, double-height volumes, and panoramic glass pockets.",
    tag: "LUXURY VILLAS",
    specs: ["Post-Tensioned Slabs", "Cantilever Engineering", "Flush Glass Thresholds", "Thermal Foundation Sealing"]
  },
  {
    title: "Boutique Commercial Builds",
    desc: "Precision structural delivery for retail, boutique studios, corporate headquarters, and multi-story commercial spaces.",
    tag: "COMMERCIAL",
    specs: ["Steel-Concrete Composite", "Fire Safety Compliance", "MEP Grid Integration", "Heavy Load Flooring"]
  },
  {
    title: "Structural Engineering & Quality Control",
    desc: "Rigorous site testing protocols, laser-measured tolerances, certified structural steel grades, and on-site quality assurance audits.",
    tag: "ENGINEERING",
    specs: ["Laser Level Verification", "Concrete Cube Compression Tests", "Reinforcement Bar Auditing", "Daily Photographic Logs"]
  }
];

const constructionGallery = [
  {
    image: "/images/hero/hero-construction-build.jpg",
    title: "Reinforced Concrete Formwork & Frame",
    subtitle: "Turnkey Luxury Residence // Structural Phase",
    category: "CIVIL FRAMEWORK"
  },
  {
    image: "/images/services/service-construction.jpg",
    title: "Laser Alignment & Structural Beam Setting",
    subtitle: "Precision Engineering // Tolerance < 2mm",
    category: "SITE EXECUTION"
  },
  {
    image: "/images/hero/dadstudioarch-hero-residential.jpg",
    title: "Multi-Storey Villa Framework",
    subtitle: "High-Grade Concrete Formwork // Jobsite Delivery",
    category: "STRUCTURAL BUILD"
  },
  {
    image: "/images/projects/project-linear-commercial.jpg",
    title: "Commercial Concrete & Steel Integration",
    subtitle: "Boutique Commercial Studio // Structural Handover",
    category: "COMMERCIAL BUILD"
  }
];

const workflowSteps = [
  {
    step: "01",
    title: "Site Survey & Soil Testing",
    desc: "Comprehensive topographical laser survey, soil bearing capacity analysis, and structural foundation design."
  },
  {
    step: "02",
    title: "Excavation & Substructure",
    desc: "Engineered excavation, anti-termite treatment, raft/isolated footings, and multi-layer waterproofing."
  },
  {
    step: "03",
    title: "Superstructure & Slab Casting",
    desc: "Certified high-strength concrete, precision formwork, vibration compaction, and controlled multi-day curing."
  },
  {
    step: "04",
    title: "Masonry & MEP Concealment",
    desc: "High-grade masonry blockwork, conduit routing, plumbing pressure tests, and structural plastering."
  },
  {
    step: "05",
    title: "Finishing & Handover Audit",
    desc: "Comprehensive 120-point quality verification, MEP commissioning, laser flatness tests, and turnkey key handover."
  }
];

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-[#A9855B] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Background Image with Dark Gradient & Blueprint Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero/hero-construction-build.jpg" 
            alt="Construction & Build DADSTUDIOARCH"
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
              CONSTRUCTION &amp; BUILD
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#A9855B]/40 text-[11px] font-mono text-[#A9855B] uppercase tracking-wider mb-6">
            <Hammer size={13} className="text-[#A9855B]" />
            <span>Turnkey Structural Execution // Tolerances &lt; 2mm</span>
          </div>

          <h1 className="font-instrument text-4xl sm:text-6xl lg:text-7xl font-normal text-white max-w-4xl mx-auto leading-[1.08] mb-6">
            Structural Integrity. <br />
            <span className="italic text-[#A9855B] font-instrument">Engineered to Endure.</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            From deep foundation piling to precision reinforced concrete framing and turnkey civil execution, DADSTUDIOARCH builds with uncompromising structural rigor and site transparency.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-[#A9855B] hover:bg-white text-black font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2.5 shadow-lg shadow-[#A9855B]/20"
            >
              <span>Discuss Your Construction Project</span>
              <ArrowRight size={15} />
            </Link>

            <Link 
              href="/projects"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-mono transition-all duration-300"
            >
              View Active Builds
            </Link>
          </div>

          {/* Quick Discipline Switcher */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-[11px] font-mono text-gray-400 mr-2 uppercase tracking-wider">Explore Other Disciplines:</span>
            <Link 
              href="/services/architecture"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#A9855B] text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-2"
            >
              <Compass size={13} className="text-[#A9855B]" />
              <span>Architecture &amp; Planning</span>
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

      {/* CAPABILITIES GRID */}
      <section className="py-20 lg:py-28 bg-[#0e100f] border-t border-b border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-[#A9855B]"></span>
                <span className="text-[#A9855B] font-bold tracking-[0.25em] text-xs uppercase font-mono">
                  SCOPE &amp; SPECIALIZATIONS
                </span>
              </div>
              <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white">
                Construction Capabilities
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Every phase is executed under direct supervision with certified materials, weekly milestone tracking, and transparent progress reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {constructionCapabilities.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#141615] border border-white/10 hover:border-[#A9855B]/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A9855B]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A9855B] px-3 py-1 rounded bg-[#A9855B]/10 border border-[#A9855B]/20 font-bold">
                    {item.tag}
                  </span>
                  <HardHat size={20} className="text-gray-500 group-hover:text-[#A9855B] transition-colors" />
                </div>

                <h3 className="font-instrument text-2xl lg:text-3xl font-normal text-white mb-3 group-hover:text-[#A9855B] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">Deliverables Included:</span>
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

      {/* CONSTRUCTION PHOTO GALLERY */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#A9855B] font-mono text-xs uppercase tracking-widest font-bold block mb-2">
              PROJECT DOCUMENTATION
            </span>
            <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white mb-4">
              On-Site Construction Gallery
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Real jobsite execution, heavy civil formwork, steel reinforcement, and laser precision in active progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {constructionGallery.map((item, idx) => (
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

      {/* 5-STAGE EXECUTION WORKFLOW */}
      <section className="py-20 lg:py-28 bg-[#0e100f] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-[#A9855B] font-mono text-xs uppercase tracking-widest font-bold block mb-2">
              RIGOROUS DISCIPLINE
            </span>
            <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white mb-4">
              5-Stage Construction Workflow
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              A transparent, scheduled roadmap guaranteeing timeline adherence and engineered quality from ground-breaking to key handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-[#141615] border border-white/10 relative hover:border-[#A9855B] transition-colors"
              >
                <span className="font-mono text-3xl font-bold text-[#A9855B]/40 block mb-3">
                  {step.step}
                </span>
                <h4 className="font-general text-sm font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0e100f] to-black border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <HardHat size={36} className="text-[#A9855B] mx-auto mb-4" />
          <h2 className="font-instrument text-3xl sm:text-5xl font-normal text-white mb-4">
            Planning a Construction Project?
          </h2>
          <p className="text-gray-300 text-xs sm:text-base leading-relaxed mb-8">
            Connect with our structural engineers and site directors for an on-site consultation, structural feasibility analysis, and detailed bill of quantities (BOQ).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-[#A9855B] hover:bg-white text-black font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-2 shadow-xl"
            >
              <span>Schedule Site Consultation</span>
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
