# Déploiement Vercel

## Objectif

Le projet LevelCode est conçu pour être déployé sur Vercel, en gardant une configuration propre et documentée.

## Variables d’environnement côté Vercel

Ajouter dans le dashboard Vercel :

- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`
- `OPENAI_API_KEY` si nécessaire
- `ANTHROPIC_API_KEY` si nécessaire
- `GOOGLE_API_KEY` si nécessaire
- `DEEPSEEK_API_KEY` si nécessaire
- `XAI_API_KEY` si nécessaire

## Déploiement

1. Connecter le dépôt GitHub à Vercel.
2. Sélectionner le projet.
3. Définir la commande de build : `npm run build`
4. Définir le dossier de sortie : `.next`
5. Ajouter les variables d’environnement.

## Bonnes pratiques

- Ne jamais committer de secrets.
- Vérifier les logs de build.
- Tester la configuration locale avant le déploiement.
- Garder le site de démonstration comme référence visuelle uniquement.
