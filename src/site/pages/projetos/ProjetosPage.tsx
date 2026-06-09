import "../site-public.css";

const projects = ["Irreversível", "Reféns", "A Noiva, o Amor e o Tempo", "Prazer Laodiceia", "O Choro de Tamar"];

export function ProjetosPage() {
  return (
    <main className="public-page">
      <section className="public-section dark-band">
        <div className="public-container">
          <p className="public-eyebrow">Projetos</p>
          <h1 className="public-title">Obras e iniciativas culturais.</h1>
          <p className="public-subtitle">
            Conheça os espetáculos, filmes, peças e ações desenvolvidas pela Companhia de Artes Viva.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-public-card" key={project}>
                <span>CIA VIVA</span>
                <h3>{project}</h3>
                <p>Projeto artístico-cultural desenvolvido pela Companhia de Artes Viva.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
