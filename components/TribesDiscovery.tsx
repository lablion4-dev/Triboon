import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import TribalPattern from './TribalPattern';
import { Map, Search, Book, Users, Eye } from 'lucide-react';
import RegionBrowser from './tribes/RegionBrowser';
import CountryBrowser from './tribes/CountryBrowser';
import TribeDetail from './tribes/TribeDetail';
import TribeDictionary from './tribes/TribeDictionary';
import { Tribe } from '../data/tribesData';

type ViewMode = 'regions' | 'countries' | 'tribe' | 'dictionary';

const TribesDiscovery: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('regions');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedTribe, setSelectedTribe] = useState<Tribe | null>(null);

  const handleCountrySelect = (countryId: string) => {
    setSelectedCountry(countryId);
    setCurrentView('countries');
  };

  const handleTribeSelect = (tribe: Tribe) => {
    setSelectedTribe(tribe);
    setCurrentView('tribe');
  };

  const handleBackToRegions = () => {
    setCurrentView('regions');
    setSelectedCountry(null);
    setSelectedTribe(null);
  };

  const handleBackToCountries = () => {
    setCurrentView('countries');
    setSelectedTribe(null);
  };

  return (
    <section id="tribes-discovery" className="relative py-24 bg-gradient-to-b from-[#e8dcb5] to-[#d4c4a8] overflow-hidden">
      <TribalPattern opacity={0.06} className="text-tribal-earth" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle title="Discover African Tribes" subtitle="Cultural Heritage" />
        
        {/* Navigation Tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCurrentView('regions')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-widest transition-colors ${
                currentView === 'regions' 
                  ? 'bg-tribal-earth text-white' 
                  : 'bg-tribal-paper border border-tribal-ink/20 text-tribal-ink hover:bg-tribal-ink hover:text-white'
              }`}
            >
              <Map className="w-4 h-4" />
              By Regions
            </button>
            
            <button
              onClick={() => setCurrentView('dictionary')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-widest transition-colors ${
                currentView === 'dictionary' 
                  ? 'bg-tribal-earth text-white' 
                  : 'bg-tribal-paper border border-tribal-ink/20 text-tribal-ink hover:bg-tribal-ink hover:text-white'
              }`}
            >
              <Search className="w-4 h-4" />
              Dictionary
            </button>
            
            <button
              onClick={() => setCurrentView('dictionary')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-widest bg-tribal-clay text-white hover:bg-tribal-earth transition-colors"
            >
              <Book className="w-4 h-4" />
              Encyclopedia
            </button>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        {(currentView !== 'regions' || selectedCountry || selectedTribe) && (
          <div className="max-w-4xl mx-auto mb-8">
            <nav className="flex items-center gap-2 text-sm font-mono text-tribal-ink/60">
              <button 
                onClick={handleBackToRegions}
                className="hover:text-tribal-earth transition-colors"
              >
                Regions
              </button>
              {selectedCountry && currentView === 'countries' && (
                <>
                  <span>/</span>
                  <span className="text-tribal-ink font-bold">{selectedCountry}</span>
                </>
              )}
              {selectedTribe && (
                <>
                  <span>/</span>
                  <span className="text-tribal-ink font-bold">{selectedTribe.name}</span>
                </>
              )}
            </nav>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {currentView === 'regions' && (
            <RegionBrowser 
              onCountrySelect={handleCountrySelect}
              onTribeSelect={handleTribeSelect}
            />
          )}
          
          {currentView === 'countries' && selectedCountry && (
            <CountryBrowser 
              countryId={selectedCountry}
              onTribeSelect={handleTribeSelect}
              onBack={handleBackToRegions}
            />
          )}
          
          {currentView === 'tribe' && selectedTribe && (
            <TribeDetail 
              tribe={selectedTribe}
              onBack={handleBackToCountries}
            />
          )}
          
          {currentView === 'dictionary' && (
            <TribeDictionary onTribeSelect={handleTribeSelect} />
          )}
        </div>

        {/* Footer Message */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-tribal-ink/5 border border-tribal-earth/30 p-8 rounded-lg">
            <h3 className="font-display font-bold text-2xl text-tribal-ink mb-4 uppercase tracking-wide">
              Guardians of Heritage
            </h3>
            <p className="font-mono text-tribal-ink/80 text-lg leading-relaxed">
              Each tribe represented in our discovery section is guided by ancient guardians - 
              the great apes who have witnessed their cultures evolve across millennia. 
              These silent witnesses preserve the memory of African heritage through digital storytelling.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Users className="w-6 h-6 text-tribal-earth" />
              <span className="font-mono text-tribal-ink/70 text-sm uppercase tracking-widest">
                Preserving Culture Through Technology
              </span>
              <Eye className="w-6 h-6 text-tribal-earth" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TribesDiscovery;