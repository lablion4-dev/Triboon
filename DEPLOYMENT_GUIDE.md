# Guide de Déploiement et Configuration DNS Hostinger

## Option 1 : Vercel (Recommandé - Gratuit et Simple)

### Étape 1 : Déployer sur Vercel

1. **Créer un compte Vercel** : Allez sur [vercel.com](https://vercel.com) et connectez-vous avec GitHub
2. **Importer votre projet** :
   - Cliquez sur "Add New Project"
   - Sélectionnez votre dépôt GitHub `lablion4-dev/Triboon`
   - Vercel détectera automatiquement Vite
   - Cliquez sur "Deploy"
3. **Votre site sera déployé** sur une URL comme `triboon-xxx.vercel.app`

### Étape 2 : Configurer le domaine sur Vercel

1. Dans votre projet Vercel, allez dans **Settings** → **Domains**
2. Ajoutez votre domaine (ex: `votredomaine.com` ou `www.votredomaine.com`)
3. Vercel vous donnera des enregistrements DNS à configurer

### Étape 3 : Configurer DNS sur Hostinger

1. **Connectez-vous à Hostinger** : [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Allez dans **Domains** → **Gérer** → **DNS / Zone de noms**
3. **Ajoutez/modifiez les enregistrements** :

   Pour le domaine principal (ex: `votredomaine.com`) :
   ```
   Type: A
   Nom: @
   Valeur: 76.76.21.21 (IP Vercel - vérifiez sur Vercel)
   TTL: 3600
   ```

   Pour www (ex: `www.votredomaine.com`) :
   ```
   Type: CNAME
   Nom: www
   Valeur: cname.vercel-dns.com (vérifiez sur Vercel)
   TTL: 3600
   ```

   **OU** utilisez les valeurs exactes fournies par Vercel dans Settings → Domains

4. **Attendez la propagation DNS** (5 minutes à 48 heures, généralement 15-30 minutes)

---

## Option 2 : Netlify (Alternative Gratuite)

### Étape 1 : Déployer sur Netlify

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Cliquez sur "Add new site" → "Import an existing project"
3. Connectez votre dépôt GitHub
4. Configuration :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
5. Cliquez sur "Deploy site"

### Étape 2 : Configurer le domaine

1. Dans **Site settings** → **Domain management** → **Add custom domain**
2. Entrez votre domaine
3. Suivez les instructions DNS fournies par Netlify

### Étape 3 : Configurer DNS sur Hostinger

Ajoutez les enregistrements fournis par Netlify (généralement un CNAME pour www et un A pour le domaine racine)

---

## Option 3 : GitHub Pages (Gratuit mais nécessite une action)

### Étape 1 : Configurer GitHub Actions

Créez le fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Étape 2 : Activer GitHub Pages

1. Dans votre dépôt GitHub, allez dans **Settings** → **Pages**
2. **Source** : Sélectionnez "GitHub Actions"
3. Votre site sera disponible sur `https://lablion4-dev.github.io/Triboon`

### Étape 3 : Configurer le domaine personnalisé

1. Dans **Settings** → **Pages**, ajoutez votre domaine personnalisé
2. GitHub vous donnera des enregistrements DNS à configurer

### Étape 4 : Configurer DNS sur Hostinger

Ajoutez les enregistrements fournis par GitHub (généralement 4 enregistrements A avec des IP GitHub)

---

## Configuration DNS sur Hostinger (Détails)

### Accéder à la gestion DNS

1. Connectez-vous à [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Allez dans **Domains** → Sélectionnez votre domaine → **Gérer**
3. Cliquez sur **DNS / Zone de noms**

### Types d'enregistrements courants

- **A Record** : Pointe vers une adresse IP (ex: `76.76.21.21`)
- **CNAME Record** : Pointe vers un autre nom de domaine (ex: `cname.vercel-dns.com`)
- **TXT Record** : Pour la vérification du domaine (fourni par la plateforme de déploiement)

### Important

- ⏱️ **Propagation DNS** : Peut prendre de 5 minutes à 48 heures (généralement 15-30 minutes)
- 🔄 **Vérification** : Utilisez [whatsmydns.net](https://www.whatsmydns.net) pour vérifier la propagation
- 🔒 **HTTPS** : Vercel/Netlify activent automatiquement HTTPS après configuration DNS

---

## Recommandation

**Vercel** est la meilleure option car :
- ✅ Déploiement automatique depuis GitHub
- ✅ HTTPS automatique
- ✅ Configuration DNS simple
- ✅ Gratuit pour les projets personnels
- ✅ Excellent pour les sites React/Vite

