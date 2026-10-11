import Navbar from "./components/Navbar";
import {
  AboutSection,
  ExperienceSection,
  FooterSection,
  HeroSection,
  SkillsSection,
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
        <FooterSection />
      </div>
    </div>
  );
}
