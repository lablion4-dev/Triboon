import React from 'react';
import SectionTitle from './SectionTitle';
import TribalPattern from './TribalPattern';

const Manifesto: React.FC = () => {
  return (
    <section className="relative py-24 bg-tribal-paper border-t border-tribal-earth/10">
      <TribalPattern opacity={0.03} className="text-tribal-ink" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="The Witnesses Speak" subtitle="Our Manifesto" />
          
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div className="font-mono text-tribal-ink/80 space-y-6 text-sm md:text-base leading-relaxed text-justify">
              <p>
                <span className="text-tribal-earth font-bold text-lg">TRIBOON</span> is an African tribal meme project inspired by deep African heritage. We use symbolism, art and storytelling to promote African culture, with blockchain as a medium for memory and permanence, not speculation.
              </p>
              <p>
                Great apes have been silent witnesses to African history for thousands of years. They have observed our migrations, rituals, scarifications, masks, rhythms and stories. TRIBOON embodies these witnesses and gives them a symbolic voice to tell African history through digital culture.
              </p>
              <p>
                In a space dominated by fleeting speculation, we return to the roots. We value cultural storytelling before utility and community before speculation. Like the ancient masks of our ancestors, TRIBOON hides the individual to reveal the spirit of the tribe.
              </p>
              <div className="pl-4 border-l-4 border-tribal-earth">
                <p className="italic text-tribal-clay font-bold">
                  "We are carving our scarifications onto the immutable ledger, witnessed by those who have seen it all."
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