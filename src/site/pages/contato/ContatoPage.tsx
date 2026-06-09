import { useSiteContent } from "../../content/useSiteContent";
import "../site-public.css";

export function ContatoPage() {
  const { contact } = useSiteContent();

  return (
    <main className="commercial-page">
      <section className="commercial-contact">
        <div className="commercial-contact__info">
          <span className="commercial-kicker">{contact.hero.eyebrow}</span>
          <h1>
            {contact.hero.title}
            <strong>{contact.hero.accent}</strong>
          </h1>
          <p>{contact.info.text}</p>

          <div className="commercial-contact-list">
            <p><strong>E-mail</strong> {contact.info.email}</p>
            <p><strong>Telefone</strong> {contact.info.phone}</p>
            <p><strong>Localização</strong> {contact.info.location}</p>
          </div>
        </div>

        <form id="formulario" className="commercial-form-card">
          {contact.formFields.map((field) => (
            <label key={field.label}>
              {field.label}
              {field.type === "textarea" ? (
                <textarea rows={6} placeholder={field.placeholder} />
              ) : (
                <input type={field.type} placeholder={field.placeholder} />
              )}
            </label>
          ))}
          <button type="button">Enviar mensagem</button>
        </form>
      </section>
    </main>
  );
}
