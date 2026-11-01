# Plan complet — site vitrine Loady

Document de travail mis à jour le 1er novembre 2026. Il décrit les étapes du cadrage au déploiement du site sur Vercel. Le site a son propre dépôt GitHub, séparé de celui de l’application.

## Avancement du site

- **En ligne** sur https://loady-site.vercel.app/, déployé par Vercel depuis le dépôt GitHub `dev-Chris06/loady-site` (branche `main`).
- Socle : Astro 7, Tailwind CSS 4, TypeScript 6; rendu statique.
- Page d’accueil unique (`src/pages/index.astro`) : navigation mobile, thème clair/sombre, hero, comment ça marche, fonctionnalités, captures, plateformes, encadré confidentialité, FAQ et appel final.
- Captures utilisées : `3.jpg`, `4.jpg`, `5.jpg`, `10.jpg`, `11.jpg`.
- Métadonnées : titre, description, URL canonique, Open Graph, favicon et `robots.txt`.
- **Téléchargement APK réglé** : le bouton pointe vers `releases/latest/download/app-arm64-v8a-release.apk` du dépôt de l’app. Depuis la v1.14.0, chaque tag de l’app publie une Release GitHub (arm64 + 32 bits). Le lien suit donc toujours la dernière version (actuellement `1.15.4`).
- Rappel : l’APK du site est une solution temporaire; l’objectif est la publication sur les stores.

### Fait le 1er novembre 2026 (pas encore poussé)

- Section `#equipe` : Daziano TOGBEDJI, Christopher AHO GLELE et Fritzell AKOBI, avec lien GitHub.
- Page `/confidentialite/` : politique détaillée, établie à partir du code de l’app 1.15.4 (Firebase Analytics, Firebase Cloud Messaging, vérification des versions sur GitHub, permissions). L’encadré `#confidentialite` de l’accueil, que l’app ouvre, la résume et y renvoie.
- Section `#installer` : étapes, APK 64 bits et 32 bits, dépannage. La version et la taille des APK sont lues sur l’API GitHub au chargement de la page (texte fixe si l’API ne répond pas).
- Android 7.0 minimum affiché près des boutons et dans la FAQ.
- `site` réglé dans `astro.config.mjs` (URL canonique par page), image de partage `og-image.png`, `sitemap.xml`, `robots.txt` qui pointe vers le sitemap.
- En-tête et pied de page partagés (`src/components/`), liens et équipe dans `src/data/site.ts`.
- Page `/conditions/` (conditions d’utilisation, droits d’auteur), ouverte par l’app à partir de la 1.16.0 (réglages et fenêtre du premier lancement).

### Reste à faire

1. **Adresse e-mail dédiée** : la créer et la mettre dans `contact` (`src/data/site.ts`). En attendant, le contact est l’adresse Gmail de Christopher.
2. **Durée de conservation Firebase** : vérifier la valeur réglée dans la console Firebase et l’écrire dans `/confidentialite/`.
3. **Identifiant publicitaire** : Firebase Analytics peut le collecter (la politique le dit). Le désactiver dans l’app simplifierait la fiche Data Safety de Google Play.
4. **Captures** : les reprendre si l’interface a changé depuis le 19/10 et vérifier qu’elles ne montrent aucune donnée privée.

## 1. Objectif et décisions de départ

- **Produit :** Loady, application mobile Android.
- **Audience :** mondiale. Le Bénin est le lieu de résidence du propriétaire, pas la zone cible du produit.
- **Langue de lancement :** français, avec tutoiement. Préparer les contenus pour pouvoir les traduire plus tard sans introduire des traductions incomplètes.
- **Promesse retenue :** « Tes vidéos, directement sur ton téléphone. »
- **Formulation produit :** parler de « fichiers sur ton téléphone »; ne pas promettre leur présence dans toutes les applications Galerie.
- **CTA principal :** « Télécharger l’APK Android », avec téléchargement direct de l’APK officiel.
- **Identité :** couleurs de l’application, bleu `#3D73FF` et cyan `#58D8FF`; thèmes clair et sombre.
- **Stack :** Astro, Tailwind CSS et TypeScript pour les interactions ponctuelles; site statique, sans React par défaut.
- **Hébergement :** Vercel, avec déploiements d’aperçu pour les changements et déploiement de production depuis la branche principale.
- **Dépôt visé :** `loady-site`, séparé de `dazdownloader`.

