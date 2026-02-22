import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import Hero from "@/components/home/hero";
import MedicalWeight from "@/components/home/MedicalWeight";
import NewPatientSpecial from "@/components/home/NewPatientSpecial";
import OurTeam from "@/components/home/OurTeam";
import PainRelief from "@/components/home/PainRelief";
import Testimonials from "@/components/home/Testimonials";
import Transformation from "@/components/home/Transformation";
import WhyChoose from "@/components/home/WhyChoose";
import Faq from "@/components/shared/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <NewPatientSpecial />
      <About />
      <MedicalWeight />
      <Testimonials />
      <OurTeam />
      <Transformation />
      <PainRelief />
      <Faq/>
      {/* <Blog /> */}
    </>
  );
}
