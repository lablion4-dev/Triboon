import React from 'react';
import { COUNTRIES, Tribe } from '../../data/tribesData';
import { ArrowLeft, Users, MapPin, Eye } from 'lucide-react';

interface CountryBrowserProps {
  countryId: string;
  onTribeSelect: (tribe: Tribe) => void;
  onBack: () => void;
}

const CountryBrowser: React.FC<CountryBrowserProps> = ({ countryId, onTribeSelect, onBack }) => {
  const country = COUNTRIES.find(c => c.id === countryId);
  
  if (!country) {
    return (
      <div className="text-center py-12">
        <p className="font-mono text-tribal-ink/70">Country not found</p>
        <button 
          onClick={onBack}
          className="mt-4 px-4 py-2 bg-tribal-earth text-white font-mono text-sm uppercase tracking-widest hover:bg-tribal-clay transition-colors"
        >
          Back to Regions
        </button>
      </div>
    );
  }

  const region = country.region.replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="space-y-8">
      {/* Country Header */}
      <div className="text-center">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-tribal-paper border border-tribal-ink/20 text-tribal-ink font-mono text-sm uppercase tracking-widest hover:bg-tribal-ink hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Regions
        </button>
        
        <h2 className="font-display font-bold text-4xl md:text-5xl text-tribal-ink mb-4 uppercase tracking-wide">
          {country.name}
        </h2>
        <p className="font-mono text-tribal-earth text-lg uppercase tracking-widest">
          {region} Region
        </p>
        <p className="font-mono text-tribal-ink/70 mt-4 max-w-2xl mx-auto">
          Discover the rich cultural heritage of {country.name} through its diverse tribal communities, 
          each carrying forward centuries of tradition, art, and ancestral wisdom.
        </p>
      </div>

      {/* Country Stats */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-6 rounded-lg text-center">
          <Users className="w-8 h-8 text-tribal-earth mx-auto mb-3" />
          <h3 className="font-display font-bold text-2xl text-tribal-ink uppercase">
            {country.tribes.length}
          </h3>
          <p className="font-mono text-tribal-ink/70 text-sm uppercase tracking-wider">
            Tribal Groups
          </p>
        </div>
        
        <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-6 rounded-lg text-center">
          <MapPin className="w-8 h-8 text-tribal-earth mx-auto mb-3" />
          <h3 className="font-display font-bold text-2xl text-tribal-ink uppercase">
            {region}
          </h3>
          <p className="font-mono text-tribal-ink/70 text-sm uppercase tracking-wider">
            Geographic Region
          </p>
        </div>
        
        <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-6 rounded-lg text-center">
          <Eye className="w-8 h-8 text-tribal-earth mx-auto mb-3" />
          <h3 className="font-display font-bold text-2xl text-tribal-ink uppercase">
            Heritage
          </h3>
          <p className="font-mono text-tribal-ink/70 text-sm uppercase tracking-wider">
            Cultural Legacy
          </p>
        </div>
      </div>

      {/* Tribes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {country.tribes.map((tribe) => (
          <div 
            key={tribe.id}
            className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            onClick={() => onTribeSelect(tribe)}
          >
            {/* Tribe Image Placeholder */}
            <div className="aspect-square mb-6 bg-gradient-to-br from-tribal-earth/20 to-tribal-clay/20 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>
              <img 
                src="/assets/mask-gold.svg" 
                alt={`${tribe.name} Guardian`}
                className="w-16 h-16 object-contain opacity-60 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute top-2 right-2 w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
            </div>

            {/* Tribe Info */}
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-2xl text-tribal-ink mb-2 uppercase group-hover:text-tribal-earth transition-colors">
                  {tribe.name}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-tribal-ink/60 mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{tribe.country}</span>
                  <span>•</span>
                  <span>{tribe.population}</span>
                </div>
                <p className="font-mono text-tribal-ink/70 text-sm leading-relaxed line-clamp-3">
                  {tribe.description}
                </p>
              </div>

              {/* Language */}
              <div className="pt-3 border-t border-tribal-ink/10">
                <p className="font-mono text-xs text-tribal-ink/50 uppercase tracking-wider">
                  Primary Language
                </p>
                <p className="font-mono text-sm text-tribal-ink font-medium">
                  {tribe.language}
                </p>
              </div>

              {/* Key Traditions */}
              <div className="pt-3 border-t border-tribal-ink/10">
                <p className="font-mono text-xs text-tribal-ink/50 uppercase tracking-wider mb-2">
                  Key Traditions
                </p>
                <div className="flex flex-wrap gap-1">
                  {tribe.traditions.slice(0, 2).map((tradition, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-tribal-earth/10 text-tribal-earth text-xs font-mono rounded"
                    >
                      {tradition}
                    </span>
                  ))}
                  {tribe.traditions.length > 2 && (
                    <span className="px-2 py-1 bg-tribal-ink/10 text-tribal-ink/70 text-xs font-mono rounded">
                      +{tribe.traditions.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* View Button */}
              <button className="w-full mt-6 px-4 py-3 bg-tribal-earth text-white font-mono text-sm uppercase tracking-widest hover:bg-tribal-clay transition-colors group-hover:scale-105 transform duration-200">
                <span className="flex items-center justify-center gap-2">
                  Discover {tribe.name} <Eye className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cultural Heritage Message */}
      <div className="bg-tribal-ink/5 border border-tribal-earth/30 p-8 rounded-lg max-w-4xl mx-auto text-center">
        <h3 className="font-display font-bold text-2xl text-tribal-ink mb-4 uppercase tracking-wide">
          Guardians of {country.name}
        </h3>
        <p className="font-mono text-tribal-ink/80 leading-relaxed">
          Each tribe from {country.name} carries forward millennia of cultural wisdom, witnessed and preserved 
          by the great apes who have observed their ceremonies, rituals, and sacred traditions across generations.
        </p>
      </div>
    </div>
  );
};

export default CountryBrowser;