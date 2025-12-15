import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { ARTEFACTS } from '../constants';
import ArtefactViewer from './ArtefactViewer';
const Artefacts: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="relative py-24 bg-[#ebe1cf] overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <SectionTitle title="Symbols of the Tribe" subtitle="The Artefacts" />
      </div>

      {/* Scrolling marquee (duplicates items for seamless loop) */}
      <div className="relative w-full overflow-hidden pb-12">
        <div className="marquee" role="region" aria-label="Artefacts carousel">
          <div className="marquee__inner flex gap-8 px-4 md:px-[10vw]">
            {[...ARTEFACTS, ...ARTEFACTS].map((artefact, idx) => (
              <div 
                key={`${artefact.id}-${idx}`} 
                className="relative w-72 md:w-96 group perspective-1000 flex-shrink-0"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenIndex(idx % ARTEFACTS.length)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpenIndex(idx % ARTEFACTS.length); }}
                  className="bg-tribal-paper border border-tribal-ink/5 p-6 rounded-sm transition-transform duration-500 hover:-translate-y-2 hover:border-tribal-earth hover:shadow-[0_10px_20px_rgba(188,108,37,0.1)]"
                >
                  {/* Image Container */}
                  <div className="aspect-square mb-6 bg-[#f2e8cf] rounded-sm overflow-hidden flex items-center justify-center relative">
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>
                     <img 
                      src={artefact.imageUrl} 
                      alt={artefact.title} 
                      className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                     />
                  </div>

                  {/* Text Content */}
                  <h3 className="font-display font-bold text-2xl text-tribal-ink mb-2 uppercase group-hover:text-tribal-earth transition-colors">
                    {artefact.title}
                  </h3>
                  <p className="font-mono text-xs md:text-sm text-tribal-ink/60">
                    {artefact.description}
                  </p>

                  {/* Corner Accents */}
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-tribal-ink/20 group-hover:border-tribal-earth transition-colors"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-tribal-ink/20 group-hover:border-tribal-earth transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {openIndex !== null && (
        <ArtefactViewer
          artefacts={ARTEFACTS}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={(i) => setOpenIndex(i)}
        />
      )}
    </section>
  );
};

export default Artefacts;