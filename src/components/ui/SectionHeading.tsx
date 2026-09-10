import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-medium text-[#d4af37] mb-3 flex items-center gap-2">
          <span className="inline-block w-5 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
          {eyebrow}
          <span className="inline-block w-5 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
        </span>
      )}
      <h2
        className={`font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15] ${
          isDark ? 'text-[#f8fafc]' : 'text-[#f8fafc]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl font-light ${
            isDark ? 'text-[#cbd5e1]' : 'text-[#cbd5e1]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
