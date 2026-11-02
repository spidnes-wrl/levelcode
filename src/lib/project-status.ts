export type ProjectStatus = "opérationnel" | "en développement" | "expérimental" | "planifié";

export type DeliverableStatus = {
  name: string;
  status: ProjectStatus;
  description: string;
};

export const projectStatusMatrix: DeliverableStatus[] = [
  {
    name: "Base officielle GitHub",
    status: "opérationnel",
    description: "Le dépôt a une structure de projet claire, avec documentation et base technique de départ."
  },
  {
    name: "Architecture LevelCode",
    status: "en développement",
    description: "Les modules et l’écosystème sont codés comme base de travail et de documentation."
  },
  {
    name: "LevelCoach fondations",
    status: "en développement",
    description: "Le questionnaire, recommandations et structure des instructions sont préparés."
  },
  {
    name: "Levely AI abstraction fournisseur",
    status: "en développement",
    description: "Les fournisseurs sont modélisés sans inventer de connexion réelle à des services non configurés."
  },
  {
    name: "LevelStudio",
    status: "expérimental",
    description: "Le composant est conceptuellement préparé comme environnement de création, sans prétendre à une finalisation."
  },
  {
    name: "Modules Market / Connect / API / MCP",
    status: "planifié",
    description: "Ces blocs sont identifiés comme architecture à développer avec vraies intégrations documentées."
  }
];

export const officialSourcePrinciples = [
  "Ne pas copier la démo public comme source du produit.",
  "Conserver la démo comme référence visuelle et fonctionnelle.",
  "Ne pas inventer de fonctionnalités opérationnelles non validées.",
  "Documenter chaque module avec son vrai statut.",
  "Garder le contrôle utilisateur sur les décisions et les actions."
];
