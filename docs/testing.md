# Développement LevelCode

## Prérequis

- Node.js 18 ou plus récent
- npm
- Git

## Installation

```bash
npm install
```

## Démarrage local

```bash
npm run dev
```

## Construction du projet

```bash
npm run build
```

## Structure projet

```text
app/
docs/
public/
src/
.env.example
.gitignore
README.md
AGENTS.md
.github/
```

## Conventions de développement

- Les composants doivent être petits et réutilisables.
- Les modules doivent rester clairement séparés.
- Les environnements doivent passer par `.env.local`.
- Les intégrations doivent être documentées.

## Tests

Le dépôt contient une base de validation fonctionnelle minimale. Les tests doivent être ajoutés au fur et à mesure des fonctionnalités réellement livrées.
