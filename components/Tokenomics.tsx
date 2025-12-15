import React from 'react';
import SectionTitle from './SectionTitle';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TOKEN_DISTRIBUTION } from '../constants';

const Tokenomics: React.FC = () => {
  return (
    <section className="relative py-24 bg-tribal-light">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Tribal Ledger" subtitle="Tokenomics" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Stats Column */}
          <div className="space-y-8 font-mono">
            
            {/* Supply Card */}
            <div className="bg-tribal-paper border border-tribal-ink/5 p-8 shadow-sm hover:border-tribal-earth transition-colors">
              <p className="text-tribal-clay text-sm uppercase mb-2">Total Supply</p>
              <h3 className="text-3xl md:text-5xl text-tribal-ink font-bold tracking-tight">
                1,000,000,000
              </h3>
              <p className="text-tribal-earth text-sm mt-2">$TRIBOON</p>
            </div>

            {/* Grid Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-tribal-paper border border-tribal-ink/5 p-6 shadow-sm">
                <p className="text-tribal-clay text-xs uppercase mb-1">Tax</p>
                <h4 className="text-2xl text-tribal-ink font-bold">0/0</h4>
                <p className="text-xs text-tribal-ink/50 mt-1">Pure Freedom</p>
              </div>
              <div className="bg-tribal-paper border border-tribal-ink/5 p-6 shadow-sm">
                <p className="text-tribal-clay text-xs uppercase mb-1">Liquidity</p>
                <h4 className="text-2xl text-tribal-earth font-bold">BURNT</h4>
                <p className="text-xs text-tribal-ink/50 mt-1">Offering to Ancestors</p>
              </div>
            </div>

            {/* Legend */}
             <div className="space-y-4 pt-4">
              {TOKEN_DISTRIBUTION.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b border-tribal-ink/10 pb-2">
                  <div className="flex items-center gap-3">
                    {/* Use a small SVG circle so we can set the fill color via the `fill` prop (not inline CSS) */}
                    <svg className="w-3 h-3 shadow-sm" viewBox="0 0 8 8" aria-hidden>
                      <circle cx="4" cy="4" r="4" fill={item.fill} />
                    </svg>
                    <span className="text-tribal-ink uppercase text-sm tracking-wider">{item.name}</span>
                  </div>
                  <span className="font-bold text-tribal-ink">{item.value}%</span>
                </div>
              ))}
            </div>

          </div>

          {/* Chart Column */}
          <div className="h-[400px] w-full relative flex items-center justify-center">
             <div className="absolute inset-0 bg-tribal-earth/5 rounded-full blur-3xl"></div>
             <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <PieChart>
                  <Pie
                    data={TOKEN_DISTRIBUTION}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {TOKEN_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} className="outline-none focus:outline-none hover:opacity-80 transition-opacity duration-300" />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
             </ResponsiveContainer>
             
             {/* Center Text in Donut */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <p className="text-tribal-clay font-mono text-xs uppercase">Allocation</p>
                <p className="text-tribal-ink font-display font-bold text-2xl animate-scale-pulse">100%</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
