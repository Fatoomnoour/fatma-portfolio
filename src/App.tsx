import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import BeyondEngineering from './components/BeyondEngineering';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen theme-bg theme-text overflow-x-hidden">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <StatsStrip />
          <About />
          <FeaturedProject />
          <Projects />
          <Skills />
          <Journey />
          <BeyondEngineering />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
