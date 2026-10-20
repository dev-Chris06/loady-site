# Site vitrine Loady — notes de cadrage

Dernière mise à jour : 19 octobre 2026

## Objectif

Créer un site vitrine professionnel pour **Loady**, dans un dépôt séparé nommé `loady-site`. Le site présentera la vision produit visée à terme, et non uniquement l’état actuel du développement. Les fonctionnalités annoncées doivent rester cohérentes avec le produit que l’équipe prévoit réellement de livrer.

## Décisions retenues

- **Nom officiel :** Loady.
- **Ton :** tutoiement.
- **Stack envisagée :** Astro + Tailwind CSS, avec TypeScript léger pour les interactions utiles.
- **Hébergement visé :** Vercel, sur une URL `*.vercel.app` pour commencer.
- **Type de site :** site statique, contenu d’abord, interactions client limitées.
- **Thèmes :** clair et sombre.
- **Couleurs de marque déjà utilisées par l’app :** bleu `#3D73FF`, cyan `#58D8FF`.
- **CTA principal :** « Télécharger l’APK », qui lance directement le téléchargement de l’APK courant depuis une URL GitHub durable.

## Problème à résoudre

Certaines applications permettent de télécharger des médias, mais les gardent accessibles uniquement dans leur propre application. D’autres ne proposent pas de téléchargement direct de vidéos. Loady doit rendre le parcours simple : copier un lien, choisir une option disponible, puis retrouver le fichier sur le téléphone.

## Proposition de valeur

> **Tes vidéos, enfin dans tes fichiers.**
>
> Copie un lien, choisis la qualité disponible et retrouve le téléchargement sur ton téléphone.

Slogan retenu : **« Tes vidéos, directement sur ton téléphone. »** Pour les textes descriptifs, garder **« fichiers sur ton téléphone »** plutôt que promettre « galerie » tant que l’emplacement et l’indexation Android ne garantissent pas cette expérience sur les appareils visés.

## Bénéfices à présenter

1. Retrouver les médias comme des fichiers sur son téléphone, hors de l’application d’origine.
2. Suivre un parcours simple : copier un lien, l’analyser, choisir parmi les options disponibles et télécharger.
3. Utiliser une même application lorsque certaines plateformes gardent les téléchargements dans leur app ou ne proposent pas de bouton pour enregistrer une vidéo.
4. Choisir un format ou une qualité réellement disponible pour le média source.
5. Gérer des liens provenant de plusieurs plateformes, sous réserve de la compatibilité des contenus et des changements des plateformes.

## Structure proposée pour le site

1. **Navigation** — identité Loady, liens vers les sections et bouton Télécharger.
2. **Hero** — promesse, courte explication, aperçu de l’app et CTA « Télécharger l’APK ».
3. **Problème / réponse** — expliquer la différence entre un fichier accessible sur le téléphone et un téléchargement enfermé dans l’app source.
4. **Comment ça marche** — copier le lien → choisir une option disponible → retrouver le fichier.
5. **Fonctionnalités** — simplicité, formats et qualités, stockage local, historique, plateformes.
6. **Aperçu de l’application** — captures des étapes importantes du parcours.
7. **Plateformes** — services pris en charge, avec une formulation prudente sur les limites de compatibilité.
8. **Confidentialité** — distinguer les fichiers conservés localement des données éventuellement traitées par des services intégrés.
9. **FAQ et installation** — compatibilité Android, installation APK, mises à jour, formats, limites et usage responsable.
10. **Appel final et pied de page** — téléchargement, contact, politique de confidentialité et liens du projet.

La roadmap n’est pas prévue sur la page principale pour garder le focus sur la proposition de valeur. Elle pourra faire l’objet d’une page dédiée si l’équipe souhaite publier l’évolution du produit.

## Références d’inspiration

