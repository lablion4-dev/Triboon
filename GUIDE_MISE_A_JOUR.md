# Guide de Mise à Jour du Site TRIBOON

Ce guide vous explique comment mettre à jour toutes les données de votre site web.

## 📁 Fichiers Principaux à Modifier

### 1. **`constants.ts`** - Fichier Central de Configuration

C'est le fichier le plus important ! Il contient toutes les données principales :

#### 🔗 Liens Sociaux (`SOCIAL_LINKS`)
```typescript
export const SOCIAL_LINKS = {
  TWITTER: "https://x.com/Triboontribe",
  TELEGRAM: "https://t.me/+nkD_DY5nVm1hZDI8",
  TIKTOK: "https://vm.tiktok.com/ZMHwWSVqASwxw-8b8Dk/",
  CHART: "https://dexscreener.com/",      // ← Modifier ici
  SOLSCAN: "https://solscan.io/",        // ← Modifier ici
};
```

#### 📊 Tokenomics (`TOKEN_DISTRIBUTION`)
```typescript
export const TOKEN_DISTRIBUTION: TokenDistribution[] = [
  { name: 'Community', value: 80, fill: '#bc6c25' },
  { name: 'Ecosystem & CEX', value: 10, fill: '#39ff14' },
  { name: 'Marketing', value: 10, fill: '#bc13fe' },
];
```
**Pour modifier** : Changez les valeurs `value` (pourcentages) et `fill` (couleurs).

#### 🖼️ Images (`IMAGES`)
```typescript
export const IMAGES = {
  MASK_HERO: "/assets/logo.svg",
  MASK_GOLD: "/assets/offlogo.png",
  LOGO_ICON: "/assets/logo-icon.svg",
  // ... etc
};
```
**Pour modifier** : 
- Ajoutez vos images dans `public/assets/`
- Mettez à jour les chemins ici

#### 🎨 Artefacts (`ARTEFACTS`)
```typescript
export const ARTEFACTS: Artefact[] = [
  {
    id: 1,
    title: "The Guardian",                    // ← Modifier le titre
    description: "A symbol of...",            // ← Modifier la description
    imageUrl: IMAGES.MASK_HERO                 // ← Modifier l'image
  },
  // ... ajoutez plus d'artefacts ici
];
```

---

### 2. **`components/Hero.tsx`** - Section Hero (Page d'accueil)

**Lignes à modifier** :
- **Ligne 55-57** : Titre principal "TRIBOON"
- **Ligne 59-61** : Sous-titre "The Beat of the Blockchain"
- **Ligne 63-65** : Description "From the jungle to the blockchain."

```tsx
<h1 className="...">
  TRIBOON  {/* ← Modifier ici */}
</h1>

<h2 className="...">
  The Beat of the Blockchain  {/* ← Modifier ici */}
</h2>

<p className="...">
  From the jungle to the blockchain.  {/* ← Modifier ici */}
</p>
```

---

### 3. **`components/Manifesto.tsx`** - Section Manifeste

**Lignes à modifier** :
- **Ligne 12** : Titre de section "Culture Before Hype"
- **Ligne 17-20** : Texte du manifeste
- **Ligne 24** : Citation

```tsx
<SectionTitle title="Culture Before Hype" subtitle="The Manifesto" />
{/* Modifier le contenu du paragraphe ci-dessous */}
<p>
  <span className="...">TRIBOON</span> is not just a token...
</p>
```

---

### 4. **`components/Tokenomics.tsx`** - Section Tokenomics

**Lignes à modifier** :
- **Ligne 22-24** : Total Supply (1,000,000,000)
- **Ligne 32** : Tax (0/0)
- **Ligne 37** : Liquidity status

```tsx
<h3 className="...">
  1,000,000,000  {/* ← Modifier le total supply */}
</h3>
<h4 className="...">
  0/0  {/* ← Modifier la tax */}
</h4>
```

---

### 5. **`index.html`** - Métadonnées et Titre

