# LevelCode

LevelCode est l’écosystème technologique qui permet de personnaliser, organiser et optimiser l’utilisation des intelligences artificielles et des outils numériques.

Le principe fondamental est :

« LevelCoach recommande. L’utilisateur décide. LevelCode exécute. »

Ce dépôt représente la source officielle de LevelCode. Il est structuré pour servir de base de travail maintenable, documentée et évolutive, sans répliquer le site de démonstration public.

Le site de référence de la vitrine publique est :

https://levelcode-waitlist.vercel.app

Il reste un document de référence visuelle, et non la source technique du produit.

## Objectif du dépôt

- Créer une base technique claire et professionnelle.
- Préserver la direction artistique déjà existante.
- Organiser les modules autour d’un vrai produit.
- Documenter les états réels des fonctionnalités.
- Préparer les intégrations AI et les modules de l’écosystème sans faux positifs.

## Architecture retenue

- `app/` : interface web principale.
- `docs/` : documentation technique et fonctionnelle.
- `public/` : fichiers statiques.
- `src/` : logique applicative, domaines et services si nécessaire.

## Modules planifiés

- LevelMemory
- LevelCoach
- LevelVerify
- LevelSkills
- LevelMarket
- LevelDev
- LevelConnect
- LevelImport
- LevelMCP
- LevelAPI
- LevelStudio
- Levely AI

## Démarrage rapide

```bash
npm install
npm run dev
```

Ensuite ouvrir :

http://localhost:3000

## Variables d’environnement

Copier le fichier `.env.example` vers `.env.local` et renseigner les valeurs réelles.

## Documentation

- `docs/architecture.md`
- `docs/modules.md`
- `docs/development.md`
- `docs/testing.md`
- `docs/deployment-vercel.md`

## Statut fonctionnel

Ce dépôt est un socle officiel de projet. Les fonctionnalités de l’écosystème sont documentées avec leur statut réel :

- Opérationnel
- En développement
- Expérimental
- Planifié

Aucune clé secrète ne doit être ajoutée dans le dépôt Git.

## Règles de qualité

- Pas de faux résultats de tests.
- Pas d’intégrations API inventées.
- Pas de connexion AI simulée.
- Documentation claire et actualisée.
- Respect de la charte visuelle de LevelCode.

## Licence

MIT
