"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/src/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setBusy(true);

    try {
      const supabase = createClient();
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });
        if (error) throw error;
        if (data.session) {
          await supabase.from("profiles").upsert({ id: data.user.id, full_name: fullName || null });
          router.push("/dashboard");
          router.refresh();
        } else {
          setMessage("Compte créé. Vérifie ta boîte mail pour confirmer ton adresse avant de te connecter.");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Une erreur est survenue.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="auth-shell">
      <a className="auth-brand" href="/">LevelCode<span>.</span></a>
      <section className="auth-card">
        <p className="eyebrow">YOUR AI. YOUR KNOWLEDGE. YOUR LEVEL.</p>
        <h1>{mode === "login" ? "Content de te revoir." : "Créer ton espace."}</h1>
        <p className="auth-subtitle">Un seul compte pour retrouver ton environnement LevelCode.</p>
        <div className="auth-tabs">
          <button type="button" className={mode === "login" ? "active" : ""} onClick={() => { setMode("login"); setMessage(""); }}>Connexion</button>
          <button type="button" className={mode === "signup" ? "active" : ""} onClick={() => { setMode("signup"); setMessage(""); }}>Créer un compte</button>
        </div>
        {searchParams.get("error") === "auth_callback" && <p className="auth-message error">Le lien de confirmation n'a pas pu être validé. Réessaie.</p>}
        <form onSubmit={handleSubmit}>
          {mode === "signup" && <label>Nom affiché<input value={fullName} onChange={e => setFullName(e.target.value)} autoComplete="name" /></label>}
          <label>Adresse e-mail<input type="email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" /></label>
          <label>Mot de passe<input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={8} autoComplete={mode === "login" ? "current-password" : "new-password"} /></label>
          <button className="auth-submit" type="submit" disabled={busy}>{busy ? "Patiente…" : mode === "login" ? "Se connecter →" : "Créer mon compte →"}</button>
        </form>
        {message && <p className="auth-message" role="status">{message}</p>}
        <p className="auth-footnote">Tes données personnelles sont isolées par compte grâce aux règles de sécurité de la base.</p>
      </section>
      <a className="auth-back" href="/">← Retour à LevelCode</a>
    </main>
  );
}
