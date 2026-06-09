import { Link } from "react-router-dom";
import { SiteMedia } from "../../components/SiteMedia";
import { useSiteContent } from "../../content/useSiteContent";
import "../site-public.css";

export function HomePage() {
  const { home } = useSiteContent();

  return (
    <main className="commercial-page">
      <section className="commercial-hero commercial-hero--home">
        <div className="commercial-hero__content">
          <span className="commercial-kicker">{home.hero.eyebrow}</span>
          <h1>
            {home.hero.title}
            <strong>{home.hero.accent}</strong>
          </h1>
          <p>{home.hero.description}</p>

          <div className="commercial-actions">
            <Link className="commercial-button commercial-button--red" to={home.hero.primaryButton.href}>
              {home.hero.primaryButton.label}
            </Link>
            <Link className="commercial-button commercial-button--dark" to={home.hero.secondaryButton.href}>
              {home.hero.secondaryButton.label}
            </Link>
          </div>
        </div>

        <div className="commercial-hero__visual">
          <SiteMedia media={home.hero.media} />
          <div className="commercial-orbit" />
        </div>
      </section>

      <section className="commercial-section commercial-section--compact">
        <div className="commercial-section__header center">
          <span className="commercial-kicker">Cia de Artes Viva</span>
          <h2>Uma companhia feita para aproximar pessoas da cultura.</h2>
          <p>
            Teatro, dança, música, formação artística, voluntariado e projetos
            culturais em uma experiência institucional moderna, humana e acessível.
          </p>
        </div>

        <div className="commercial-feature-grid">
          {home.pillars.map((pillar) => (
            <article className="commercial-feature-card" key={pillar.title}>
              <div>{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-section">
        <div className="commercial-section__header">
          <span className="commercial-kicker">Caminhos da Viva</span>
          <h2>Escolha como caminhar com a gente.</h2>
        </div>

        <div className="commercial-card-grid">
          {home.cards.map((card) => (
            <article className="commercial-image-card" key={card.title}>
              <SiteMedia media={card.media} />
              <div>
                <span>{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <Link to={card.button.href}>{card.button.label}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-cta">
        <span className="commercial-kicker">{home.cta.eyebrow}</span>
        <h2>{home.cta.title}</h2>
        <Link className="commercial-button commercial-button--red" to={home.cta.button.href}>
          {home.cta.button.label}
        </Link>
      </section>
    </main>
  );
}
