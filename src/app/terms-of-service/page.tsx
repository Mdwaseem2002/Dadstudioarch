import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import TermsOfService from "@/DadStudio/Privacy-Terms/Terms of Service";

export const metadata: Metadata = {
  title: "Terms of Service | DADSTUDIOARCH",
  description: "Terms and conditions of engagement with DADSTUDIOARCH.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-[#CBA052] selection:text-white">
      <Navbar />
      <TermsOfService />
      <Footer />
    </div>
  );
}
