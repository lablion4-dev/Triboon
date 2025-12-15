import React from 'react';
import { IMAGES, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tribal-ink border-t border-tribal-earth/20 pt-16 pb-8 relative overflow-hidden text-tribal-light">
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tribal-ink via-tribal-earth to-tribal-ink"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          
          <div className="flex items-center gap-4 mb-8 opacity-90 invert filter brightness-0 saturate-100 invert-[.85] sepia-[.15] saturate-[.30] hue-rotate-[350deg] brightness-[.95] contrast-[.90]">
            <img src={IMAGES.MASK_HERO} alt="Icon" className="h-12 w-12 object-contain rounded-md border border-white/20" />
            <img src={IMAGES.LOGO_TEXT} alt="Triboon" className="h-10 md:h-12 object-contain" />
          </div>

          {/* Social Links */}
          <div className="flex gap-8 mb-12">
            {/* X (Twitter) */}
            <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="text-tribal-sand hover:text-white transition-colors transform hover:-translate-y-1 duration-300" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Telegram */}
            <a href={SOCIAL_LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="text-tribal-sand hover:text-white transition-colors transform hover:-translate-y-1 duration-300" aria-label="Telegram">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </a>

            {/* TikTok */}
            <a href={SOCIAL_LINKS.TIKTOK} target="_blank" rel="noopener noreferrer" className="text-tribal-sand hover:text-white transition-colors transform hover:-translate-y-1 duration-300" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.12v8.76c0 5.29-5.43 7.85-8.99 5.37-1.77-1.23-2.61-3.61-2.03-5.71.58-2.11 2.37-3.79 4.54-4.14 1.76-.29 3.55.28 4.9.15v3.91c-.48-.28-1.04-.42-1.59-.44-1.09-.04-2.19.46-2.73 1.43-.54.96-.34 2.3.56 3.05.9.75 2.29.74 3.19-.01.9-.75 1.34-1.95 1.35-3.11v-17.1z"/>
              </svg>
            </a>
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto border border-white/10 bg-white/5 p-6 rounded-sm">
             <h4 className="font-mono text-tribal-sand text-xs uppercase mb-2 font-bold tracking-widest">Ritual Disclaimer</h4>
             <p className="font-mono text-[10px] md:text-xs text-tribal-light/60 leading-relaxed text-justify">
               TRIBOON is a community-driven meme project inspired by African tribal culture. It is a tribute to art and collective identity, not a financial instrument. The spirits guide us, but they do not offer financial advice. Values are dictated by the market, not by the ancestors. Trade responsibly.
             </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 font-mono text-xs text-tribal-light/30">
          <p>© 2024 TRIBOON. All Rites Reserved.</p>
          <p className="mt-2 md:mt-0">From the Jungle to the Blockchain.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;