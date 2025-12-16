# Instructions pour pousser vers GitHub

## Après avoir créé votre dépôt sur GitHub, exécutez ces commandes :

```bash
# Ajouter le dépôt distant (remplacez USERNAME et REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Renommer la branche principale en 'main' (si nécessaire)
git branch -M main

# Pousser le code vers GitHub
git push -u origin main
```

## Si vous avez déjà un dépôt GitHub existant :

```bash
# Vérifier les dépôts distants
git remote -v

# Ajouter ou modifier le dépôt distant
git remote add origin https://github.com/USERNAME/REPO_NAME.git
# OU si le remote existe déjà :
git remote set-url origin https://github.com/USERNAME/REPO_NAME.git

# Pousser le code
git push -u origin main
```

## Commandes utiles pour la suite :

```bash
# Voir le statut des fichiers
git status

# Ajouter des fichiers modifiés
git add .

# Créer un commit
git commit -m "Description de vos modifications"

# Pousser les modifications
git push
```

