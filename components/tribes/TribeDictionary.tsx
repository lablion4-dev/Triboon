import React, { useState, useMemo } from 'react';
import { COUNTRIES, searchTribes, Tribe, AFRICAN_REGIONS } from '../../data/tribesData';
import { Search, MapPin, Users, Globe, Eye, Filter } from 'lucide-react';

interface TribeDictionaryProps {
  onTribeSelect: (tribe: Tribe) => void;
}

const TribeDictionary: React.FC<TribeDictionaryProps> = ({ onTribeSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name' | 'country' | 'region'>('name');

  // Get all tribes
  const allTribes = useMemo(() => {
    return COUNTRIES.flatMap(country => country.tribes);
  }, []);

  // Filter and sort tribes
  const filteredTribes = useMemo(() => {
    let tribes = searchQuery ? searchTribes(searchQuery) : allTribes;
    
    if (selectedRegion) {
      tribes = tribes.filter(tribe => tribe.region === selectedRegion);
    }
    
    // Sort tribes
    tribes.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'country':
          return a.country.localeCompare(b.country);
        case 'region':
          return a.region.localeCompare(b.region);
        default:
          return 0;
      }
    });
    
    return tribes;
  }, [searchQuery, selectedRegion, sortBy, allTribes]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-tribal-ink mb-4 uppercase tracking-wide">
          African Tribes Dictionary
        </h2>
        <p className="font-mono text-tribal-ink/80 text-lg max-w-3xl mx-auto leading-relaxed">
          Comprehensive encyclopedia of African tribal cultures, searchable by name, region, country, language, or cultural characteristics.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-6 rounded-lg space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-tribal-ink/50" />
            <input
              type="text"
              placeholder="Search tribes by name, country, region, language, or culture..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-tribal-ink/5 border border-tribal-ink/20 rounded-lg font-mono text-tribal-ink placeholder-tribal-ink/50 focus:outline-none focus:border-tribal-earth focus:bg-tribal-ink/10 transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Region Filter */}
            <div>
              <label className="block font-mono text-xs text-tribal-ink/60 uppercase tracking-wider mb-2">
                Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                title="Filter tribes by African region"
                className="w-full px-3 py-2 bg-tribal-ink/5 border border-tribal-ink/20 rounded font-mono text-tribal-ink focus:outline-none focus:border-tribal-earth"
              >
                <option value="">All Regions</option>
                {AFRICAN_REGIONS.map((region) => (
                  <option key={region.id} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block font-mono text-xs text-tribal-ink/60 uppercase tracking-wider mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'country' | 'region')}
                title="Sort tribes by name, country, or region"
                className="w-full px-3 py-2 bg-tribal-ink/5 border border-tribal-ink/20 rounded font-mono text-tribal-ink focus:outline-none focus:border-tribal-earth"
              >
                <option value="name">Tribe Name</option>
                <option value="country">Country</option>
                <option value="region">Region</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <div className="bg-tribal-earth/10 border border-tribal-earth/30 p-3 rounded flex items-center gap-3 w-full">
                <Filter className="w-4 h-4 text-tribal-earth" />
                <div>
                  <p className="font-mono text-xs text-tribal-ink/60 uppercase tracking-wider">
                    Results
                  </p>
                  <p className="font-mono text-tribal-ink font-bold">
                    {filteredTribes.length} tribes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto">
        {filteredTribes.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-tribal-ink/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-tribal-ink/30" />
            </div>
            <h3 className="font-display font-bold text-xl text-tribal-ink mb-2 uppercase">
              No Tribes Found
            </h3>
            <p className="font-mono text-tribal-ink/70">
              Try adjusting your search terms or filters to find tribes.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTribes.map((tribe) => (
              <div 
                key={tribe.id}
                className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                onClick={() => onTribeSelect(tribe)}
              >
                {/* Tribe Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-tribal-earth/20 to-tribal-clay/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img 
                      src="/assets/mask-gold.svg" 
                      alt={`${tribe.name} Guardian`}
                      className="w-8 h-8 object-contain opacity-60"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg text-tribal-ink mb-1 uppercase group-hover:text-tribal-earth transition-colors">
                      {tribe.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-tribal-ink/60">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate">{tribe.country}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="font-mono text-tribal-ink/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {tribe.description}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <Users className="w-4 h-4 text-tribal-earth mx-auto mb-1" />
                    <p className="font-mono text-xs text-tribal-ink/60">Population</p>
                    <p className="font-mono text-xs text-tribal-ink font-medium">{tribe.population}</p>
                  </div>
                  <div className="text-center">
                    <Globe className="w-4 h-4 text-tribal-earth mx-auto mb-1" />
                    <p className="font-mono text-xs text-tribal-ink/60">Language</p>
                    <p className="font-mono text-xs text-tribal-ink font-medium truncate">{tribe.language}</p>
                  </div>
                </div>

                {/* Region Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-tribal-earth/10 text-tribal-earth text-xs font-mono rounded-full uppercase tracking-wider">
                    {tribe.region}
                  </span>
                </div>

                {/* Key Traditions Preview */}
                <div className="mb-4">
                  <p className="font-mono text-xs text-tribal-ink/60 uppercase tracking-wider mb-2">
                    Key Traditions
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {tribe.traditions.slice(0, 2).map((tradition, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-tribal-ink/10 text-tribal-ink/70 text-xs font-mono rounded"
                      >
                        {tradition}
                      </span>
                    ))}
                    {tribe.traditions.length > 2 && (
                      <span className="px-2 py-1 bg-tribal-ink/10 text-tribal-ink/50 text-xs font-mono rounded">
                        +{tribe.traditions.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* View Button */}
                <button className="w-full px-4 py-3 bg-tribal-earth text-white font-mono text-sm uppercase tracking-widest hover:bg-tribal-clay transition-colors group-hover:scale-105 transform duration-200">
                  <span className="flex items-center justify-center gap-2">
                    Discover <Eye className="w-4 h-4" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-tribal-ink/5 border border-tribal-earth/30 p-8 rounded-lg">
          <h3 className="font-display font-bold text-2xl text-tribal-ink mb-6 uppercase tracking-wide text-center">
            Dictionary Statistics
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="font-display font-bold text-3xl text-tribal-earth mb-2">
                {allTribes.length}
              </h4>
              <p className="font-mono text-tribal-ink/70 text-sm uppercase tracking-wider">
                Total Tribes
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-3xl text-tribal-earth mb-2">
                {COUNTRIES.length}
              </h4>
              <p className="font-mono text-tribal-ink/70 text-sm uppercase tracking-wider">
                Countries
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-3xl text-tribal-earth mb-2">
                {AFRICAN_REGIONS.length}
              </h4>
              <p className="font-mono text-tribal-ink/70 text-sm uppercase tracking-wider">
                Regions
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-3xl text-tribal-earth mb-2">
                ∞
              </h4>
              <p className="font-mono text-tribal-ink/70 text-sm uppercase tracking-wider">
                Stories Preserved
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="font-mono text-tribal-ink/80 italic">
              Each entry in our dictionary represents not just a tribe, but a living testament to African heritage, 
              witnessed and preserved by the great apes who have observed their cultures across millennia. 
              Through digital preservation, their stories find eternal voice on the blockchain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TribeDictionary;