import { Link } from "react-router-dom";
import { SiteMedia } from "../../components/SiteMedia";
import { useSiteContent } from "../../content/useSiteContent";
import "../site-public.css";

export function ProjetosPage() {
  const { projects } = useSiteContent();

  return (
    <main className="commercial-page">
      <section className="commercial-hero commercial-hero--projects">
        <div className="commercial-hero__content">
          <span className="commercial-kicker">{projects.hero.eyebrow}</span>
          <h1>
            {projects.hero.title}
            <strong>{projects.hero.accent}</strong>
          </h1>
          <p>{projects.hero.description}</p>
        </div>

        <div className="commercial-hero__visual">
          <SiteMedia media={projects.hero.media} />
        </div>
      </section>

      <section className="commercial-section">
        <div className="commercial-project-grid">
          {projects.items.map((project) => (
            <article className="commercial-project-card" key={project.title}>
              {project.media.src && (
                <div className="commercial-project-card__media">
                  <SiteMedia media={project.media} />
                </div>
              )}
              <span>{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              {project.button.label && <Link to={project.button.href}>{project.button.label}</Link>}
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-cta">
        <span className="commercial-kicker">{projects.cta.eyebrow}</span>
        <h2>{projects.cta.title}</h2>
        <p>{projects.cta.text}</p>
        <Link className="commercial-button commercial-button--red" to={projects.cta.button.href}>
          {projects.cta.button.label}
        </Link>
      </section>
    </main>
  );
}