**Ligne 6** : Titre de la page (visible dans l'onglet du navigateur)
```html
<title>TRIBOON | From the Jungle to the Blockchain</title>
```

---

## 🔄 Processus de Mise à Jour

### Méthode 1 : Mise à jour Locale puis Push vers GitHub

1. **Modifier les fichiers** dans votre éditeur
2. **Tester localement** :
   ```bash
   npm run dev
   ```
3. **Vérifier** que tout fonctionne sur `http://localhost:3000`
4. **Commit et Push** :
   ```bash
   git add .
   git commit -m "Mise à jour: [description de vos changements]"
   git push
   ```
5. **Déploiement automatique** :
   - Si vous utilisez **Vercel/Netlify** : Le déploiement se fait automatiquement
   - Si vous utilisez **GitHub Pages** : Attendez que l'action GitHub se termine

### Méthode 2 : Mise à jour Directe sur GitHub

1. Allez sur [github.com/lablion4-dev/Triboon](https://github.com/lablion4-dev/Triboon)
2. Cliquez sur le fichier à modifier (ex: `constants.ts`)
3. Cliquez sur l'icône ✏️ (Edit)
4. Modifiez le contenu
5. Cliquez sur **"Commit changes"**
6. Le déploiement se fera automatiquement

---

## 📝 Exemples de Mises à Jour Courantes

### Exemple 1 : Changer le lien du Chart

**Fichier** : `constants.ts` (ligne 64)
```typescript
// Avant
CHART: "https://dexscreener.com/",

// Après
CHART: "https://dexscreener.com/solana/VOTRE_ADRESSE_CONTRACT",
```

### Exemple 2 : Modifier le Total Supply

**Fichier** : `components/Tokenomics.tsx` (ligne 23)
```tsx
// Avant
<h3 className="...">1,000,000,000</h3>

// Après
<h3 className="...">500,000,000</h3>
```

### Exemple 3 : Ajouter un Nouvel Artefact

**Fichier** : `constants.ts` (dans `ARTEFACTS`)
```typescript
export const ARTEFACTS: Artefact[] = [
  // ... artefacts existants
  {
    id: 5,  // Nouvel ID
    title: "The New Symbol",
    description: "Description du nouvel artefact",
    imageUrl: "/assets/nouvelle-image.png"  // Image dans public/assets/
  }
];
```

### Exemple 4 : Changer les Couleurs Tokenomics

**Fichier** : `constants.ts` (dans `TOKEN_DISTRIBUTION`)
```typescript
export const TOKEN_DISTRIBUTION: TokenDistribution[] = [
  { name: 'Community', value: 80, fill: '#FF5733' },  // Nouvelle couleur
  { name: 'Ecosystem & CEX', value: 10, fill: '#33FF57' },
  { name: 'Marketing', value: 10, fill: '#3357FF' },
];
```

### Exemple 5 : Modifier le Texte du Hero

**Fichier** : `components/Hero.tsx`
```tsx
// Ligne 55-57
<h1 className="...">
  NOUVEAU NOM  {/* Au lieu de TRIBOON */}
</h1>

// Ligne 59-61
<h2 className="...">
  Nouveau sous-titre  {/* Au lieu de "The Beat of the Blockchain" */}
</h2>
```

---

## 🖼️ Ajouter de Nouvelles Images

1. **Placez votre image** dans `public/assets/`
   - Exemple : `public/assets/nouvelle-image.png`

2. **Mettez à jour `constants.ts`** :
   ```typescript
   export const IMAGES = {
     // ... autres images
     NOUVELLE_IMAGE: "/assets/nouvelle-image.png",
   };
   ```

3. **Utilisez l'image** dans vos composants :
   ```tsx
   import { IMAGES } from '../constants';
   <img src={IMAGES.NOUVELLE_IMAGE} alt="Description" />
   ```

---

## ⚠️ Points Importants

1. **Sauvegardez toujours avant de modifier** : Faites un commit avant de grandes modifications
2. **Testez localement** : Utilisez `npm run dev` avant de pousser
3. **Vérifiez la syntaxe** : Les erreurs TypeScript/JavaScript empêcheront le build
4. **Format des URLs** : Assurez-vous que les URLs commencent par `http://` ou `https://`
5. **Chemins d'images** : Les images dans `public/assets/` sont accessibles via `/assets/nom-fichier.ext`

---

## 🚀 Après la Mise à Jour

Une fois vos modifications poussées sur GitHub :

- **Vercel/Netlify** : Déploiement automatique en 1-2 minutes
- **GitHub Pages** : Déploiement via GitHub Actions (5-10 minutes)

Vérifiez votre site en ligne après quelques minutes !

---

## 📞 Besoin d'Aide ?

Si vous avez des questions sur une modification spécifique, consultez :
- Les commentaires dans les fichiers
- Ce guide
- La documentation React/Vite

