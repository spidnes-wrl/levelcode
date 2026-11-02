const providers = [
  { id: 'claude', name: 'Claude', note: 'Raisonnement et assistance contextuelle.' },
  { id: 'chatgpt', name: 'ChatGPT', note: 'Assistant généraliste très polyvalent.' },
  { id: 'gemini', name: 'Gemini', note: 'Approche multimodale et contexte riche.' },
  { id: 'grok', name: 'Grok', note: 'Fournisseur optionnel pour tests et compatibilité.' },
  { id: 'deepseek', name: 'DeepSeek', note: 'Équilibre coût / performance / usage d’outils.' },
];

export default function LevelyPage() {
  return (
    <main className="page-shell page-theme-dark">
      <header className="topbar topbar-internal">
        <a href="/" className="brand-wrap" aria-label="Retour à l’accueil LevelCode">
          <div className="brand-mark" aria-hidden="true"><span className="check" /></div>
          <span className="brand-text">LevelCode</span>
        </a>

        <nav className="topnav" aria-label="Navigation interne">
          <a href="/coach">LevelCoach</a>
          <a href="/studio">LevelStudio</a>
          <a href="/market">LevelMarket</a>
        </nav>
      </header>

      <section className="levely-hero">
        <p className="eyebrow">LEVELY AI</p>
        <h1>Un assistant central, agnostique des fournisseurs.</h1>
        <p>
          Levely AI est conçu comme un assistant de l’écosystème LevelCode, sans prétendre posséder un modèle propriétaire. Il doit pouvoir s’interfacer avec des fournisseurs différents à travers une couche d’abstraction claire.
        </p>
      </section>

      <section className="provider-grid">
        {providers.map((provider) => (
          <article key={provider.id} className="provider-card">
            <span className="provider-tag">{provider.name}</span>
            <p>{provider.note}</p>
          </article>
        ))}
      </section>

      <section className="architecture-list">
        <div className="section-heading">
          <p className="eyebrow">ARCHITECTURE</p>
          <h2>Ce que prépare Levely AI</h2>
        </div>

        <ul>
          <li>Choix et configuration des fournisseurs d’IA.</li>
          <li>Gestion des modèles disponibles et des permissions.</li>
          <li>Contrôle des limites d’usage et gestion des erreurs.</li>
          <li>Normalisation des réponses et paramètres d’intégration.</li>
          <li>Protection des données utilisateur via variables d’environnement uniquement.</li>
        </ul>
      </section>
    </main>
  );
}
