import Navbar from "@/Components/Navbar";
import Hero from "@/DadStudio/Home/Hero";
import Aboutinfo from "@/DadStudio/Home/Aboutinfo";
import OurServices from "@/DadStudio/Home/OurServices";
import HorizontalTransition from "@/Animations/HorizontalTransition";
import FeaturedProjects from "@/DadStudio/Home/Featured Projects";
import WhyChooseDadStudioArch from "@/DadStudio/Home/Why Choose Us";
import Trust from "@/DadStudio/Home/Trust";
import Testimonials from "@/DadStudio/Home/Testimonials";
import CTA from "@/DadStudio/Home/CTA";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans overflow-x-hidden selection:bg-[#CBA052] selection:text-white">
      <Navbar />
      <Hero />
      <HorizontalTransition>
        <Aboutinfo />
        <OurServices />
      </HorizontalTransition>
      <FeaturedProjects />
      <WhyChooseDadStudioArch />
      <Trust />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
