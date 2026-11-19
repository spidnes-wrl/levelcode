import { redirect } from "next/navigation";
import { createClient } from "@/src/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, username")
    .eq("id", user.id)
    .maybeSingle();

  const { data: workspaces, error } = await supabase
    .from("workspaces")
    .select("id, name, slug, created_at")
    .order("created_at", { ascending: false });

  return (
    <main className="auth-shell dashboard-shell">
      <header className="dashboard-topbar">
        <a className="auth-brand" href="/">LevelCode<span>.</span></a>
        <form action="/auth/signout" method="post"><button className="dashboard-signout">Déconnexion</button></form>
      </header>
      <section className="dashboard-welcome">
        <p className="eyebrow">ESPACE PERSONNEL</p>
        <h1>Bienvenue{profile?.full_name ? `, ${profile.full_name}` : ""}.</h1>
        <p>{user.email}</p>
      </section>
      <section className="dashboard-panel">
        <div className="dashboard-panel-heading"><div><p className="eyebrow">WORKSPACES</p><h2>Ton espace de travail</h2></div><span>{workspaces?.length ?? 0} espace(s)</span></div>
        {error ? <p className="auth-message error">La base n'est pas encore configurée. Les tables de fondation doivent être déployées.</p> :
          workspaces?.length ? <div className="workspace-grid">{workspaces.map(workspace => <article key={workspace.id}><h3>{workspace.name}</h3><p>/{workspace.slug}</p></article>)}</div> :
          <p className="dashboard-empty">Ton compte est prêt. La création d'espaces de travail arrive dans la prochaine étape.</p>}
      </section>
    </main>
  );
}
