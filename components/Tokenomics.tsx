import React from 'react';
import SectionTitle from './SectionTitle';

const Tokenomics: React.FC = () => {
  return (
    <section className="relative py-24 bg-tribal-light">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Tribal Ledger" subtitle="Tokenomics" />

        <div className="max-w-4xl mx-auto">
          
          {/* Stats Column */}
          <div className="space-y-8 font-mono">
            
            {/* Token Facts */}
            <div className="bg-tribal-paper border border-tribal-ink/5 p-8 shadow-sm hover:border-tribal-earth transition-colors">
              <p className="text-tribal-clay text-sm uppercase mb-4">Token Facts</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl text-tribal-ink font-bold">TRIBOON</h4>
                  <p className="text-tribal-earth text-xs">Token Name</p>
                </div>
                <div>
                  <h4 className="text-xl text-tribal-ink font-bold">Solana</h4>
                  <p className="text-tribal-earth text-xs">Blockchain</p>
                </div>
              </div>
            </div>

            {/* Supply Card */}
            <div className="bg-tribal-paper border border-tribal-ink/5 p-8 shadow-sm hover:border-tribal-earth transition-colors">
              <p className="text-tribal-clay text-sm uppercase mb-2">Total Supply</p>
              <h3 className="text-3xl md:text-5xl text-tribal-ink font-bold tracking-tight">
                1,000,000,000
              </h3>
              <p className="text-tribal-earth text-sm mt-2">$TRIBOON</p>
            </div>

            {/* Grid Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-tribal-paper border border-tribal-ink/5 p-6 shadow-sm">
                <p className="text-tribal-clay text-xs uppercase mb-1">Tax</p>
                <h4 className="text-2xl text-tribal-ink font-bold">0/0</h4>
                <p className="text-xs text-tribal-ink/50 mt-1">Pure Freedom</p>
              </div>
              <div className="bg-tribal-paper border border-tribal-ink/5 p-6 shadow-sm">
                <p className="text-tribal-clay text-xs uppercase mb-1">Liquidity</p>
                <h4 className="text-lg text-tribal-earth font-bold">TRIBOON/SOL</h4>
                <p className="text-xs text-tribal-ink/50 mt-1">Offering to Ancestors</p>
              </div>
            </div>

            {/* Cultural Message */}
            <div className="text-center bg-tribal-earth/10 border border-tribal-earth/30 p-6 rounded-lg">
              <p className="font-display font-bold text-tribal-ink text-lg uppercase tracking-wide mb-2">
                "Culture Before Hype"
              </p>
              <p className="font-mono text-tribal-ink/70 text-sm">
                Preserving African heritage on Solana blockchain
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