Le contenu rédigé dans `site.md` est le brouillon de copywriting de référence. Treize captures sont déjà présentes dans `public/images/` et inventoriées ci-dessous.

## 2. Pages prévues et contenu

### 2.1 Accueil — `/`

Page principale qui présente Loady, montre son parcours et mène au téléchargement.

1. **Navigation**
   - Logo Loady.
   - Liens d’ancrage vers Fonctionnalités, Comment ça marche, Plateformes et FAQ.
   - Sélecteur clair/sombre accessible.
   - CTA « Télécharger l’APK ».

2. **Hero**
   - Surtitre : « Le téléchargement, simplement. »
   - Titre : « Tes vidéos, directement sur ton téléphone. »
   - Texte : « Copie un lien, choisis la qualité qui te convient et télécharge le média pour le retrouver dans tes fichiers, même sans retourner dans l’application où tu l’as découvert. »
   - CTA principal : « Télécharger l’APK Android ».
   - Action secondaire : « Voir comment ça marche ».
   - Capture de l’application sur un téléphone, sans fausse fonctionnalité d’interface.

3. **Problème et réponse**
   - Expliquer que certaines applications gardent leurs téléchargements à l’intérieur de leur propre app et que d’autres n’offrent pas de bouton de téléchargement.
   - Présenter Loady comme un parcours du lien vers un fichier local.
   - Employer une formulation neutre et éviter de prétendre que les politiques de toutes les plateformes sont identiques.

4. **Comment ça marche**
   - 01 : copie le lien depuis son application source.
   - 02 : Loady analyse le lien et montre les formats/qualités disponibles.
   - 03 : télécharge et retrouve le fichier sur son téléphone.
   - Illustrer ces étapes avec captures ou un montage léger de captures, pas une vidéo lancée automatiquement.

5. **Fonctionnalités principales**
   - Téléchargements enregistrés comme fichiers sur le téléphone.
   - Formats et qualités selon les médias sources.
   - Prise en charge de plusieurs plateformes.
   - Progression du téléchargement.
   - Historique des téléchargements.
   - Mentionner Photos/MP3 et toute fonction additionnelle seulement après validation de la version que le site présente.

6. **Aperçu de l’app**
   - Captures sélectionnées dans `public/images/` : saisie de lien, aperçu/analyse, sélection de format ou qualité, progression, historique.
   - Chaque capture a un texte alternatif décrivant ce qu’elle montre.
   - Ne pas publier de données personnelles, liens privés ou notifications contenant des informations privées dans les captures.

7. **Plateformes**
   - Pour le lancement éditorial, conserver la liste retenue : YouTube, TikTok, Instagram, Snapchat, X, Facebook, Pinterest et Threads.
   - Ajouter une note que la disponibilité dépend du lien, du contenu et de la compatibilité au moment du téléchargement.
   - Ne pas utiliser les logos de façon à laisser croire à un partenariat ou à une approbation officielle.

8. **Confidentialité — aperçu**
   - Dire que les fichiers téléchargés sont enregistrés sur le téléphone et qu’un compte Loady n’est pas requis pour le parcours décrit.
   - Lien vers `/confidentialite/`.
   - Le texte détaillé sera rédigé plus tard, après validation des SDK et données de la version destinée à la sortie.

9. **FAQ**
   - Comment télécharger Loady ?
   - Loady est-elle disponible sur iPhone ?
   - Où retrouver les fichiers téléchargés ?
   - Quels formats et quelles qualités sont proposés ?
   - Est-ce que tous les liens fonctionnent ?
   - Comment installer et mettre à jour un APK ?
   - Puis-je télécharger n’importe quelle vidéo ?

10. **Appel final**
    - Titre : « Le prochain lien, garde-le avec Loady. »
    - Rappel de la promesse et bouton de téléchargement direct.

11. **Pied de page**
    - Loady, Fonctionnalités, FAQ, Confidentialité, Contact, Code source et Mentions légales selon les informations disponibles.

