import { useState, useEffect } from 'react';
import { Menu, X, Database, Moon, Sun, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#featured', label: 'Featured Project' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const externalLinks = [
  { href: 'https://github.com/Fatoomnoour', label: 'GitHub', icon: ExternalLink },
  { href: 'https://www.linkedin.com/in/fatma-nour-ai-trainer', label: 'LinkedIn', icon: ExternalLink },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
      const sections = navLinks.map((link) => link.href.slice(1));
      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const element = document.getElementById(sections[index]);
        if (element && element.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[index]);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-surface' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 md:min-h-20 gap-6">
          <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="Fatma Nour home">
            <span className="w-9 h-9 rounded-lg bg-primary-400/10 border border-primary-300/30 flex items-center justify-center">
              <Database className="w-4 h-4 text-primary-300" />
            </span>
            <span className="font-semibold tracking-tight">Fatma Nour</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-xs font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary-300'
                    : 'theme-text-secondary hover:text-primary-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            {externalLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium theme-text-secondary hover:text-primary-300 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" /> {label}
              </a>
            ))}
            <span className="h-5 w-px bg-slate-700" aria-hidden="true" />
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg theme-text-secondary hover:text-primary-300 transition-colors"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 mx-auto" /> : <Moon className="w-4 h-4 mx-auto" />}
            </button>
            <a href="#contact" className="button-primary px-4 py-2 text-xs">Let&apos;s connect</a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg theme-text-secondary hover:text-primary-300"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 mx-auto" /> : <Moon className="w-4 h-4 mx-auto" />}
            </button>
            <button
              onClick={() => setIsOpen((open) => !open)}
              className="w-8 h-8 rounded-lg theme-text-secondary hover:text-primary-300"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 mx-auto" /> : <Menu className="w-5 h-5 mx-auto" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden nav-surface border-t theme-border"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1) ? 'text-primary-300' : 'theme-text-secondary'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-4 px-3 pt-3 mt-2 border-t theme-divider">
                {externalLinks.map(({ href, label, icon: Icon }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm theme-text-secondary hover:text-primary-300">
                    <Icon className="w-4 h-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
