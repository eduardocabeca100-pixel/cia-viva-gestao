import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  defaultSiteContent,
  getSiteContent,
  type SiteEditableContent,
} from "../../content/siteContent";
import "../site-public.css";

export function HomePage() {
  const [content, setContent] = useState<SiteEditableContent>(defaultSiteContent);

  useEffect(() => {
    const update = () => setContent(getSiteContent());

    update();

    window.addEventListener("storage", update);
    window.addEventListener("cia-viva-site-content-updated", update);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("cia-viva-site-content-updated", update);
    };
  }, []);

  const hero = content.home.hero;

  return (
    <main className="commercial-page">
      <section className="commercial-hero commercial-hero--home">
        <div className="commercial-hero__visual">
          <img src={hero.imageCenter} alt="Arte e dança da Cia de Artes Viva" />
          <div className="commercial-orbit" />
        </div>

        <div className="commercial-hero__content">
          <span className="commercial-kicker">{hero.eyebrow}</span>
          <h1>
            Arte que inspira,
            <strong> forma e transforma.</strong>
          </h1>
          <p>{hero.description}</p>

          <div className="commercial-actions">
            <Link className="commercial-button commercial-button--red" to="/nossa-historia">
              {hero.primaryButtonText}
            </Link>
            <Link className="commercial-button commercial-button--dark" to="/apoie">
              {hero.secondaryButtonText}
            </Link>
          </div>
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
          {content.home.pillars.map((pillar) => (
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
          {content.home.spotlightCards.map((card) => (
            <article className="commercial-image-card" key={card.title}>
              <img src={card.image} alt="" />
              <div>
                <span>{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <Link to={card.to}>{card.button}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-cta">
        <span className="commercial-kicker">Faça parte</span>
        <h2>Ajude a manter a arte viva, acessível e transformadora.</h2>
        <Link className="commercial-button commercial-button--red" to="/contato">
          Fale com a Cia Viva
        </Link>
      </section>
    </main>
  );
}
