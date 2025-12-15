import React from 'react';
import SectionTitle from './SectionTitle';
import TribalPattern from './TribalPattern';

const Manifesto: React.FC = () => {
  return (
    <section className="relative py-24 bg-tribal-paper border-t border-tribal-earth/10">
      <TribalPattern opacity={0.03} className="text-tribal-ink" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Culture Before Hype" subtitle="The Manifesto" />
          
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div className="font-mono text-tribal-ink/80 space-y-6 text-sm md:text-base leading-relaxed text-justify">
              <p>
                <span className="text-tribal-earth font-bold text-lg">TRIBOON</span> is not just a token; it is a digital rite of passage. We are an African tribal meme culture project built on the pillars of collective identity and ancestral consensus.
              </p>
              <p>
                In a space dominated by fleeting speculation, we return to the roots. We value symbols before utility and community before speculation. Like the masks of our ancestors, TRIBOON hides the individual to reveal the spirit of the tribe.
              </p>
              <div className="pl-4 border-l-4 border-tribal-earth">
                <p className="italic text-tribal-clay font-bold">
                  "We are carving our scarifications onto the immutable ledger."
                </p>
              </div>
            </div>

            {/* Decorative Side Element */}
            <div className="hidden md:flex flex-col items-center justify-center gap-4 opacity-30 text-tribal-ink">
               <div className="w-[2px] h-20 bg-current"></div>
               <div className="w-4 h-4 rotate-45 border-2 border-current"></div>
               <div className="w-[2px] h-20 bg-current"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;