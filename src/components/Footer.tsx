import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  lang: 'vi' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-white tracking-wide">
              Huy Vo<span className="text-rose-500">.</span>
            </span>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span>
              © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. {lang === 'vi' ? 'Bảo lưu mọi quyền.' : 'All rights reserved.'}
            </span>
          </div>

          {/* Socials & Top Bar */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Duchuyy1899?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/huy-v%C3%B5-undefined-236a2526a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/voduchuy1899/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-400 transition-colors"
              title={lang === 'vi' ? 'Xem CV Online trên CVDesignR' : 'View Online CV'}
            >
              CV Online
            </a>
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              download="Vo_Duc_Huy_CV.pdf"
              className="hover:text-rose-400 transition-colors text-rose-300/90"
              title={lang === 'vi' ? 'Tải CV (Bản PDF)' : 'Download CV (PDF)'}
            >
              {lang === 'vi' ? 'Tải PDF' : 'Download PDF'}
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
