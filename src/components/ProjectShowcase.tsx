import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Eye, ArrowUpRight, Github, Sparkles } from 'lucide-react';

interface ProjectShowcaseProps {
  lang: 'vi' | 'en';
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'ecommerce' | 'design' | 'marketing'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="py-20 border-t border-neutral-800/80 bg-neutral-950/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2">
              04 · {lang === 'vi' ? 'Dự án chọn lọc' : 'Selected Works'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'vi' ? 'Dự án thực tế tiêu biểu' : 'Featured Projects'}
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end max-w-md">
            {/* Tapered line divider above section description */}
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-rose-500/80 to-transparent mb-2.5" />
            <p className="text-sm text-neutral-400">
              {lang === 'vi'
                ? 'Tổng hợp các sản phẩm ứng dụng web full-stack, thương mại điện tử, bao bì thương mại và bộ nhận diện thương hiệu thực chiến.'
                : 'A curated showcase of full-stack web applications, e-commerce stores, retail packaging, and brand identities.'}
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-xl border border-neutral-800 mb-8 max-w-fit overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                filter === 'all' ? 'bg-rose-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'vi' ? 'Tất cả (' + PROJECTS_DATA.length + ')' : 'All Works (' + PROJECTS_DATA.length + ')'}
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                filter === 'web' ? 'bg-rose-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'vi' ? 'Web App / Laravel' : 'Web & Laravel'}
            </button>
            <button
              onClick={() => setFilter('ecommerce')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                filter === 'ecommerce' ? 'bg-rose-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'vi' ? 'E-Commerce / WordPress' : 'E-Commerce'}
            </button>
            <button
              onClick={() => setFilter('marketing')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                filter === 'marketing' ? 'bg-rose-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'vi' ? 'Thương hiệu / Bao bì' : 'Brand & Packaging'}
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                filter === 'design' ? 'bg-rose-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'vi' ? 'F&B & Menu Design' : 'F&B & Print'}
            </button>
          </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            // Give first project a wide presence if it's the primary showcase
            const isWide = idx === 0 && filteredProjects.length > 2;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-900/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl hover:shadow-rose-950/20 backdrop-blur-sm ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Media Container */}
                <div className={`relative overflow-hidden bg-neutral-950 ${isWide ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[16/10]'}`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Scrim overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top-right quick inspect button */}
                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-neutral-900/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity border border-neutral-700">
                    <Eye className="w-4 h-4 text-rose-400" />
                  </div>

                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-300 bg-neutral-950/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-800">
                      {project.gallery.length} {lang === 'vi' ? 'hình ảnh' : 'shots'}
                    </span>
                    {project.githubUrl && (
                      <span className="text-xs font-mono text-neutral-300 bg-neutral-950/70 backdrop-blur-md px-2 py-1 rounded-md border border-neutral-800 flex items-center gap-1">
                        <Github className="w-3 h-3 text-rose-400" />
                        <span>Source</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                      <span className="text-rose-400">{project.categoryLabel[lang]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.period}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 mb-4">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    {/* Clean unboxed tags */}
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono truncate mr-2">
                      <span>{project.tags[0]}</span>
                      {project.tags[1] && <span>· {project.tags[1]}</span>}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                      <span>{lang === 'vi' ? 'Xem chi tiết' : 'Details'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
