import "../site-public.css";

export function ContatoPage() {
  return (
    <main className="viva-page viva-contact-page">
      <section className="viva-contact-layout">
        <div className="viva-contact-info">
          <p className="viva-eyebrow">Contato</p>
          <h1>Fale conosco</h1>
          <h2>Vamos conversar?</h2>

          <div className="viva-contact-list">
            <p><strong>E-mail</strong> contato@ciaviva.com</p>
            <p><strong>Telefone</strong> (11) 99999-9999</p>
            <p><strong>Endereço</strong> São Paulo - SP</p>
          </div>
        </div>

        <form className="viva-contact-form">
          <input placeholder="Nome" />
          <input placeholder="E-mail" />
          <input placeholder="Telefone" />
          <input placeholder="Assunto" />
          <textarea placeholder="Mensagem" rows={6} />
          <button type="button">Enviar mensagem</button>
        </form>
      </section>

      <section className="viva-map">
        <div className="viva-map-pin">⌖</div>
      </section>
    </main>
  );
}
