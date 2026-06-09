import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  defaultSiteContent,
  getSiteContent,
  type SiteEditableContent,
} from "../../content/siteContent";
import "../site-public.css";
import "./home-premium.css";

const positions = ["left", "center", "right"] as const;

function imageLayer(url: string, type: "left" | "center" | "right") {
  if (type === "left") {
    return {
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.72)), url("${url}")`,
    };
  }

  if (type === "center") {
    return {
      backgroundImage: `radial-gradient(circle at 50% 32%, rgba(255,255,255,0.08), transparent 12rem), url("${url}")`,
    };
  }

  return {
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.72)), url("${url}")`,
  };
}

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
    <main className="homev2-page">
      <section className="homev2-hero">
        <div
          className="homev2-hero__bg homev2-hero__bg--left"
          style={imageLayer(hero.imageLeft, "left")}
        />
        <div
          className="homev2-hero__bg homev2-hero__bg--center"
          style={imageLayer(hero.imageCenter, "center")}
        />
        <div
          className="homev2-hero__bg homev2-hero__bg--right"
          style={imageLayer(hero.imageRight, "right")}
        />
        <div className="homev2-hero__smoke homev2-hero__smoke--left" />
        <div className="homev2-hero__smoke homev2-hero__smoke--right" />

        <div className="homev2-hero__content">
          <p className="homev2-eyebrow">{hero.eyebrow}</p>

          <h1 className="homev2-title">
            {hero.titleTop}
            <br />
            <span className="homev2-title__accent">{hero.titleAccent}</span>
            {hero.titleBottom}
          </h1>

          <p className="homev2-description">{hero.description}</p>

          <div className="homev2-actions">
            <Link className="homev2-button homev2-button--primary" to="/nossa-historia">
              {hero.primaryButtonText}
            </Link>

            <Link className="homev2-button homev2-button--ghost" to="/apoie">
              {hero.secondaryButtonText}
            </Link>
          </div>

          <div className="homev2-scroll">Role para explorar</div>
        </div>
      </section>

      <section className="homev2-ripped homev2-ripped--dark">
        <div className="homev2-pillars">
          {content.home.pillars.map((pillar) => (
            <article key={pillar.title} className="homev2-pillar">
              <div className="homev2-pillar__icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="homev2-spotlight">
        <div className="homev2-spotlight__grid">
          {content.home.spotlightCards.map((card, index) => {
            const position = positions[index] ?? "center";

            return (
              <article
                key={card.title}
                className={`homev2-spotlight-card homev2-spotlight-card--${position}`}
                style={{ backgroundImage: `url("${card.image}")` }}
              >
                <div className="homev2-spotlight__overlay" />
                <div className="homev2-spotlight__content">
                  <p>{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <Link to={card.to}>{card.button}</Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
