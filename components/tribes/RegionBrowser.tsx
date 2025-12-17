import React from 'react';
import { AFRICAN_REGIONS, COUNTRIES, Tribe } from '../../data/tribesData';
import { MapPin, Users, ArrowRight } from 'lucide-react';

interface RegionBrowserProps {
  onCountrySelect: (countryId: string) => void;
  onTribeSelect: (tribe: Tribe) => void;
}

const RegionBrowser: React.FC<RegionBrowserProps> = ({ onCountrySelect, onTribeSelect }) => {
  const getCountriesByRegion = (regionId: string) => {
    return COUNTRIES.filter(country => country.region === regionId);
  };

  const getTribesByRegion = (regionId: string) => {
    const countries = getCountriesByRegion(regionId);
    return countries.flatMap(country => country.tribes);
  };

  return (
    <div className="space-y-12">
      {/* Regions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AFRICAN_REGIONS.map((region) => {
          const countries = getCountriesByRegion(region.id);
          const totalTribes = getTribesByRegion(region.id).length;
          
          return (
            <div 
              key={region.id}
              className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Region Header */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-tribal-ink mb-2 uppercase tracking-wide">
                  {region.name}
                </h3>
                <p className="font-mono text-tribal-ink/70 text-sm leading-relaxed">
                  {region.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <MapPin className="w-5 h-5 text-tribal-earth" />
                  </div>
                  <p className="font-mono text-tribal-ink text-sm">
                    <span className="font-bold text-lg">{countries.length}</span> Countries
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-tribal-earth" />
                  </div>
                  <p className="font-mono text-tribal-ink text-sm">
                    <span className="font-bold text-lg">{totalTribes}</span> Tribes
                  </p>
                </div>
              </div>

              {/* Countries List */}
              <div className="space-y-3 mb-6">
                <h4 className="font-mono font-bold text-tribal-ink text-sm uppercase tracking-wider">
                  Countries
                </h4>
                {countries.map((country) => (
                  <button
                    key={country.id}
                    onClick={() => onCountrySelect(country.id)}
                    className="w-full flex items-center justify-between p-3 bg-tribal-ink/5 border border-tribal-ink/10 rounded-lg hover:bg-tribal-earth/10 hover:border-tribal-earth/30 transition-colors group"
                  >
                    <span className="font-mono text-tribal-ink text-sm group-hover:text-tribal-earth">
                      {country.name}
                    </span>
                    <span className="text-xs text-tribal-ink/50 group-hover:text-tribal-earth/70">
                      {country.tribes.length} tribes
                    </span>
                    <ArrowRight className="w-4 h-4 text-tribal-ink/30 group-hover:text-tribal-earth" />
                  </button>
                ))}
              </div>

              {/* Featured Tribes */}
              <div>
                <h4 className="font-mono font-bold text-tribal-ink text-sm uppercase tracking-wider mb-3">
                  Featured Tribes
                </h4>
                <div className="space-y-2">
                  {getTribesByRegion(region.id).slice(0, 3).map((tribe) => (
                    <button
                      key={tribe.id}
                      onClick={() => onTribeSelect(tribe)}
                      className="w-full text-left p-2 rounded hover:bg-tribal-ink/5 transition-colors group"
                    >
                      <span className="font-mono text-tribal-ink text-sm group-hover:text-tribal-earth">
                        {tribe.name}
                      </span>
                      <span className="block text-xs text-tribal-ink/50 group-hover:text-tribal-ink/70">
                        {tribe.country}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* All Tribes Quick Access */}
      <div className="bg-tribal-earth/10 border border-tribal-earth/30 p-8 rounded-lg">
        <h3 className="font-display font-bold text-2xl text-tribal-ink mb-4 uppercase tracking-wide text-center">
          Explore All African Tribes
        </h3>
        <p className="font-mono text-tribal-ink/80 text-center mb-6">
          Discover the rich diversity of African cultures, traditions, and heritage through our comprehensive tribe directory.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COUNTRIES.flatMap(country => 
            country.tribes.map(tribe => (
              <button
                key={tribe.id}
                onClick={() => onTribeSelect(tribe)}
                className="p-4 bg-tribal-paper/50 border border-tribal-ink/10 rounded-lg hover:bg-tribal-earth/10 hover:border-tribal-earth/30 transition-all duration-300 text-left group"
              >
                <h4 className="font-display font-bold text-tribal-ink group-hover:text-tribal-earth uppercase">
                  {tribe.name}
                </h4>
                <p className="font-mono text-tribal-ink/60 text-xs mt-1">
                  {tribe.country} • {tribe.region}
                </p>
                <p className="font-mono text-tribal-ink/50 text-xs mt-2 line-clamp-2">
                  {tribe.description}
                </p>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RegionBrowser;