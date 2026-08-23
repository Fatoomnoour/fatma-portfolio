import { useEffect, useState } from 'react';
import { Database, Download, ExternalLink, Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const resumeHref = `${import.meta.env.BASE_URL}Fatma_Nour_Data_Engineer_Resume.pdf`;

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#featured', label: 'Featured Project' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const externalLinks = [
  { href: 'https://github.com/Fatoomnoour', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/fatma-nour-ai-trainer', label: 'LinkedIn' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
      for (let index = navLinks.length - 1; index >= 0; index -= 1) {
        const id = navLinks[index].href.slice(1);
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-surface' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 md:min-h-20 gap-4">
          <a href="#home" className="flex items-center gap-3 shrink-0 rounded-lg" aria-label="Fatma Nour home" onClick={closeMenu}>
            <span className="w-9 h-9 rounded-lg bg-primary-400/10 border border-primary-300/30 flex items-center justify-center" aria-hidden="true">
              <Database className="w-4 h-4 text-primary-600 dark:text-primary-300" />
            </span>
            <span className="font-semibold tracking-tight">Fatma Nour</span>
          </a>

          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                className={`px-3 py-2 text-xs font-medium transition-colors rounded-md ${activeSection === link.href.slice(1) ? 'text-primary-700 dark:text-primary-300' : 'theme-text-secondary hover:text-primary-700 dark:hover:text-primary-300'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3 shrink-0">
            {externalLinks.map(({ href, label }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium theme-text-secondary hover:text-primary-700 dark:hover:text-primary-300 transition-colors rounded-md">
                {label} <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            ))}
            <a href={resumeHref} download className="button-secondary px-3 py-2 text-xs">
              <Download className="w-3.5 h-3.5" aria-hidden="true" /> Resume
            </a>
            <button type="button" onClick={toggleTheme} className="w-9 h-9 rounded-lg theme-text-secondary hover:text-primary-700 dark:hover:text-primary-300 transition-colors" title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              {theme === 'dark' ? <Sun className="w-4 h-4 mx-auto" aria-hidden="true" /> : <Moon className="w-4 h-4 mx-auto" aria-hidden="true" />}
            </button>
            <a href="#contact" className="button-primary px-4 py-2 text-xs">Let&apos;s connect</a>
          </div>

          <div className="flex xl:hidden items-center gap-2">
            <a href={resumeHref} download className="hidden sm:inline-flex button-secondary px-3 py-2 text-xs" aria-label="Download resume">
              <Download className="w-3.5 h-3.5" aria-hidden="true" /> Resume
            </a>
            <button type="button" onClick={toggleTheme} className="w-9 h-9 rounded-lg theme-text-secondary hover:text-primary-700 dark:hover:text-primary-300" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              {theme === 'dark' ? <Sun className="w-4 h-4 mx-auto" aria-hidden="true" /> : <Moon className="w-4 h-4 mx-auto" aria-hidden="true" />}
            </button>
            <button type="button" onClick={() => setIsOpen((open) => !open)} className="w-9 h-9 rounded-lg theme-text-secondary hover:text-primary-700 dark:hover:text-primary-300" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-navigation">
              {isOpen ? <X className="w-5 h-5 mx-auto" aria-hidden="true" /> : <Menu className="w-5 h-5 mx-auto" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div id="mobile-navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="xl:hidden nav-surface border-t theme-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu} aria-current={activeSection === link.href.slice(1) ? 'page' : undefined} className={`block px-3 py-3 text-sm font-medium rounded-md transition-colors ${activeSection === link.href.slice(1) ? 'text-primary-700 dark:text-primary-300' : 'theme-text-secondary'}`}>
                  {link.label}
                </a>
              ))}
              <a href={resumeHref} download onClick={closeMenu} className="flex items-center gap-2 px-3 py-3 text-sm font-medium theme-text-secondary rounded-md">
                <Download className="w-4 h-4" aria-hidden="true" /> Download Resume
              </a>
              <div className="flex gap-4 px-3 pt-3 mt-2 border-t theme-divider">
                {externalLinks.map(({ href, label }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm theme-text-secondary hover:text-primary-700 dark:hover:text-primary-300 rounded-md">
                    {label} <ExternalLink className="w-4 h-4" aria-hidden="true" />
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
