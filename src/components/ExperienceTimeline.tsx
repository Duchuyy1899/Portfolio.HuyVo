import React, { useState } from 'react';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building, UserCheck, Phone, ShieldCheck } from 'lucide-react';

interface ExperienceProps {
  lang: 'vi' | 'en';
}

export const ExperienceTimeline: React.FC<ExperienceProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'fulltime' | 'contract' | 'freelance'>('all');

  const filteredExperiences = EXPERIENCES_DATA.filter((exp) => {
    if (filter === 'all') return true;
    return exp.type === filter;
  });

  return (
    <section id="experience" className="py-20 border-t border-neutral-800/80 bg-neutral-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2">
              03 · {lang === 'vi' ? 'Quá trình công tác' : 'Career History'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'vi' ? 'Kinh nghiệm làm việc' : 'Work Experience'}
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end max-w-md">
            {/* Tapered line divider above section description */}
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-rose-500/80 to-transparent mb-2.5" />
            <p className="text-sm text-neutral-400">
              {lang === 'vi'
                ? 'Hành trình 6+ năm cống hiến thực tế từ các doanh nghiệp công nghệ, giáo dục, dịch vụ thương mại đến hỗ trợ khách hàng tại Mỹ.'
                : 'A 6+ year track record spanning tech firms, education, commercial creative services, and US client operations.'}
            </p>
          </div>
        </div>

        {/* Interactive Filter segmented control */}
        <div className="flex items-center gap-1 p-1 bg-neutral-900 rounded-xl border border-neutral-800 mb-8 max-w-fit overflow-x-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'all'
                ? 'bg-rose-600 text-white shadow-sm font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {lang === 'vi' ? 'Tất cả vị trí' : 'All Roles'}
          </button>
          <button
            onClick={() => setFilter('fulltime')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'fulltime'
                ? 'bg-rose-600 text-white shadow-sm font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {lang === 'vi' ? 'Toàn thời gian' : 'Full-time'}
          </button>
          <button
            onClick={() => setFilter('contract')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'contract'
                ? 'bg-rose-600 text-white shadow-sm font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {lang === 'vi' ? 'Hợp đồng / Remote' : 'Contract / QA'}
          </button>
          <button
            onClick={() => setFilter('freelance')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'freelance'
                ? 'bg-rose-600 text-white shadow-sm font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {lang === 'vi' ? 'Freelance' : 'Freelance'}
          </button>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {filteredExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-neutral-700 ${
                exp.isCurrent
                  ? 'border-rose-500/40 bg-neutral-900/80 shadow-xl shadow-rose-950/20'
                  : 'border-neutral-800 bg-neutral-900/60'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                    <span>{exp.period[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.location[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-neutral-300 font-medium">{exp.typeLabel[lang]}</span>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 ml-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {lang === 'vi' ? 'Đang công tác' : 'Current Position'}
                      </span>
                    )}
                  </div>

                  {/* LÀM TO TÊN CÔNG TY ĐÃ LÀM ĐỂ NỔI BẬT HƠN */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-1.5 hover:text-rose-400 transition-colors">
                    {exp.company}
                  </h3>

                  {/* Role Title & Rank */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-lg sm:text-xl font-bold text-rose-400">
                      {exp.role[lang]}
                    </span>
                    {exp.rank && (
                      <span className="text-xs font-mono text-amber-300 font-semibold bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-md">
                        {exp.rank[lang]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Index badge */}
                <span className="text-xs font-mono text-neutral-400 shrink-0">
                  REF / 0{index + 1}
                </span>
              </div>

              {/* Responsibilities list */}
              <div className="mt-4 pt-4 border-t border-neutral-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 font-semibold">
                  {lang === 'vi' ? 'Trách nhiệm & Nhiệm vụ trọng tâm:' : 'Key Responsibilities & Deliverables:'}
                </div>
                <ul className="space-y-2.5">
                  {exp.responsibilities[lang].map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills and tools in this role */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-neutral-400 mr-2 font-medium">
                  {lang === 'vi' ? 'Kỹ năng & Công cụ:' : 'Skills & Tools:'}
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs text-neutral-300 font-mono"
                  >
                    {skill}{sIdx < exp.skills.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>

              {/* Ô Người Tham Chiếu (Reference Person Card) */}
              {exp.reference && (
                <div className="mt-6 pt-5 border-t border-neutral-800/80">
                  <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-2 font-semibold">
                    <UserCheck className="w-4 h-4 text-rose-400" />
                    <span>{exp.reference.title[lang]}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500/20 to-indigo-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 font-mono font-bold text-sm shrink-0">
                        REF
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>{exp.reference.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            Verified
                          </span>
                        </div>
                        <div className="text-xs text-neutral-400 mt-0.5">
                          {exp.reference.role[lang]} · {exp.reference.company}
                        </div>
                        <div className="text-[11px] text-neutral-400 italic mt-0.5">
                          {exp.reference.relationship[lang]}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`tel:${exp.reference.phone.split(' ')[0]}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 text-xs font-mono font-semibold transition-colors cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5 text-rose-400" />
                        <span>{exp.reference.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
