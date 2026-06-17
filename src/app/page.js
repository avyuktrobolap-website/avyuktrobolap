import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <ExpertiseSection></ExpertiseSection>
        <EducationSection></EducationSection>
        <TestimonialsSection></TestimonialsSection>
        <Footer></Footer>
      </div>

      <WhatsAppButton />
    </>
  );
}
