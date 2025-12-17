import React from 'react';
import { IMAGES, SOCIAL_LINKS } from '../constants';
import SoundControl from './SoundControl';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="bg-tribal-light/70 backdrop-blur-md border-b border-tribal-ink/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src={IMAGES.MASK_HERO}
              alt="TRIBOON logo"
              className="h-9 w-9 object-contain rounded-md border border-tribal-ink/10 bg-white/30"
            />
            <div className="leading-tight">
              <div className="font-display font-extrabold tracking-tight text-tribal-ink uppercase">
                TRIBOON
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-tribal-ink/60">
                The Beat of the Blockchain
              </div>
            </div>
          </a>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('tribes-discovery')}
              className="px-4 py-2 text-tribal-ink font-mono text-xs uppercase tracking-widest hover:bg-tribal-ink hover:text-white transition-colors rounded-md"
            >
              Discover Tribes
            </button>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {/* Text CTAs */}
            <a
              href={SOCIAL_LINKS.CHART}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-tribal-ink/20 text-tribal-ink font-mono text-xs uppercase tracking-widest hover:bg-tribal-ink hover:text-white transition-colors"
            >
              Chart
            </a>
            <a
              href={SOCIAL_LINKS.SOLSCAN}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-tribal-earth text-white font-mono text-xs uppercase tracking-widest hover:bg-tribal-clay transition-colors"
            >
              Solscan
            </a>

            {/* Sound Control */}
            <SoundControl />

            {/* Social Icons */}
            <div className="flex items-center gap-3 pl-2 border-l border-tribal-ink/10">
              {/* X (Twitter) */}
              <a
                href={SOCIAL_LINKS.TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tribal-ink/70 hover:text-tribal-ink transition-colors"
                aria-label="X (Twitter)"
                title="X"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href={SOCIAL_LINKS.TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tribal-ink/70 hover:text-tribal-ink transition-colors"
                aria-label="Telegram"
                title="Telegram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={SOCIAL_LINKS.TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tribal-ink/70 hover:text-tribal-ink transition-colors"
                aria-label="TikTok"
                title="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.12v8.76c0 5.29-5.43 7.85-8.99 5.37-1.77-1.23-2.61-3.61-2.03-5.71.58-2.11 2.37-3.79 4.54-4.14 1.76-.29 3.55.28 4.9.15v3.91c-.48-.28-1.04-.42-1.59-.44-1.09-.04-2.19.46-2.73 1.43-.54.96-.34 2.3.56 3.05.9.75 2.29.74 3.19-.01.9-.75 1.34-1.95 1.35-3.11v-17.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
