import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import StackedTransition from "@/DadStudio/About/StackedTransition";
import CTA from "@/DadStudio/Home/CTA";

export const metadata: Metadata = {
  title: "About Us | DADSTUDIOARCH",
  description:
    "Discover DADSTUDIOARCH's design philosophy, multidisciplinary team, and commitment to integrated architecture, construction, interiors, and UPVC fenestration.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-[#A9855B] selection:text-white">
      <Navbar />
      <StackedTransition />
      <CTA />
      <Footer />
    </div>
  );
}
