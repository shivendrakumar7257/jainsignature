import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  dark = false
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses[align]}`}>
      {label && (
        <span
          className={`text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] mb-3 flex items-center space-x-2 ${
            dark ? 'text-[#1468a2]' : 'text-[#1468a2]'
          }`}
        >
          <span className="w-6 h-[1px] bg-[#1468a2] inline-block" />
          <span>{label}</span>
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] ${
          dark ? 'text-[#F5F2EC]' : 'text-[#181818]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl ${
            dark ? 'text-white/90' : 'text-[#181818]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
