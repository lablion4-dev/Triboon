# 💻 PUSH DANS VSCODE TERMINAL

## 🖥️ **Terminal intégré VSCode**

### **Étape 1 : Ouvrir le terminal**
1. **Dans VSCode** : `Ctrl + `` (Ctrl + backtick)
2. **Ou** : Menu → `Terminal` → `New Terminal`
3. **Ou** : `F5` puis choisir "Terminal"

### **Étape 2 : Vérifier que vous êtes dans le bon dossier**
Le terminal doit afficher :
```
c:\Users\Dev Account\Desktop\RB\Nouveau dossier\triboon---the-beat-of-the-blockchain (1)>
```

### **Étape 3 : Exécuter la commande**
Tapez cette commande et appuyez sur **Entrée** :
```bash
git push origin main
```

## 🔍 **Vérification**

### **Après la commande, vous devriez voir :**
```
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 8 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (12/12), 1.23 MiB | 2.45 MiB/s, done.
Total 12 (delta 3), reused 0 (delta 0), pack-reused 0
To https://github.com/lablion4-dev/Triboon.git
   abc1234..741e9db  main -> main
```

### **Si Git demande des identifiants :**
1. **Nom d'utilisateur** : Votre nom d'utilisateur GitHub
2. **Mot de passe** : Votre token GitHub (PAS votre mot de passe GitHub)

## 🚨 **Problèmes courants**

### **Erreur "Authentication failed"**
- Utilisez votre **token GitHub** comme mot de passe
- Pas votre mot de passe GitHub normal

### **Erreur "Repository not found"**
- Vérifiez que vous êtes dans le bon dossier
- Vérifiez que le remote GitHub est configuré

### **Le terminal ne répond pas**
- Appuyez sur `Ctrl + C` puis retry
- Ou fermez et rouvrez le terminal

## 🎯 **Résumé rapide**

1. **Ouvrir terminal** : `Ctrl + `` dans VSCode
2. **Vérifier dossier** : Vous devez être dans le dossier du projet
3. **Exécuter** : `git push origin main`
4. **Entrer identifiants** si demandé

## ✅ **Après le push réussi**

- **GitHub** : Repository mis à jour
- **Vercel** : Redéploiement automatique
- **Votre site** : Logo officiel en ligne !

---

**Le terminal VSCode est le même qu'un terminal normal, juste intégré dans l'éditeur !**