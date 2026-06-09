import { SiteMedia } from "../../components/SiteMedia";
import { useSiteContent } from "../../content/useSiteContent";
import "../site-public.css";

export function NossaHistoriaPage() {
  const { story } = useSiteContent();

  return (
    <main className="commercial-page">
      <section className="commercial-hero commercial-hero--story">
        <div className="commercial-hero__content">
          <span className="commercial-kicker">{story.hero.eyebrow}</span>
          <h1>
            {story.hero.title}
            <strong>{story.hero.accent}</strong>
          </h1>
          <p>{story.hero.description}</p>
        </div>

        <div className="commercial-portrait-card">
          {story.founder.photo.src ? (
            <SiteMedia media={story.founder.photo} className="commercial-portrait-photo" />
          ) : (
            <div className="commercial-portrait-card__avatar">{story.founder.initials}</div>
          )}
          <h3>{story.founder.name}</h3>
          <p>{story.founder.role}</p>
          <p>{story.founder.text}</p>
        </div>
      </section>

      <section className="commercial-section commercial-split">
        <article>
          <span className="commercial-kicker">Missão</span>
          <h2>{story.mission.title}</h2>
          <p>{story.mission.text}</p>
        </article>

        <article>
          <span className="commercial-kicker">Valores</span>
          <h2>{story.valuesIntro.title}</h2>
          <p>{story.valuesIntro.text}</p>
        </article>
      </section>

      <section className="commercial-section">
        <div className="commercial-section__header center">
          <span className="commercial-kicker">Nossos princípios</span>
          <h2>O que guia a Cia de Artes Viva.</h2>
        </div>

        <div className="commercial-value-grid">
          {story.values.map((value) => (
            <article className="commercial-value-card" key={value.title}>
              <div>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-origin">
        <div className="commercial-map-shape">
          {story.origin.media.src ? <SiteMedia media={story.origin.media} /> : "SC"}
        </div>
        <div>
          <span className="commercial-kicker">{story.origin.eyebrow}</span>
          <h2>{story.origin.title}</h2>
          <p>{story.origin.text}</p>
        </div>
      </section>
    </main>
  );
}
