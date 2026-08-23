import { ArrowUpRight, Database, MessageCircle } from 'lucide-react';

const whatsappUrl = 'https://wa.me/201097430973?text=Hello%20Fatma%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.';
const links = [
  { href: '#about', label: 'About' }, { href: '#projects', label: 'Projects' }, { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Experience' }, { href: '#education', label: 'Education' }, { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t theme-border" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div><a href="#home" className="inline-flex items-center gap-3 rounded-md" aria-label="Back to Fatma Nour home"><span className="w-9 h-9 rounded-lg bg-primary-500/10 border theme-border flex items-center justify-center"><Database className="w-4 h-4 text-primary-700 dark:text-primary-300" aria-hidden="true" /></span><span className="font-semibold">Fatma Nour</span></a><p className="theme-text-secondary text-sm mt-3">Junior Data Engineer · Backend & AI Data</p></div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">{links.map((link) => <a key={link.href} href={link.href} className="text-sm theme-text-secondary hover:text-primary-700 dark:hover:text-primary-300 transition-colors rounded-md">{link.label}</a>)}</nav>
          <div className="flex items-center gap-3"><a href="https://www.linkedin.com/in/fatma-nour-ai-trainer" target="_blank" rel="noopener noreferrer" aria-label="in — Fatma Nour on LinkedIn" className="social-link"><span className="text-sm font-bold" aria-hidden="true">in</span></a><a href="https://github.com/Fatoomnoour" target="_blank" rel="noopener noreferrer" aria-label="GH — Fatma Nour on GitHub" className="social-link"><span className="text-xs font-bold" aria-hidden="true">GH</span></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contact Fatma Nour on WhatsApp" className="social-link"><MessageCircle className="w-4 h-4" aria-hidden="true" /></a></div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t theme-divider mt-8 pt-5"><p className="text-xs theme-text-muted">© {new Date().getFullYear()} Fatma Nour. Built with React, TypeScript, and care.</p><a href="https://github.com/Fatoomnoour/fatma-portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs theme-text-muted hover:text-primary-700 dark:hover:text-primary-300 rounded-md">Source code <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" /></a></div>
      </div>
    </footer>
  );
}
