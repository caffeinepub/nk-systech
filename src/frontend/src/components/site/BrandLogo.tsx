import { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
}

export function BrandLogo({ className = "h-10 w-10", showText = false }: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    // Fallback: Display initials in a styled container
    return (
      <div className="flex items-center gap-3">
        <div className={`${className} rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm`}>
          NK
        </div>
        {showText && <span className="text-xl font-bold tracking-tight">NK SYSTECH</span>}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <img
        src="/assets/generated/nk-systech-logo.dim_512x512.png"
        alt="NK SYSTECH Logo"
        className={`${className} object-contain`}
        onError={handleImageError}
      />
      {showText && <span className="text-xl font-bold tracking-tight">NK SYSTECH</span>}
    </div>
  );
}
