import { Artefact, TokenDistribution } from './types';

// Allow overriding the primary logo via environment variable
const envLogo = (import.meta as any).env?.VITE_PRIMARY_LOGO;

// Images provided by the user
export const IMAGES = {
  // Recommended: put your official images in
  // [public/assets/](public/assets/.gitkeep:1) and reference them like:
  //   public/assets/logo.png -> "/assets/logo.png"
  //
  // To avoid broken external links, we ship local placeholders by default.
  // Replace these with your official files when ready.
  MASK_HERO: envLogo ?? "/assets/triboonlogo.png",
  // Use user's provided image for Scarification
  MASK_GOLD: "/assets/offlogo.png",
  LOGO_ICON: "/assets/logo-icon.svg",
  PATTERN_BG: "/assets/pattern-bg.svg",
  LOGO_TEXT: "/assets/logo-text.svg",
  LOGO_FULL: "/assets/logo-full.svg",
  TOTEM: "/assets/totem.png",
  RYTHM: "/assets/rythm.png",
  SCARIFICATION: "/assets/Scarification.png",
};

export const TOKEN_DISTRIBUTION: TokenDistribution[] = [
  { name: 'Community', value: 80, fill: '#bc6c25' }, // Terracotta
  { name: 'Ecosystem and Development', value: 10, fill: '#39ff14' }, // Neon Green
  { name: 'Marketing', value: 10, fill: '#bc13fe' }, // Neon Purple
];

export const ARTEFACTS: Artefact[] = [
  {
    id: 1,
    title: "The Guardian",
    description: "A symbol of transformation. When you hold TRIBOON, you adopt the face of the collective.",
    imageUrl: IMAGES.MASK_HERO
  },
  {
    id: 2,
    title: "The Scarification",
    description: "Marks of endurance. Our history is written on the blockchain, permanent and undeniable.",
    imageUrl: IMAGES.SCARIFICATION
  },
  {
    id: 3,
    title: "The Totem",
    description: "The meme. The energy. The unifying force that connects the village to the metaverse.",
    imageUrl: IMAGES.TOTEM
  },
  {
    id: 4,
    title: "The Rhythm",
    description: "The heartbeat of the chain. Every block is a beat, every transaction a dance step.",
    imageUrl: IMAGES.RYTHM
  }
];

export const SOCIAL_LINKS = {
  // Socials
  TWITTER: "https://x.com/Triboontribe",
  TELEGRAM: "https://t.me/+nkD_DY5nVm1hZDI8",
  TIKTOK: "https://vm.tiktok.com/ZMHwWSVqASwxw-8b8Dk/",

  // Token links (fill with your real URLs)
  CHART: "https://dexscreener.com/",
  SOLSCAN: "https://solscan.io/",
};
