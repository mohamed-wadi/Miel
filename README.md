# 🚀 WADI - Landing Page Premium

Une landing page commerciale moderne et professionnelle avec des animations fluides, un système de panier complet et une expérience utilisateur exceptionnelle.

## ✨ Fonctionnalités

### 🎨 Design & UX
- **Design moderne** avec animations fluides (Framer Motion)
- **Interface responsive** optimisée pour tous les appareils
- **Thème personnalisé** avec palette de couleurs premium
- **Animations d'entrée** et interactions micro
- **Écran de chargement** animé

### 🛒 Système E-commerce
- **Catalogue de produits** avec filtres et recherche
- **Panier d'achat** complet avec gestion des quantités
- **Système de catégories** et tri
- **Badges produits** (Nouveau, Populaire, Rupture de stock)
- **Calcul automatique** des totaux et taxes

### 📱 Sections Complètes
- **Hero Section** avec call-to-action
- **Features** avec statistiques
- **Produits** avec filtres avancés
- **Témoignages** clients
- **Tarifs** avec plans d'abonnement
- **Contact** avec formulaire fonctionnel
- **Footer** complet avec liens et newsletter

### 🔧 Technologies Utilisées
- **React 18** avec hooks modernes
- **Vite** pour un build ultra-rapide
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **React Hot Toast** pour les notifications

## 🚀 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd wadi-landing-page
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📦 Scripts Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement
npm run build        # Build pour la production
npm run preview      # Prévisualise le build de production
npm run serve        # Lance le serveur de production
```

## 🎯 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── LoadingScreen.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Products.jsx
│   ├── Testimonials.jsx
│   ├── Pricing.jsx
│   ├── Contact.jsx
│   ├── Cart.jsx
│   └── Footer.jsx
├── App.jsx             # Composant principal
├── main.jsx           # Point d'entrée
└── index.css          # Styles globaux
```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
- **Primary** : Bleu (#0ea5e9)
- **Secondary** : Violet (#d946ef)
- **Accent** : Orange (#f97316)

### Animations
Les animations personnalisées sont dans `tailwind.config.js` :
- `float` : Animation de flottement
- `slide-up/down` : Animations de glissement
- `fade-in` : Apparition en fondu
- `scale-in` : Animation d'échelle

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🛠️ Fonctionnalités Avancées

### Système de Panier
- Ajout/suppression de produits
- Modification des quantités
- Calcul automatique des totaux
- Persistance des données (localStorage)

### Filtres Produits
- Recherche par nom/description
- Filtrage par catégorie
- Tri par prix, popularité, nouveauté
- Interface intuitive

### Animations
- Animations d'entrée au scroll
- Interactions hover/tap
- Transitions fluides
- Effets de parallaxe

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm run build
# Déployer le dossier 'dist' sur Vercel
```

### Netlify
```bash
npm run build
# Déployer le dossier 'dist' sur Netlify
```

### Autres plateformes
Le build génère des fichiers statiques dans le dossier `dist/` qui peuvent être déployés sur n'importe quel hébergeur.

## 📈 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🔧 Configuration Avancée

### Variables d'environnement
Créer un fichier `.env` :
```env
VITE_APP_TITLE=WADI
VITE_APP_DESCRIPTION=Landing page premium
```

### Optimisations
- Images optimisées avec Unsplash
- Lazy loading des composants
- Code splitting automatique
- Compression des assets

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Pour toute question ou problème :
- 📧 Email : contact@wadi.com
- 📱 Téléphone : +33 1 23 45 67 89
- 🌐 Site web : https://wadi.com

---

**Fait avec ❤️ par l'équipe WADI** 