# Maquette fonctionnelle — Loady

Version 1 · 19 octobre 2026

Objectif : fixer la hiérarchie et le contenu de la page avant le développement Astro. Site mondial, français au lancement, conçu d’abord pour téléphone. Les références et le détail des étapes sont dans `plan.md`; les textes complets sont dans `site.md`.

## Page d’accueil — structure générale

```text
┌──────────────────────────────────────────────────────┐
│ Loady        Fonctionnalités  Comment  FAQ   [APK]   │
├──────────────────────────────────────────────────────┤
│ Le téléchargement, simplement.       [téléphone]     │
│ Tes vidéos, directement sur          capture 4.jpg  │
│ ton téléphone.                        thème sombre    │
│ Explication courte                   capture 3.jpg   │
│ [Télécharger l’APK] [Comment ça marche] (optionnel)  │
├──────────────────────────────────────────────────────┤
│ Certaines apps gardent...  →  Loady crée un fichier  │
├──────────────────────────────────────────────────────┤
│ 01 Copie le lien → 02 Choisis → 03 Télécharge        │
│                 captures 11.jpg / 12.jpg             │
├──────────────────────────────────────────────────────┤
│ Les fonctionnalités principales                      │
│ fichiers · formats · qualité · progression · historique│
├──────────────────────────────────────────────────────┤
│ Galerie d’écrans Loady                                │
│ 3/4 accueil  11/12 analyse  10 progression  5 historique│
├──────────────────────────────────────────────────────┤
│ Plateformes prises en charge                          │
├──────────────────────────────────────────────────────┤
│ Confidentialité : aperçu + lien vers la politique     │
├──────────────────────────────────────────────────────┤
│ FAQ                                                   │
├──────────────────────────────────────────────────────┤
│ CTA final : Le prochain lien, garde-le avec Loady.    │
│ [Télécharger l’APK Android]                           │
├──────────────────────────────────────────────────────┤
│ Loady · Installer · Confidentialité · Contact · Code  │
└──────────────────────────────────────────────────────┘
```

## Disposition par section

### 1. En-tête

- Fond légèrement translucide ou surface unie; logo Loady à gauche.
- Navigation courte : Fonctionnalités, Comment ça marche, FAQ.
- Sélecteur de thème compact et accessible.
- Bouton primaire « Télécharger l’APK ».
- Sur mobile : logo, icône du thème et menu compact; CTA APK visible dès l’ouverture du menu et dans le hero.

### 2. Hero

- Deux colonnes sur grand écran : promesse/CTA à gauche, téléphone à droite.
- Une colonne sur petit écran : texte et CTA d’abord, capture ensuite.
- Titre exact : **Tes vidéos, directement sur ton téléphone.**
- Texte : « Copie un lien, choisis la qualité qui te convient et télécharge le média pour le retrouver dans tes fichiers, même sans retourner dans l’application où tu l’as découvert. »
- Capture principale : `public/images/4.jpg` dans un cadre de téléphone. `public/images/3.jpg` peut apparaître en vignette secondaire ou servir de variante claire; éviter d’afficher deux captures presque identiques côte à côte sur mobile.
- CTA principal direct vers l’APK officiel. Près du lien, afficher au minimum Android et la version/taille exactes une fois le binaire choisi.
- Aucun autoplay, faux champ interactif ou interface recréée qui laisse croire que le site télécharge les médias.

### 3. Problème / réponse

- Bandeau contrasté après le hero.
- Présenter le problème en une phrase, puis la réponse Loady en une phrase.
- Visuel simple : « lien dans l’app source → fichier sur ton téléphone ».
- Ne pas présenter les plateformes comme partenaires ni attribuer à toutes les mêmes restrictions.

### 4. Parcours en trois étapes

