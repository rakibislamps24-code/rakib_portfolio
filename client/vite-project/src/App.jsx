import "./index.css";
import { useTheme } from "./context/ThemeContext";
import Navigation from "./components/Navigation";
import CustomCursor from "./components/CustomCursor";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import DSAProfiles from "./components/DSAProfiles";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PasskeyModal from "./components/PasskeyModal";

export default function App() {
  const { isDark } = useTheme();

  return (
    <div className={`transition-colors duration-500 min-h-screen ${
      isDark 
        ? 'bg-gray-950 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <CustomCursor />
      <Background />
      <Navigation />
      <PasskeyModal />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>

        <section id="dsa">
          <DSAProfiles />
        </section>

        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
