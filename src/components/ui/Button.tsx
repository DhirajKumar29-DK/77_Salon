import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 tracking-[0.14em] uppercase text-xs focus:outline-none cursor-pointer select-none rounded-md';

  const sizeClasses = {
    sm: 'px-4 py-2 text-[11px]',
    md: 'px-6 py-3.5 text-xs',
    lg: 'px-8 py-4 text-xs tracking-[0.18em]',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#b57c2b] via-[#d4af37] to-[#e5c568] text-[#060e22] font-semibold hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:brightness-105 border border-[#d4af37]',
    secondary:
      'bg-[#0a1a3f] text-[#f8fafc] hover:bg-[#0f2352] border border-[#d4af37]/50 hover:border-[#d4af37]',
    navy:
      'bg-[#060e22] text-[#f8fafc] hover:bg-[#0a1a3f] border border-[#d4af37]/40 hover:border-[#d4af37]',
    outline:
      'bg-transparent text-[#e2e8f0] border border-[#e2e8f0]/40 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-[#d4af37]/10',
    'outline-white':
      'bg-transparent text-[#f8fafc] border border-[#cbd5e1]/40 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-[#d4af37]/10',
    ghost:
      'bg-transparent text-[#cbd5e1] hover:text-[#d4af37] p-0 border-none',
  };

  let finalSize = size;
  let finalClassName = className;

  if (variant === 'primary') {
    finalSize = 'sm';
    // Remove conflicting font-weights or tracking
    finalClassName = finalClassName
      .replace(/font-(light|normal|medium|bold|extrabold|black)/g, '')
      .replace(/tracking-[a-z0-9\[\]\.-]+/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Add exact Navbar button typographies
    finalClassName += ' font-semibold tracking-[0.2em]';
  }

  const combinedClasses = `${baseClasses} ${sizeClasses[finalSize]} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 pointer-events-none' : ''
  } ${finalClassName}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};
