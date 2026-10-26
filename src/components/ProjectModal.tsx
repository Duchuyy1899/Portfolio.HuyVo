import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: 'vi' | 'en';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentGalleryItem = project.gallery[activeImageIndex] || {
    src: project.coverImage,
    caption: { vi: project.title, en: project.title }
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-neutral-950/90 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-5xl rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl z-10 my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
              {project.categoryLabel[lang]}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {project.period} · {project.clientOrOrg}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Main Title & Subtitle */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-400">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Lightbox / Media Viewer */}
          <div className="space-y-4 mb-8">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center group">
              <img
                src={currentGalleryItem.src}
                alt={currentGalleryItem.caption[lang]}
                className="w-full h-full object-contain bg-black/40"
              />

              {/* Navigation Arrows if multiple photos */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white backdrop-blur-sm transition-all border border-neutral-700 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white backdrop-blur-sm transition-all border border-neutral-700 cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image caption badge */}
              <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-neutral-950/85 backdrop-blur-md border border-neutral-800 text-xs text-neutral-200 flex items-center justify-between">
                <span>{currentGalleryItem.caption[lang]}</span>
                <span className="font-mono text-neutral-400 shrink-0">
                  {activeImageIndex + 1} / {project.gallery.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            {project.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-rose-500 scale-105' : 'border-neutral-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Overview & Highlights (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-2">
                  {lang === 'vi' ? 'Tổng quan dự án' : 'Project Overview'}
                </h4>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {project.overview[lang]}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  {lang === 'vi' ? 'Điểm nổi bật & Kỹ thuật triển khai:' : 'Key Highlights & Implementation:'}
                </h4>
                <ul className="space-y-2.5">
                  {project.highlights[lang].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Meta Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Tech Stack */}
              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-rose-400" />
                  <span>{lang === 'vi' ? 'Công nghệ sử dụng' : 'Technologies'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links (GitHub, etc.) */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>{lang === 'vi' ? 'Xem Source Code trên GitHub' : 'View Source on GitHub'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
