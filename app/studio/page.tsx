'use client';

import { useState } from 'react';

type Block = { id: number; type: 'Titre' | 'Texte' | 'Bouton'; content: string };

const starterBlocks: Block[] = [
  { id: 1, type: 'Titre', content: 'Bienvenue dans votre espace' },
  { id: 2, type: 'Texte', content: 'Décrivez ici votre idée, votre service ou votre projet.' },
  { id: 3, type: 'Bouton', content: 'Découvrir le projet' },
];

export default function StudioPage() {
  const [pageName, setPageName] = useState('Ma première page');
  const [blocks, setBlocks] = useState<Block[]>(starterBlocks);
  const [selectedId, setSelectedId] = useState<number>(1);
  const [preview, setPreview] = useState(false);
  const selectedBlock = blocks.find((block) => block.id === selectedId);

  const addBlock = (type: Block['type']) => {
    const id = Date.now();
    const defaults: Record<Block['type'], string> = {
      Titre: 'Nouveau titre',
      Texte: 'Écrivez votre texte ici.',
      Bouton: 'Mon bouton',
    };
    setBlocks((current) => [...current, { id, type, content: defaults[type] }]);
    setSelectedId(id);
  };

  const updateSelected = (content: string) => {
    setBlocks((current) => current.map((block) => block.id === selectedId ? { ...block, content } : block));
  };

  const removeSelected = () => {
    setBlocks((current) => current.filter((block) => block.id !== selectedId));
    const next = blocks.find((block) => block.id !== selectedId);
    if (next) setSelectedId(next.id);
  };

  const exportProject = () => {
    const payload = { name: pageName, exportedAt: new Date().toISOString(), blocks };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'levelstudio-project.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="page-shell page-theme-dark">
      <header className="topbar topbar-internal">
        <a href="/" className="brand-wrap" aria-label="Retour à l’accueil LevelCode">
          <span className="brand-mark" aria-hidden="true"><span className="check" /></span><span className="brand-text">LevelCode</span>
        </a>
        <nav className="topnav" aria-label="Navigation interne"><a href="/coach">LevelCoach</a><a href="/market">LevelMarket</a><a href="/levely">Levely AI</a></nav>
      </header>

      <section className="studio-hero">
        <div>
          <p className="eyebrow">LEVELSTUDIO / VISUAL BUILDER</p>
          <h1>Donnez forme à vos idées.</h1>
          <p>Un premier espace de composition pour organiser une page avec des blocs simples. Votre travail reste dans le navigateur jusqu’à son export : aucun projet n’est envoyé à un serveur.</p>
          <div className="studio-actions"><button type="button" className="status-pill active" onClick={() => setPreview((value) => !value)}>{preview ? '← Revenir à l’éditeur' : 'Prévisualiser ↗'}</button><button type="button" className="status-pill" onClick={exportProject}>Exporter le projet ↓</button></div>
        </div>
        <div className="studio-card studio-editor">
          <div className="studio-editor-head"><span>PROJET LOCAL</span><span>{blocks.length} blocs</span></div>
          <label className="studio-page-name">Nom de la page<input value={pageName} onChange={(event) => setPageName(event.target.value)} /></label>
          {!preview ? (
            <div className="studio-workspace">
              <aside className="studio-block-tools"><span>AJOUTER UN BLOC</span>{(['Titre', 'Texte', 'Bouton'] as const).map((type) => <button key={type} type="button" onClick={() => addBlock(type)}>＋ {type}</button>)}</aside>
              <div className="studio-canvas">
                {blocks.map((block) => <button key={block.id} type="button" className={`studio-canvas-block ${selectedId === block.id ? 'active' : ''}`} onClick={() => setSelectedId(block.id)}><small>{block.type}</small>{block.type === 'Titre' ? <strong>{block.content}</strong> : block.type === 'Bouton' ? <span className="studio-fake-button">{block.content}</span> : <p>{block.content}</p>}</button>)}
                {blocks.length === 0 && <p className="studio-empty">Votre page est vide. Ajoutez un bloc pour commencer.</p>}
              </div>
            </div>
          ) : (
            <div className="studio-preview">
              <span className="preview-label">APERÇU DE LA PAGE</span>
              <h2>{pageName || 'Page sans titre'}</h2>
              {blocks.map((block) => block.type === 'Titre' ? <h3 key={block.id}>{block.content}</h3> : block.type === 'Bouton' ? <span className="studio-fake-button" key={block.id}>{block.content}</span> : <p key={block.id}>{block.content}</p>)}
            </div>
          )}
          {!preview && selectedBlock && <div className="studio-inspector"><label>Modifier le bloc sélectionné<input value={selectedBlock.content} onChange={(event) => updateSelected(event.target.value)} /></label><button type="button" onClick={removeSelected}>Supprimer ce bloc</button></div>}
        </div>
      </section>
      <p className="studio-disclaimer">Prototype local LevelStudio · Export JSON disponible · Sauvegarde cloud, collaboration et génération IA non activées.</p>
    </main>
  );
}
