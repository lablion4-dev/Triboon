import React, { useState } from 'react';
import { Tribe } from '../../data/tribesData';
import { ArrowLeft, Users, MapPin, Globe, Palette, Music, Eye, Heart } from 'lucide-react';

interface TribeDetailProps {
  tribe: Tribe;
  onBack: () => void;
}

const TribeDetail: React.FC<TribeDetailProps> = ({ tribe, onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'culture' | 'gallery'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'history', label: 'History', icon: Globe },
    { id: 'culture', label: 'Culture', icon: Heart },
    { id: 'gallery', label: 'Gallery', icon: Palette }
  ] as const;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-tribal-paper border border-tribal-ink/20 text-tribal-ink font-mono text-sm uppercase tracking-widest hover:bg-tribal-ink hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Countries
        </button>
        
        {/* Tribe Guardian Image */}
        <div className="relative mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-tribal-earth/20 to-tribal-clay/20 rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>
            <img 
              src="/assets/mask-gold.svg" 
              alt={`${tribe.name} Guardian`}
              className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-80"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-neon-green rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-tribal-earth text-white text-xs font-mono uppercase tracking-widest rounded-full">
            Guardian
          </div>
        </div>

        <h1 className="font-display font-bold text-4xl md:text-6xl text-tribal-ink mb-4 uppercase tracking-wide">
          {tribe.name}
        </h1>
        <div className="flex items-center justify-center gap-4 text-tribal-earth font-mono text-sm uppercase tracking-widest mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{tribe.country}</span>
          </div>
          <span>•</span>
          <span>{tribe.region}</span>
        </div>
        <p className="font-mono text-tribal-ink/80 text-lg max-w-3xl mx-auto leading-relaxed">
          {tribe.description}
        </p>
      </div>

      {/* Quick Facts */}
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-6 rounded-lg text-center">
          <Users className="w-6 h-6 text-tribal-earth mx-auto mb-2" />
          <h3 className="font-mono text-xs text-tribal-ink/60 uppercase tracking-wider mb-1">Population</h3>
          <p className="font-mono text-tribal-ink font-bold">{tribe.population}</p>
        </div>
        
        <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-6 rounded-lg text-center">
          <Globe className="w-6 h-6 text-tribal-earth mx-auto mb-2" />
          <h3 className="font-mono text-xs text-tribal-ink/60 uppercase tracking-wider mb-1">Language</h3>
          <p className="font-mono text-tribal-ink font-bold">{tribe.language}</p>
        </div>
        
        <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-6 rounded-lg text-center">
          <MapPin className="w-6 h-6 text-tribal-earth mx-auto mb-2" />
          <h3 className="font-mono text-xs text-tribal-ink/60 uppercase tracking-wider mb-1">Region</h3>
          <p className="font-mono text-tribal-ink font-bold">{tribe.region}</p>
        </div>
        
        <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-6 rounded-lg text-center">
          <Heart className="w-6 h-6 text-tribal-earth mx-auto mb-2" />
          <h3 className="font-mono text-xs text-tribal-ink/60 uppercase tracking-wider mb-1">Traditions</h3>
          <p className="font-mono text-tribal-ink font-bold">{tribe.traditions.length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-widest transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-tribal-earth text-white' 
                    : 'bg-tribal-paper border border-tribal-ink/20 text-tribal-ink hover:bg-tribal-ink hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-tribal-paper/80 backdrop-blur-sm border border-tribal-earth/20 p-8 rounded-lg">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-tribal-ink uppercase tracking-wide mb-6">
                Cultural Overview
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="font-mono text-tribal-ink/80 leading-relaxed text-lg">
                  {tribe.description}
                </p>
                <p className="font-mono text-tribal-ink/80 leading-relaxed mt-4">
                  The {tribe.name} people represent a vital thread in the rich tapestry of African heritage, 
                  maintaining their unique cultural identity while contributing to the continent's diverse traditions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="font-mono font-bold text-tribal-ink text-sm uppercase tracking-wider mb-4">
                    Key Traditions
                  </h4>
                  <div className="space-y-2">
                    {tribe.traditions.map((tradition, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-tribal-ink/5 rounded-lg">
                        <Music className="w-4 h-4 text-tribal-earth" />
                        <span className="font-mono text-tribal-ink text-sm">{tradition}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-mono font-bold text-tribal-ink text-sm uppercase tracking-wider mb-4">
                    Art Forms
                  </h4>
                  <div className="space-y-2">
                    {tribe.art.map((art, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-tribal-ink/5 rounded-lg">
                        <Palette className="w-4 h-4 text-tribal-earth" />
                        <span className="font-mono text-tribal-ink text-sm">{art}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-tribal-ink uppercase tracking-wide mb-6">
                Historical Legacy
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="font-mono text-tribal-ink/80 leading-relaxed text-lg">
                  {tribe.history}
                </p>
              </div>
              
              <div className="bg-tribal-earth/10 border border-tribal-earth/30 p-6 rounded-lg mt-8">
                <h4 className="font-display font-bold text-tribal-ink text-lg uppercase tracking-wide mb-3">
                  Guardian's Witness
                </h4>
                <p className="font-mono text-tribal-ink/80 italic">
                  "Through the eyes of the great apes, we have witnessed the rise and evolution of the {tribe.name} culture. 
                  From ancient ceremonies to modern adaptations, their story continues to unfold across the generations, 
                  each chapter witnessed by those who have watched from the treetops of Africa."
                </p>
              </div>
            </div>
          )}

          {activeTab === 'culture' && (
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-tribal-ink uppercase tracking-wide mb-6">
                Cultural Heritage
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="font-mono text-tribal-ink/80 leading-relaxed text-lg">
                  {tribe.culture}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-tribal-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Music className="w-8 h-8 text-tribal-earth" />
                  </div>
                  <h4 className="font-mono font-bold text-tribal-ink text-sm uppercase tracking-wider mb-2">
                    Sacred Rhythms
                  </h4>
                  <p className="font-mono text-tribal-ink/70 text-sm">
                    Traditional ceremonies and spiritual practices passed down through generations
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-tribal-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-8 h-8 text-tribal-earth" />
                  </div>
                  <h4 className="font-mono font-bold text-tribal-ink text-sm uppercase tracking-wider mb-2">
                    Artistic Expression
                  </h4>
                  <p className="font-mono text-tribal-ink/70 text-sm">
                    Master craftspeople creating works that tell stories and preserve culture
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-tribal-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-tribal-earth" />
                  </div>
                  <h4 className="font-mono font-bold text-tribal-ink text-sm uppercase tracking-wider mb-2">
                    Community Bonds
                  </h4>
                  <p className="font-mono text-tribal-ink/70 text-sm">
                    Strong social structures and collective identity rooted in shared heritage
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-tribal-ink uppercase tracking-wide mb-6">
                Cultural Gallery
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="aspect-square bg-gradient-to-br from-tribal-earth/20 to-tribal-clay/20 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>
                    <img 
                      src="/assets/mask-gold.svg" 
                      alt={`${tribe.name} Cultural Artifact ${index}`}
                      className="w-20 h-20 object-contain opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-1 bg-tribal-ink/80 text-white text-xs font-mono rounded">
                      {tribe.name} Art
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="font-mono text-tribal-ink/70 italic">
                  Gallery showcasing the artistic heritage and cultural artifacts of the {tribe.name} people, 
                  witnessed and preserved through the eternal gaze of Africa's guardians.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cultural Message */}
      <div className="bg-tribal-ink/5 border border-tribal-earth/30 p-8 rounded-lg max-w-4xl mx-auto text-center">
        <h3 className="font-display font-bold text-2xl text-tribal-ink mb-4 uppercase tracking-wide">
          The {tribe.name} Legacy
        </h3>
        <p className="font-mono text-tribal-ink/80 leading-relaxed">
          Through TRIBOON's digital preservation, the {tribe.name} culture finds eternal voice in the blockchain, 
          witnessed by those who have observed their ceremonies for millennia. Their heritage flows from the jungle 
          to the digital realm, ensuring their story continues for future generations.
        </p>
      </div>
    </div>
  );
};

export default TribeDetail;