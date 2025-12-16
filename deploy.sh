#!/bin/bash

# Script de déploiement automatique pour TRIBOON
# Ce script construit et déploie le site sur GitHub Pages

echo "🚀 Début du déploiement TRIBOON..."

# Vérifier que npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé. Veuillez installer Node.js et npm."
    exit 1
fi

# Installer les dépendances si node_modules n'existe pas
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

# Construire le site
echo "🔨 Construction du site..."
npm run build

# Vérifier que le build a réussi
if [ ! -d "dist" ]; then
    echo "❌ Échec de la construction. Le dossier dist/ n'existe pas."
    exit 1
fi

echo "✅ Build réussi !"

# Vérifier que les assets sont présents
echo "🖼️  Vérification des assets..."
assets=("logo.svg" "logo-icon.svg" "logo-text.svg" "logo-full.svg" "mask-gold.svg" "pattern-bg.svg" "totem.png" "triboonlogo.png" "offlogo.png")
for asset in "${assets[@]}"; do
    if [ ! -f "dist/assets/$asset" ]; then
        echo "❌ Asset manquant: dist/assets/$asset"
        exit 1
    fi
done

echo "✅ Tous les assets sont présents !"

# Option de déploiement
echo ""
echo "Choisissez une option de déploiement :"
echo "1) GitHub Actions (automatique via workflow)"
echo "2) gh-pages (npm package)"
echo "3) Instructions pour upload manuel"
read -p "Votre choix (1-3): " choice

case $choice in
    1)
        echo "📝 Pour GitHub Actions :"
        echo "1. Créez un fichier .github/workflows/deploy.yml"
        echo "2. Copiez le contenu du GUIDE_LOGO_FIX.md"
        echo "3. Committez et pousssez vos changements"
        echo "4. GitHub Actions déploiera automatiquement"
        ;;
    2)
        echo "📦 Installation de gh-pages..."
        npm install --save-dev gh-pages
        
        echo "🚀 Déploiement avec gh-pages..."
        npx gh-pages -d dist
        
        echo "✅ Déployé avec succès !"
        echo "🌐 Votre site sera bientôt disponible sur : https://lablion4-dev.github.io/Triboon/"
        ;;
    3)
        echo "📋 Instructions pour upload manuel :"
        echo "1. Allez dans https://github.com/lablion4-dev/Triboon"
        echo "2. Settings > Pages"
        echo "3. Source: Deploy from a branch"
        echo "4. Branch: main, Folder: / (root)"
        echo "5. Uploadez le contenu du dossier dist/"
        ;;
    *)
        echo "❌ Choix invalide"
        exit 1
        ;;
esac

echo ""
echo "🎉 Déploiement terminé !"
echo "💡 N'oubliez pas de vérifier que le logo s'affiche correctement sur votre site."