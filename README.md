# LevelCode

**Your AI. Your Knowledge. Your Level.**

LevelCode est un écosystème indépendant consacré à la personnalisation, à l’organisation et à l’évolution de l’utilisation des intelligences artificielles.

Le produit rassemble des modules complémentaires pour organiser les connaissances, préparer des assistants, gérer des compétences et connecter des outils compatibles.

> **LevelCoach recommande. L’utilisateur décide. LevelCode exécute.**

## Références produit

- Site public de présentation et de liste d’attente : https://levelcode-waitlist.vercel.app
- Dépôt source officiel : https://github.com/spidnes-wrl/levelcode

Le site public définit la vision, les modules, les parcours et les principes de LevelCode. Le dépôt contient l’implémentation applicative et sa documentation technique.

## Modules

Les modules de l’écosystème sont documentés dans [docs/modules.md](docs/modules.md).

- LevelMemory — connaissances et contexte.
- LevelCoach — profil et recommandations.
- LevelVerify — contrôle de cohérence.
- LevelSkills — compétences réutilisables.
- LevelMarket — découverte et sélection de Skills.
- LevelDev — environnement créateurs.
- LevelConnect — intégrations externes.
- LevelImport — import de connaissances.
- LevelMCP — outils et serveurs MCP.
- LevelAPI — interfaces et accès techniques.
- LevelStudio — création et prévisualisation.
- Levely AI — assistante centrale multi-fournisseurs.

## État des prototypes actuels

- **Accueil** : présentation de l’écosystème et navigation.
- **LevelCoach** : questionnaire en cinq étapes, synthèse personnalisée et export texte local.
- **LevelMarket** : catalogue local avec recherche, filtres et sélection de Skills pendant la session.
- **LevelStudio** : éditeur local de blocs, prévisualisation et export JSON.
- **Levely AI** : page de présentation de l’architecture cible ; aucun fournisseur n’est connecté pour le moment.

Les prototypes LevelCoach, LevelMarket et LevelStudio ne sauvegardent pas encore les données dans un compte ou une base distante. Aucune action n’est appliquée à un assistant externe.

## Stack technique

- Next.js 14
- React 18
- TypeScript
- CSS natif
- Déploiement prévu sur Vercel

## Démarrage local

Prérequis : Node.js 18+ et npm.

```bash
npm install
npm run dev
```

Ouvrir ensuite http://localhost:3000.

Vérifier la compilation :

```bash
npm run build
```

## Configuration

Copier `.env.example` vers `.env.local` et renseigner uniquement les variables nécessaires. Ne jamais committer de clé API ou de secret.

## Documentation

- [Architecture](docs/architecture.md)
- [Modules et statuts](docs/modules.md)
- [Développement](docs/development.md)
- [Tests](docs/testing.md)
- [Déploiement Vercel](docs/deployment-vercel.md)
- [Consignes agents](AGENTS.md)

## Principes de qualité et de confiance

- Ne pas annoncer comme opérationnelle une intégration non testée.
- Demander un consentement explicite avant toute modification sensible.
- Garder les données privées séparées par utilisateur lorsque le backend sera activé.
- Protéger les secrets côté serveur.
- Documenter les limites et les statuts réels.
- Préserver le contrôle de l’utilisateur sur ses données et ses décisions.

## Licence

MIT
