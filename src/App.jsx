import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Education from "./components/Education";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Education />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
