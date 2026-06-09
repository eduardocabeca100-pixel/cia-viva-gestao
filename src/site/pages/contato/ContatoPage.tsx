import "../site-public.css";

export function ContatoPage() {
  return (
    <main className="public-page">
      <section className="public-section light-section">
        <div className="public-container">
          <p className="public-eyebrow">Contato</p>
          <h1 className="public-title">Fale conosco.</h1>
          <p className="public-subtitle">
            Envie uma mensagem para a Cia de Artes Viva.
          </p>

          <form className="contact-form-public">
            <input placeholder="Nome" />
            <input placeholder="E-mail" />
            <input placeholder="Assunto" />
            <textarea placeholder="Mensagem" />
            <button className="public-button primary" type="button">Enviar mensagem</button>
          </form>
        </div>
      </section>
    </main>
  );
}
