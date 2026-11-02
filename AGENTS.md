# AGENTS.md

## Mission

Ce dépôt contient l’architecture officielle de LevelCode et les fondations d’un produit évolutif. Le site public de démonstration est une référence visuelle uniquement ; il ne doit pas être traité comme la source technique du produit réel.

## Règles essentielles

- Respecter la charte visuelle existante : fond sombre, noir, jaune et violet.
- Ne pas présenter une démonstration comme un modèle IA opérationnel si ce n’est pas le cas.
- Ne jamais créer de clés secrètes ni de valeurs sensibles dans le dépôt.
- Tout module AI doit rester configurable et documenté.
- Chaque fonctionnalité doit avoir un statut explicite : opérationnel, en développement, expérimental, ou planifié.
- Les intégrations externes doivent être décrites comme réelles et optionnelles.

## Structure attendue

- `app/` pour l’interface utilisateur.
- `docs/` pour la documentation de l’architecture et des modules.
- `src/` pour les services et la logique applicative si elle est ajoutée.
- `public/` pour les assets statiques.

## Bonnes pratiques

- Garder le code lisible et modulaire.
- Préférer des composants réutilisables.
- Séparer clairement les couches de présentation, domaine et intégration.
- Documenter les changements de statut plateformes et modules.
- Éviter toute sur-ingénierie avant que l’objectif soit stabilisé.

## Développement

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
```

## Sécurité

- Aucune clé API dans le dépôt.
- Utiliser `.env.example` et `.env.local` pour les variables locales.
- Ne pas casser les paramètres de production existants.
