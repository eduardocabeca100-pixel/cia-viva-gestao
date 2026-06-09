import "../site-public.css";

const projects = [
  ["Espetáculos", "Criações cênicas com impacto visual, poesia e presença."],
  ["Oficinas", "Formação artística para crianças, jovens e adultos."],
  ["Turnês e circulações", "Levamos arte para novos públicos e territórios."],
  ["Ações sociais", "Projetos culturais conectados à comunidade."],
];

export function ProjetosPage() {
  return (
    <main className="viva-page">
      <section className="viva-hero viva-hero-projects">
        <div className="viva-hero-image viva-hero-image-stage" />
        <div className="viva-hero-content">
          <h1>Nossos projetos</h1>
          <h2>Levam arte onde ela é necessária.</h2>
        </div>
      </section>

      <section className="viva-section">
        <div className="viva-card-grid viva-card-grid-2">
          {projects.map(([title, text], index) => (
            <article className={`viva-project-card viva-project-card-${index + 1}`} key={title}>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="viva-cta">
        <h2>Novos projetos em breve!</h2>
        <p>Estamos preparando novas experiências para a Cia de Artes Viva.</p>
      </section>
    </main>
  );
}
