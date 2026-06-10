import { Link } from "react-router-dom";
import { SiteMedia } from "../../components/SiteMedia";
import { useSiteContent } from "../../content/useSiteContent";
import "../site-public.css";

export function HomePage() {
  const { home } = useSiteContent();

  return (
    <main className="viva-art-site">
      <section className="viva-art-hero">
        <div className="viva-art-hero__texture" />

        {home.hero.mediaLeft?.src && (
          <div className="viva-art-hero__side viva-art-hero__side--left">
            <SiteMedia media={home.hero.mediaLeft} />
          </div>
        )}

        {home.hero.mediaRight?.src && (
          <div className="viva-art-hero__side viva-art-hero__side--right">
            <SiteMedia media={home.hero.mediaRight} />
          </div>
        )}

        <div className="viva-art-hero__center">
          <div className="viva-art-hero__image">
            <SiteMedia media={home.hero.media} />
          </div>

          <div className="viva-art-hero__copy">
            <span>{home.hero.eyebrow}</span>
            <h1>
              {home.hero.title}
              <strong>{home.hero.accent}</strong>
            </h1>
            <p>{home.hero.description}</p>

            <div className="viva-art-hero__actions">
              <Link to={home.hero.primaryButton.href}>{home.hero.primaryButton.label}</Link>
              <Link to={home.hero.secondaryButton.href}>{home.hero.secondaryButton.label}</Link>
            </div>
          </div>
        </div>

        <div className="viva-art-scroll">
          <i />
          <span>role para explorar</span>
        </div>
      </section>

      <section className="viva-art-pillars">
        {home.pillars.map((pillar) => (
          <article key={pillar.title}>
            <div>{pillar.icon}</div>
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="viva-art-cards">
        {home.cards.map((card) => (
          <article key={card.title}>
            <SiteMedia media={card.media} />
            <div>
              <span>{card.eyebrow}</span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <Link to={card.button.href}>{card.button.label}</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="viva-art-final">
        <span>{home.cta.eyebrow}</span>
        <h2>{home.cta.title}</h2>
        <Link to={home.cta.button.href}>{home.cta.button.label}</Link>
      </section>
    </main>
  );
}
