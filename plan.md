# Plan complet — site vitrine Loady

Document de travail mis à jour le 19 octobre 2026. Il décrit les étapes du cadrage actuel au déploiement du site sur Vercel. Le site sera dans son propre dépôt GitHub, séparé de celui de l’application.

## Avancement du site

- Dépôt Git local initialisé dans `loady-site`; aucun dépôt GitHub distant ni déploiement Vercel n’est configuré.
- Socle installé : Astro 7, Tailwind CSS 4, TypeScript 6; rendu statique.
- Première version de la page d’accueil implémentée avec thème clair/sombre, navigation mobile, captures, plateformes, FAQ et CTA APK.
- Espacement vertical resserré après comparaison des deux captures du hero : départ du hero réduit, padding vertical commun ramené à une échelle plus compacte et appel final ajusté. Les gouttières latérales et les marges internes des cartes n’ont pas été changées; revue visuelle complète encore à faire.
- Vérifications locales : `astro check` sans erreurs/avertissements et `astro build` réussi.
- **À régler avant publication :** le lien direct actuel pointe vers le dernier APK arm64 de GitHub Releases (v1.6.0), tandis que le code source de l’app indique `1.11.2+28`. Publier/confirmer la release correspondant à la version destinée aux visiteurs, puis mettre à jour et vérifier version, architecture, taille et signature affichées.
- Politique de confidentialité détaillée, page d’installation dédiée, optimisation/anonymisation des captures, SEO final et URL Vercel restent à faire.

### Prochaine étape

1. **Revue visuelle de la page locale** : ouvrir `http://localhost:4321/` et vérifier sur ordinateur et téléphone les thèmes clair/sombre, le hero, les captures, le menu mobile, les textes et la FAQ. Noter les retours puis ajuster la page.
2. **Corriger le parcours APK** : confirmer la version de release à distribuer et remplacer le lien temporaire `v1.6.0` par le téléchargement direct correspondant; indiquer version, architecture et taille confirmées.
3. **Préparer la publication** : anonymiser/optimiser les captures, finir les textes et la politique de confidentialité, compléter les métadonnées SEO et les pages d’aide.
4. **Publier le dépôt et déployer** : créer/relier le dépôt GitHub séparé, connecter Vercel, vérifier la prévisualisation, puis publier sur l’URL `*.vercel.app`.

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

- Captures reçues dans `/home/dev-chris06/loady-site/public/images/` :
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

### Étape 3 — Rendre l’APK prêt pour un CTA public

Le code source est actuellement en `1.11.2+28`. Un build de cette version a été produit par GitHub Actions, tandis que les GitHub Releases visibles sont plus anciennes. Un artefact Actions est utile pour test, mais le bouton du site doit viser un lien officiel et durable.

- Publier la version choisie comme asset APK d’une GitHub Release destinée aux utilisateurs.
- Confirmer l’architecture servie, la version Android minimale et la taille exacte.
- Confirmer signature, provenance et processus de mise à jour.
- Utiliser l’URL de l’asset officiel comme destination du bouton.
- Sur un appareil Android, vérifier le téléchargement, l’installation et la mise à jour.
- Pour une visite depuis ordinateur ou un appareil non Android, indiquer clairement que Loady est une app Android; proposer une façon pratique d’ouvrir/télécharger la page sur Android sans lancer un fichier inutilement.

**Livrable :** lien de téléchargement choisi et métadonnées APK à afficher près du CTA.

### Étape 4 — Créer le dépôt du site — en cours

- Conserver le site dans `/home/dev-chris06/loady-site`, séparé du dépôt de l’app.
- Initialiser Git localement dans ce dossier seulement et ajouter un `.gitignore` adapté à Node/Astro. **Fait.**
- Créer un dépôt GitHub distinct `loady-site` et définir sa branche principale. **À faire.**
- Ne pas importer l’historique ou les fichiers secrets du dépôt de l’application.
- Ajouter un README avec prérequis, commandes de développement, build et déploiement.

**Livrable :** dépôt local séparé prêt; dépôt GitHub distant restant à créer.

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

### Étape 9 — Déployer sur Vercel

- Connecter le dépôt GitHub séparé à un projet Vercel.
- Configurer la commande de build Astro et le dossier de sortie statique selon le scaffold généré.
- Activer un déploiement d’aperçu pour les branches/PR et protéger la production par la branche principale.
- Déployer d’abord une prévisualisation; relire textes, liens, apparence et téléchargement sur téléphone.
- Déployer en production sur l’URL `*.vercel.app` choisie.
- Vérifier HTTPS, redirections, pages 404, sitemap, aperçu social et lien APK depuis un réseau mobile.
- Réserver la connexion d’un domaine personnalisé à une étape ultérieure si souhaité.

**Livrable :** site publié et vérifié sur son URL Vercel.

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