### 2.2 Confidentialité — `/confidentialite/`

Page dédiée, à rédiger au moment convenu et à partir du comportement réel de la version publique. Prévoir au minimum : responsable et contact, données et événements concernés, traitements locaux, SDK tiers (Analytics, notifications, publicité si ajoutée), destinataires, durée de conservation, droits applicables, demandes de suppression et date de mise à jour.

Ne pas publier de texte générique prétendant que l’app ne transmet aucune donnée sans avoir vérifié l’instrumentation et la configuration de la version distribuée. Cette page est un livrable de prépublication, même si son contenu est écrit plus tard.

### 2.3 Installation APK — `/installer/` (recommandée)

Une page courte aide les personnes qui viennent d’un ordinateur ou découvrent l’installation hors Play Store.

- Télécharger Loady depuis la source officielle.
- Ouvrir le fichier APK sur Android.
- Si Android le demande, autoriser temporairement le navigateur ou le gestionnaire de fichiers à installer des applications.
- Installer, puis rouvrir Loady.
- Pour les mises à jour, reprendre l’APK de la même source officielle afin de conserver la continuité de signature.
- Ajouter une section dépannage : téléchargement incomplet, architecture incompatible, installation bloquée, mise à jour refusée.

Si cette page est redondante avec la FAQ finale, la fusionner dans l’accueil; conserver une URL dédiée seulement si elle apporte une aide pratique suffisante.

### 2.4 Pages à garder hors du premier lancement

- **Roadmap :** pas de roadmap publique prévue au lancement; elle pourrait rendre visibles des engagements qui changent pendant le développement.
- **Changelog :** optionnel. À ajouter lorsque les releases publiques sont régulières et disposent de notes de version fiables.
- **Traductions :** le français est la première version. Ajouter une langue seulement quand les textes et la politique peuvent être maintenus dans cette langue.

## 3. Étapes de réalisation

### Étape 1 — Rassembler les éléments

- Captures reçues dans `public/images/` :
  - `3.jpg` : accueil en thème clair, 540 × 1170 px.
  - `4.jpg` : accueil en thème sombre, 540 × 1170 px.
  - `2.jpg` : historique en thème clair, 540 × 1170 px.
  - `5.jpg` : historique en thème sombre, 540 × 1170 px.
  - `1.jpg` : réglages en thème clair, 540 × 1170 px.
  - `6.jpg` : réglages en thème sombre, 540 × 1170 px.
  - `7.jpg` : analyse en thème clair avec qualité sélectionnée et téléchargement en cours, 540 × 1170 px.
  - `8.jpg` : aperçu d’une vidéo YouTube et choix de qualités, 540 × 1170 px.
  - `9.jpg` : analyse terminée après un téléchargement TikTok, choix de formats et actions pour ouvrir/télécharger à nouveau, thème sombre, 540 × 1170 px.
  - `10.jpg` : transfert en cours dans l’écran d’analyse, thème sombre, 540 × 1170 px.
  - `11.jpg` : aperçu vidéo et choix de qualité avant téléchargement, thème sombre, 540 × 1170 px.
  - `12.jpg` : aperçu vidéo et choix de qualité avant téléchargement, thème clair, 540 × 1170 px.
  - `13.jpg` : variante de `12.jpg` avec bannière de notification visible; éviter cette version pour le site.
- Les six fichiers sont des JPEG légers (environ 35 à 53 KiB chacun).
- Captures `7.jpg` à `13.jpg` : JPEG 540 × 1170 px, entre environ 41 et 59 KiB chacun.
- Choix visuel provisoire : `4.jpg` pour le hero sombre; `3.jpg` pour montrer le thème clair. Utiliser `11.jpg` et `12.jpg` pour l’analyse et le choix de qualité, `10.jpg` pour la progression, et éventuellement `9.jpg` pour le résultat terminé. Les captures d’historique/réglages restent disponibles pour une galerie de fonctionnalités.
- Avant publication, recadrer/masquer les URL, titres de médias, identifiants de comptes et notifications provenant des exemples réels; privilégier une démonstration neutre et cohérente avec l’audience mondiale.
- Vérifier que le slogan intégré à l’interface des captures reste voulu pour la présentation future; recapturer ou recadrer si l’interface évolue.
- Confirmer les liens officiels du projet et de contact à afficher.

