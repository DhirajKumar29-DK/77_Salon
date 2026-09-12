import React from 'react';

interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
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
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-bold text-[#d4af37] mb-3 flex items-center gap-2">
          <span className="inline-block w-5 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
          {eyebrow}
          <span className="inline-block w-5 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
        </span>
      )}
      <h2
        className={`font-antic text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] ${
          isDark ? 'text-[#f8fafc]' : 'text-[#060e22]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base font-sans leading-relaxed max-w-2xl font-light ${
            isDark ? 'text-[#cbd5e1]' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