- Trois cartes horizontales sur desktop, empilées sur mobile.
- Captures : `11.jpg` (analyse et qualités, sombre) et `12.jpg` (même écran, clair); n’en garder qu’une à la fois dans la petite largeur.
- Texte : copie le lien, choisis parmi les options disponibles, télécharge et retrouve le fichier.
- `8.jpg` montre aussi l’analyse d’un lien YouTube, mais contient des détails de média et d’URL à masquer avant usage public.

### 5. Bénéfices

- Grille de 4 ou 5 points, sans répéter le parcours étape par étape.
- Contenu : fichiers accessibles sur l’appareil, choix de qualité disponible, formats selon la source, suivi de progression, historique.
- Icônes simples et cohérentes; chaque point reste compréhensible sans l’icône.

### 6. Captures de l’app

- Présentation en cartes ou en carrousel accessible; pas de carrousel automatique.
- Sélection recommandée :
  - `3.jpg` accueil clair;
  - `4.jpg` accueil sombre;
  - `11.jpg` ou `12.jpg` analyse/choix qualité;
  - `10.jpg` téléchargement en cours;
  - `5.jpg` historique sombre ou `2.jpg` clair.
- Les fichiers `1.jpg` et `6.jpg` peuvent illustrer les réglages si ces options sont prévues pour la version présentée.
- `7.jpg` affiche un état de transfert précoce; `9.jpg` montre un téléchargement terminé mais son nom de fichier est peu présentable; `13.jpg` contient une notification et est à écarter.
- Avant publication, recadrer ou flouter les liens, titres, handles et autres contenus de démonstration. Garder les images originales comme références et produire des copies optimisées pour le site.

### 7. Plateformes

- Liste visuelle avec noms ou pictogrammes sobres : YouTube, TikTok, Instagram, Snapchat, X, Facebook, Pinterest, Threads.
- Une ligne sous la liste précise que la disponibilité dépend du contenu, du lien et de l’état de compatibilité.
- Utiliser les marques avec prudence, sans badge de partenariat.

### 8. Confidentialité

- Bloc concis : les téléchargements sont enregistrés sur le téléphone; le site renvoie vers la politique détaillée.
- Bouton secondaire « Lire la politique de confidentialité ».
- Rédiger la politique au moment convenu, en vérifiant les pratiques réelles de la version publique.

### 9. FAQ

- Accordéon accessible, ouvert au clavier et annoncé correctement aux lecteurs d’écran; sans dépendance à une bibliothèque lourde.
- Questions prévues : installation APK, Android/iOS, emplacement des fichiers, qualités/formats, liens non compatibles, mises à jour, usage autorisé.
- Sur mobile, garder des zones de clic généreuses et des réponses courtes.

### 10. CTA final et pied de page

- Reprendre le CTA principal, sans introduire une nouvelle promesse.
- Ajouter une courte note d’installation et la provenance officielle de l’APK.
- Pied de page : politique, contact, code source, mentions légales selon les liens fournis.

## Comportements transversaux

- Mobile-first, mises en page fluides, pas de débordement horizontal.
- Thème clair/sombre avec préférence système au premier chargement et contrôle visible.
- Respect de `prefers-reduced-motion`, états de focus visibles et contraste vérifié.
- Les captures ont tailles explicites, textes alternatifs utiles et chargement différé lorsqu’elles sont sous la ligne de flottaison.
- Le bouton APK ouvre un APK seulement sur une destination officielle sélectionnée; afficher une information adaptée aux visiteurs sur appareil non Android.
- Pas d’analytics web ni de cookies de suivi ajoutés par défaut.

## Avant de passer au code

- Finaliser la sélection des captures et les copies sans URL/notifications réelles.
- Vérifier l’URL de l’APK officiel, sa version, sa taille et la compatibilité.
- Confirmer les liens de contact et de dépôt public.
- Utiliser `site.md` pour revoir les textes, puis implémenter cette structure dans Astro.

## Vérification des propositions — repères 2026

La maquette suit les bonnes pratiques mesurables du web actuel. Les choix de style (ambiance sombre premium, capture dans un cadre de téléphone, accents lumineux) sont des décisions de marque, pas des normes officielles. L’audit confirme la structure générale; les ajustements ci-dessous sont à intégrer pendant la réalisation.

