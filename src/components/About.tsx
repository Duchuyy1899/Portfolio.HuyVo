import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  User, 
  Copy, 
  Check, 
  Award, 
  Trophy, 
  Camera, 
  Music, 
  Compass, 
  FileText,
  ExternalLink,
  Download 
} from 'lucide-react';

interface AboutProps {
  lang: 'vi' | 'en';
  onOpenCV?: () => void;
}

export const About: React.FC<AboutProps> = ({ lang, onOpenCV }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="about" className="py-20 border-t border-neutral-800/80 bg-neutral-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2">
              01 · {lang === 'vi' ? 'Tiểu sử & Hồ sơ' : 'Biography & Profile'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'vi' ? 'Về bản thân tôi' : 'About Me'}
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end max-w-md">
            {/* Tapered line divider above section description */}
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-rose-500/80 to-transparent mb-2.5" />
            <p className="text-sm text-neutral-400">
              {lang === 'vi'
                ? 'Tận tâm, ham học hỏi và luôn kiên trì theo đuổi sự hoàn thiện trong từng dòng mã, từng giải pháp vận hành và từng pixel thiết kế.'
                : 'Dedicated, highly inquisitive, and consistently striving for excellence in every line of code, operational workflow, and pixel.'}
            </p>
          </div>
        </div>

        {/* Bento Grid: 3 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Main Story & Professional Attitude (col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider mb-4">
                <User className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Hành trình & Tư duy' : 'Journey & Mindset'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {lang === 'vi' 
                  ? 'Sự giao thoa giữa Kỹ thuật Lập trình và Nghệ thuật Thị giác' 
                  : 'Bridging Software Logic with Visual Aesthetics'}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-4">
                {PERSONAL_INFO.bio[lang]}
              </p>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {PERSONAL_INFO.aboutPitch[lang]}
              </p>
            </div>

            {/* Quick action bar */}
            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{lang === 'vi' ? 'Đang tìm kiếm cơ hội bứt phá' : 'Actively seeking new opportunities'}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700/70 text-neutral-300 text-xs font-semibold cursor-default"
                  title={lang === 'vi' ? 'Bản CV (Sẽ cập nhật sau)' : 'CV (To be updated later)'}
                >
                  <FileText className="w-3.5 h-3.5 text-rose-400" />
                  <span>CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Contact & Personal Details (col-span-5) */}
          <div className="lg:col-span-5 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider mb-4">
                <Mail className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Thông tin liên lạc' : 'Direct Contact'}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                {lang === 'vi' ? 'Kết nối nhanh' : 'Quick Details'}
              </h3>

              <div className="space-y-4">
                {/* Full name */}
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-neutral-500">{lang === 'vi' ? 'Họ và tên' : 'Full Name'}</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.fullName}</div>
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-neutral-500">{lang === 'vi' ? 'Ngày sinh' : 'Date of Birth'}</div>
                    <div className="text-sm font-semibold text-neutral-200 font-mono">{PERSONAL_INFO.dob}</div>
                  </div>
                </div>

                {/* Email with copy */}
                <div className="flex items-start justify-between gap-2 p-2.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
                  <div className="flex items-center gap-3 truncate">
                    <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-xs text-neutral-500">{lang === 'vi' ? 'Email cá nhân' : 'Email'}</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-mono text-white hover:text-rose-400 truncate block">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title={lang === 'vi' ? 'Sao chép email' : 'Copy email'}
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone with copy */}
                <div className="flex items-start justify-between gap-2 p-2.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                    <div>
                      <div className="text-xs text-neutral-500">{lang === 'vi' ? 'Điện thoại / Zalo' : 'Phone'}</div>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-mono text-white hover:text-rose-400 block">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title={lang === 'vi' ? 'Sao chép số điện thoại' : 'Copy phone'}
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-neutral-500">{lang === 'vi' ? 'Địa chỉ hiện tại' : 'Location'}</div>
                    <div className="text-sm font-medium text-neutral-300">{PERSONAL_INFO.address[lang]}</div>
                  </div>
                </div>

                {/* CV Action Bar */}
                <div className="pt-3 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={PERSONAL_INFO.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-700/80 hover:border-rose-500 hover:text-white text-xs font-semibold text-neutral-200 transition-all group"
                  >
                    <FileText className="w-3.5 h-3.5 text-rose-400 group-hover:text-rose-300" />
                    <span>{lang === 'vi' ? 'Xem CV Online' : 'View CV'}</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-white" />
                  </a>
                  <a
                    href={PERSONAL_INFO.cvPdfUrl}
                    download="Vo_Duc_Huy_CV.pdf"
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-rose-950/40 border border-rose-800/80 hover:bg-rose-900/60 text-xs font-semibold text-rose-200 hover:text-white transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-rose-400" />
                    <span>{lang === 'vi' ? 'Tải CV (PDF)' : 'Download PDF'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Education & Certifications (col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Học vấn & Đào tạo' : 'Education & Qualifications'}</span>
            </div>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-rose-500/60">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-neutral-400">{PERSONAL_INFO.education.period} · {PERSONAL_INFO.education.location}</span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {PERSONAL_INFO.education.status[lang]}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-0.5">
                  {PERSONAL_INFO.education.degree[lang]}
                </h4>
                <div className="text-sm font-semibold text-rose-400 mb-2">
                  {PERSONAL_INFO.education.school[lang]}
                </div>
                <p className="text-xs sm:text-sm text-neutral-300">
                  {lang === 'vi'
                    ? 'Đã tốt nghiệp chuyên ngành Công nghệ Thông tin tại trường Đại học Công nghiệp TP.HCM (IUH), trang bị toàn diện kiến thức cấu trúc dữ liệu & giải thuật, lập trình web, hệ quản trị cơ sở dữ liệu và phân tích hệ thống.'
                    : 'Graduated in Information Technology from Industrial University of Ho Chi Minh City (IUH), equipped with comprehensive foundations in algorithms, web engineering, relational databases, and system analysis.'}
                </p>
              </div>

              {/* Specialization courses */}
              <div className="pt-4 border-t border-neutral-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-rose-400" />
                  <span>{lang === 'vi' ? 'Các khóa huấn luyện chuyên môn:' : 'Specialized Courses & Training:'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PERSONAL_INFO.education.courses.map((course, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800 text-xs text-neutral-300 flex items-start gap-2">
                      <span className="text-rose-500 font-mono font-bold mt-0.5">0{idx + 1}.</span>
                      <span>{course[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Interests & Lifestyle (col-span-5) */}
          <div className="lg:col-span-5 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider mb-4">
                <Compass className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Sở thích & Phong cách' : 'Passions & Lifestyle'}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {lang === 'vi' ? 'Nguồn cảm hứng thường ngày' : 'Daily Inspiration'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                {lang === 'vi'
                  ? 'Những niềm đam mê giúp cân bằng năng lượng, tái tạo sức sáng tạo và duy trì sự sắc bén trong công việc.'
                  : 'Interests that balance life energy, boost creative output, and maintain sharp focus.'}
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <Trophy className="w-5 h-5 text-amber-400 mb-2" />
                  <div className="text-sm font-semibold text-white">{lang === 'vi' ? 'Bóng đá' : 'Football'}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{lang === 'vi' ? 'Rèn luyện thể lực & tinh thần đồng đội' : 'Teamwork & stamina'}</div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <Camera className="w-5 h-5 text-indigo-400 mb-2" />
                  <div className="text-sm font-semibold text-white">{lang === 'vi' ? 'Nhiếp ảnh' : 'Photography'}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{lang === 'vi' ? 'Bắt trọn khoảnh khắc & góc nhìn' : 'Storytelling & light'}</div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <Music className="w-5 h-5 text-rose-400 mb-2" />
                  <div className="text-sm font-semibold text-white">{lang === 'vi' ? 'Guitar & Rap' : 'Guitar & Music'}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{lang === 'vi' ? 'Giai điệu và nhịp điệu cảm xúc' : 'Rhythm & creativity'}</div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <Compass className="w-5 h-5 text-emerald-400 mb-2" />
                  <div className="text-sm font-semibold text-white">{lang === 'vi' ? 'Du lịch' : 'Travel'}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{lang === 'vi' ? 'Khám phá văn hóa & vùng đất mới' : 'Discovery & perspective'}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
