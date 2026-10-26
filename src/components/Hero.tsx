import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, FileText, Send, Github, Linkedin, ExternalLink, Sparkles, CheckCircle2, Download } from 'lucide-react';

interface HeroProps {
  lang: 'vi' | 'en';
  onOpenCV?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCV }) => {
  const rolesToType = [
    "Marketing Support Executive",
    "Developer",
    "Designer",
    "Digital Marketer",
    "QA Engineer"
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const i = loopNum % rolesToType.length;
    const fullText = rolesToType[i];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100);

        if (text === fullText) {
          // Pause when word is completely typed
          setTypingSpeed(1600);
          setIsDeleting(true);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(60);

        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(350);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Authentic Original Banner Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none -z-20 opacity-35 dark:opacity-30"
        style={{
          backgroundImage: `url('/images/banner.jpg')`,
          backgroundAttachment: 'fixed'
        }}
      />
      {/* Smooth gradient scrim ensuring 100% text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/85 via-neutral-950/80 to-[#090a0f] pointer-events-none -z-10" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero: Left Column Typography — Right Column Visual Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Typographic hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Editorial kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-400 mb-4 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>{lang === 'vi' ? 'Hồ sơ Năng lực & Sáng tạo' : 'Creative Portfolio & CV'}</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400">{PERSONAL_INFO.dob}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4 text-balance">
              {lang === 'vi' ? 'Xin chào, tôi là ' : "Hello, I'm "}
              <span className="text-gradient-accent">{PERSONAL_INFO.fullName}</span>
            </h1>

            {/* Typewriter text animation - Restored from original portfolio */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-200 flex items-center flex-wrap gap-x-2">
                <span className="text-neutral-400 font-normal">
                  {lang === 'vi' ? "Và tôi là một " : "And I'm a "}
                </span>
                <span className="text-rose-500 font-bold font-mono tracking-wide min-h-[1.2em] inline-flex items-center">
                  <span>{text}</span>
                  <span className="inline-block w-[2.5px] h-[1.05em] bg-rose-500 ml-1.5 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Pitch / Bio paragraph */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-6">
              {PERSONAL_INFO.bio[lang]}
            </p>

            {/* Life motto banner */}
            <div className="p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/50 backdrop-blur-sm max-w-2xl mb-8">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'vi' ? 'Châm ngôn sống & Tinh thần làm việc' : 'Life Motto & Mindset'}</span>
              </div>
              <p className="text-sm font-medium text-neutral-200 italic">
                "{PERSONAL_INFO.motto[lang]}"
              </p>
            </div>

            {/* CTA action buttons with authentic hover transition */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Primary button: solid crimson, hover turns transparent with crimson text */}
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-xl bg-rose-600 border-2 border-rose-600 text-white hover:bg-transparent hover:text-rose-500 font-semibold text-sm shadow-lg shadow-rose-950/40 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>{lang === 'vi' ? 'Khám phá Dự án' : 'Explore Projects'}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* CV Online link (CVDesignR) */}
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl border-2 border-neutral-700 hover:border-rose-500 bg-neutral-900/60 hover:bg-neutral-900 text-neutral-200 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm group"
                title={lang === 'vi' ? 'Xem CV Online trên CVDesignR' : 'View Online CV'}
              >
                <FileText className="w-4 h-4 text-rose-400 group-hover:text-rose-300" />
                <span>{lang === 'vi' ? 'Xem CV' : 'View CV'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
              </a>

              {/* Download CV PDF button */}
              <a
                href={PERSONAL_INFO.cvPdfUrl}
                download="Vo_Duc_Huy_CV.pdf"
                className="px-5 py-3 rounded-xl border-2 border-rose-800/80 bg-rose-950/40 hover:bg-rose-900/60 text-rose-200 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
                title={lang === 'vi' ? 'Tải CV bản PDF' : 'Download CV PDF'}
              >
                <Download className="w-4 h-4 text-rose-400" />
                <span>{lang === 'vi' ? 'Tải CV (PDF)' : 'Download PDF'}</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-3 rounded-xl border-2 border-transparent hover:border-rose-600 text-neutral-300 hover:text-rose-400 hover:bg-transparent font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Liên hệ' : 'Get in Touch'}</span>
              </button>
            </div>

            {/* Social connection quick links with crimson hover */}
            <div className="flex items-center gap-4 text-neutral-400 text-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                {lang === 'vi' ? 'Kết nối:' : 'Connect:'}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Duchuyy1899?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-900 border border-rose-600/40 text-neutral-300 hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all duration-300"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/huy-v%C3%B5-undefined-236a2526a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-900 border border-rose-600/40 text-neutral-300 hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/voduchuy1899/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-900 border border-rose-600/40 text-neutral-300 hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all duration-300 font-bold text-xs"
                  title="Facebook"
                >
                  FB
                </a>
                <a
                  href="https://t.me/huyvo1899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-900 border border-rose-600/40 text-neutral-300 hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all duration-300 font-bold text-xs"
                  title="Telegram"
                >
                  TG
                </a>
                <a
                  href={PERSONAL_INFO.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-900 border border-rose-600/40 text-rose-400 hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all duration-300 font-bold text-xs flex items-center gap-1"
                  title="CVDesignR Online Resume"
                >
                  <span>CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Visual Framing of Authentic Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative accent card backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-rose-600/30 via-indigo-500/20 to-neutral-800/40 blur-lg opacity-70" />

              {/* Main portrait container */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900 shadow-2xl">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-950">
                  <img
                    src="/images/profile-1.jpeg"
                    alt="Võ Đức Huy Portrait"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                  {/* Overlay text in photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-base font-bold text-white tracking-wide">
                        Võ Đức Huy
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{lang === 'vi' ? 'Sẵn sàng hợp tác' : 'Open for Work'}</span>
                      </div>
                    </div>
                    <div className="text-xs text-neutral-400">
                      IUH Information Technology · Thu Duc City, HCMC
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating capability badges */}
              <div className="hidden sm:flex absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs font-medium text-neutral-200 shadow-xl backdrop-blur-md items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Web Dev & UI/UX</span>
              </div>
              <div className="hidden sm:flex absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs font-medium text-neutral-200 shadow-xl backdrop-blur-md items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>QA & Multimedia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI strip below the hero split (complying strictly with 2-column split rules) */}
        <div className="mt-16 pt-10 border-t border-neutral-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {PERSONAL_INFO.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight text-gradient">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 mt-1">
                  {stat.label[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
