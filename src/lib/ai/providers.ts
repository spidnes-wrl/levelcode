export type AIProviderId = "claude" | "chatgpt" | "gemini" | "grok" | "deepseek";

export type AIProvider = {
  id: AIProviderId;
  name: string;
  enabled: boolean;
  description: string;
  requiresApiKey: boolean;
};

export const aiProviders: AIProvider[] = [
  {
    id: "claude",
    name: "Claude",
    enabled: true,
    description: "Modèle de raisonnement et d’assistance orienté qualité de réponse et contexte.",
    requiresApiKey: true
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    enabled: true,
    description: "Fournisseur généraliste pour assistant de conversation, génération et soutien.",
    requiresApiKey: true
  },
  {
    id: "gemini",
    name: "Gemini",
    enabled: true,
    description: "Modèle multiusage avec bon support multimodal et contexte de travail.",
    requiresApiKey: true
  },
  {
    id: "grok",
    name: "Grok",
    enabled: true,
    description: "Fournisseur optionnel pour intégrations complémentaires ou tests de compatibilité.",
    requiresApiKey: true
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    enabled: true,
    description: "Fournisseur de modèle orienté coût, efficacité et usage d’outils d’assistance.",
    requiresApiKey: true
  }
];

export const getEnabledProviders = () => aiProviders.filter((provider) => provider.enabled);

export const providerConfigExample = {
  claude: "ANTHROPIC_API_KEY",
  chatgpt: "OPENAI_API_KEY",
  gemini: "GOOGLE_API_KEY",
  grok: "XAI_API_KEY",
  deepseek: "DEEPSEEK_API_KEY"
};
