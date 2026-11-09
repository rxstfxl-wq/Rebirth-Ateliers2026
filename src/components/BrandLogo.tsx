import React from 'react';

interface EmblemProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Official REBIRTH ATELIERS® butterfly/moth emblem
 * Sourced directly from rebirth_logo_emblem_59828b81.svg
 */
export const BrandEmblem: React.FC<EmblemProps> = ({
  className = 'w-6 h-7',
  color = 'currentColor'
}) => {
  return (
    <svg
      viewBox="0 0 5.6 6.87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5.6 2.12c-.23.47-.75 1.11-1.17 1.63-.22.27-.42.51-.56.71-.16.19-.25.21-.28.21-.05 0-.12-.07-.19-.17-.27-.44-.33-1.33-.17-1.67.27-.76 1.15-.85 1.52-.85.29 0 .59.05.85.14Z"
        fill={color}
      />
      <path
        d="M2.31 3.76c-.07.36-.22.67-.42.86-.18-.17-.53-.63-.79-.98-.13-.17-.26-.35-.37-.49-.09-.16-.23-.33-.37-.5C.24 2.5-.02 2.19 0 2.1c0 0 .01-.02 0-.02.22-.07.48-.11.74-.11.54 0 1 .16 1.27.43l.13.16c.2.28.26.74.17 1.2Z"
        fill={color}
      />
      <path
        d="M3.48 1.13c-.3.19-.55.45-.74.74-.19-.29-.45-.55-.75-.74.38-.27.64-.67.75-1.13.1.46.37.86.74 1.13Z"
        fill={color}
      />
      <path
        d="M3.45 5.74c-.38.27-.65.67-.75 1.13-.1-.46-.37-.86-.75-1.13.3-.19.56-.45.75-.75.19.3.45.56.75.75Z"
        fill={color}
      />
    </svg>
  );
};

interface BrandLogoProps {
  variant?: 'dark' | 'light' | 'acid' | 'auto';
  showEmblem?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'auto',
  showEmblem = true,
  size = 'md',
  className = '',
  onClick
}) => {
  const textColor =
    variant === 'light'
      ? 'text-[#F2EFE9]'
      : variant === 'acid'
      ? 'text-[#E1E724]'
      : variant === 'dark'
      ? 'text-[#1A1A1A]'
      : 'text-current';

  const emblemColor =
    variant === 'light'
      ? '#F2EFE9'
      : variant === 'acid'
      ? '#E1E724'
      : variant === 'dark'
      ? '#1A1A1A'
      : 'currentColor';

  const sizeClasses = {
    sm: {
      wrap: 'gap-2',
      title: 'text-lg leading-none tracking-tight',
      sub: 'text-[9px] tracking-[0.2em]',
      emblem: 'w-4 h-5',
    },
    md: {
      wrap: 'gap-2.5',
      title: 'text-2xl leading-none tracking-tight',
      sub: 'text-[11px] tracking-[0.24em]',
      emblem: 'w-5 h-6',
    },
    lg: {
      wrap: 'gap-3.5',
      title: 'text-3xl lg:text-4xl leading-none tracking-tight',
      sub: 'text-xs tracking-[0.26em]',
      emblem: 'w-7 h-8',
    },
    xl: {
      wrap: 'gap-4',
      title: 'text-5xl lg:text-6xl leading-none tracking-tight',
      sub: 'text-sm lg:text-base tracking-[0.3em]',
      emblem: 'w-9 h-11',
    },
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer group ${sizeClasses.wrap} ${textColor} ${className}`}
    >
      <div className="flex flex-col">
        <span className={`font-anton uppercase ${sizeClasses.title} transition-transform duration-300 group-hover:tracking-wider`}>
          REBIRTH
        </span>
        <span className={`font-bebas uppercase font-medium ${sizeClasses.sub} text-neutral-400 group-hover:text-current transition-colors`}>
          ATELIERS®
        </span>
      </div>
      {showEmblem && (
        <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <BrandEmblem className={sizeClasses.emblem} color={emblemColor} />
        </div>
      )}
    </div>
  );
};
