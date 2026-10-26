import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

interface ContactProps {
  lang: 'vi' | 'en';
}

export const ContactSection: React.FC<ContactProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleSendViaMailClient = () => {
    const subject = encodeURIComponent(formState.subject || 'Portfolio Inquiry for Vo Duc Huy');
    const body = encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 border-t border-neutral-800/80 bg-neutral-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2">
              05 · {lang === 'vi' ? 'Kết nối & Hợp tác' : 'Get In Touch'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'vi' ? 'Liên hệ với tôi' : 'Contact Me'}
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end max-w-md">
            {/* Tapered line divider above section description */}
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-rose-500/80 to-transparent mb-2.5" />
            <p className="text-sm text-neutral-400">
              {lang === 'vi'
                ? 'Rất vui lòng được kết nối và thảo luận về các dự án công nghệ, vận hành tiệm Nails/Nhà hàng, hoặc cơ hội việc làm.'
                : 'Always eager to connect and discuss web software, client operations, or career collaborations.'}
            </p>
          </div>
        </div>

        {/* 2-Column Split: Contact Details & Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Contact Info Cards & Social Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Cards */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4">
                {lang === 'vi' ? 'Kênh liên hệ trực tiếp' : 'Direct Channels'}
              </h3>

              <div className="space-y-4">
                {/* Email card */}
                <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs text-neutral-500">{lang === 'vi' ? 'Email chính thức' : 'Email'}</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-mono text-white hover:text-rose-400 truncate block">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone card */}
                <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500">{lang === 'vi' ? 'Điện thoại & Zalo' : 'Phone'}</div>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-mono text-white hover:text-rose-400 block">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Address card */}
                <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">{lang === 'vi' ? 'Địa chỉ' : 'Address'}</div>
                    <div className="text-xs sm:text-sm text-neutral-200">{PERSONAL_INFO.address[lang]}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles list */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
                {lang === 'vi' ? 'Mạng xã hội & Hồ sơ lập trình:' : 'Social & Developer Profiles:'}
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {PERSONAL_INFO.socials.map((soc, i) => (
                  <a
                    key={i}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all flex items-center justify-between text-xs text-neutral-300"
                  >
                    <span className="font-semibold text-white">{soc.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-2">
              {lang === 'vi' ? 'Gửi lời nhắn tới Huy Vo' : 'Send a Message'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              {lang === 'vi'
                ? 'Hãy để lại thông tin, tôi sẽ phản hồi lại bạn trong vòng 24 giờ làm việc.'
                : 'Leave your message below, and I will get back to you within 24 business hours.'}
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-1">
                  {lang === 'vi' ? 'Đã tiếp nhận tin nhắn thành công!' : 'Message Received!'}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 mb-4">
                  {lang === 'vi'
                    ? `Cảm ơn ${formState.name}. Tôi đã nhận được nội dung của bạn và sẽ sớm phản hồi qua ${formState.email}.`
                    : `Thank you, ${formState.name}. Your inquiry has been recorded and I will reply to ${formState.email} shortly.`}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleSendViaMailClient}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{lang === 'vi' ? 'Mở trong ứng dụng Mail' : 'Open in Mail Client'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium cursor-pointer"
                  >
                    {lang === 'vi' ? 'Gửi tin nhắn khác' : 'Send Another'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      {lang === 'vi' ? 'Tên của bạn' : 'Your Name'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'vi' ? 'Nguyễn Văn A' : 'John Doe'}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      {lang === 'vi' ? 'Địa chỉ Email' : 'Email Address'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="example@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    {lang === 'vi' ? 'Chủ đề / Mục đích' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    placeholder={lang === 'vi' ? 'Hợp tác phát triển Web / Thiết kế đồ họa / Tuyển dụng' : 'Web Collaboration / Design project'}
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    {lang === 'vi' ? 'Nội dung tin nhắn' : 'Message'} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder={lang === 'vi' ? 'Mô tả ngắn gọn về nhu cầu hoặc dự án của bạn...' : 'Describe your project or inquiry...'}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-neutral-500">
                    <span className="text-rose-500">*</span> {lang === 'vi' ? 'Bắt buộc nhập' : 'Required fields'}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-rose-950/40"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>
                      {status === 'submitting'
                        ? (lang === 'vi' ? 'Đang gửi...' : 'Sending...')
                        : (lang === 'vi' ? 'Gửi tin nhắn' : 'Send Message')}
                    </span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
