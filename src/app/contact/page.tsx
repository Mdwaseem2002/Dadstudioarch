import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ContactSample from "@/DadStudio/Contact/Contact";
import Location from "@/DadStudio/Contact/Location";

export const metadata: Metadata = {
  title: "Contact Us | DADSTUDIOARCH",
  description:
    "Share your project parameters with DADSTUDIOARCH. Inquire about architecture & planning, turnkey construction, interior design, facade detailing, or UPVC fenestration solutions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0d0f0e] text-white font-sans overflow-x-hidden selection:bg-[#A9855B] selection:text-white">
      <Navbar />
      <ContactSample />
      <Location />
      <Footer />
    </div>
  );
}
