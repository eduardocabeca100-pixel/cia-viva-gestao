import "../site-public.css";

const team = [
  { name: "Eduardo Cabeça", role: "Direção / Coordenação", initials: "EC", highlight: true },
  { name: "Cacau Ricartte", role: "Voluntária", initials: "CR" },
  { name: "Julia Titz", role: "Voluntária", initials: "JT" },
  { name: "Heya Camargo", role: "Voluntária", initials: "HC" },
  { name: "Bruna Lazzarotto", role: "Voluntária", initials: "BL" },
  { name: "Katy Souza", role: "Voluntária", initials: "KS" },
  { name: "Ricardo Costa", role: "Voluntário", initials: "RC" },
  { name: "Renaldo BK", role: "Voluntário", initials: "RB" },
];

const learningCards = [
  ["Teatro e atuação", "Construção de expressão corporal e vocal, improvisação, concentração e presença em cena.", "🎭"],
  ["Trabalho em equipe", "Colaboração, organização, comunicação e construção coletiva de processos artísticos.", "✣"],
  ["Audiovisual e curtas", "Noções de atuação para câmera, registros, bastidores e criação de conteúdo.", "🎬"],
  ["Palco e bastidores", "Vivência de produção, figurino, entrada de cena, rotina de ensaios e apresentações.", "🕺"],
];

export function VoluntariadoPage() {
  return (
    <main className="commercial-page">
      <section className="commercial-hero commercial-hero--volunteer">
        <div className="commercial-hero__content">
          <span className="commercial-kicker">Inscrições abertas</span>
          <h1>
            Voluntariado
            <strong>2026.</strong>
          </h1>
          <p>
            Se você sonha em fazer teatro de forma consciente e transformadora,
            este é o seu momento. Um programa gratuito de formação, prática
            artística e desenvolvimento humano por meio da arte.
          </p>
        </div>

        <div className="commercial-hero-panel">
          <h3>Até 25 de janeiro</h3>
          <p>
            Aprenda, colabore, viva experiências reais de palco e bastidores e
            participe de uma comunidade movida por propósito.
          </p>
        </div>
      </section>

      <section className="commercial-section commercial-split">
        <article>
          <span className="commercial-kicker">Crescimento coletivo</span>
          <h2>2025 foi um ano de aprendizados. 2026 será de expansão.</h2>
        </article>

        <article>
          <p>
            Acreditamos no teatro como ferramenta de expressão, reflexão e impacto
            social. O voluntariado é voltado a pessoas que desejam aprender,
            colaborar e viver experiências reais de palco e bastidores.
          </p>
        </article>
      </section>

      <section className="commercial-section">
        <div className="commercial-section__header center">
          <span className="commercial-kicker">Nosso time</span>
          <h2>Somos formados por voluntários com um propósito.</h2>
        </div>

        <div className="commercial-team-grid">
          {team.map((person) => (
            <article
              className={person.highlight ? "commercial-person commercial-person--highlight" : "commercial-person"}
              key={person.name}
            >
              <div>{person.initials}</div>
              <strong>{person.name}</strong>
              <span>{person.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-section commercial-section--white">
        <div className="commercial-section__header center">
          <span className="commercial-kicker">Formação</span>
          <h2>Aqui você aprenderá.</h2>
        </div>

        <div className="commercial-learning-grid">
          {learningCards.map(([title, text, icon]) => (
            <article className="commercial-learning-card" key={title}>
              <div>{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-register">
        <div>
          <span className="commercial-kicker">Inscreva-se</span>
          <h2>Em 2026 você não pode ficar de fora.</h2>
          <p>Preencha o formulário e participe do Voluntariado 2026 da Cia de Artes Viva.</p>
        </div>

        <form className="commercial-form-card">
          <label>
            Nome completo
            <input placeholder="Digite seu nome completo" />
          </label>
          <label>
            E-mail
            <input placeholder="seuemail@email.com" />
          </label>
          <label>
            WhatsApp
            <input placeholder="(00) 00000-0000" />
          </label>
          <label>
            Cidade
            <input placeholder="Cidade / Estado" />
          </label>
          <label>
            O que te motivou?
            <textarea rows={4} placeholder="Conte um pouco sobre você" />
          </label>
          <button type="button">Enviar inscrição</button>
        </form>
      </section>
    </main>
  );
}
