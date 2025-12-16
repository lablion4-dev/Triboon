import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Witnesses from './components/Witnesses';
import Artefacts from './components/Artefacts';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import { AudioProvider } from './components/AudioContext';

const App: React.FC = () => {
  return (
    <AudioProvider>
      <div id="top" className="min-h-screen bg-tribal-light text-tribal-ink selection:bg-neon-green selection:text-black">
        
        {/* Global Grain Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-multiply bg-noise bg-repeat"></div>
        
        {/* Scanline Effect (subtle) */}
        <div className="fixed inset-0 z-50 pointer-events-none bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.02)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,6px_100%] bg-repeat pointer-events-none"></div>

        <Header />

        <main className="relative z-10 pt-16">
          <Hero />
          <Manifesto />
          <Witnesses />
          <Artefacts />
          <Tokenomics />
        </main>
        
        <Footer />
        {/* Bottom scrollbar removed per request */}
      </div>
    </AudioProvider>
  );
};

export default App;
