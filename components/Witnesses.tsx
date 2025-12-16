import React from 'react';
import SectionTitle from './SectionTitle';
import TribalPattern from './TribalPattern';
import { Eye, Mountain, TreePine } from 'lucide-react';

const Witnesses: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f2e8cf] to-[#e8dcb5] overflow-hidden">
      <TribalPattern opacity={0.05} className="text-tribal-earth" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle title="Silent Witnesses" subtitle="The Great Apes" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Witness 1 - Observation */}
            <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-tribal-earth" />
                <h3 className="font-display font-bold text-xl text-tribal-ink uppercase">Observers</h3>
              </div>
              <p className="font-mono text-tribal-ink/70 text-sm leading-relaxed">
                For millennia, great apes have watched from the treetops as African tribes migrated across the continent, carrying their stories, rituals, and traditions across vast landscapes.
              </p>
            </div>

            {/* Witness 2 - Memory */}
            <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="w-8 h-8 text-tribal-earth" />
                <h3 className="font-display font-bold text-xl text-tribal-ink uppercase">Guardians</h3>
              </div>
              <p className="font-mono text-tribal-ink/70 text-sm leading-relaxed">
                They witnessed the creation of sacred masks, the carving of tribal scarifications, and the beating of drums that echoed through the jungle for generations.
              </p>
            </div>

            {/* Witness 3 - Legacy */}
            <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <TreePine className="w-8 h-8 text-tribal-earth" />
                <h3 className="font-display font-bold text-xl text-tribal-ink uppercase">Keepers</h3>
              </div>
              <p className="font-mono text-tribal-ink/70 text-sm leading-relaxed">
                Now, through TRIBOON, these ancient witnesses find their voice in the digital realm, preserving African heritage on the blockchain for future generations.
              </p>
            </div>
          </div>

          {/* Main Story */}
          <div className="bg-tribal-ink/5 border border-tribal-earth/30 p-8 md:p-12 rounded-lg">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-display font-bold text-3xl md:text-4xl text-tribal-ink mb-6 uppercase tracking-wide">
                The Witnesses Awaken
              </h3>
              <p className="font-mono text-tribal-ink/80 text-lg leading-relaxed mb-6">
                In the depths of African forests, where the canopy meets the sky and ancient rhythms still echo through the trees, 
                great apes have been the eternal witnesses to our continent's soul. They have seen civilizations rise and fall, 
                watched as stories were passed down through oral traditions, and observed as cultures adapted and evolved.
              </p>
              <p className="font-mono text-tribal-ink/80 text-lg leading-relaxed mb-8">
                TRIBOON embodies these silent observers, giving them a symbolic voice to tell African history through digital culture. 
                We are not just a meme project – we are the digital descendants of those who have always been there, 
                watching, remembering, and now speaking.
              </p>
              <div className="inline-block px-6 py-3 bg-tribal-earth text-white font-mono font-bold uppercase tracking-widest">
                From the jungle to the blockchain
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Witnesses;