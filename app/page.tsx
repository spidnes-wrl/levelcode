const modules = [
  {
    id: 1,
    title: "Contexte",
    description: "Rassemble les connaissances et les informations utiles pour orienter les décisions de travail.",
    status: "Opérationnel",
    tone: "light",
  },
  {
    id: 2,
    title: "Skills",
    description: "Définit les compétences réutilisables et les savoir-faire que l’écosystème peut mobiliser.",
    status: "En développement",
    tone: "violet",
  },
  {
    id: 3,
    title: "Astra",
    description: "Assiste l’utilisateur dans l’organisation du contexte et de l’exécution des tâches.",
    status: "Expérimental",
    tone: "dark",
  },
];

const ecosystem = [
  {
    name: "LevelMemory",
    status: "En conception",
  },
  {
    name: "LevelCoach",
    status: "Fondations",
  },
  {
    name: "LevelVerify",
    status: "Planifié",
  },
  {
    name: "LevelSkills",
    status: "Planifié",
  },
  {
    name: "LevelStudio",
    status: "Préparation",
  },
  {
    name: "Levely AI",
    status: "Abstraction",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark" aria-hidden="true">
            <span className="check" />
          </div>
          <span className="brand-text">LevelCode</span>
        </div>

        <nav className="topnav" aria-label="Navigation principale">
          <a href="#modules">Contexte</a>
          <a href="#skills">Skills</a>
          <a href="#ecosystem">LevelSkills</a>
          <button type="button" className="cta-small">Rejoindre</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">CONTEXTE ET SKILLS POUR L’IA</p>
          <h1>Donne à ton IA le contexte qui lui manque.</h1>
          <p className="intro">
            LevelCode rassemble les connaissances, le contexte et les compétences utiles pour
            structurer un usage plus clair et plus efficace des intelligences artificielles.
          </p>
          <div className="cta-row">
            <button type="button" className="primary-btn">Rejoindre la liste d’attente</button>
            <button type="button" className="secondary-btn">Découvrir LevelSkills</button>
          </div>
        </div>

        <div className="hero-card" aria-label="Exemple de module LevelCode">
          <div className="stack stack-yellow">Contexte</div>
          <div className="stack stack-violet">Skills</div>
          <div className="stack stack-black">
            <span className="mini-check" aria-hidden="true" />
            Astra
          </div>
        </div>
      </section>

      <section id="modules" className="feature-block">
        <h2>Trois niveaux, une seule plateforme.</h2>
        <div className="module-grid">
          {modules.map((module) => (
            <article key={module.id} className={`module-card ${module.tone}`}>
              <div className="index">{module.id}</div>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <span className="status-badge">{module.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="showcase">
        <div className="showcase-copy">
          <p className="eyebrow dark">LEVELSKILLS</p>
          <h3>
            La <span>marketplace</span> des skills pour ton IA.
          </h3>
          <p>
            Parcours les skills disponibles et ajoute-les à ton espace en un clic.
          </p>
          <button type="button" className="primary-btn dark">Explorer LevelSkills</button>
        </div>

        <div className="skill-list" aria-label="Liste des skills">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="skill-item">
              <span>[NOM DU SKILL]</span>
              <span className="skill-meta">[Description courte]</span>
              <button type="button" className="skill-btn">Ajouter</button>
            </div>
          ))}
        </div>
      </section>

      <section id="ecosystem" className="ecosystem-wrap">
        <div className="ecosystem-header">
          <p className="eyebrow dark">ÉCOSYSTÈME</p>
          <h2>Architecture des modules LevelCode</h2>
        </div>
        <div className="ecosystem-grid">
          {ecosystem.map((item) => (
            <div key={item.name} className="ecosystem-item">
              <strong>{item.name}</strong>
              <span>{item.status}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="callout">
        <h2>Prêt à passer au niveau supérieur ?</h2>
        <p>
          LevelCode arrive bientôt. Rejoins la liste d’attente pour être prévenu de l’ouverture.
        </p>
        <button type="button" className="primary-btn">Rejoindre la liste d’attente</button>
      </section>

      <footer className="footer">
        <span>© 2026 NATE — LevelCode</span>
        <div className="footer-links">
          <a href="#modules">Contexte</a>
          <a href="#skills">Skills</a>
          <a href="#ecosystem">Astra</a>
          <a href="#ecosystem">LevelSkills</a>
        </div>
      </footer>
    </main>
  );
}
