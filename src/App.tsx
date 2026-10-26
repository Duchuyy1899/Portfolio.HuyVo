/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isCVOpen, setIsCVOpen] = useState(false);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-rose-500/25 selection:text-rose-200 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#090a0f] text-neutral-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Background subtle noise and pattern grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar
          lang={lang}
          setLang={setLang}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main className="flex-1">
          <Hero
            lang={lang}
          />

          <About
            lang={lang}
          />

          <SkillsSection
            lang={lang}
          />

          <ExperienceTimeline
            lang={lang}
          />

          <ProjectShowcase
            lang={lang}
          />

          <ContactSection
            lang={lang}
          />
        </main>

        <Footer
          lang={lang}
        />
      </div>

      {/* Interactive Printable CV Modal */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        lang={lang}
      />
    </div>
  );
}
