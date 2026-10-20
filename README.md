# Loady — site vitrine

Site statique Astro + Tailwind CSS, indépendant du dépôt de l’application Android.

## Développement

Prérequis : Node.js 22.22 ou supérieur.

```sh
npm install
npm run dev
```

## Commandes

```sh
npm run check
npm run build
npm run preview
```

Le build statique sort dans `dist/` et peut être déployé sur Vercel.

## Téléchargement Android

Le bouton principal pointe actuellement vers le dernier APK arm64 de GitHub Releases. Vérifier sa version, sa signature, sa taille et sa compatibilité avant toute mise en ligne publique. Le lien vers les autres versions/architectures est dans le pied de page.

## Contenu du projet

- `src/pages/index.astro` : page d’accueil.
- `src/layouts/BaseLayout.astro` : métadonnées, thème et structure HTML.
- `src/styles/global.css` : styles responsive et thèmes.
- `public/images/` : captures de l’application fournies pour la maquette.
- `site.md`, `plan.md`, `wireframe.md` : cadrage, textes et plan de réalisation.
