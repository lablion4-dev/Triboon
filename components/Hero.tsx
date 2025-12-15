import React from 'react';
import { IMAGES } from '../constants';
import TribalPattern from './TribalPattern';
import { ArrowRight, Activity } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-tribal-light via-[#e8dcb5] to-tribal-light z-0"></div>
      <TribalPattern className="text-tribal-earth" />
      
      {/* Glow Effect behind Mask - Adjusted for the new logo colors (Warm Amber/Green mix) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffaa00] rounded-full blur-[120px] opacity-15 pointer-events-none animate-pulse"></div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        
        {/* Main Logo Visual - "Ritual Card" Style */}
        <div className="relative mb-10 md:mb-16 group perspective-1000">
            {/* Animated Rings behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-tribal-earth/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-tribal-ink/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Card Container */}
            <div className="relative w-64 md:w-80 aspect-[3/4] md:aspect-square transition-transform duration-700 ease-out ritual-tilt preserve-3d">
                
                {/* Layered Backgrounds for Depth */}
                <div className="absolute inset-0 bg-tribal-ink rounded-3xl transform translate-x-3 translate-y-3 opacity-20"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-tribal-earth to-tribal-clay rounded-[1.7rem] transform -rotate-1"></div>
                
                {/* Main Image Frame */}
                <div className="relative w-full h-full bg-tribal-dark rounded-3xl overflow-hidden border-4 border-tribal-ink shadow-2xl flex items-center justify-center">
                   {/* Inner Noise Texture */}
                   <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
                   
                   <img 
                      src={IMAGES.MASK_HERO} 
                      alt="Triboon Official Logo" 
                      className="w-full h-full object-cover md:object-contain p-2"
                   />

                   {/* Glossy Reflection */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Tribal Accents on Corners */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-tribal-ink rounded-tl-xl"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-tribal-ink rounded-br-xl"></div>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            </div>
        </div>

        {/* Typography */}
        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter text-tribal-ink mb-4 drop-shadow-none">
          TRIBOON
        </h1>
        
        <h2 className="font-mono text-lg md:text-2xl text-tribal-earth mb-2 uppercase tracking-widest font-bold">
          The Beat of the Blockchain
        </h2>
        
        <p className="font-display text-tribal-ink/70 text-sm md:text-lg mb-10 tracking-wide">
          From the jungle to the blockchain.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-6">
          <a
            href={SOCIAL_LINKS.TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 bg-tribal-earth text-white font-mono font-bold uppercase tracking-widest hover:bg-tribal-clay transition-colors clip-path-button group shadow-lg shadow-tribal-earth/20"
          >
            <span className="flex items-center gap-2">
              Join the Tribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a
            href={SOCIAL_LINKS.CHART}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 border-2 border-tribal-ink text-tribal-ink font-mono font-bold uppercase tracking-widest hover:bg-tribal-ink hover:text-white transition-colors group"
          >
            <span className="flex items-center gap-2">
              View Chart <Activity className="w-4 h-4 group-hover:text-neon-green transition-colors" />
            </span>
          </a>
        </div>

        {/* Secondary link */}
        <a
          href={SOCIAL_LINKS.SOLSCAN}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 font-mono text-xs uppercase tracking-widest text-tribal-ink/60 hover:text-tribal-ink transition-colors"
        >
          View on Solscan
        </a>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce text-tribal-ink">
        <span className="font-mono text-xs uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-tribal-ink to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
