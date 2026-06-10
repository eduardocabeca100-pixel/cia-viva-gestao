import { Link } from "react-router-dom";
import { SiteMedia } from "../../components/SiteMedia";
import { useSiteContent } from "../../content/useSiteContent";
import "../site-public.css";

function animatedWords(text: string) {
  return text.split(" ").map((word, index) => (
    <span key={`${word}-${index}`} style={{ animationDelay: `${index * 90}ms` }}>
      {word}
    </span>
  ));
}

export function HomePage() {
  const { home } = useSiteContent();
  const animation = home.hero.animation || "letters";

  return (
    <main className="commercial-page">
      <section className={`viva-cinema-home viva-cinema-home--${animation}`}>
        <div className="viva-cinema-home__glow viva-cinema-home__glow--red" />
        <div className="viva-cinema-home__glow viva-cinema-home__glow--white" />

        {home.hero.mediaLeft?.src && (
          <div className="viva-cinema-home__side viva-cinema-home__side--left">
            <SiteMedia media={home.hero.mediaLeft} />
          </div>
        )}

        {home.hero.mediaRight?.src && (
          <div className="viva-cinema-home__side viva-cinema-home__side--right">
            <SiteMedia media={home.hero.mediaRight} />
          </div>
        )}

        <div className="viva-cinema-home__stage">
          <div className="viva-cinema-home__main-media">
            <SiteMedia media={home.hero.media} />
          </div>

          <div className="viva-cinema-home__content">
            <span className="commercial-kicker">{home.hero.eyebrow}</span>

            <h1 className="commercial-animated-title">
              {animation === "letters" ? animatedWords(home.hero.title) : home.hero.title}
              <strong>
                {animation === "letters" ? animatedWords(home.hero.accent) : home.hero.accent}
              </strong>
            </h1>

            <p>{home.hero.description}</p>

            <div className="commercial-actions commercial-actions--center">
              <Link className="commercial-button commercial-button--red" to={home.hero.primaryButton.href}>
                {home.hero.primaryButton.label}
              </Link>

              <Link className="commercial-button commercial-button--dark" to={home.hero.secondaryButton.href}>
                {home.hero.secondaryButton.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="commercial-section commercial-section--compact viva-home-pillars">
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

      <section className="commercial-section viva-home-cards">
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
