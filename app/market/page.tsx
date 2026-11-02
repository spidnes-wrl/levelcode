const skills = [
  {
    id: 'context',
    name: 'Context Mastery',
    description: 'Organiser le contexte, les fichiers utiles et les informations clés pour de meilleurs résultats.',
    status: 'Nouveau',
  },
  {
    id: 'prompting',
    name: 'Prompt Structuring',
    description: 'Créer des demandes plus claires et plus efficaces pour mieux piloter l’IA.',
    status: 'À tester',
  },
  {
    id: 'verification',
    name: 'Verification Loop',
    description: 'Valider, corriger et améliorer la qualité des réponses avec un contrôle explicite.',
    status: 'À venir',
  },
  {
    id: 'automation',
    name: 'Workflow Automation',
    description: 'Rendre répétables certaines tâches afin de gagner en vitesse et en cohérence.',
    status: 'Concept',
  },
];

export default function MarketPage() {
  return (
    <main className="page-shell page-theme-light">
      <header className="topbar topbar-internal">
        <a href="/" className="brand-wrap" aria-label="Retour à l’accueil LevelCode">
          <div className="brand-mark" aria-hidden="true"><span className="check" /></div>
          <span className="brand-text">LevelCode</span>
        </a>

        <nav className="topnav" aria-label="Navigation interne">
          <a href="/coach">LevelCoach</a>
          <a href="/studio">LevelStudio</a>
          <a href="/levely">Levely AI</a>
        </nav>
      </header>

      <section className="market-hero">
        <p className="eyebrow">LEVELMARKET</p>
        <h1>La marketplace des compétences utiles à l’IA.</h1>
        <p>
          LevelMarket prépare un espace de découverte des ressources, compétences et outils nécessaires à l’optimisation des workflows.
        </p>
      </section>

      <section className="market-grid">
        {skills.map((skill) => (
          <article key={skill.id} className="market-card">
            <div className="market-header">
              <span className="market-tag">{skill.status}</span>
              <span className="market-action">Ajouter</span>
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