- [NewPipe](https://newpipe.net/) : bénéfice présenté d’emblée, fonctionnalités illustrées, choix de formats/qualités, section de téléchargement et aide à l’installation.
- [Seal sur F-Droid](https://f-droid.org/en/packages/com.junkfood.seal/) : présentation concise des fonctionnalités, captures, versions et informations de téléchargement.
- [FAQ d’installation de NewPipe](https://newpipe.net/FAQ/install/) : explique clairement les problèmes possibles de mise à jour lorsque les signatures ou les sources de distribution diffèrent.

Ces références servent à observer les parcours et les informations utiles; le site Loady gardera son identité propre.

## Points à confirmer avant publication

- Publier l’APK courant comme asset d’une GitHub Release destinée aux utilisateurs; le build actuel existe déjà comme artefact GitHub Actions, mais ce n’est pas une URL de release durable.
- Version Android minimale à afficher et variantes d’APK proposées.
- Version, taille et méthode de vérification de l’APK à présenter sur le site.
- Parcours de mise à jour et règles de signature pour que les installations puissent être mises à jour proprement.
- Sélection des captures déjà disponibles auprès du propriétaire, en modes clair et sombre si possible.
- Liste des fonctionnalités futures que l’équipe veut promettre publiquement.
- Politique de confidentialité correspondant aux SDK et pratiques réellement présents dans la version publiée.
- Contact, lien du dépôt public et éventuels liens des développeurs.

## Suite proposée

1. Faire relire et ajuster le copywriting avec l’équipe.
2. Publier la version courante comme release GitHub destinée aux utilisateurs et vérifier les appareils/architectures visés.
3. Partager les captures disponibles pour les intégrer au plan visuel.
4. Créer le dépôt séparé `loady-site`, puis initialiser Astro, Tailwind et TypeScript selon la documentation officielle du moment.
5. Construire et relire le site section par section, puis préparer le déploiement Vercel.

## Références techniques consultées

- [Documentation Astro — déploiement sur Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [Documentation Tailwind CSS — installation avec Astro](https://tailwindcss.com/docs/installation/framework-guides/astro)

---

## Copywriting — première proposition

Cette version exprime le produit visé. Les notes entre crochets sont des validations éditoriales/produit à résoudre avant publication; elles ne sont pas destinées à apparaître telles quelles sur le site.

### Navigation

- Fonctionnalités
- Comment ça marche
- Plateformes
- FAQ
- Bouton : **Télécharger l’APK**

### 1. Hero

**Surtitre :** Le téléchargement, simplement.

# Tes vidéos, directement sur ton téléphone.

Copie un lien, choisis la qualité qui te convient et télécharge le média pour le retrouver dans tes fichiers, même sans retourner dans l’application où tu l’as découvert.

- Bouton principal : **Télécharger l’APK Android** — lien direct vers l’APK choisi dans GitHub Releases.
- Lien secondaire : **Voir comment ça marche**
- Microtexte : **Pour Android · Téléchargement direct de l’APK**

Note visuelle : montrer un vrai écran Loady et un fichier vidéo visible dans l’espace de stockage Android. Éviter une maquette qui laisse croire à une intégration système qui n’existe pas.

### 2. Le problème et la réponse

## Tu as trouvé une vidéo. Tu veux la garder accessible.

Selon l’application, un téléchargement peut rester disponible uniquement à l’intérieur de cette application. Et parfois, aucun bouton ne permet d’enregistrer le média sur ton téléphone.

**Loady simplifie le passage du lien au fichier.** Tu colles le lien, tu vérifies les options disponibles, puis tu enregistres le média sur ton appareil.

### 3. Comment ça marche

## Trois étapes, et ton fichier est prêt.

**01 — Copie le lien**  
Depuis l’application ou la page où tu as trouvé le média, copie son lien.

**02 — Choisis ton format**  
Loady analyse le lien et te présente les formats et qualités disponibles pour ce média.

**03 — Télécharge sur ton téléphone**  
Lance le téléchargement et retrouve le fichier dans l’espace prévu sur ton appareil.

### 4. Fonctionnalités

## Tout ce qu’il te faut pour passer du lien au fichier.

**Des téléchargements accessibles**  
Retrouve tes médias comme des fichiers sur ton téléphone, sans les chercher uniquement dans l’application source.

**La qualité que tu choisis**  
Sélectionne une qualité parmi celles proposées pour le média. Les options dépendent de la source.

**Plusieurs formats**  
Choisis le format adapté parmi ceux disponibles, comme MP4, WebM ou MP3. [Confirmer la liste des formats et les conditions d’accès avant publication.]

**Une seule app pour tes liens**  
Utilise le même parcours Loady pour les plateformes prises en charge.

**Un parcours facile à suivre**  
Analyse, téléchargement et progression sont regroupés dans une interface pensée pour aller à l’essentiel.

**Retrouve tes téléchargements**  
Consulte les médias enregistrés sur ton appareil depuis l’historique Loady. [Préciser si l’historique du produit futur doit inclure suppression, partage ou filtres avant de les annoncer.]

### 5. Aperçu de l’application

## Découvre Loady en quelques écrans.

De la copie du lien au choix de la qualité, suis chaque étape dans une interface claire. Une fois le téléchargement terminé, retrouve ton média sur ton téléphone.

Légendes suggérées pour les captures :

- **Colle ton lien** — Loady reconnaît la plateforme.
- **Choisis une option** — les formats et qualités proposés pour ce média.
- **Suis le téléchargement** — vois l’avancement de l’opération.
- **Retrouve tes fichiers** — consulte les médias enregistrés sur ton appareil.

### 6. Plateformes

## Tes liens favoris, réunis dans Loady.

Loady est conçu pour fonctionner avec des liens issus de plusieurs plateformes. Colle ton lien : Loady vérifie si le média et ses formats sont accessibles.

**Plateformes prévues :** YouTube · TikTok · Instagram · Snapchat · X · Facebook · Pinterest · Threads.

La disponibilité peut varier selon le média, la région et les changements apportés par les plateformes. [Valider la liste pour la version publique et les formulations de compatibilité.]

### 7. Confidentialité

## Tes téléchargements sont enregistrés sur ton téléphone.

Loady est conçu pour que les fichiers téléchargés restent sur ton appareil. Tu n’as pas besoin de créer un compte Loady pour utiliser le parcours de téléchargement.

La politique de confidentialité explique les données techniques traitées par l’application et les services intégrés, notamment les statistiques d’utilisation et les notifications, lorsqu’ils sont activés.

- Lien : **Lire la politique de confidentialité**

Note de publication : finaliser cette section à partir des SDK, réglages de consentement, événements et pratiques réellement embarqués dans la version diffusée. Ne pas présenter l’application comme « sans aucune donnée envoyée » si les outils d’analytics ou de notifications sont actifs.

### 8. FAQ

#### Comment télécharger Loady ?

Appuie sur **Télécharger l’APK Android**, puis ouvre le fichier téléchargé et suis les instructions Android. Selon ton navigateur ou ton appareil, Android peut te demander d’autoriser l’installation depuis cette source.

#### Loady est disponible sur iPhone ?

Loady est conçu pour Android. [Mettre à jour cette réponse si une version iOS est prévue ou lancée.]

#### Où retrouver les médias téléchargés ?

Les fichiers sont enregistrés sur ton téléphone, dans le dossier indiqué par Loady. Tu peux ensuite les ouvrir avec une application compatible. [Remplacer par le chemin exact et confirmer leur visibilité dans les applications Galerie/Fichiers.]

#### Quelles qualités et quels formats sont disponibles ?

Les options dépendent du média d’origine. Loady affiche les formats et qualités accessibles pour le lien que tu as collé.

#### Est-ce que tous les liens fonctionnent ?

Loady prend en charge plusieurs plateformes, mais certains médias peuvent être privés, supprimés, protégés ou temporairement indisponibles. La compatibilité dépend aussi des changements des plateformes.

#### Comment recevoir les mises à jour ?

Télécharge les nouvelles versions depuis la page officielle Loady. Pour mettre à jour l’application, installe le fichier provenant de la même source officielle. [Ajouter ici le parcours final : page Releases, dépôt dédié ou autre distribution.]

#### Puis-je télécharger n’importe quelle vidéo ?

Télécharge uniquement les médias que tu es autorisé à enregistrer. Respecte les droits d’auteur et les conditions d’utilisation des plateformes.

### 9. Appel final

## Le prochain lien, garde-le avec Loady.

Télécharge Loady sur Android et retrouve tes médias sur ton téléphone en quelques étapes.

- Bouton : **Télécharger l’APK Android**
- Microtexte : **Source officielle · Version et compatibilité Android indiquées au téléchargement**

### 10. Pied de page

- **Loady** — Du lien au fichier, simplement.
- Fonctionnalités
- FAQ
- Politique de confidentialité
- Contact
- Code source / dépôt du projet [si public]
- Mentions légales [responsable et juridiction à renseigner]

## Éléments à trancher après relecture de ces textes

1. Publier `1.11.2+28` comme release GitHub destinée aux utilisateurs et y attacher l’APK; actuellement, le build existe en artefact Actions et les Releases publiques sont en retard (`v1.6.7-test.1` est une préversion; `v1.6.0` est marquée Latest).
2. Confirmer les appareils/architectures à servir et la version Android minimale à afficher.
3. Sélectionner les captures que le propriétaire a déjà.
4. Rédiger la politique de confidentialité au moment convenu, à partir des pratiques de la version de lancement.

---

## Repérage de sites d’applications mobiles

Consultation de sites officiels et de pages de distribution le 19 octobre 2026. Le but est d’identifier des parcours utiles, pas de reprendre leur identité visuelle.

### Sites consultés et enseignements

- [NewPipe — site officiel](https://newpipe.net/) : commence par expliquer son bénéfice Android, enchaîne avec les fonctions, l’usage hors ligne, la confidentialité et les services, puis donne les options de téléchargement et l’aide à l’installation. Bon modèle pour faire comprendre Loady avant de demander un téléchargement.
- [Proton VPN pour Android](https://protonvpn.com/download-android) : bouton Play Store principal, mais mentionne aussi F-Droid et l’APK GitHub; le parcours est expliqué étape par étape, avec visuels, fonctionnalités, éléments de confiance et FAQ. Son [guide d’installation APK](https://protonvpn.com/support/how-to-install-the-protonvpn-apk) détaille l’autorisation Android et les mises à jour depuis la même source. Bon modèle pour rassurer les personnes qui installent directement un APK.
- [VLC pour Android — téléchargement officiel](https://images.videolan.org/vlc/download-android.html) : présente les fonctions et versions Android prises en charge et propose des APK par architecture. Les [fichiers de release VLC](https://get.videolan.org/vlc-android/3.7.0/) affichent aussi les tailles et sommes de contrôle. Bon modèle pour rendre le téléchargement compréhensible et vérifiable.
- [LocalSend — page officielle](https://localsend.org/) et [page de téléchargement](https://localsend.org/download) : proposition de valeur courte, accès direct aux téléchargements, plateformes clairement séparées, et liens visibles vers changelog, support, confidentialité et code. Sa page est traduite en plusieurs langues, dont l’espagnol; le français de Loady devra être prioritaire pour son audience.
- [Seal — fiche F-Droid](https://f-droid.org/en/packages/com.junkfood.seal/) : référence de produit plus proche de Loady; montre les fonctions et captures, et distingue les versions et architectures APK. F-Droid prévient aussi que l’installation manuelle ne procure pas les mêmes notifications de mise à jour que son client — un bon rappel d’expliquer les mises à jour lorsque le site propose un APK direct.

### Ce que ces parcours suggèrent pour Loady

1. Dire immédiatement ce que l’app apporte, puis illustrer son fonctionnement avant le CTA final.
2. Garder le bouton principal **Télécharger l’APK Android** bien visible. Près du bouton ou juste après le clic, afficher la version, la taille, la compatibilité Android, l’architecture et la source officielle.
3. Ajouter une aide d’installation courte : téléchargement, ouverture du fichier, autorisation éventuelle d’installer depuis le navigateur, puis installation. Expliquer aussi comment mettre à jour Loady depuis la même source/signature.
4. Utiliser de vraies captures de l’app plutôt qu’une suite de promesses abstraites.
5. Mettre la FAQ, la confidentialité, le contact et le dépôt à portée de main : avec un APK direct, les visiteurs doivent pouvoir vérifier qui publie le fichier et obtenir de l’aide.

### Public mondial et contexte de lancement

Loady vise un public mondial. Le Bénin est le lieu de résidence du propriétaire, pas une limite géographique du produit ni du site. Le français et le tutoiement sont les choix éditoriaux actuels; ils n’impliquent pas que la cible soit uniquement francophone. La structure doit pouvoir accueillir d’autres langues lorsque l’équipe décidera de les proposer.

La conception mobile-first et les pages légères sont pertinentes partout : beaucoup de visiteurs arriveront depuis un téléphone, et les conditions de réseau ou de forfait varient d’un pays et d’un utilisateur à l’autre. Les statistiques nationales ne décrivent pas précisément chaque personne; par exemple, les données publiées pour le Bénin distinguent connexions 3G/4G/5G et usage effectif d’Internet mobile ([Digital 2025: Benin](https://datareportal.com/reports/digital-2025-benin)). L’ITU rappelle par ailleurs que l’abordabilité des services TIC varie selon les pays et les revenus ([statistiques de prix et d’abordabilité](https://www.itu.int/en/ITU-D/Statistics/Pages/ICTprices/default.aspx)). Ces sources servent de rappel de conception, pas à définir le marché de Loady.

Conséquences pratiques pour un public international :

- concevoir d’abord pour les petits écrans et un usage mobile;
- garder le site statique, rapide et léger; ne pas lancer de vidéo de démonstration automatiquement;
- compresser les captures et différer le chargement de celles situées plus bas dans la page;
- indiquer la taille de l’APK avant son téléchargement;
- expliquer clairement l’installation directe d’un APK, en tenant compte des différences d’interface et de traduction d’Android selon les fabricants;
- commencer en français, mais structurer les textes et le SEO pour permettre une localisation future.
