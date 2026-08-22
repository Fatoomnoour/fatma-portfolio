import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import FeaturedProject from './components/FeaturedProject';
import About from './components/About';
import DataFocus from './components/DataFocus';
import PipelineConsole from './components/PipelineConsole';
import Projects from './components/Projects';
import Journey from './components/Journey';
import BeyondEngineering from './components/BeyondEngineering';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen theme-bg theme-text overflow-x-hidden">
        <Navbar />
        <Hero />
        <StatsStrip />
        <FeaturedProject />
        <PipelineConsole />
        <Projects />
        <DataFocus />
        <About />
        <Journey />
        <BeyondEngineering />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
