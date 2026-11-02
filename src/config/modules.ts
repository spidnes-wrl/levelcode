export type ModuleStatus = "opérationnel" | "en développement" | "expérimental" | "planifié";

export type ModuleDefinition = {
  id: string;
  label: string;
  description: string;
  status: ModuleStatus;
  category: "core" | "ai" | "studio" | "integration";
};

export const moduleDefinitions: ModuleDefinition[] = [
  {
    id: "memory",
    label: "LevelMemory",
    description: "Gestion du contexte, de la mémoire de travail et de l’organisation des informations utiles à l’IA.",
    status: "en développement",
    category: "core"
  },
  {
    id: "coach",
    label: "LevelCoach",
    description: "Accompagnement personnalisé, recommandations, questionnaire et protocole d’amélioration des habitudes de travail.",
    status: "en développement",
    category: "ai"
  },
  {
    id: "verify",
    label: "LevelVerify",
    description: "Vérification de résultats, contrôle qualitatif et validation des recommandations.",
    status: "planifié",
    category: "core"
  },
  {
    id: "skills",
    label: "LevelSkills",
    description: "Catalogue de compétences, modules réutilisables et recommandations de progression.",
    status: "planifié",
    category: "core"
  },
  {
    id: "market",
    label: "LevelMarket",
    description: "Découverte de ressources, outils et services pour enrichir les workflows.",
    status: "planifié",
    category: "integration"
  },
  {
    id: "dev",
    label: "LevelDev",
    description: "Environnement de développement orienté productivité, code et collaboration.",
    status: "expérimental",
    category: "core"
  },
  {
    id: "connect",
    label: "LevelConnect",
    description: "Connexion à des services externes, intégrations et accès à des outils tiers.",
    status: "planifié",
    category: "integration"
  },
  {
    id: "import",
    label: "LevelImport",
    description: "Importation de données, fichiers et sources de contexte pour enrichir le système.",
    status: "planifié",
    category: "integration"
  },
  {
    id: "mcp",
    label: "LevelMCP",
    description: "Intégration de serveurs et outils MCP, gestion des flux liés à des modules externes.",
    status: "planifié",
    category: "integration"
  },
  {
    id: "api",
    label: "LevelAPI",
    description: "Gestion des interfaces de programmation, services et intégrations applicatives.",
    status: "planifié",
    category: "integration"
  },
  {
    id: "studio",
    label: "LevelStudio",
    description: "Environnement de création visuelle comprenant composants, pages, données et assistance IA.",
    status: "en développement",
    category: "studio"
  },
  {
    id: "levely",
    label: "Levely AI",
    description: "Assistant central de l’écosystème, avec abstraction de fournisseurs et gestion de modèles.",
    status: "en développement",
    category: "ai"
  }
];

export const ecosystemPrinciple = "LevelCoach recommande. L’utilisateur décide. LevelCode exécute.";
