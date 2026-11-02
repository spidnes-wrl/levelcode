'use client';

import { useMemo, useState } from 'react';

const providers = [
  { id: 'claude', name: 'Claude' },
  { id: 'chatgpt', name: 'ChatGPT' },
  { id: 'gemini', name: 'Gemini' },
  { id: 'grok', name: 'Grok' },
  { id: 'deepseek', name: 'DeepSeek' },
];

const coachQuestions = [
  {
    id: 'work-style',
    question: 'Quel est votre style principal de travail avec l’IA ?',
    answers: ['Exploration', 'Rédaction', 'Analyse', 'Développement', 'Planification'],
  },
  {
    id: 'prompt-style',
    question: 'Comment formulez-vous vos demandes ?',
    answers: ['Très bref', 'Très détaillé', 'Par étapes', 'Par cas d’usage', 'Selon le contexte'],
  },
  {
    id: 'priority',
    question: 'Quelle est votre priorité principale ?',
    answers: ['Vitesse', 'Qualité', 'Mémoire du contexte', 'Créativité', 'Vérification'],
  },
  {
    id: 'frequency',
    question: 'À quelle fréquence utilisez-vous l’IA ?',
    answers: ['Occasionnellement', '1–2 fois/jour', 'Plusieurs fois/jour', 'Très régulièrement'],
  },
  {
    id: 'goal',
    question: 'Quel résultat cherchez-vous avant tout ?',
    answers: ['Gain de temps', 'Meilleure qualité', 'Mieux organiser ces idées', 'Développer des compétences', 'Automatiser des tâches'],
  },
];

const recommendationBase = [
  {
    title: 'Prioriser le contexte',
    description: 'Conserver les informations utiles dans un espace structuré pour réduire les erreurs.',
  },
  {
    title: 'Vérifier les résultats',
    description: 'Demander une validation et un contrôle de cohérence sur les réponses majeures.',
  },
  {
    title: 'Structurer les prompts',
    description: 'Utiliser objectif, contexte, contraintes, format attendu et limite de validation.',
  },
  {
    title: 'Construire un loop de compétences',
    description: 'Transformer les bonnes pratiques répétées en compétences réutilisables dans le workflow.',
  },
  {
    title: 'Garder le contrôle utilisateur',
    description: 'Accepter ou refuser chaque recommandation avant exécution pour préserver le pilotage.',
  },
];

export default function CoachPage() {
  const [selectedProvider, setSelectedProvider] = useState('claude');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = coachQuestions[step];

  const progress = useMemo(() => ((step + 1) / coachQuestions.length) * 100, [step]);

  const recommendations = useMemo(() => {
    return recommendationBase.map((item, index) => ({
      ...item,
      reason: `Recommandation ${index + 1} — ${item.title}`,
    }));
  }, []);

  const currentProvider = providers.find((provider) => provider.id === selectedProvider)?.name ?? 'Claude';

  const handleAnswer = (value: string) => {
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    };

    setAnswers(nextAnswers);

    if (step < coachQuestions.length - 1) {
      setStep((current) => current + 1);
      return;
    }

    // final state: keep answers for the final review view in the same component
    console.info('Coach profile draft ready', { provider: selectedProvider, answers: nextAnswers });
  };

  const isFinalStep = step === coachQuestions.length - 1;

  return (
    <main className="page-shell page-theme-light">
      <header className="topbar topbar-internal">
        <a href="/" className="brand-wrap" aria-label="Retour à l’accueil LevelCode">
          <div className="brand-mark" aria-hidden="true"><span className="check" /></div>
          <span className="brand-text">LevelCode</span>
        </a>

        <nav className="topnav" aria-label="Navigation interne">
          <a href="/studio">LevelStudio</a>
          <a href="/market">LevelMarket</a>
          <a href="/levely">Levely AI</a>
        </nav>
      </header>

      <section className="coach-panel">
        <div className="coach-hero">
          <p className="eyebrow">LEVELCOACH</p>
          <h1>Un accompagnement intelligent, piloté par l’utilisateur.</h1>
          <p>
            LevelCoach prépare les recommandations sur mesure sans jamais prétendre modifier une IA externe sans consentement explicite et configuration réelle.
          </p>
        </div>

        <div className="coach-layout">
          <aside className="coach-sidebar">
            <div className="sidebar-card">
              <span className="sidebar-label">Fournisseur</span>
              <div className="provider-list">
                {providers.map((provider) => (
                  <button
                    key={provider.id}
                    type="button"
                    className={`provider-option ${selectedProvider === provider.id ? 'active' : ''}`}
                    onClick={() => setSelectedProvider(provider.id)}
                  >
                    {provider.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <span className="sidebar-label">Progression</span>
              <div className="progress-track">
                <div className="progress-bar" style={{ width: `${progress}%` }} />
              </div>
              <small>{step + 1} / {coachQuestions.length}</small>
            </div>
          </aside>

          <div className="coach-main">
            <div className="question-card">
              <span className="tag">Étape {step + 1}</span>
              <h2>{currentQuestion.question}</h2>

              <div className="answer-list">
                {currentQuestion.answers.map((value) => (
                  <button
                    key={value}
                    type="button"
                    className="answer-option"
                    onClick={() => handleAnswer(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div className="summary-card">
              <h3>Profil préparé</h3>
              <ul>
                <li><strong>Fournisseur :</strong> {currentProvider}</li>
                <li><strong>Questions complétées :</strong> {Object.keys(answers).length}</li>
                <li><strong>Position :</strong> {isFinalStep ? 'Évaluation finale' : 'En cours'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="recommendation-section">
        <div className="section-heading">
          <p className="eyebrow">RECOMMANDATIONS</p>
          <h2>Cinq recommandations adaptées.</h2>
        </div>

        <div className="recommendation-grid">
          {recommendations.map((item) => (
            <article key={item.title} className="recommendation-card">
              <div className="recommendation-topline">
                <span className="chip">À accepter</span>
                <span className="chip alt">À examiner</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <small>{item.reason}</small>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
