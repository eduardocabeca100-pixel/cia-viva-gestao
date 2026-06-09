import "../site-public.css";

export function ContatoPage() {
  return (
    <main className="commercial-page">
      <section className="commercial-contact">
        <div className="commercial-contact__info">
          <span className="commercial-kicker">Contato</span>
          <h1>
            Fale
            <strong> conosco.</strong>
          </h1>
          <p>Vamos conversar sobre projetos, voluntariado, apoio cultural e parcerias.</p>

          <div className="commercial-contact-list">
            <p><strong>E-mail</strong> contato@ciaviva.com</p>
            <p><strong>Telefone</strong> (11) 99999-9999</p>
            <p><strong>Localização</strong> Jaraguá do Sul - SC</p>
          </div>
        </div>

        <form className="commercial-form-card">
          <label>
            Nome
            <input placeholder="Seu nome" />
          </label>
          <label>
            E-mail
            <input placeholder="seuemail@email.com" />
          </label>
          <label>
            Telefone
            <input placeholder="(00) 00000-0000" />
          </label>
          <label>
            Assunto
            <input placeholder="Sobre o que deseja falar?" />
          </label>
          <label>
            Mensagem
            <textarea rows={6} placeholder="Escreva sua mensagem" />
          </label>
          <button type="button">Enviar mensagem</button>
        </form>
      </section>
    </main>
  );
}
