import { SiteMedia } from "../../components/SiteMedia";
import { useSiteContent } from "../../content/useSiteContent";
import "../site-public.css";

export function VoluntariadoPage() {
  const { volunteer } = useSiteContent();

  return (
    <main className="commercial-page">
      <section className="commercial-hero commercial-hero--volunteer">
        <div className="commercial-hero__content">
          <span className="commercial-kicker">{volunteer.hero.eyebrow}</span>
          <h1>
            {volunteer.hero.title}
            <strong>{volunteer.hero.accent}</strong>
          </h1>
          <p>{volunteer.hero.description}</p>
        </div>

        <div className="commercial-hero__visual">
          <SiteMedia media={volunteer.hero.media} />
        </div>
      </section>

      <section className="commercial-section commercial-split">
        <article>
          <span className="commercial-kicker">{volunteer.intro.eyebrow}</span>
          <h2>{volunteer.intro.title}</h2>
        </article>

        <article>
          <p>{volunteer.intro.textOne}</p>
          <p>{volunteer.intro.textTwo}</p>
          <h3 className="commercial-red-title">{volunteer.intro.deadline}</h3>
        </article>
      </section>

      <section className="commercial-section">
        <div className="commercial-section__header center">
          <span className="commercial-kicker">{volunteer.team.eyebrow}</span>
          <h2>{volunteer.team.title}</h2>
        </div>

        <div className="commercial-team-grid">
          {volunteer.team.people.map((person) => (
            <article className="commercial-person" key={person.name}>
              {person.photo.src ? (
                <SiteMedia media={person.photo} className="commercial-person-photo" />
              ) : (
                <div>{person.initials}</div>
              )}
              <strong>{person.name}</strong>
              <span>{person.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="formacao" className="commercial-section commercial-section--white">
        <div className="commercial-section__header center">
          <span className="commercial-kicker">{volunteer.learning.eyebrow}</span>
          <h2>{volunteer.learning.title}</h2>
        </div>

        <div className="commercial-learning-grid">
          {volunteer.learning.cards.map((card) => (
            <article className="commercial-learning-card" key={card.title}>
              <div>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="inscricao" className="commercial-register">
        <div>
          <span className="commercial-kicker">{volunteer.register.eyebrow}</span>
          <h2>{volunteer.register.title}</h2>
          <p>{volunteer.register.text}</p>
        </div>

        <form className="commercial-form-card">
          {volunteer.register.formFields.map((field) => (
            <label key={field.label}>
              {field.label}
              {field.type === "textarea" ? (
                <textarea rows={4} placeholder={field.placeholder} />
              ) : (
                <input type={field.type} placeholder={field.placeholder} />
              )}
            </label>
          ))}
          <button type="button">Enviar inscrição</button>
        </form>
      </section>
    </main>
  );
}
