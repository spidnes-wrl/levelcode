# Documentation LevelCode

## Références

- Site de démonstration publique : https://levelcode-waitlist.vercel.app
- Site officiel de référence visuelle : https://levelcode.vercel.app

## Principes

Le dépôt GitHub officiel doit refléter un produit réel, cohérent, documenté et maintenable. La version démo ne doit pas être considérée comme la source technique du produit.

## Architecture retenue

- `app/` : shell de l’application et pages.
- `src/config` : configuration des modules et des fournisseurs d’IA.
- `src/lib` : logique métier, coaching, statuts du projet.
- `docs/` : documentation technique et architecture.

## Modules

Les modules sont documentés comme des composants de l’écosystème, avec leur statut réel (opérationnel, en développement, expérimental, planifié).

## Règle de qualité

- aucune clé API dans le dépôt,
- aucun faux statut d’intégration,
- aucune promesse de fonctionnalité non validée,
- configuration via variables d’environnement.