### Ajustements à intégrer

- **Confiance du téléchargement :** libeller la source (« APK officiel Loady sur GitHub » ou autre source officielle confirmée), afficher version, taille et compatibilité Android à côté du CTA, puis proposer une courte explication d’installation. Le fichier devra être un APK de release signé; conserver la même clé de signature pour les mises à jour. Ne jamais pointer le bouton vers un artefact temporaire GitHub Actions.
- **Visiteurs sur ordinateur/iOS :** le CTA doit dire clairement qu’il s’agit d’un APK Android. Pour une visite hors Android, garder l’information et proposer de copier/partager l’adresse ou d’afficher un QR code; ne pas déclencher un téléchargement sans utilité.
- **Captures crédibles :** conserver les captures réelles, les anonymiser et les optimiser. Les captures servent à expliquer l’app; elles ne doivent pas remplacer les vrais textes HTML ni porter seules une information essentielle. Faire correspondre le texte public aux capacités prévues pour la version cible.
- **Accessibilité visée :** WCAG 2.2 niveau AA. Contraste minimal de 4,5:1 pour le texte courant, 3:1 pour le grand texte et les éléments graphiques pertinents; cibles interactives d’au moins 24 × 24 CSS px ou espacées selon le critère; focus clavier visible, structure de titres logique, liens/boutons nommés et mouvement réduit respecté. Ces points doivent être vérifiés sur les deux thèmes.
- **Performance :** mesurer Core Web Vitals après mise en ligne sur données de terrain lorsque disponibles : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 au 75e percentile. Garder les captures dimensionnées et compressées, réserver leur espace, différer le chargement sous la ligne de flottaison et éviter les médias/animations lourds.
- **SEO et partage :** titre et description uniques par page, URL canonique, HTML sémantique, texte descriptif dans la page, Open Graph, favicon, sitemap et `robots.txt`. Les résultats Google peuvent reformuler les titres/extraits; les métadonnées ne garantissent donc pas un affichage exact.
- **Privacy by default :** aucun traceur ou analytics ajouté sans décision explicite. Finaliser la politique de confidentialité et les mentions applicables avant le lancement public, à partir des pratiques réelles de l’application et du site.

### Verdict

- **Conforme dans son intention :** priorité mobile, proposition de valeur immédiate, CTA clair, captures réelles, navigation courte, pages d’aide, thèmes clair/sombre, absence d’autoplay, et réduction des effets inutiles.
- **À contrôler pendant l’implémentation :** contrastes réels des couleurs `#3D73FF`/`#58D8FF` sur chaque surface; tailles de texte et contrôles; comportement clavier et lecteur d’écran; absence de flash du thème; poids des images; fonctionnement du téléchargement Android.
- **Tendance visuelle :** garder une direction sobre et reconnaissable, avec une hiérarchie nette et quelques accents de marque. Les effets de verre, halos et dégradés peuvent rester décoratifs et modérés; aucun style “2026” ne remplace la lisibilité, la crédibilité du téléchargement et la rapidité.

### Sources de vérification

- [WCAG 2.2 — recommandation W3C](https://www.w3.org/TR/WCAG22/) et [contraste minimal](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [taille minimale des cibles](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum).
- [Core Web Vitals — seuils officiels](https://web.dev/articles/vitals).
- [Google Search — liens de titre](https://developers.google.com/search/docs/appearance/title-link), [extraits](https://developers.google.com/search/docs/appearance/snippet), [images](https://developers.google.com/search/docs/appearance/google-images).
- [Android — signature des applications](https://developer.android.com/studio/publish/app-signing) et [installation d’applications provenant de sources externes](https://support.google.com/android/answer/9457058?hl=fr).
- [Astro — déploiement statique sur Vercel](https://docs.astro.build/en/guides/deploy/vercel/).
