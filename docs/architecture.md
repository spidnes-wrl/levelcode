# Architecture LevelCode

## Vue d’ensemble

LevelCode est conçu comme un écosystème modulaire permettant d’organiser la mémoire, les recommandations, les vérifications, les compétences, les intégrations et l’environnement de création.

Le projet ne vise pas à reproduire le site de démonstration, mais à structurer une base saine pour le produit.

## Couches principales

### 1. Couche présentation

- Interface de marketing et vitrine.
- Présentation des modules et des services.
- Navigation claire et expérience responsive.

### 2. Couche produit

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

### 3. Couche IA

Levely AI agit comme un assistant central et indépendant des fournisseurs de modèles. L’architecture doit permettre :

- sélection de fournisseur,
- configuration de modèle,
- gestion des permissions,
- limites d’usage,
- traitement des erreurs,
- normalisation des réponses.

### 4. Couche intégration

- APIs externes et services.
- Connecteurs MCP.
- Outils de données et d’import.
- Intégration de services tiers avec configuration explicite.

## Statut réel des modules

Le dépôt doit refléter les véritables niveaux de maturité :

- LevelMemory : en conception.
- LevelCoach : fondations à construire.
- LevelVerify : planifié.
- LevelSkills : planifié.
- LevelMarket : planifié.
- LevelDev : conceptuel.
- LevelConnect : planifié.
- LevelImport : planifié.
- LevelMCP : architecture à préparer.
- LevelAPI : structure à définir.
- LevelStudio : fondations à construire.
- Levely AI : abstraction de fournisseur à préparer.

## Principe de conception

« LevelCoach recommande. L’utilisateur décide. LevelCode exécute. »

Cela signifie que l’application doit toujours garder le contrôle utilisateur sur les préférences, les recommandations et les actions à exécuter.

## Bonnes pratiques

- Séparer les interfaces et les services.
- Ne pas présenter une fonctionnalité comme finalisée sans intégration réelle.
- Documenter chaque point de configuration.
- Préserver l’évolutivité du produit.
