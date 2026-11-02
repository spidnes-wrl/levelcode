'use client';

import { useState } from 'react';

const studioModules = [
  {
    title: 'Éditeur visuel',
    description: 'Composer des interfaces et ajuster rapidement les composants sans repartir de zéro.',
  },
  {
    title: 'Prévisualisation',
    description: 'Tester la structure et la composition du projet en temps réel avant validation.',
  },
  {
    title: 'Pages et composants',
    description: 'Structurer les vues, les sections et les blocs d’interface selon le design officiel.',
  },
  {
    title: 'Gestion des données',
    description: 'Préparer le conteneur de données, les contenus et les ressources du projet.',
  },
  {
    title: 'Assistance Levely AI',
    description: 'S’appuyer sur un assistant IA orienté aide à la création, sans faux modèles propriétaires.',
  },
  {
    title: 'Génération de code',
    description: 'Aider à produire, reformater ou adapter le code des composants et pages.',
  },
];

const statusPill = [
  'Opérationnel',
  'En développement',
  'Expérimental',
  'Planifié',
];

export default function StudioPage() {
  const [activeStatus, setActiveStatus] = useState('En développement');

  return (
    <main className="page-shell page-theme-dark">
      <header className="topbar topbar-internal">
        <a href="/" className="brand-wrap" aria-label="Retour à l’accueil LevelCode">
          <div className="brand-mark" aria-hidden="true"><span className="check" /></div>
          <span className="brand-text">LevelCode</span>
        </a>

        <nav className="topnav" aria-label="Navigation interne">
          <a href="/coach">LevelCoach</a>
          <a href="/market">LevelMarket</a>
          <a href="/levely">Levely AI</a>
        </nav>
      </header>

      <section className="studio-hero">
        <div>
          <p className="eyebrow">LEVELSTUDIO</p>
          <h1>Créer, prévisualiser et organiser le produit.</h1>
          <p>
            LevelStudio est préparé comme un environnement de création pour la conception, la génération et la gestion des composants, pages et contenus du produit.
          </p>
        </div>

        <div className="studio-card">
          <div className="studio-window">
            <div className="window-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="window-body">
              <div className="window-sidebar">
                <span>Pages</span>
                <span>Composants</span>
                <span>Styles</span>
              </div>
              <div className="window-stage">
                <div className="stage-block primary" />
                <div className="stage-block secondary" />
                <div className="stage-block tertiary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-status-bar">
        {statusPill.map((status) => (
          <button
            key={status}
            type="button"
            className={`status-pill ${activeStatus === status ? 'active' : ''}`}
            onClick={() => setActiveStatus(status)}
          >
            {status}
          </button>
        ))}
      </section>

      <section className="module-grid studio-grid">
        {studioModules.map((module) => (
          <article key={module.title} className="module-card dark">
            <div className="index">✦</div>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
            <span className="status-badge">{activeStatus}</span>
          </article>
        ))}
      </section>
    </main>
  );
}
