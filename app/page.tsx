export default function Home() {
  return (
    <main className="page-shell page-theme-light">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark" aria-hidden="true"><span className="check" /></div>
          <span className="brand-text">LevelCode</span>
        </div>

        <nav className="topnav" aria-label="Navigation principale">
          <a href="/coach">LevelCoach</a>
          <a href="/studio">LevelStudio</a>
          <a href="/market">LevelMarket</a>
          <a href="/levely">Levely AI</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">CONTEXTE ET SKILLS POUR L’IA</p>
          <h1>Donne à ton IA le contexte qui lui manque.</h1>
          <p className="intro">
            LevelCode rassemble les connaissances, le contexte et les compétences utiles pour structurer
            un usage plus clair et plus efficace des intelligences artificielles.
          </p>
          <div className="cta-row">
            <a href="/coach" className="primary-btn">Découvrir LevelCoach</a>
            <a href="/market" className="secondary-btn">Découvrir LevelSkills</a>
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
          <article className="module-card light">
            <div className="index">1</div>
            <h3>Contexte</h3>
            <p>Rassemble les connaissances et les informations utiles pour orienter les décisions de travail.</p>
            <span className="status-badge">Opérationnel</span>
          </article>

          <article className="module-card violet">
            <div className="index">2</div>
            <h3>Skills</h3>
            <p>Définit les compétences réutilisables pour transformer les bonnes pratiques en workflows.</p>
            <span className="status-badge">En développement</span>
          </article>

          <article className="module-card dark">
            <div className="index">3</div>
            <h3>Astra</h3>
            <p>Assiste l’utilisateur dans l’organisation du contexte et de l’exécution des tâches.</p>
            <span className="status-badge">Expérimental</span>
          </article>
        </div>
      </section>

      <section id="skills" className="showcase">
        <div className="showcase-copy">
          <p className="eyebrow dark">LEVELSKILLS</p>
          <h3>La <span>marketplace</span> des skills pour ton IA.</h3>
          <p>Parcours les skills disponibles et ajoute-les à ton espace en un clic.</p>
          <a href="/market" className="primary-btn dark">Explorer LevelSkills</a>
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
          <div className="ecosystem-item"><strong>LevelMemory</strong><span>En conception</span></div>
          <div className="ecosystem-item"><strong>LevelCoach</strong><span>Fondations</span></div>
          <div className="ecosystem-item"><strong>LevelVerify</strong><span>Planifié</span></div>
          <div className="ecosystem-item"><strong>LevelSkills</strong><span>Planifié</span></div>
          <div className="ecosystem-item"><strong>LevelStudio</strong><span>Préparation</span></div>
          <div className="ecosystem-item"><strong>Levely AI</strong><span>Abstraction</span></div>
        </div>
      </section>

      <section className="callout">
        <h2>Prêt à passer au niveau supérieur ?</h2>
        <p>LevelCode arrive bientôt. Rejoins la liste d’attente pour être prévenu de l’ouverture.</p>
        <a href="/coach" className="primary-btn">Accéder à LevelCoach</a>
      </section>

      <footer className="footer">
        <span>© 2026 NATE — LevelCode</span>
        <div className="footer-links">
          <a href="/coach">LevelCoach</a>
          <a href="/studio">LevelStudio</a>
          <a href="/market">LevelSkills</a>
        </div>
      </footer>
    </main>
  );
}
