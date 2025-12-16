import React from 'react';
import SectionTitle from './SectionTitle';
import TribalPattern from './TribalPattern';
import { Palette, Zap, Music, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#f2e8cf] overflow-hidden">
      <TribalPattern opacity={0.04} className="text-tribal-earth" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle title="About TRIBOON" subtitle="Cultural Heritage" />
        
        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-8 md:p-12 rounded-lg mb-16 shadow-lg">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-display font-bold text-3xl md:text-4xl text-tribal-ink mb-6 uppercase tracking-wide">
                A Cultural Meme Token
              </h3>
              <p className="font-mono text-tribal-ink/80 text-lg leading-relaxed mb-8">
                TRIBOON is a cultural meme token that celebrates and preserves African heritage through digital art and storytelling. 
                Our project draws deep inspiration from the rich traditions of tribal art, ancient scarification patterns, 
                ceremonial masks, and the powerful rhythms that have defined African culture for millennia.
              </p>
              <p className="font-mono text-tribal-ink/80 text-lg leading-relaxed">
                Built on the Solana blockchain, TRIBOON represents a new form of cultural currency – one that honors the past 
                while embracing the future, where ancestral wisdom meets modern technology.
              </p>
            </div>
          </div>

          {/* Four Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Tribal Art */}
            <div className="bg-tribal-ink/5 border border-tribal-earth/30 p-6 rounded-lg text-center hover:bg-tribal-ink/10 transition-colors">
              <div className="flex justify-center mb-4">
                <Palette className="w-12 h-12 text-tribal-earth" />
              </div>
              <h4 className="font-display font-bold text-lg text-tribal-ink mb-3 uppercase tracking-wide">
                Tribal Art
              </h4>
              <p className="font-mono text-tribal-ink/70 text-sm leading-relaxed">
                Ancient symbols and patterns that tell stories of identity, spirituality, and community belonging.
              </p>
            </div>

            {/* Scarification Patterns */}
            <div className="bg-tribal-ink/5 border border-tribal-earth/30 p-6 rounded-lg text-center hover:bg-tribal-ink/10 transition-colors">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-tribal-earth" />
              </div>
              <h4 className="font-display font-bold text-lg text-tribal-ink mb-3 uppercase tracking-wide">
                Scarification
              </h4>
              <p className="font-mono text-tribal-ink/70 text-sm leading-relaxed">
                Sacred markings that encode lineage, achievements, and spiritual journey into the skin itself.
              </p>
            </div>

            {/* Masks */}
            <div className="bg-tribal-ink/5 border border-tribal-earth/30 p-6 rounded-lg text-center hover:bg-tribal-ink/10 transition-colors">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-tribal-earth" />
              </div>
              <h4 className="font-display font-bold text-lg text-tribal-ink mb-3 uppercase tracking-wide">
                Masks
              </h4>
              <p className="font-mono text-tribal-ink/70 text-sm leading-relaxed">
                Ceremonial faces that hide the individual to reveal ancestral spirits and tribal identity.
              </p>
            </div>

            {/* Rhythm & Ritual */}
            <div className="bg-tribal-ink/5 border border-tribal-earth/30 p-6 rounded-lg text-center hover:bg-tribal-ink/10 transition-colors">
              <div className="flex justify-center mb-4">
                <Music className="w-12 h-12 text-tribal-earth" />
              </div>
              <h4 className="font-display font-bold text-lg text-tribal-ink mb-3 uppercase tracking-wide">
                Rhythm & Ritual
              </h4>
              <p className="font-mono text-tribal-ink/70 text-sm leading-relaxed">
                Sacred beats and ceremonies that connect communities across time and space through shared experience.
              </p>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="text-center">
            <div className="inline-block bg-tribal-earth/10 border border-tribal-earth/30 px-8 py-6 rounded-lg">
              <p className="font-display font-bold text-tribal-ink text-lg uppercase tracking-wide mb-2">
                "Culture Before Hype"
              </p>
              <p className="font-mono text-tribal-ink/70 text-sm">
                Preserving African heritage, one block at a time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;