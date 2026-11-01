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

Les boutons pointent vers `releases/latest` du dépôt de l’app (APK arm64 et 32 bits) : ils suivent toujours la dernière version publiée. La version et la taille sont lues sur l’API GitHub au chargement de la page.

## Contenu du projet

- `src/pages/index.astro` : page d’accueil.
- `src/pages/confidentialite.astro` : politique de confidentialité.
- `src/components/` : en-tête et pied de page communs.
- `src/data/site.ts` : liens (APK, dépôt, contact), équipe, version Android minimale.
- `src/layouts/BaseLayout.astro` : métadonnées, thème et structure HTML.
- `src/styles/global.css` : styles responsive et thèmes.
- `public/images/` : captures de l’application fournies pour la maquette.
- `site.md`, `plan.md`, `wireframe.md` : cadrage, textes et plan de réalisation.
