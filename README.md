# Thomas Zanitti — Avocat au Barreau de Brest

Site professionnel du cabinet de **Thomas Zanitti**, avocat au Barreau de Brest,
spécialisé dans la **récupération de fonds après escroquerie** (virement
bancaire, cryptomonnaie ou les deux).

Construit avec **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS 4**.
Déployé sur **Vercel**.

## Scripts

| Commande            | Description                          |
| ------------------- | ------------------------------------ |
| `npm install`       | Installation des dépendances         |
| `npm run dev`       | Serveur de développement             |
| `npm run build`     | Build de production                  |
| `npm run start`     | Serveur de production (après build)  |
| `npm run lint`      | Vérification ESLint                  |

## Structure

```
src/
  app/
    page.tsx              # Page d'accueil (hero, étapes, QCM, FAQ…)
    mentions-legales/     # Mentions légales
    confidentialite/      # Politique de confidentialité
    conditions-intervention/
    layout.tsx            # Layout racine + SEO/OG
    icon.svg              # Favicon
    robots.ts / sitemap.ts
  components/             # Header, Hero, Steps, RequestForm, Footer…
  lib/site.ts             # Coordonnées du cabinet (à maintenir au même endroit)
```

## Formulaire (QCM) — configuration Formspree

Le formulaire envoie les demandes vers **thomas.zanitti-avocat@outlook.fr**
via [Formspree](https://formspree.io). Sans ce branchement, le formulaire
affiche un message clair et aucun envoi n'est simulé.

1. Créez un compte/formulaire sur Formspree :
   - https://formspree.io/forms → « New form »
   - Dans le formulaire créé, réglez **Email** = `thomas.zanitti-avocat@outlook.fr`
2. Récupérez l'endpoint, au format : `https://formspree.io/f/xxxxxx`
3. Définissez la variable d'environnement (en local **et** sur Vercel) :

   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
   ```

4. Optionnel — URL publique pour les meta Open Graph :

   ```
   NEXT_PUBLIC_SITE_URL=https://thomas-zanitti-avocat.vercel.app
   ```

Copiez `.env.example` → `.env.local` pour le développement local (le fichier
`.env*` est ignoré par git ; aucun secret ne doit être committé).

> Sécurité : le formulaire ne demande **jamais** de mot de passe, clé privée,
> seed phrase, code 2FA, code bancaire ou phrase de récupération.

## Coordonnées du cabinet

Toutes les coordonnées sont centralisées dans `src/lib/site.ts` :

- Téléphone : `0805 876 827` — `tel:+33805876827`
- WhatsApp : `https://wa.me/33767337449`
- Email : `thomas.zanitti-avocat@outlook.fr`
- Localisation : Brest, France

## Déploiement Vercel

```bash
npm i -g vercel
vercel          # première fois : lien du projet, build par défaut
vercel --prod   # déploiement de production
```

Après déploiement, ajoutez la variable d'environnement
`NEXT_PUBLIC_FORMSPREE_ENDPOINT` dans le tableau de bord Vercel (Settings →
Environment Variables) et re-déployez.

## Contenu légal

Les pages légales utilisent le marqueur `[À COMPLÉTER]` partout où une donnée
officielle n'est pas encore fournie (SIREN, numéro de toque, assurance,
médiateur, durées de conservation…). **Ne pas inventer de données.**