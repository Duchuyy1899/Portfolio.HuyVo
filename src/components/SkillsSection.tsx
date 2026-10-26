import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Palette, SearchCheck, Megaphone, Terminal, Wrench, Sparkles, Server, CheckCircle2 } from 'lucide-react';

interface SkillsProps {
  lang: 'vi' | 'en';
}

export const SkillsSection: React.FC<SkillsProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('web-dev');

  const icons: Record<string, React.ReactNode> = {
    'web-dev': <Code className="w-4 h-4" />,
    'marketing-operations': <Server className="w-4 h-4" />,
    'design-video': <Palette className="w-4 h-4" />,
    'qa-testing': <SearchCheck className="w-4 h-4" />,
    'digital-marketing': <Megaphone className="w-4 h-4" />
  };

  const currentCategory = SKILL_CATEGORIES.find((c) => c.id === selectedCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-20 border-t border-neutral-800/80 bg-neutral-950/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2">
              02 · {lang === 'vi' ? 'Năng lực cốt lõi' : 'Core Capabilities'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'vi' ? 'Kỹ năng & Chuyên môn' : 'Skills & Tech Stack'}
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end max-w-md">
            {/* Tapered line divider above section description */}
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-rose-500/80 to-transparent mb-2.5" />
            <p className="text-sm text-neutral-400">
              {lang === 'vi'
                ? 'Hệ sinh thái kỹ năng đa lĩnh vực, kết hợp giữa lập trình thực chiến, vận hành khách hàng Mỹ, kiểm thử và thiết kế truyền thông.'
                : 'A multi-disciplinary toolkit uniting pragmatic web development, US client operations, QA rigor, and brand communication design.'}
            </p>
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-2 p-1.5 bg-neutral-900/80 rounded-2xl border border-neutral-800/80 max-w-4xl mb-3 overflow-x-auto">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-950/40'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                <span>{icons[cat.id] || <Code className="w-4 h-4" />}</span>
                <span>{cat.title[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Small guidance note requested by user */}
        <div className="text-xs font-mono text-neutral-400 dark:text-neutral-400 mb-8 flex items-center gap-1.5 pl-1">
          <span className="text-rose-400">💡</span>
          <span>
            {lang === 'vi'
              ? 'Hãy chọn từng chuyên mục ở trên để xem chi tiết bộ kỹ năng và phần mềm theo từng ngành nghề.'
              : 'Please select each category above to view specific skill sets and tools by domain.'}
          </span>
        </div>

        {/* Selected Skill Category Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Skill Showcase Without % (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2.5 text-white font-bold text-lg">
                <span className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  {icons[currentCategory.id] || <Code className="w-4 h-4" />}
                </span>
                <span>{currentCategory.title[lang]}</span>
              </div>
              <div className="text-xs font-mono text-neutral-400">
                {currentCategory.skills.length} {lang === 'vi' ? 'nội dung chuyên môn' : 'competencies'}
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-8">
              {currentCategory.description[lang]}
            </p>

            {/* Skill list as clean professional cards (NO PERCENTAGE BARS) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentCategory.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/90 hover:border-neutral-700 transition-colors flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-neutral-200 leading-snug">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tools & Technologies Stack + Practical Notes (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tools Box */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider mb-4">
                <Wrench className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Công cụ & Phần mềm sử dụng' : 'Software & Ecosystem'}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">
                {lang === 'vi' ? 'Bộ công cụ thành thạo' : 'Proficient Toolkit'}
              </h3>
              
              {/* Clean tool tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentCategory.tools.map((tool, i) => (
                  <div
                    key={i}
                    className="px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-950/80 text-xs font-mono text-neutral-200 hover:border-neutral-700 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Quality Commitment Box */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Cam kết chất lượng công việc' : 'Work Ethic & Standards'}</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {lang === 'vi' ? 'Tư duy hành động thực chiến' : 'Practical Action Mindset'}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {lang === 'vi'
                  ? 'Chủ động tìm kiếm giải pháp tối ưu cho khách hàng, tôn trọng kỷ luật tiến độ, giải quyết nhanh các vấn đề phát sinh và luôn sẵn sàng hỗ trợ đồng đội.'
                  : 'Proactive in root cause analysis, disciplined with deadlines, rapid in troubleshooting issues, and dedicated to empowering team members.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
