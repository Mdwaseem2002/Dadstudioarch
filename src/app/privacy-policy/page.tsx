import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import PrivacyPolicy from "@/DadStudio/Privacy-Terms/Privacy Policy";

export const metadata: Metadata = {
  title: "Privacy Policy | DADSTUDIOARCH",
  description: "Privacy policy and data governance practices at DADSTUDIOARCH.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-[#CBA052] selection:text-white">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
