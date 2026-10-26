import React, { useEffect, useState } from 'react';
import { Download, CheckCircle, AlertCircle, Loader2, X, FileArchive } from 'lucide-react';

interface AutoSourceDownloadProps {
  lang: 'vi' | 'en';
}

export const AutoSourceDownload: React.FC<AutoSourceDownloadProps> = ({ lang }) => {
  const [status, setStatus] = useState<'idle' | 'downloading' | 'success' | 'error'>('idle');
  const [progressText, setProgressText] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(true);

  const startDownload = async () => {
    try {
      setStatus('downloading');
      setProgressText(lang === 'vi' ? 'Đang chuẩn bị file zip (77.8 MB)...' : 'Preparing zip archive (77.8 MB)...');

      const response = await fetch('/voduchuy-portfolio.zip');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setProgressText(lang === 'vi' ? 'Đang lưu file vào máy tính...' : 'Saving file to device...');
      const blob = await response.blob();
      
      const blobUrl = window.URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = 'voduchuy-portfolio-source.zip';
      document.body.appendChild(downloadLink);
      downloadLink.click();

      setTimeout(() => {
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(blobUrl);
      }, 2000);

      setStatus('success');
      setProgressText(
        lang === 'vi' 
          ? 'Đã tải xong file mã nguồn! Bạn có thể giải nén và làm theo hướng dẫn trong README.md.' 
          : 'Source code downloaded successfully! Extract and check README.md.'
      );
    } catch (err) {
      console.error('Download error:', err);
      setStatus('error');
      setProgressText(
        lang === 'vi'
          ? 'Trình duyệt chặn tải tự động. Vui lòng bấm nút bên dưới để tải trực tiếp.'
          : 'Automatic download blocked by browser. Click below to download directly.'
      );
    }
  };

  useEffect(() => {
    // Automatically initiate download 1.5 seconds after page loads
    const timer = setTimeout(() => {
      startDownload();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-neutral-900/95 backdrop-blur-md border border-neutral-700/80 rounded-2xl p-4 shadow-2xl text-white">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              status === 'downloading' ? 'bg-amber-500/20 text-amber-400' :
              status === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
              status === 'error' ? 'bg-rose-500/20 text-rose-400' :
              'bg-blue-500/20 text-blue-400'
            }`}>
              {status === 'downloading' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : status === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : status === 'error' ? (
                <AlertCircle className="w-5 h-5" />
              ) : (
                <FileArchive className="w-5 h-5" />
              )}
            </div>

            <div>
              <h4 className="font-semibold text-sm text-neutral-100 flex items-center gap-2">
                {lang === 'vi' ? 'Mã nguồn dự án Portfolio (.ZIP)' : 'Portfolio Source Code (.ZIP)'}
                <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
                  77.8 MB
                </span>
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                {progressText || (lang === 'vi' ? 'Đang chuẩn bị tải về tự động...' : 'Preparing automatic download...')}
              </p>
            </div>
          </div>

          <button
            onClick={() => setVisible(false)}
            className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors shrink-0"
            title={lang === 'vi' ? 'Đóng thông báo' : 'Dismiss'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Button & Instructions */}
        <div className="mt-3 pt-3 border-t border-neutral-800 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[11px] text-neutral-400">
              {lang === 'vi' ? 'Chuẩn Windows & Mac (kèm README.md)' : 'Windows & Mac ready (includes README)'}
            </div>

              {/* Direct hosting deploy zip */}
              <a
                href="/dist-upload-htdocs.zip"
                download="dist-upload-htdocs.zip"
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white flex items-center gap-1.5 shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
                title="Tải gói file đã build sẵn để upload lên hosting htdocs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'Tải gói đưa lên Hosting (.zip)' : 'Download for Hosting'}</span>
              </a>

              <a
                href="/voduchuy-portfolio.zip"
                download="voduchuy-portfolio-source.zip"
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 flex items-center gap-1.5 border border-neutral-700 active:scale-95 transition-all"
                title="Tải toàn bộ mã nguồn React gốc để lập trình"
              >
                <span>{lang === 'vi' ? 'Source Code gốc' : 'Raw Source'}</span>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};
