import { aiProviders, getEnabledProviders } from "@/src/lib/ai/providers";

export type CoachQuestion = {
  id: string;
  text: string;
  choices: string[];
};

export type CoachRecommendation = {
  id: string;
  title: string;
  description: string;
  reason: string;
};

export type CoachProfile = {
  provider: string;
  answers: Record<string, string>;
  habits: string[];
  recommendations: CoachRecommendation[];
};

export const coachQuestions: CoachQuestion[] = [
  {
    id: "workstyle",
    text: "Quel est votre style principal de travail avec l’IA ?",
    choices: ["Exploration", "Rédaction", "Analyse", "Développement", "Gestion de projets"]
  },
  {
    id: "prompting",
    text: "Comment formulez-vous vos demandes à l’IA ?",
    choices: ["Très bref", "Très détaillé", "Par étapes", "Par cas d’usage", "Selon le contexte"]
  },
  {
    id: "context",
    text: "Quelle est votre priorité principale ?",
    choices: ["Qualité du résultat", "Vitesse", "Mémoire du contexte", "Créativité", "Vérification"]
  },
  {
    id: "frequency",
    text: "À quelle fréquence utilisez-vous l’IA ?",
    choices: ["Occasionnellement", "1 à 2 fois par jour", "Plusieurs fois par jour", "Très régulièrement"]
  },
  {
    id: "goal",
    text: "Quel résultat cherchez-vous avant tout ?",
    choices: ["Gain de temps", "Meilleur résultat", "Mieux organiser mes idées", "Étendre mes compétences", "Automatiser des tâches"]
  }
];

export const buildCoachProfile = (provider: string, answers: Record<string, string>): CoachProfile => {
  const habits = [
    "Organisation du contexte",
    "Vérification des résultats",
    "Structure des tâches",
    "Utilisation progressive des compétences"
  ];

  const recommendations: CoachRecommendation[] = [
    {
      id: "context-priority",
      title: "Prioriser le contexte",
      description: "Conserver les informations clés à portée de main pour réduire les erreurs et améliorer la cohérence.",
      reason: "Le contexte est la fondation d’un bon travail avec une IA."
    },
    {
      id: "check-results",
      title: "Vérifier les résultats",
      description: "Valider les réponses et demander une comparaison avant validation finale.",
      reason: "La vérification évite les erreurs silencieuses et les faux positifs."
    },
    {
      id: "prompt-structure",
      title: "Structurer les prompts",
      description: "Utiliser un format clair : objectif, contexte, contraintes, format attendu.",
      reason: "Une demande mieux structurée produit des réponses plus fiables."
    },
    {
      id: "skill-loop",
      title: "Construire un loop de compétences",
      description: "Identifier les tâches répétées et transformer les bonnes pratiques en compétences réutilisables.",
      reason: "Les compétences répétées deviennent des accélérateurs de productivité."
    },
    {
      id: "decision-control",
      title: "Conserver le contrôle utilisateur",
      description: "Accepter ou refuser chaque recommandation, puis valider les actions manuellement.",
      reason: "Le user reste au centre. LevelCoach recommande, l’utilisateur décide."
    }
  ];

  return {
    provider,
    answers,
    habits,
    recommendations
  };
};

export const createCoachInstructionDocument = (profile: CoachProfile) => {
  const intro = [
    "Document d’instructions LevelCoach",
    "Objectif : structurer l’usage de l’IA de manière claire, maîtrisée et contextuelle.",
    "Principes :",
    "- LevelCoach recommande.",
    "- L’utilisateur décide.",
    "- LevelCode exécute uniquement lorsqu’une action est validée."
  ];

  const lines = [
    ...intro,
    `Fournisseur sélectionné : ${profile.provider}`,
    "Habitudes de travail recommandées :",
    ...profile.habits.map((habit) => `- ${habit}`),
    "Recommandations prioritaires :",
    ...profile.recommendations.map((r) => `- ${r.title}: ${r.description}`)
  ];

  return lines.join("\n");
};

export const getAvailableProvidersForCoach = () => {
  return getEnabledProviders().map((provider) => ({
    id: provider.id,
    name: provider.name
  }));
};
