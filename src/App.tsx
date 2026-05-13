import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DataFocus from './components/DataFocus';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen theme-bg theme-text overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <DataFocus />
        <Projects />
        <Journey />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
