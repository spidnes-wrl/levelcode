'use client';

import { useMemo, useState } from 'react';

const providers = [
  { id: 'claude', name: 'Claude' },
  { id: 'chatgpt', name: 'ChatGPT' },
  { id: 'gemini', name: 'Gemini' },
  { id: 'grok', name: 'Grok' },
  { id: 'deepseek', name: 'DeepSeek' },
];

const questions = [
  { id: 'workStyle', question: 'Quel est votre style principal de travail avec l’IA ?', answers: ['Exploration', 'Rédaction', 'Analyse', 'Développement', 'Planification'] },
  { id: 'promptStyle', question: 'Comment formulez-vous vos demandes ?', answers: ['Très bref', 'Très détaillé', 'Par étapes', 'Par cas d’usage', 'Selon le contexte'] },
  { id: 'priority', question: 'Quelle est votre priorité principale ?', answers: ['Vitesse', 'Qualité des résultats', 'Mémoire du contexte', 'Créativité', 'Vérification'] },
  { id: 'frequency', question: 'À quelle fréquence utilisez-vous l’IA ?', answers: ['Occasionnellement', '1 à 2 fois par jour', 'Plusieurs fois par jour', 'Très régulièrement'] },
  { id: 'goal', question: 'Quel résultat cherchez-vous avant tout ?', answers: ['Gagner du temps', 'Obtenir de meilleurs résultats', 'Organiser mes idées', 'Développer mes compétences', 'Automatiser des tâches'] },
];

type Answers = Record<string, string>;

const recommendationLibrary = [
  { id: 'context', title: 'Structurer votre contexte', description: 'Regroupez les informations utiles à une tâche : objectif, contexte, contraintes et résultat attendu.', tags: ['Mémoire du contexte', 'Planification', 'Analyse'], reason: 'Un contexte clair aide à réduire les ambiguïtés.' },
  { id: 'verify', title: 'Installer une étape de vérification', description: 'Pour les résultats importants, demandez les hypothèses, les limites et les éléments à vérifier.', tags: ['Vérification', 'Qualité des résultats', 'Analyse'], reason: 'La qualité dépend aussi du contrôle des résultats.' },
  { id: 'prompt', title: 'Décomposer les demandes', description: 'Divisez les tâches complexes en étapes courtes avec un résultat attendu pour chacune.', tags: ['Par étapes', 'Développement', 'Planification'], reason: 'Une progression explicite facilite le suivi.' },
  { id: 'creative', title: 'Préserver une phase d’exploration', description: 'Comparez plusieurs pistes avant de choisir une direction et de passer à la production.', tags: ['Exploration', 'Créativité', 'Rédaction'], reason: 'Comparer les options permet de ne pas verrouiller trop tôt une idée.' },
  { id: 'workflow', title: 'Transformer les habitudes en workflow', description: 'Repérez les tâches répétées et créez une procédure réutilisable avec des étapes de validation.', tags: ['Automatiser des tâches', 'Gagner du temps', 'Développer mes compétences'], reason: 'Les processus répétables rendent le travail plus cohérent.' },
];

