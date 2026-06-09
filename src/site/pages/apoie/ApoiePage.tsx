import { SiteMedia } from "../../components/SiteMedia";
import { useSiteContent } from "../../content/useSiteContent";
import "../site-public.css";

export function ApoiePage() {
  const { support } = useSiteContent();

  return (
    <main className="commercial-page">
      <section className="commercial-hero commercial-hero--support">
        <div className="commercial-hero__content">
          <span className="commercial-kicker">{support.hero.eyebrow}</span>
          <h1>
            {support.hero.title}
            <strong>{support.hero.accent}</strong>
          </h1>
          <p>{support.hero.description}</p>
        </div>

        <form className="commercial-lead-form">
          <h3>{support.formTitle}</h3>
          {support.formFields.map((field) => (
            <label key={field.label}>
              {field.label}
              <input type={field.type === "textarea" ? "text" : field.type} placeholder={field.placeholder} />
            </label>
          ))}
          <button type="button">Enviar</button>
        </form>
      </section>

      <section className="commercial-section commercial-section--white">
        <div className="commercial-section__header center">
          <span className="commercial-kicker">{support.project.eyebrow}</span>
          <h2>{support.project.title}</h2>
          <p>{support.project.text}</p>
        </div>

        <div className="commercial-step-grid">
          {support.steps.map((step) => (
            <article className="commercial-step-card" key={step.title}>
              <strong>{step.icon}</strong>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-section">
        <div className="commercial-section__header center">
          <span className="commercial-kicker">{support.donation.eyebrow}</span>
          <h2>{support.donation.title}</h2>
          <p>{support.donation.text}</p>
        </div>

        {support.donation.media.src && (
          <div className="commercial-wide-media">
            <SiteMedia media={support.donation.media} />
          </div>
        )}

        <div className="commercial-actions commercial-actions--center">
          <a className="commercial-button commercial-button--red" href={support.donation.button.href}>
            {support.donation.button.label}
          </a>
        </div>
      </section>
    </main>
  );
}
