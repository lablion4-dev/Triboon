import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
  
  return (
    <div className={`mb-16 ${alignClass}`}>
      <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-widest text-tribal-ink mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tribal-earth to-transparent opacity-70"></span>
      </h2>
      {subtitle && (
        <p className="font-mono text-tribal-clay opacity-80 mt-4 text-sm md:text-base uppercase tracking-wider">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;