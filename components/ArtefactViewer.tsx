import React, { useEffect } from 'react';
import { Artefact } from '../types';

interface Props {
  artefacts: Artefact[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

const ArtefactViewer: React.FC<Props> = ({ artefacts, index, onClose, onChange }) => {
  const item = artefacts[index];

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') onClose();
      if (ev.key === 'ArrowRight') onChange((index + 1) % artefacts.length);
      if (ev.key === 'ArrowLeft') onChange((index - 1 + artefacts.length) % artefacts.length);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [index, onClose, onChange, artefacts.length]);

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-6" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 max-w-3xl w-full bg-tribal-paper rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-tribal-ink/5">
          <h3 className="text-tribal-ink font-display font-bold">{item.title}</h3>
          <button aria-label="Close" className="text-tribal-ink/60 hover:text-tribal-ink" onClick={onClose}>✕</button>
        </div>

        <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={item.imageUrl} alt={item.title} className="max-h-[60vh] object-contain" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="font-mono text-sm text-tribal-ink/70">{item.description}</p>
            <div className="mt-6 flex gap-3">
              <button
                className="px-4 py-2 bg-tribal-earth text-white rounded-md"
                onClick={() => onChange((index - 1 + artefacts.length) % artefacts.length)}
                aria-label="Previous artefact"
              >
                ‹ Prev
              </button>

              <button
                className="px-4 py-2 bg-tribal-earth text-white rounded-md"
                onClick={() => onChange((index + 1) % artefacts.length)}
                aria-label="Next artefact"
              >
                Next ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtefactViewer;
