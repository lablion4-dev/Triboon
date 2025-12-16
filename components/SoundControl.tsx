import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from './AudioContext';

const SoundControl: React.FC = () => {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <button
      onClick={toggleAudio}
      className="flex items-center gap-2 px-3 py-2 bg-tribal-earth/10 hover:bg-tribal-earth/20 border border-tribal-ink/20 text-tribal-ink font-mono text-xs uppercase tracking-widest transition-colors rounded-md group"
      aria-label={isPlaying ? "Turn sound off" : "Turn sound on"}
      title={isPlaying ? "Sound: On" : "Sound: Off"}
    >
      {isPlaying ? (
        <Volume2 className="w-4 h-4 text-tribal-earth group-hover:text-white" />
      ) : (
        <VolumeX className="w-4 h-4 text-tribal-ink/70 group-hover:text-tribal-earth" />
      )}
      <span className="hidden sm:inline">
        Sound: {isPlaying ? 'On' : 'Off'}
      </span>
    </button>
  );
};

export default SoundControl;