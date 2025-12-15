import React from 'react';

interface TribalPatternProps {
  className?: string;
  opacity?: number;
}

const TribalPattern: React.FC<TribalPatternProps> = ({ className = "pattern-scroll", opacity }) => {
  const opacityStyle = opacity !== undefined ? { opacity } : {};
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden tribal-pattern ${className}`} style={opacityStyle}> 
      <svg width="100%" height="100%">
        <defs>
          <pattern id="tribal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 L25 0 L50 50 L25 100 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M50 50 L75 0 L100 50 L75 100 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="10" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tribal-pattern)" className="text-tribal-earth" />
      </svg>
    </div>
  );
};

export default TribalPattern;