**Livrable :** inventaire des assets et sélection préliminaire des visuels.

### Étape 2 — Figer le contenu de lancement

- Relire `site.md` avec le propriétaire et l’équipe.
- Garder le slogan, le vocabulaire des fichiers locaux et la liste actuelle des plateformes.
- Valider que chaque fonctionnalité de la page correspond bien à la vision produit annoncée.
- Finaliser FAQ, mentions d’usage responsable et texte d’installation APK.
- Reporter le texte complet de confidentialité à l’étape prépublication.

**Livrable :** copy final de la page d’accueil et contenu de la page d’installation.

### Étape 3 — Rendre l’APK prêt pour un CTA public — en grande partie fait

Depuis la v1.14.0 de l’app, chaque tag publie une Release GitHub avec les APK arm64 et `armeabi-v7a`. Le bouton du site pointe vers `releases/latest`, donc vers la dernière version. Restent : APK 32 bits, version/taille affichées et test du parcours sur téléphone.

- Publier la version choisie comme asset APK d’une GitHub Release destinée aux utilisateurs.
- Confirmer l’architecture servie, la version Android minimale et la taille exacte.
- Confirmer signature, provenance et processus de mise à jour.
- Utiliser l’URL de l’asset officiel comme destination du bouton.
- Sur un appareil Android, vérifier le téléchargement, l’installation et la mise à jour.
- Pour une visite depuis ordinateur ou un appareil non Android, indiquer clairement que Loady est une app Android; proposer une façon pratique d’ouvrir/télécharger la page sur Android sans lancer un fichier inutilement.

**Livrable :** lien de téléchargement choisi et métadonnées APK à afficher près du CTA.

### Étape 4 — Créer le dépôt du site — terminé

- Le site est dans `/home/dev-chris06/dev/Loady/loady-site`, séparé du dépôt de l’app.
- Initialiser Git localement dans ce dossier seulement et ajouter un `.gitignore` adapté à Node/Astro. **Fait.**
- Créer un dépôt GitHub distinct `loady-site` et définir sa branche principale. **Fait** : `dev-Chris06/loady-site`, branche `main`.
- Ne pas importer l’historique ou les fichiers secrets du dépôt de l’application.
- Ajouter un README avec prérequis, commandes de développement, build et déploiement.

**Livrable obtenu :** dépôt GitHub séparé avec README.

### Étape 5 — Initialiser le socle technique — terminé

- Installer la version stable d’Astro recommandée par sa documentation officielle au moment de l’initialisation.
- Ajouter Tailwind CSS avec son intégration Astro/Vite officielle actuelle.
- Configurer TypeScript strict et scripts `dev`, `build` et `preview`.
- Garder le rendu statique/prérendu; ne pas ajouter React ou un backend sans besoin concret.
- Organiser les composants, pages, styles, contenus et assets.
- Placer les originaux dans `public/images/`; créer des rendus optimisés dans les assets source si le pipeline d’images Astro est utilisé.

**Livrable obtenu :** Astro 7, Tailwind CSS 4, TypeScript 6, scripts npm et build statique fonctionnels.

### Étape 6 — Construire le système visuel et l’interface — première version réalisée

- Définir les couleurs en variables sémantiques clair/sombre; utiliser le bleu `#3D73FF` et le cyan `#58D8FF` comme accents de marque.
- Choisir une police web lisible avec chargement local ou une pile système; éviter les téléchargements de polices inutiles.
- Concevoir navigation, boutons, cartes, FAQ, badges plateformes, capture téléphone et pied de page.
- Implémenter le changement de thème sans flash visible, respecter la préférence système au premier chargement et mémoriser le choix si souhaité.
- Utiliser des animations discrètes, avec désactivation ou réduction selon `prefers-reduced-motion`.
- Vérifier contraste, focus clavier, ordre des titres, cibles tactiles, labels et textes alternatifs.

**Livrable obtenu :** première version responsive de l’accueil, du thème et des composants principaux. Revue visuelle et ajustements à venir.

### Étape 7 — Ajouter pages, liens et métadonnées

