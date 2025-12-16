# Guide de Correction du Logo - TRIBOON

## Problème Identifié
Le logo principal ne s'affichait pas sur le site déployé à cause d'une mauvaise configuration de l'URL de base pour GitHub Pages.

## Solution Appliquée
1. **Configuration Vite mise à jour** : La base URL a été corrigée pour pointer vers `/Triboon/` au lieu de `/triboon---the-beat-of-the-blockchain/`
2. **Assets correctement copiés** : Les assets du dossier `public/assets/` sont maintenant correctement inclus dans le build

## Étapes pour Redéployer

### 1. Construire le site avec la nouvelle configuration
```bash
npm run build
```

### 2. Vérifier que les assets sont présents
Après le build, vérifiez que le dossier `dist/assets/` contient tous les fichiers logo :
- `logo.svg`
- `logo-icon.svg`
- `logo-text.svg`
- `logo-full.svg`
- `mask-gold.svg`
- `pattern-bg.svg`
- `totem.png`
- `triboonlogo.png`
- `offlogo.png`

### 3. Déployer sur GitHub Pages
Il y a plusieurs façons de déployer :

#### Option A : GitHub Actions (Recommandé)
Créez un fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### Option B : GitHub Pages avec branche gh-pages
```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter dans package.json
# "homepage": "https://lablion4-dev.github.io/Triboon"

# Déployer
npm run build
npx gh-pages -d dist
```

#### Option C : Upload manuel
1. Allez dans les paramètres de votre repository GitHub
2. Section "Pages"
3. Sélectionnez la source "Deploy from a branch"
4. Choisissez la branche "main" et le dossier "/ (root)"
5. Uploadez le contenu du dossier `dist/` manuellement

### 4. Vérifier le déploiement
1. Attendez 5-10 minutes après le déploiement
2. Visitez votre site : https://lablion4-dev.github.io/Triboon/
3. Vérifiez que le logo s'affiche maintenant dans l'en-tête

## Configuration Technique

### Fichier vite.config.ts
```typescript
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Configuration GitHub Pages
    const isGitHubPages = process.env.NODE_ENV === 'production';
    const base = isGitHubPages ? '/Triboon/' : '/';
    
    return {
      base: base,
      // ... reste de la configuration
    };
});
```

### Vérification des Assets
Les assets sont maintenant correctement référencés dans `constants.ts` :
```typescript
export const IMAGES = {
  MASK_HERO: envLogo ?? "/assets/logo.svg",
  MASK_GOLD: "/assets/offlogo.png",
  LOGO_ICON: "/assets/logo-icon.svg",
  // ... autres assets
};
```

## Dépannage

### Si le logo ne s'affiche toujours pas :
1. **Vérifiez les outils de développement** : Appuyez sur F12 et regardez l'onglet Network pour voir si les assets se chargent (404 errors)
2. **Vérifiez les chemins** : Les assets doivent être accessibles via `https://lablion4-dev.github.io/Triboon/assets/logo.svg`
3. **Clear cache** : Videz le cache de votre navigateur (Ctrl+F5)
4. **Vérifiez la configuration GitHub Pages** : Assurez-vous que le site est configuré pour utiliser la bonne branche

### URL de test des assets :
- Logo principal : https://lablion4-dev.github.io/Triboon/assets/logo.svg
- Logo icon : https://lablion4-dev.github.io/Triboon/assets/logo-icon.svg
- Logo text : https://lablion4-dev.github.io/Triboon/assets/logo-text.svg

Si ces URLs renvoient 404, le problème vient de la configuration GitHub Pages ou du déploiement.