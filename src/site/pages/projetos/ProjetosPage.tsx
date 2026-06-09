import "../site-public.css";

const projects = [
  ["Espetáculos", "Criações cênicas com impacto visual, poesia e presença."],
  ["Oficinas", "Formação artística para crianças, jovens e adultos."],
  ["Turnês e circulações", "Levamos arte para novos públicos e territórios."],
  ["Ações sociais", "Projetos culturais conectados à comunidade."],
];

export function ProjetosPage() {
  return (
    <main className="commercial-page">
      <section className="commercial-hero commercial-hero--projects">
        <div className="commercial-hero__content">
          <span className="commercial-kicker">Projetos</span>
          <h1>
            Arte onde
            <strong> ela é necessária.</strong>
          </h1>
          <p>
            Espetáculos, oficinas, ações sociais e experiências que aproximam a
            comunidade da cultura.
          </p>
        </div>
      </section>

      <section className="commercial-section">
        <div className="commercial-project-grid">
          {projects.map(([title, text]) => (
            <article className="commercial-project-card" key={title}>
              <span>Projeto</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-cta">
        <span className="commercial-kicker">Em breve</span>
        <h2>Novos projetos estão sendo preparados.</h2>
      </section>
    </main>
  );
}
