import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Globe, ArrowUpRight, Sun, Moon, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  lang: 'vi' | 'en';
  setLang: (lang: 'vi' | 'en') => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenCV?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, toggleTheme, onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: { vi: 'Trang chủ', en: 'Home' } },
    { id: 'about', label: { vi: 'Giới thiệu', en: 'About' } },
    { id: 'skills', label: { vi: 'Kỹ năng', en: 'Skills' } },
    { id: 'experience', label: { vi: 'Kinh nghiệm', en: 'Experience' } },
    { id: 'projects', label: { vi: 'Dự án', en: 'Projects' } },
    { id: 'contact', label: { vi: 'Liên hệ', en: 'Contact' } },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Zone 1 (Brand) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary Action + Extras) */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none"
          >
            <span className="w-8 h-8 rounded-lg bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-400 font-mono text-sm group-hover:scale-105 transition-transform">
              HV
            </span>
            <span>
              Huy Vo<span className="text-rose-500">.</span>
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'hover:text-white text-neutral-400'
                  }`}
                >
                  {link.label[lang]}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action + Language Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium rounded-md border border-neutral-800 dark:border-neutral-800 bg-neutral-900/60 dark:bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title={lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
            >
              <Globe className="w-3.5 h-3.5 text-rose-400" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Theme Toggle (Light / Dark mode) */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-md border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title={theme === 'dark' ? (lang === 'vi' ? 'Chuyển sang Giao diện Sáng' : 'Switch to Light Mode') : (lang === 'vi' ? 'Chuyển sang Giao diện Tối' : 'Switch to Dark Mode')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
              )}
            </button>

            {/* CV Online Link */}
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-700/80 hover:border-rose-500 hover:text-white rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
              title={lang === 'vi' ? 'Xem CV Online (CVDesignR)' : 'View Online CV'}
            >
              <FileText className="w-3.5 h-3.5 text-rose-400" />
              <span>CV</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>

            {/* Download CV PDF Button */}
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              download="Vo_Duc_Huy_CV.pdf"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-300 bg-rose-950/40 border border-rose-800/80 hover:bg-rose-900/60 hover:text-white rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
              title={lang === 'vi' ? 'Tải CV bản PDF' : 'Download CV as PDF'}
            >
              <Download className="w-3.5 h-3.5 text-rose-400" />
              <span>{lang === 'vi' ? 'Tải PDF' : 'Download PDF'}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white rounded-lg border border-neutral-800 bg-neutral-900/80 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-3 pb-6 bg-neutral-950/95 border-b border-neutral-800 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-rose-500/10 text-rose-400 font-semibold'
                    : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                {link.label[lang]}
              </button>
            ))}
            <div className="pt-3 border-t border-neutral-800 grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700 rounded-lg hover:border-rose-500 hover:text-white transition-all text-center"
              >
                <FileText className="w-4 h-4 text-rose-400" />
                <span>Xem CV</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
              <a
                href={PERSONAL_INFO.cvPdfUrl}
                download="Vo_Duc_Huy_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-rose-900/60 border border-rose-700/80 rounded-lg hover:bg-rose-800 transition-all text-center"
              >
                <Download className="w-4 h-4 text-rose-300" />
                <span>Tải PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
