import "../site-public.css";

const steps = [
  "Calcule o valor possível para doação",
  "Escolha o projeto",
  "Faça a transferência identificada",
  "Curta o projeto",
  "Declare o valor no imposto",
];

export function ApoiePage() {
  return (
    <main className="commercial-page">
      <section className="commercial-hero commercial-hero--support">
        <div className="commercial-hero__content">
          <span className="commercial-kicker">Lei de Incentivo</span>
          <h1>
            Aqui seu imposto
            <strong> vira arte.</strong>
          </h1>
          <p>
            Apoiar a cultura é simples, seguro e transforma realidades. Empresas
            e pessoas físicas podem destinar parte do imposto devido para projetos
            culturais aprovados.
          </p>
        </div>

        <form className="commercial-lead-form">
          <label>
            Nome
            <input placeholder="Seu nome" />
          </label>
          <label>
            Sobrenome
            <input placeholder="Seu sobrenome" />
          </label>
          <label>
            E-mail
            <input placeholder="seuemail@email.com" />
          </label>
          <label>
            Contato / WhatsApp
            <input placeholder="(00) 00000-0000" />
          </label>
          <button type="button">Enviar</button>
        </form>
      </section>

      <section className="commercial-section commercial-section--white">
        <div className="commercial-section__header center">
          <span className="commercial-kicker">Nossos projetos</span>
          <h2>Irreversível</h2>
          <p>Venha ser um agente transformador e faça a diferença na vida de quem precisa.</p>
        </div>

        <div className="commercial-step-grid">
          {steps.map((step, index) => (
            <article className="commercial-step-card" key={step}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-section">
        <div className="commercial-section__header center">
          <span className="commercial-kicker">Doação segura</span>
          <h2>Doe é simples e seguro.</h2>
          <p>
            Empresas que apuram pelo Lucro Real podem pagar até 4% do imposto devido.
            Pessoas físicas podem pagar até 6%.
          </p>
        </div>
      </section>
    </main>
  );
}
