# TRIBOON — The Beat of the Blockchain

![GHBanner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

## Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: [https://ai.studio/apps/drive/1YiG5qajMUL-cZFBcExDI8XgCAk6fFZYH](https://ai.studio/apps/drive/1YiG5qajMUL-cZFBcExDI8XgCAk6fFZYH)

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Update the official logo, images, and links

### 1) Add your images (recommended)

With Vite, anything you place in [`public/assets/`](public/assets/.gitkeep:1) is served at runtime from `/assets/...`.

Example:

- `public/assets/logo.png` -> `/assets/logo.png`
- `public/assets/logo-text.png` -> `/assets/logo-text.png`

Then edit [`IMAGES`](constants.ts:4) in [`constants.ts`](constants.ts:1) and replace the current Imgur URLs with your local paths.

### 2) Update X / Telegram / TikTok + Chart + Solscan

Edit [`SOCIAL_LINKS`](constants.ts:51) in [`constants.ts`](constants.ts:1) and set:

- `TWITTER` (X)
- `TELEGRAM`
- `TIKTOK`
- `CHART` (Dexscreener/Dextools/etc)
- `SOLSCAN` (token/contract page)

These links are used by the top header ([`Header`](components/Header.tsx:1)) and the hero CTAs ([`Hero`](components/Hero.tsx:1)).