export default function CoachPage() {
  const [provider, setProvider] = useState('claude');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [completed, setCompleted] = useState(false);

  const currentQuestion = questions[step];
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;
  const providerName = providers.find((item) => item.id === provider)?.name ?? 'Claude';

  const recommendations = useMemo(() => {
    const priority = answers.priority;
    const style = answers.workStyle;
    const promptStyle = answers.promptStyle;
    return [...recommendationLibrary].sort((a, b) => {
      const score = (item: typeof recommendationLibrary[number]) =>
        Number(Boolean(priority && item.tags.includes(priority))) +
        Number(Boolean(style && item.tags.includes(style))) +
        Number(Boolean(promptStyle && item.tags.includes(promptStyle)));
      return score(b) - score(a);
    });
  }, [answers]);

  const chooseAnswer = (value: string) => {
    const next = { ...answers, [currentQuestion.id]: value };
    setAnswers(next);
    if (step < questions.length - 1) setStep((value) => value + 1);
    else setCompleted(true);
  };

  const downloadProfile = () => {
    const lines = [
      'LEVELCOACH — PROFIL DE TRAVAIL',
      '',
      `Fournisseur préféré : ${providerName}`,
      '',
      'RÉPONSES',
      ...questions.map((question) => `- ${question.question}\n  ${answers[question.id] ?? 'Non renseigné'}`),
      '',
      'RECOMMANDATIONS PROPOSÉES',
      ...recommendations.map((item, index) => `${index + 1}. ${item.title}\n   ${item.description}\n   Pourquoi : ${item.reason}`),
      '',
      'Note : ce document est une première synthèse locale, pas une configuration appliquée à un assistant externe.',
      'LevelCoach recommande. L’utilisateur décide. LevelCode exécute.',
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'levelcoach-profil.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setCompleted(false);
  };

  return (
    <main className="page-shell page-theme-light">
      <header className="topbar topbar-internal">
        <a href="/" className="brand-wrap" aria-label="Retour à l’accueil LevelCode">
          <span className="brand-mark" aria-hidden="true"><span className="check" /></span>
          <span className="brand-text">LevelCode</span>
        </a>
        <nav className="topnav" aria-label="Navigation interne">
          <a href="/market">LevelMarket</a><a href="/studio">LevelStudio</a><a href="/levely">Levely AI</a>
        </nav>
      </header>

      <section className="coach-panel">
        <div className="coach-hero">
          <p className="eyebrow">LEVELCOACH / PROFIL PERSONNEL</p>
          <h1>Comprendre votre façon de travailler avec l’IA.</h1>
          <p>Répondez à cinq questions pour obtenir une première synthèse et des pistes d’amélioration. Vos réponses restent dans cette session : aucune modification n’est appliquée à un assistant externe.</p>
        </div>

        <div className="coach-layout">
          <aside className="coach-sidebar">
            <div className="sidebar-card">
              <span className="sidebar-label">Votre fournisseur préféré</span>
              <div className="provider-list">
                {providers.map((item) => (
                  <button key={item.id} type="button" className={`provider-option ${provider === item.id ? 'active' : ''}`} onClick={() => setProvider(item.id)} aria-pressed={provider === item.id}>{item.name}</button>
                ))}
              </div>
              <small>Cette préférence sert uniquement à personnaliser le document exporté.</small>
            </div>
            <div className="sidebar-card">
              <span className="sidebar-label">Progression</span>
              <div className="progress-track"><div className="progress-bar" style={{ width: `${progress}%` }} /></div>
              <small>{answeredCount} / {questions.length} réponses</small>
            </div>
          </aside>

          <div className="coach-main">
            {!completed ? (
              <div className="question-card">
                <span className="tag">Étape {step + 1} sur {questions.length}</span>
                <h2>{currentQuestion.question}</h2>
                <div className="answer-list">
                  {currentQuestion.answers.map((answer) => (
                    <button key={answer} type="button" className={`answer-option ${answers[currentQuestion.id] === answer ? 'selected' : ''}`} onClick={() => chooseAnswer(answer)}>{answer}</button>
                  ))}
                </div>
                {step > 0 && <button type="button" className="text-button" onClick={() => setStep((value) => value - 1)}>← Question précédente</button>}
              </div>
            ) : (
              <div className="question-card">
                <span className="tag">Votre profil est prêt</span>
                <h2>Voici votre première synthèse.</h2>
                <p>Fournisseur préféré : <strong>{providerName}</strong></p>
                <ul className="coach-answer-summary">
                  {questions.map((question) => <li key={question.id}><strong>{question.question}</strong><span>{answers[question.id]}</span></li>)}
                </ul>
                <div className="cta-row">
                  <button type="button" className="primary-btn" onClick={downloadProfile}>Exporter mon profil ↓</button>
                  <button type="button" className="secondary-btn" onClick={restart}>Recommencer</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {completed && (
        <section className="recommendation-section">
          <div className="section-heading"><p className="eyebrow">PISTES PERSONNALISÉES</p><h2>À examiner, selon vos réponses.</h2><p>Ces recommandations sont des suggestions initiales. Vous restez libre de les adapter ou de les ignorer.</p></div>
          <div className="recommendation-grid">
            {recommendations.map((item, index) => (
              <article key={item.id} className="recommendation-card">
                <div className="recommendation-topline"><span className="chip">Piste {index + 1}</span><span className="chip alt">À votre décision</span></div>
                <h3>{item.title}</h3><p>{item.description}</p><small>{item.reason}</small>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
