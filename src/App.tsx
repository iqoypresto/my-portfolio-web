import Navbar from "./components/Navbar";
import {
  AboutSection,
  ExperienceSection,
  FooterSection,
  HeroSection,
  SkillsSection,
  TestimonialSection,
  WorkSection,
} from "./features/HomePage/components";

export default function App() {
  return (
    <div id="home" className="text-black">
      <Navbar />
      <HeroSection />
      <div className=" bg-gray-50">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <WorkSection />
        <TestimonialSection />
        <FooterSection />
      </div>
    </div>
  );
}
