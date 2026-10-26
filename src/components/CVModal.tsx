import React, { useEffect } from 'react';
import { PERSONAL_INFO, EXPERIENCES_DATA } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Globe, 
  UserCheck, 
  CheckCircle2,
  Share2,
  Languages,
  User,
  Github,
  Award,
  Download
} from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'vi' | 'en';
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        id="cv-modal-backdrop"
        onClick={onClose}
        className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm transition-opacity"
      />

      {/* Main Container */}
      <div 
        id="cv-modal-container"
        className="relative w-full max-w-[880px] bg-neutral-900 rounded-xl shadow-2xl z-10 my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-neutral-700/60"
      >
        
        {/* Top Control Bar (Hidden when printing via .no-print) */}
        <div className="no-print flex items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D6974C] animate-pulse" />
            <span className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              CVDesignR Template · Võ Đức Huy
            </span>
            <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              {lang === 'vi' ? 'Khớp mẫu gốc 100%' : 'Exact CVDesignR Match'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors cursor-pointer"
              title={lang === 'vi' ? 'In hoặc Lưu dưới dạng PDF' : 'Print or Save as PDF'}
            >
              <Printer className="w-3.5 h-3.5 text-[#D6974C]" />
              <span className="hidden sm:inline">{lang === 'vi' ? 'In / Lưu PDF' : 'Print / Save PDF'}</span>
            </button>

            {/* Direct Link to CVDesignR */}
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D6974C] hover:bg-[#c4873e] text-white text-xs font-semibold shadow-sm transition-colors"
              title="Mở hồ sơ gốc trên CVDesignR"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>CVDesignR</span>
            </a>

            {/* Direct Link to Download PDF */}
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              download="Vo_Duc_Huy_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
              title={lang === 'vi' ? 'Tải trực tiếp file PDF' : 'Download PDF file'}
            >
              <Download className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden sm:inline">{lang === 'vi' ? 'Tải PDF gốc' : 'PDF Download'}</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              title={lang === 'vi' ? 'Đóng' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Viewport Wrapper for screen */}
        <div className="max-h-[85vh] overflow-y-auto bg-neutral-900 p-0 sm:p-4 md:p-6 flex justify-center">
          
          {/* Authentic CVDesignR Document Sheet (A4 format) */}
          <div 
            id="cv-print-area" 
            className="w-full max-w-[800px] bg-white text-[#333333] shadow-xl relative min-h-[1050px] flex flex-col md:flex-row font-sans selection:bg-[#D6974C]/20"
            style={{ fontFamily: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
          >
            
            {/* LEFT COLUMN: CVDesignR Powder Blue Sidebar (#D8EBFD) */}
            <div className="w-full md:w-[275px] bg-[#D8EBFD] text-[#333333] p-5 sm:p-6 shrink-0 space-y-5 border-r border-[#cadbf0] print:border-r">
              
              {/* Profile Avatar */}
              <div className="pt-2 pb-1 text-center">
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
                  <img
                    src="/images/cvdesignr-avatar.jpg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/profile-1.jpeg';
                    }}
                    alt="Võ Đức Huy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Contact Information (Etat civil) */}
              <div className="space-y-2 text-[12px] text-[#222222] pt-1">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#55697d] shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-[#222222] truncate">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#55697d] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    {lang === 'vi' ? 'TP. Hồ Chí Minh, Việt Nam' : 'Ho Chi Minh City, Viet Nam'}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Calendar className="w-3.5 h-3.5 text-[#55697d] shrink-0" />
                  <span>
                    {lang === 'vi' ? 'Ngày sinh: 01/08/1999' : 'Date of birth: 01/08/1999'}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#55697d] shrink-0" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline text-[#222222] font-semibold">
                    05 64 99 64 72
                  </a>
                </div>
              </div>

              {/* Education (Formation) */}
              <div className="pt-2">
                <div className="text-[#60768A] font-bold text-[13px] uppercase tracking-wider pb-1 mb-2 border-b border-[#60768A]/30 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{lang === 'vi' ? 'Học vấn' : 'Education'}</span>
                </div>

                <div className="text-[12px] space-y-1">
                  <p className="font-bold text-[#111111] uppercase tracking-tight leading-snug">
                    {PERSONAL_INFO.education.school[lang]}
                  </p>
                  <p className="text-[#444444] font-medium leading-tight">
                    {lang === 'vi' ? 'Công nghệ thông tin' : 'Information Technology'} (2018 - 2021)
                  </p>
                  <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-[#444444] pt-0.5">
                    <li>{lang === 'vi' ? 'Địa chỉ: Q. Gò Vấp, TP. Hồ Chí Minh' : 'Go Vap Distric, Ho Chi Minh'}</li>
                    <li className="font-semibold text-emerald-800">
                      {lang === 'vi' ? 'Tình trạng: Tốt nghiệp trường Đại học Công Nghiệp TP HCM' : 'Status: Graduated'}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Languages (Ngoại ngữ) */}
              <div className="pt-1">
                <div className="text-[#60768A] font-bold text-[13px] uppercase tracking-wider pb-1 mb-2 border-b border-[#60768A]/30 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5" />
                  <span>{lang === 'vi' ? 'Ngoại ngữ' : 'Languages'}</span>
                </div>

                <div className="text-[12px] space-y-1.5 text-[#333333]">
                  <div>
                    <span className="font-semibold text-[#111111]">{lang === 'vi' ? 'Tiếng Anh:' : 'English:'} </span>
                    <span className="text-[#444444]">{lang === 'vi' ? 'Đọc hiểu tốt và giao tiếp cơ bản' : 'Good reading & writing, basic communication'}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#111111]">{lang === 'vi' ? 'Tiếng Việt:' : 'Vietnamese:'} </span>
                    <span className="text-[#444444]">{lang === 'vi' ? 'Bản ngữ' : 'Native'}</span>
                  </div>
                </div>
              </div>

              {/* Brief about Myself */}
              <div className="pt-1">
                <div className="text-[#60768A] font-bold text-[13px] uppercase tracking-wider pb-1 mb-2 border-b border-[#60768A]/30 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>{lang === 'vi' ? 'Giới thiệu bản thân' : 'Brief about Myself'}</span>
                </div>

                <p className="text-[11.5px] text-[#444444] leading-relaxed italic text-justify">
                  {lang === 'vi'
                    ? 'Là người điềm tĩnh, thích nghi nhanh với môi trường, không ngại khó khăn và luôn chủ động tìm kiếm giải pháp tối ưu cho mọi vấn đề.'
                    : 'Is a calm person, adapts quickly to the environment, is not afraid of difficulties, and knows how to find solutions to problems.'}
                </p>
              </div>

              {/* Online Links & Portfolio */}
              <div className="pt-1">
                <div className="text-[#60768A] font-bold text-[13px] uppercase tracking-wider pb-1 mb-2 border-b border-[#60768A]/30 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{lang === 'vi' ? 'Liên kết & Github' : 'Web & Github'}</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-[#333333]">
                  <div>
                    <span className="font-semibold block text-[#111111]">Portfolio:</span>
                    <a 
                      href="https://bit.ly/huyvo1899portfolio" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#1e40af] hover:underline break-all"
                    >
                      bit.ly/huyvo1899portfolio
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold block text-[#111111]">Github:</span>
                    <a 
                      href="https://github.com/Duchuyy1899" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#1e40af] hover:underline break-all"
                    >
                      github.com/Duchuyy1899
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: White Main Area with Signature CVDesignR #D6974C Triangle & Headings */}
            <div className="flex-1 bg-white p-5 sm:p-7 md:p-8 text-[#222222] relative overflow-hidden">
              
              {/* CVDesignR Signature Top-Right Corner Triangle in #D6974C */}
              <div 
                className="absolute top-0 right-0 w-0 h-0 pointer-events-none z-0"
                style={{
                  borderStyle: 'solid',
                  borderWidth: '0 160px 75px 0',
                  borderColor: 'transparent #D6974C transparent transparent',
                }}
              />

              {/* Header Profile Title */}
              <div className="relative z-10 pb-4 border-b border-gray-100">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight">
                  {PERSONAL_INFO.fullName.toUpperCase()}
                  <span className="text-xs font-normal text-gray-500 ml-2 font-sans">
                    ({PERSONAL_INFO.englishName})
                  </span>
                </h1>

                {/* Job Title sought in #D6974C */}
                <p className="text-[#D6974C] text-[15px] sm:text-base font-bold uppercase tracking-wide mt-1 leading-snug">
                  Marketing Support Executive · Web Developer · UI/UX Designer
                </p>

                {/* Motto */}
                <p className="text-[12px] text-gray-600 italic mt-1">
                  "{PERSONAL_INFO.motto[lang]}"
                </p>
              </div>

              {/* SECTION: SKILLS & TOOLING */}
              <div className="mt-4">
                <div className="text-[#D6974C] font-bold text-[13px] uppercase tracking-wider pb-1 mb-2.5 border-b border-[#D6974C] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>{lang === 'vi' ? 'Kỹ năng & Công cụ thực chiến' : 'Skills & Tooling'}</span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-normal lowercase tracking-normal">
                    {lang === 'vi' ? 'chọn lọc theo vị trí' : 'selected for role'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-[11.5px] text-[#333333]">
                  {/* Item 1 */}
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#111111]">
                      • Social Media & Management:
                    </span>
                    <p className="text-gray-600 pl-2 leading-relaxed">
                      {lang === 'vi'
                        ? 'Google Map, Apple Map, Yelp, Facebook, Instagram. Quản lý fanpage, lên content, đọc báo cáo số liệu doanh thu từ quảng cáo.'
                        : 'Google Map, Apple Map, Yelp, Facebook, Instagram. Fanpage care, content scheduling, revenue & ads reports.'}
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#111111]">
                      • Ads & SEO (Căn bản):
                    </span>
                    <p className="text-gray-600 pl-2 leading-relaxed">
                      {lang === 'vi'
                        ? 'Chỉ có kiến thức căn bản về Facebook ads, SEO về Google & Website chứ không phải chuyên sâu; Content Marketing.'
                        : 'Basic knowledge of Facebook ads, Google SEO & Website SEO (fundamental level); Content Marketing.'}
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#111111]">
                      • Website Development (Back-end & Front-end):
                    </span>
                    <p className="text-gray-600 pl-2 leading-relaxed">
                      WordPress, HTML5, CSS3, JavaScript, PHP, ReactJS, Python, SQL Server.
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#111111]">
                      • Quản lý Hạ tầng & Bitvise:
                    </span>
                    <p className="text-gray-600 pl-2 leading-relaxed">
                      {lang === 'vi'
                        ? 'Quản lý Domain, SSL, VPS, DNS; sử dụng Bitvise để quản lý SSL/TLS, Domain, Site,...'
                        : 'Manage Domain, SSL, VPS, DNS; utilizing Bitvise SSH for SSL/TLS, Domain and Site management.'}
                    </p>
                  </div>

                  {/* Item 5 */}
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#111111]">
                      • Thiết kế & Đồ họa (UI/UX & Video):
                    </span>
                    <p className="text-gray-600 pl-2 leading-relaxed">
                      Canva, Adobe Photoshop, Premiere, Illustrator, Figma. Thiết kế UI/UX, poster, banner, biên tập video, phối màu & hiệu ứng.
                    </p>
                  </div>

                  {/* Item 6 */}
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#111111]">
                      • Hardware, Merchant & Soft Skills:
                    </span>
                    <p className="text-gray-600 pl-2 leading-relaxed">
                      {lang === 'vi'
                        ? 'POS License, Quick Support, import data, giải đáp kỹ thuật, hỗ trợ training nhân sự mới, giao tiếp đa phòng ban.'
                        : 'POS License, Quick Support, import data, software tech support, training new staff, cross-team collaboration.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION: WORK EXPERIENCE */}
              <div className="mt-5">
                <div className="text-[#D6974C] font-bold text-[13px] uppercase tracking-wider pb-1 mb-3 border-b border-[#D6974C] flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{lang === 'vi' ? 'Kinh nghiệm làm việc thực tế' : 'Work experience'}</span>
                </div>

                {/* Timeline Container */}
                <div className="relative border-l-2 border-[#D6974C]/70 ml-2 pl-4 space-y-4">
                  
                  {/* EXP 1: MAC USA One (Current role) */}
                  <div className="relative">
                    {/* Bullet marker */}
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#D6974C] ring-4 ring-white" />
                    
                    {/* Header: Company & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Company Name made LARGE and prominent as requested */}
                        <h3 className="text-lg sm:text-xl font-black text-[#D6974C] tracking-tight">
                          MAC USA One
                        </h3>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold border border-amber-300">
                          Senior & Trainer
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300">
                          {lang === 'vi' ? 'Đang làm việc' : 'Current'}
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-500 font-mono">
                        {lang === 'vi' ? 'Từ 08/2022 - Nay' : 'Aug. 2022 - Present'}
                      </span>
                    </div>

                    <div className="text-[12.5px] font-bold text-[#111111] mt-0.5">
                      Marketing Support Executive
                    </div>
                    <div className="text-[11px] text-gray-500 mb-1.5">
                      {lang === 'vi' ? 'TP. Hồ Chí Minh · Toàn thời gian' : 'Ho Chi Minh City · Full-time'}
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-1 text-[11.5px] text-gray-700 list-disc pl-4 leading-relaxed">
                      <li>
                        {lang === 'vi' 
                          ? 'Hỗ trợ lĩnh vực quản lý cho khách hàng là các tiệm ở Mĩ tập trung vào ngành Nails và ngành Nhà Hàng, đưa plan và tư vấn chiến lược cho khách hàng và bên phía team, phối hợp giữa các team phần cứng, Merchant support teams, Design team, ...'
                          : 'Provide management support for US-based clients focused on Nail Salons & Restaurants; deliver plans and strategic consultation; coordinate with Hardware, Merchant support, and Design teams.'}
                      </li>
                      <li>
                        {lang === 'vi'
                          ? 'Hỗ trợ tiệm tạo và quản lý các trang Social Media (Google Map, Apple Map, Yelp, Facebook, Instagram) theo hướng chuyên nghiệp và tối ưu nhất.'
                          : 'Support stores in creating and optimizing Social Media channels (Google Maps, Apple Maps, Yelp, Facebook, Instagram) professionally.'}
                      </li>
                      <li>
                        {lang === 'vi'
                          ? 'Lấy API từ Authorize.net hoặc Paypal để đấu nối, tích hợp phương thức thanh toán cho website (Chức năng Deposit online, Bán Gift Card Online chuyên dùng cho các tiệm Nails).'
                          : 'Integrate APIs from Authorize.net or PayPal to connect payment methods for websites (Online Deposit feature, Online Gift Card sales specialized for Nail Salons).'}
                      </li>
                      <li>
                        {lang === 'vi'
                          ? 'Quản lý Domain, SSL, VPS, DNS; sử dụng Bitvise để quản lý SSL/TLS, Domain, Site,...'
                          : 'Manage Domain, SSL, VPS, DNS; utilize Bitvise SSH for SSL/TLS, Domain and Site management.'}
                      </li>
                      <li>
                        {lang === 'vi'
                          ? 'Hỗ trợ nhanh các vấn đề liên quan pháp lý và giải đáp kỹ thuật phần mềm, tư vấn chạy ads,...'
                          : 'Quick support on regulatory compliance and software troubleshooting; consultation on advertising campaigns.'}
                      </li>
                      <li>
                        {lang === 'vi'
                          ? 'Hỗ trợ training các nhân sự mới và xử lý Hardware (POS License, quick support, import data).'
                          : 'Support training new team members and manage POS Hardware (Licenses, rapid support, data importation).'}
                      </li>
                    </ul>

                    {/* Người Tham Chiếu (Reference Person) Box as requested */}
                    <div className="mt-2.5 p-2.5 rounded-lg bg-[#fbf8f3] border border-[#e8d5be] text-[11px] text-[#333333]">
                      <div className="flex items-center gap-1.5 text-[#b4752c] font-bold uppercase tracking-wider text-[10px] mb-1">
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>{lang === 'vi' ? 'Người Tham Chiếu (Reference)' : 'Professional Reference'}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#D6974C] text-white flex items-center justify-center font-bold text-xs shrink-0">
                            J
                          </div>
                          <div>
                            <span className="font-bold text-[#111111]">Mr. Jason</span>
                            <span className="text-gray-500 ml-1">
                              ({lang === 'vi' ? 'Senior & Trainer' : 'Senior & Trainer'} - MAC USA One)
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs">
                          <Phone className="w-3 h-3 text-[#b4752c]" />
                          <a 
                            href="tel:0564996472" 
                            className="font-mono font-bold text-[#111111] hover:text-[#b4752c] bg-white px-2 py-0.5 rounded border border-gray-300 hover:border-[#b4752c]"
                          >
                            0564996472
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* EXP 2: MindX Technology School */}
                  <div className="relative pt-1">
                    <span className="absolute -left-[21px] top-2.5 w-2.5 h-2.5 rounded-full bg-[#444444] ring-4 ring-white" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-base sm:text-lg font-black text-[#111111] tracking-tight">
                        MindX Technology School
                      </h3>
                      <span className="text-[11px] text-gray-500 font-mono">
                        {lang === 'vi' ? '04/2021 — 08/2023' : 'Apr 2021 — Aug 2023'}
                      </span>
                    </div>

                    <div className="text-[12px] font-bold text-[#111111] mt-0.5">
                      {lang === 'vi' ? 'Giảng viên Lập trình & Graphic Designer' : 'Lecturer & Graphic Designer'}
                    </div>
                    <div className="text-[11px] text-gray-500 mb-1">
                      {lang === 'vi' ? 'Gò Vấp, TP. Hồ Chí Minh' : 'Go Vap Distric, HCM City'}
                    </div>

                    <ul className="space-y-0.5 text-[11.5px] text-gray-700 list-disc pl-4 leading-relaxed">
                      <li>
                        {lang === 'vi'
                          ? 'Đã trực tiếp đào tạo & tốt nghiệp cho hơn 80+ học viên CNTT và lập trình; 6+ năm kinh nghiệm thực chiến.'
                          : 'Trained and graduated over 80+ IT students; 6+ years of hands-on technical teaching.'}
                      </li>
                      <li>
                        {lang === 'vi'
                          ? 'Thiết kế đồ họa, banner, ấn phẩm truyền thông, background cho sự kiện và khóa học của trường.'
                          : 'Design graphics, event banners, and promotional visual media for school courses and events.'}
                      </li>
                    </ul>
                  </div>

                  {/* EXP 3: Uy Vu Company */}
                  <div className="relative pt-1">
                    <span className="absolute -left-[21px] top-2.5 w-2.5 h-2.5 rounded-full bg-[#444444] ring-4 ring-white" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-base sm:text-lg font-black text-[#111111] tracking-tight">
                        Uy Vu Company
                      </h3>
                      <span className="text-[11px] text-gray-500 font-mono">
                        {lang === 'vi' ? '02/2023 - 06/2023' : 'Feb. 2023 - Jun. 2023'}
                      </span>
                    </div>

                    <div className="text-[12px] font-bold text-[#111111] mt-0.5">
                      Social Marketing - Designer & Video Editor
                    </div>
                    <div className="text-[11px] text-gray-500 mb-1">
                      {lang === 'vi' ? 'Quận 10, TP. Hồ Chí Minh' : 'District 10, HCM City'}
                    </div>

                    <p className="text-[11.5px] text-gray-700 pl-4 leading-relaxed">
                      {lang === 'vi'
                        ? 'Chụp ảnh, quay video sản phẩm, dựng video; thiết kế banner, standee, thẻ in ấn và bao bì đóng gói.'
                        : 'Product photography, video shooting & editing; design graphics, banners, standees, and packaging.'}
                    </p>
                  </div>

                  {/* EXP 4: PlayGround & Otrafy Company */}
                  <div className="relative pt-1">
                    <span className="absolute -left-[21px] top-2.5 w-2.5 h-2.5 rounded-full bg-[#444444] ring-4 ring-white" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-base sm:text-lg font-black text-[#111111] tracking-tight">
                        PlayGround & Otrafy Company
                      </h3>
                      <span className="text-[11px] text-gray-500 font-mono">
                        {lang === 'vi' ? '03/2022 - 03/2023' : 'Mar. 2022 - Mar. 2023'}
                      </span>
                    </div>

                    <div className="text-[12px] font-bold text-[#111111] mt-0.5">
                      Quality Control / QA Engineer
                    </div>
                    <div className="text-[11px] text-gray-500 mb-1">
                      {lang === 'vi' ? 'Quận 2, TP. Hồ Chí Minh & Remote' : 'District 2, HCM City & Remote'}
                    </div>

                    <p className="text-[11.5px] text-gray-700 pl-4 leading-relaxed">
                      {lang === 'vi'
                        ? 'Đánh giá yêu cầu phần mềm, thực hiện usability testing, phân tích tác động cơ sở dữ liệu và báo cáo chất lượng kiểm thử.'
                        : 'Review software requirements, implement usability testing, analyze DB impact, and report testing outcomes.'}
                    </p>
                  </div>

                  {/* EXP 5: AltaSoftware Company */}
                  <div className="relative pt-1">
                    <span className="absolute -left-[21px] top-2.5 w-2.5 h-2.5 rounded-full bg-[#444444] ring-4 ring-white" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-base sm:text-lg font-black text-[#111111] tracking-tight">
                        AltaSoftware Company
                      </h3>
                      <span className="text-[11px] text-gray-500 font-mono">
                        {lang === 'vi' ? '08/2021 - 03/2022' : 'Aug. 2021 - Mar. 2022'}
                      </span>
                    </div>

                    <div className="text-[12px] font-bold text-[#111111] mt-0.5">
                      Web Developer
                    </div>
                    <p className="text-[11.5px] text-gray-700 pl-4 leading-relaxed">
                      {lang === 'vi'
                        ? 'Lập trình website dựa trên thiết kế có sẵn, sử dụng PHP - WordPress.'
                        : 'Programming websites based on pre-built design specs, using PHP and WordPress.'}
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom CV Verification Stamp */}
              <div className="mt-6 pt-3 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10.5px] text-gray-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D6974C]" />
                  <span>
                    {lang === 'vi' ? 'Hồ sơ chuẩn hóa theo định dạng CVDesignR' : 'CVDesignR Verified Candidate Profile'}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">Editor Link:</span>
                  <a
                    href={PERSONAL_INFO.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D6974C] hover:underline font-mono font-medium"
                  >
                    cvdesignr.com/en/cv-editor/cv_mRr7O8jNvZAwEQ
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
