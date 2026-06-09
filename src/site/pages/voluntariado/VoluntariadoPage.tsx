import "../site-public.css";
import "./voluntariado-premium.css";

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
  {
    title: "Teatro e atuação",
    text: "Introdução à atuação teatral, construção de expressão corporal e vocal, improvisação, concentração e presença em cena.",
    icon: "🎭",
  },
  {
    title: "Trabalho em equipe",
    text: "Vivência prática de colaboração, apoio ao elenco, organização, comunicação e construção coletiva de processos artísticos.",
    icon: "✣",
  },
  {
    title: "Audiovisual e criação de curtas",
    text: "Noções de atuação para câmera, linguagem audiovisual, participação na captação e criação de registros para divulgação.",
    icon: "🎬",
  },
  {
    title: "Vivência de palco e bastidores",
    text: "Contato direto com bastidores do teatro, organização, figurino, produção, entrada de cena e rotina de apresentações.",
    icon: "🕺",
  },
];

export function VoluntariadoPage() {
  return (
    <main className="vol-page">
      <section className="vol-hero">
        <div className="vol-hero__paper">
          <span>Inscrições abertas</span>
          <h1>
            Voluntariado
            <strong>2026</strong>
          </h1>
        </div>
      </section>

      <section className="vol-intro">
        <div className="vol-intro__copy">
          <p className="vol-kicker">2025 foi um ano de aprendizados e crescimento coletivo</p>

          <p>
            Em 2026, seguimos avançando. Se você sonha em fazer teatro de forma
            consciente e transformadora, este é o seu momento. A Companhia de
            Artes Viva abre as inscrições para o programa de voluntariado 2026,
            um espaço gratuito de formação, prática artística e desenvolvimento
            humano por meio da arte.
          </p>

          <p>
            Acreditamos no teatro como ferramenta de expressão, reflexão e
            impacto social. O voluntariado é voltado a pessoas que desejam
            aprender, colaborar e viver experiências reais de palco e bastidores,
            promovendo trabalho em equipe, empatia e transformação cultural.
          </p>

          <h2>Inscrições abertas até 25 de janeiro</h2>
        </div>
      </section>

      <section className="vol-team">
        <div className="vol-team__paper" />

        <div className="vol-team__grid">
          <div className="vol-team__people">
            {team.map((person) => (
              <article
                className={person.highlight ? "vol-person vol-person--highlight" : "vol-person"}
                key={person.name}
              >
                <div className="vol-person__avatar">{person.initials}</div>
                <strong>{person.name}</strong>
                <span>{person.role}</span>
              </article>
            ))}
          </div>

          <div className="vol-team__headline">
            <p>Somos um time formado</p>
            <em>por voluntários</em>
            <strong>com um propósito</strong>
          </div>
        </div>
      </section>

      <section className="vol-learning">
        <div className="vol-section-title">
          <span>Aqui você aprenderá</span>
        </div>

        <div className="vol-learning__grid">
          {learningCards.map((card) => (
            <article className="vol-learning-card" key={card.title}>
              <div>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vol-register">
        <div className="vol-register__call">
          <p>Em 2026 você</p>
          <h2>
            não pode ficar
            <span>de fora,</span>
            inscreva-se
          </h2>

          <div className="vol-register__seal">
            <strong>Companhia de Artes Viva</strong>
            <span>Voluntariado 2026</span>
          </div>
        </div>

        <form className="vol-form">
          <label>
            Nome completo
            <input type="text" placeholder="Digite seu nome completo" />
          </label>

          <label>
            E-mail
            <input type="email" placeholder="seuemail@email.com" />
          </label>

          <label>
            WhatsApp
            <input type="tel" placeholder="(00) 00000-0000" />
          </label>

          <label>
            Você é de Jaraguá do Sul? Caso não seja, liste a sua cidade.
            <input type="text" placeholder="Cidade / Estado" />
          </label>

          <label>
            O que te chamou para o voluntariado 2026?
            <textarea rows={3} placeholder="Conte um pouco sobre você" />
          </label>

          <label>
            O que te levou a se inscrever no voluntariado 2026?
            <textarea rows={3} placeholder="Escreva sua motivação" />
          </label>

          <label>
            Como você acredita que pode contribuir?
            <textarea rows={4} placeholder="Fale sobre suas habilidades e disponibilidade" />
          </label>

          <div className="vol-form__terms">
            <label>
              <input type="checkbox" />
              <span>Li e concordo com os termos do Voluntariado 2026.</span>
            </label>
          </div>

          <button type="button">Enviar inscrição</button>
        </form>
      </section>
    </main>
  );
}
