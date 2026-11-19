import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Sophia UGC',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F5EFE6] via-[#FAF7F2] to-[#F7D6D8] text-[#111111]/70 p-6 text-center ${className}`}
      >
        <Sparkles className="w-7 h-7 mb-2 text-[#E89BA8]" aria-hidden="true" />
        <span className="font-display text-sm font-semibold tracking-tight text-[#111111]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
