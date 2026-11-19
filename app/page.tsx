const modules = [
  { name: "LevelMemory", description: "Organisez vos connaissances, préférences et informations utiles.", status: "En développement", group: "Connaissance" },
  { name: "LevelCoach", description: "Analysez vos habitudes et obtenez des recommandations que vous restez libre d’accepter.", status: "Fondations disponibles", group: "Accompagnement" },
  { name: "LevelVerify", description: "Examinez la cohérence et la fiabilité des informations.", status: "Planifié", group: "Fiabilité" },
  { name: "LevelSkills", description: "Créez, organisez et activez des compétences réutilisables.", status: "Planifié", group: "Compétences" },
  { name: "LevelMarket", description: "Découvrez des Skills et ressources créés pour enrichir vos usages.", status: "Prototype", group: "Marketplace" },
  { name: "LevelDev", description: "Un espace destiné aux développeurs et créateurs de modules.", status: "Planifié", group: "Création" },
  { name: "LevelConnect", description: "Reliez vos outils et fournisseurs compatibles, avec des permissions explicites.", status: "Planifié", group: "Intégrations" },
  { name: "LevelImport", description: "Importez vos connaissances et configurations compatibles.", status: "Planifié", group: "Connaissance" },
  { name: "LevelMCP", description: "Préparez la gestion des outils et serveurs compatibles MCP.", status: "Planifié", group: "Intégrations" },
  { name: "LevelAPI", description: "Organisez les accès techniques et les interfaces de programmation.", status: "Planifié", group: "Développeurs" },
  { name: "LevelStudio", description: "Imaginez et structurez vos espaces, pages et expériences numériques.", status: "Prototype", group: "Création" },
  { name: "Levely AI", description: "L’assistante centrale conçue pour coordonner les capacités de l’écosystème.", status: "Expérimental", group: "Intelligence" },
];

const statusClass = (status: string) =>
  status === "Fondations disponibles" ? "status-ready" : status === "Expérimental" ? "status-experimental" : "status-planned";

export default function Home() {
  return (
    <main className="page-shell page-theme-light">
      <header className="topbar">
        <a href="/" className="brand-wrap" aria-label="LevelCode, accueil">
          <span className="brand-mark" aria-hidden="true"><span className="check" /></span>
          <span className="brand-text">LevelCode</span>
        </a>
        <nav className="topnav" aria-label="Navigation principale">
          <a href="#ecosystem">Écosystème</a>
          <a href="/coach">LevelCoach</a>
          <a href="/market">LevelMarket</a>
          <a href="/studio">LevelStudio</a>
          <a href="/levely">Levely AI</a>\n          <a href="/skills">LevelSkills</a>\n          <a href="/dev">LevelDev</a>\n          <a href="/connect">LevelConnect</a>\n          <a href="/import">LevelImport</a>\n          <a href="/mcp">LevelMCP</a>\n          <a href="/api-docs">LevelAPI</a>
        </nav>
        <a href="/coach" className="nav-cta">Découvrir</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">YOUR AI. YOUR KNOWLEDGE. YOUR LEVEL.</p>
          <h1>Votre IA.<br /><span>Vos connaissances.</span><br />Votre niveau.</h1>
          <p className="intro">LevelCode est un écosystème indépendant qui organise vos connaissances, personnalise vos assistants et vous aide à mieux maîtriser vos outils d’intelligence artificielle.</p>
          <div className="cta-row">
            <a href="/coach" className="primary-btn">Explorer LevelCoach <span aria-hidden="true">↗</span></a>
            <a href="#ecosystem" className="secondary-btn">Voir l’écosystème</a>
          </div>
          <p className="hero-note"><span className="status-dot" /> Projet en développement — découvrez les modules et leur état réel.</p>
        </div>
        <div className="hero-visual" aria-label="Les trois piliers de LevelCode">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core-card">
            <span className="core-kicker">LEVELCODE ECOSYSTEM</span>
            <strong>Your AI.<br />Your Knowledge.<br /><em>Your Level.</em></strong>
            <div className="core-footer"><span>12 modules</span><span>·</span><span>1 écosystème</span></div>
          </div>
          <div className="float-card float-memory"><span className="float-icon">◈</span><span><b>Knowledge</b><small>LevelMemory</small></span></div>
          <div className="float-card float-coach"><span className="float-icon">✳</span><span><b>Guidance</b><small>LevelCoach</small></span></div>
          <div className="float-card float-skills"><span className="float-icon">⌘</span><span><b>Skills</b><small>LevelMarket</small></span></div>
        </div>
      </section>

      <section className="principle-strip">
        <span>NOTRE PRINCIPE</span>
        <p><b>LevelCoach recommande.</b><i>L’utilisateur décide.</i><b>LevelCode exécute.</b></p>
      </section>

      <section id="ecosystem" className="ecosystem-section">
        <div className="section-heading">
          <div><p className="eyebrow">UN ÉCOSYSTÈME MODULAIRE</p><h2>Tout commence par<br /><span>la connaissance.</span></h2></div>
          <p className="section-intro">Chaque module a un rôle précis. Ils sont conçus pour fonctionner ensemble, sans imposer un fournisseur d’IA unique ni retirer le contrôle à l’utilisateur.</p>
        </div>
        <div className="ecosystem-grid">
          {modules.map((module, index) => (
            <article className="ecosystem-card" key={module.name}>
              <div className="ecosystem-card-top"><span className="module-number">{String(index + 1).padStart(2, "0")}</span><span className={`module-status ${statusClass(module.status)}`}>{module.status}</span></div>
              <p className="module-group">{module.group}</p>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="coach-feature">
        <div><p className="eyebrow">COMMENCER ICI</p><h2>Découvrez votre façon<br />de travailler avec l’IA.</h2><p>LevelCoach vous guide à travers quelques questions et prépare un premier profil de travail. Vous gardez le choix sur chaque recommandation.</p><a href="/coach" className="primary-btn">Lancer LevelCoach <span aria-hidden="true">↗</span></a></div>
        <div className="coach-preview"><span className="preview-label">LEVELCOACH / PROFIL</span><div className="preview-question">Quelle est votre priorité principale ?</div><div className="preview-choice selected">◉ Qualité des résultats <span>✓</span></div><div className="preview-choice">○ Mémoire du contexte</div><div className="preview-choice">○ Créativité et exploration</div><div className="preview-progress"><span /></div><small>Un profil préparé selon vos réponses.</small></div>
      </section>

      <section className="closing-card">
        <p className="eyebrow">BUILT FOR A SMARTER AI FUTURE</p>
        <h2>L’intelligence artificielle<br /><span>à votre niveau.</span></h2>
        <p>Un environnement plus personnel, plus clair et toujours sous votre contrôle.</p>
        <a href="/coach" className="primary-btn">Découvrir LevelCode <span aria-hidden="true">↗</span></a>
      </section>

      <footer className="footer">
        <a href="/" className="brand-wrap"><span className="brand-mark" aria-hidden="true"><span className="check" /></span><span className="brand-text">LevelCode</span></a>
        <span>© 2026 NATE — LevelCode. Projet indépendant.</span>
        <div className="footer-links"><a href="/coach">LevelCoach</a><a href="/market">LevelMarket</a><a href="/studio">LevelStudio</a><a href="/levely">Levely AI</a></div>
      </footer>
    </main>
  );
}
