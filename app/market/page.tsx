'use client';

import { useMemo, useState } from 'react';

const catalog = [
  { id: 'context-master', name: 'Context Mastery', category: 'Organisation', level: 'Débutant', description: 'Structurer le contexte d’une tâche avec un objectif, des contraintes et les informations utiles.', tags: ['Contexte', 'Organisation'] },
  { id: 'prompt-architect', name: 'Prompt Architect', category: 'Productivité', level: 'Débutant', description: 'Transformer une idée en demande claire, exploitable et facile à vérifier.', tags: ['Prompts', 'Méthode'] },
  { id: 'verification-loop', name: 'Verification Loop', category: 'Fiabilité', level: 'Intermédiaire', description: 'Ajouter une étape de contrôle, de comparaison et de validation aux tâches importantes.', tags: ['Qualité', 'Vérification'] },
  { id: 'project-planner', name: 'Project Planner', category: 'Productivité', level: 'Intermédiaire', description: 'Découper un projet en objectifs, étapes, livrables et points de contrôle.', tags: ['Projet', 'Planification'] },
  { id: 'creative-explorer', name: 'Creative Explorer', category: 'Créativité', level: 'Débutant', description: 'Explorer plusieurs directions créatives avant de sélectionner une piste.', tags: ['Idées', 'Créativité'] },
  { id: 'code-review-guide', name: 'Code Review Guide', category: 'Développement', level: 'Avancé', description: 'Organiser une revue de code autour de la lisibilité, des tests et des risques.', tags: ['Code', 'Revue'] },
];

const categories = ['Tout', ...Array.from(new Set(catalog.map((skill) => skill.category)))];

export default function MarketPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Tout');
  const [selected, setSelected] = useState<string[]>([]);

  const filtered = useMemo(() => catalog.filter((skill) => {
    const matchesCategory = category === 'Tout' || skill.category === category;
    const text = `${skill.name} ${skill.description} ${skill.tags.join(' ')}`.toLowerCase();
    return matchesCategory && text.includes(query.trim().toLowerCase());
  }), [category, query]);

  const toggleSkill = (id: string) => {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  return (
    <main className="page-shell page-theme-light">
      <header className="topbar topbar-internal">
        <a href="/" className="brand-wrap" aria-label="Retour à l’accueil LevelCode">
          <span className="brand-mark" aria-hidden="true"><span className="check" /></span><span className="brand-text">LevelCode</span>
        </a>
        <nav className="topnav" aria-label="Navigation interne"><a href="/coach">LevelCoach</a><a href="/studio">LevelStudio</a><a href="/levely">Levely AI</a></nav>
      </header>

      <section className="market-hero">
        <p className="eyebrow">LEVELMARKET / SKILL LIBRARY</p>
        <h1>Les bonnes compétences.<br /><span>Au bon moment.</span></h1>
        <p>Explorez une première bibliothèque de Skills et composez votre sélection. Ce catalogue est une démonstration locale : les Skills ne sont pas encore installés dans un assistant ni synchronisés à un compte.</p>
      </section>

      <section className="market-toolbar">
        <label className="market-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une compétence…" aria-label="Rechercher une compétence" /></label>
        <div className="market-filters" aria-label="Filtrer par catégorie">
          {categories.map((item) => <button type="button" key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
      </section>

      <section className="market-summary">
        <div><strong>{filtered.length}</strong><span>Skills affichés</span></div>
        <div><strong>{selected.length}</strong><span>Dans votre sélection locale</span></div>
        <p>Prototype — sélection conservée uniquement pendant cette session.</p>
      </section>

      <section className="market-grid">
        {filtered.map((skill) => {
          const isSelected = selected.includes(skill.id);
          return <article key={skill.id} className="market-card">
            <div className="market-header"><span className="market-tag">{skill.category}</span><span className="market-level">{skill.level}</span></div>
            <h3>{skill.name}</h3><p>{skill.description}</p>
            <div className="market-tags">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <button type="button" className={`market-select ${isSelected ? 'selected' : ''}`} onClick={() => toggleSkill(skill.id)} aria-pressed={isSelected}>{isSelected ? '✓ Sélectionné' : '＋ Ajouter à ma sélection'}</button>
          </article>;
        })}
      </section>
      {filtered.length === 0 && <div className="market-empty">Aucune compétence ne correspond à votre recherche.</div>}
    </main>
  );
}
