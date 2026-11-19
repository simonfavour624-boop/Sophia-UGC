import { useEffect, useState } from 'react';
import { Pause, Play, TrendingUp, X } from 'lucide-react';
import type { PackageOption, PortfolioItem } from '../data/portfolioData';
import { SafeImage } from './SafeImage';

interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onBookSimilar: (pkg: PackageOption) => void;
}

export function VideoModal({ item, onClose, onBookSimilar }: VideoModalProps) {
  const [isPlayingPreview, setIsPlayingPreview] = useState(true);
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    if (!item) return;
    setIsPlayingPreview(true);
    setProgress(12);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  useEffect(() => {
    if (!item || !isPlayingPreview) return;
    const interval = window.setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1.5));
    }, 150);
    return () => window.clearInterval(interval);
  }, [item, isPlayingPreview]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video preview"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 text-[#111111] hover:bg-[#F5EFE6] flex items-center justify-center shadow-sm transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#111111]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Simulated Vertical Reel Player */}
        <div className="md:col-span-5 relative bg-[#111111] aspect-[3/4] md:aspect-auto md:min-h-[460px] overflow-hidden">
          <SafeImage
            src={item.image}
            alt={item.title}
            fallbackTitle={item.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isPlayingPreview ? 'scale-[1.03]' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Interactive Play/Pause Control */}
          <button
            type="button"
            onClick={() => setIsPlayingPreview((prev) => !prev)}
            aria-label={isPlayingPreview ? 'Pause reel preview' : 'Play reel preview'}
            className="absolute inset-0 flex items-center justify-center group cursor-pointer"
          >
            <span className="w-14 h-14 rounded-full bg-white/90 text-[#111111] flex items-center justify-center shadow-lg transition-transform duration-150 group-hover:scale-105">
              {isPlayingPreview ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </span>
          </button>

          {/* Simulated Reel Progress Bar & Captions */}
          <div className="absolute bottom-4 left-4 right-4 text-white space-y-2.5 pointer-events-none">
            <p className="text-xs font-medium text-white/90 bg-black/50 backdrop-blur-xs rounded-lg px-3 py-2 leading-relaxed">
              {item.hook}
            </p>
            <div className="flex items-center justify-between text-[11px] font-medium text-white/80 tabular-nums">
              <span>{isPlayingPreview ? 'Playing Reel Preview' : 'Paused'}</span>
              <span>{item.duration}</span>
            </div>
            <div className="h-1 w-full bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#E89BA8] transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right: Campaign Breakdown */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-medium text-[#111111]/60 pr-10">
              <span>{item.category}</span>
              <span aria-hidden="true">·</span>
              <span>{item.platform}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums text-[#111111] font-semibold">{item.views}</span>
            </div>

            <h3
              id="video-modal-title"
              className="font-display text-2xl font-bold tracking-tight text-[#111111]"
            >
              {item.title}
            </h3>

            <p className="text-[15px] leading-relaxed text-[#111111]/75">{item.description}</p>

            <div className="pt-4 border-t border-[#111111]/10 space-y-3">
              <div>
                <p className="text-xs font-semibold text-[#111111]/55 mb-1">Opening Hook Used</p>
                <p className="text-sm font-medium text-[#111111] italic">{item.hook}</p>
              </div>
              <div className="flex items-start gap-2.5 bg-[#F5EFE6] rounded-xl p-3.5">
                <TrendingUp className="w-4 h-4 text-[#111111] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#111111]/60">Campaign Result</p>
                  <p className="text-sm font-semibold text-[#111111] tabular-nums">{item.outcome}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#111111]/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#111111]/60">
              Recommended: <strong className="text-[#111111]">{item.recommendedPackage}</strong>
            </span>
            <button
              type="button"
              onClick={() => onBookSimilar(item.recommendedPackage)}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#111111] rounded-xl hover:bg-[#2A2A2A] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book Similar Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