- Construire `/`, `/installer/` si conservée, et `/confidentialite/` lorsque son texte sera prêt.
- Relier le CTA à l’APK officiel et les liens du pied de page aux pages valides.
- Ajouter titre et description SEO, URL canonique, Open Graph/Twitter cards, favicon, `robots.txt` et sitemap.
- Définir des métadonnées sociales avec une image de partage Loady.
- Vérifier que l’internationalisation future ne nécessite pas de réécrire toutes les routes et chaînes.
- Ne pas ajouter d’analytics web par défaut; en ajouter seulement après décision de l’équipe et mise à jour de la politique correspondante.

**Livrable :** pages navigables, SEO et partage social configurés.

### Étape 8 — Vérifier qualité et performances

- Construire le site et corriger les erreurs de compilation et les liens cassés.
- Tester les largeurs mobile, tablette et desktop, dont un écran étroit.
- Vérifier thème clair/sombre, navigation clavier, lecteur d’écran de base et mouvement réduit.
- Vérifier le rendu sans JavaScript essentiel, ou documenter les rares fonctions qui en dépendent.
- Optimiser les captures (dimensions adaptées, WebP/AVIF lorsque pertinent, chargement différé hors écran, dimensions déclarées).
- Tester le parcours complet du CTA, le poids annoncé et l’installation de l’APK.
- Tester le site avec réseau ralenti et cache froid; éviter les vidéos, bibliothèques et effets lourds.
- Vérifier les liens, textes, captures et mentions de confidentialité à chaque variante linguistique publiée.

**Livrable :** checklist de recette remplie et version prête à publier.

### Étape 9 — Déployer sur Vercel — fait

- Connecter le dépôt GitHub séparé à un projet Vercel.
- Configurer la commande de build Astro et le dossier de sortie statique selon le scaffold généré.
- Activer un déploiement d’aperçu pour les branches/PR et protéger la production par la branche principale.
- Déployer d’abord une prévisualisation; relire textes, liens, apparence et téléchargement sur téléphone.
- Déployer en production sur l’URL `*.vercel.app` choisie.
- Vérifier HTTPS, redirections, pages 404, sitemap, aperçu social et lien APK depuis un réseau mobile.
- Réserver la connexion d’un domaine personnalisé à une étape ultérieure si souhaité.

**Livrable obtenu :** site publié sur https://loady-site.vercel.app/. Reste à refaire la vérification complète (liens, 404, aperçu social, APK depuis un réseau mobile) après les ajouts ci-dessus.

## 4. Critères de fin

- La page communique clairement la valeur de Loady en quelques secondes.
- Le slogan, le ton et le vocabulaire retenus sont respectés.
- L’APK se télécharge depuis une source officielle, avec version, compatibilité et taille indiquées.
- Les captures montrent le parcours réel et ne divulguent aucune donnée privée.
- L’accueil et les pages prévues sont utilisables sur téléphone et desktop, en clair et en sombre.
- Les pages restent rapides et lisibles sur une connexion mobile.
- Les mentions de confidentialité et d’usage sont exactes au moment de la publication.
- Le dépôt de l’app et le dépôt du site restent distincts.
- La version de production Vercel a été vérifiée après déploiement.

## 5. Éléments à fournir ou valider par le propriétaire

- Captures d’écran : dépôt dans `public/images/`.
- Contact public, URL du dépôt de code et éventuels liens développeurs.
- Release APK à servir, variantes et compatibilité Android.
- Relecture des textes de promesse et des fonctions futures.
- Informations de confidentialité au moment de rédiger la page dédiée.
- URL Vercel souhaitée; domaine personnalisé éventuel plus tard.

## 6. Références

- [Astro — déploiement sur Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [Tailwind CSS — guide d’installation Astro](https://tailwindcss.com/docs/installation/framework-guides/astro)
- [NewPipe — site officiel](https://newpipe.net/)
- [Proton VPN — page Android](https://protonvpn.com/download-android)
- [VLC — téléchargement Android](https://images.videolan.org/vlc/download-android.html)
- [LocalSend — site officiel](https://localsend.org/)
- [Seal — fiche F-Droid](https://f-droid.org/en/packages/com.junkfood.seal/)
