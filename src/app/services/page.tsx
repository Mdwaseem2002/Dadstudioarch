import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import CinematicSequence from "@/DadStudio/Services/CinematicSequence";
import WhoWeDo from "@/DadStudio/Services/Who We Do";
import CTA from "@/DadStudio/Home/CTA";

export const metadata: Metadata = {
  title: "Our Services | DADSTUDIOARCH",
  description:
    "Explore DADSTUDIOARCH's integrated capabilities: Architecture & Planning, Construction & Build, Interior Design, Exterior & Facade Design, and UPVC Windows & Doors.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-[#A9855B] selection:text-white">
      <Navbar />
      
      <div className="font-sans overflow-hidden">
        <CinematicSequence />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-32 py-10 lg:py-32">
          <WhoWeDo />
        </div>
        
        <CTA />
      </div>

      <Footer />
    </div>
  );
}
