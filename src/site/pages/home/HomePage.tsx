import { Link } from "react-router-dom";
import "../site-public.css";
import "./home-premium.css";

const pillars = [
  {
    title: "Inspirar",
    text: "Despertar sonhos, talentos e novas possibilidades através da arte.",
    icon: "🎭",
  },
  {
    title: "Educar",
    text: "Formar pessoas por meio da prática artística, da disciplina e da criação.",
    icon: "📖",
  },
  {
    title: "Conectar",
    text: "Aproximar comunidade, cultura, fé, propósito e transformação social.",
    icon: "👥",
  },
];

const spotlightCards = [
  {
    eyebrow: "Projetos Culturais",
    title: "Conheça nossas obras, espetáculos e iniciativas.",
    button: "Ver projetos",
    to: "/projetos",
    className: "homev2-spotlight-card homev2-spotlight-card--left",
  },
  {
    eyebrow: "Voluntariado 2026",
    title: "Faça parte de um time movido por cultura, fé e propósito.",
    button: "Saiba mais",
    to: "/voluntariado-2026",
    className: "homev2-spotlight-card homev2-spotlight-card--center",
  },
  {
    eyebrow: "Apoie via incentivo",
    title: "Apoie projetos culturais por meio da Lei de Incentivo à Cultura.",
    button: "Apoiar agora",
    to: "/apoie",
    className: "homev2-spotlight-card homev2-spotlight-card--right",
  },
];

export function HomePage() {
  return (
    <main className="homev2-page">
      <section className="homev2-hero">
        <div className="homev2-hero__bg homev2-hero__bg--left" />
        <div className="homev2-hero__bg homev2-hero__bg--center" />
        <div className="homev2-hero__bg homev2-hero__bg--right" />
        <div className="homev2-hero__smoke homev2-hero__smoke--left" />
        <div className="homev2-hero__smoke homev2-hero__smoke--right" />

        <div className="homev2-hero__content">
          <p className="homev2-eyebrow">Companhia de Artes Viva</p>

          <h1 className="homev2-title">
            <span className="homev2-title__hash">#</span>ACREDITE
            <br />
            <span className="homev2-title__accent">NOS</span>SEUSSONHOS
          </h1>

          <p className="homev2-description">
            A Companhia de Artes Viva é uma instituição sem fins lucrativos
            dedicada à promoção da cultura e das artes em todas as suas formas.
            Nossa missão é inspirar, educar e conectar pessoas por meio da
            expressão criativa.
          </p>

          <div className="homev2-actions">
            <Link className="homev2-button homev2-button--primary" to="/nossa-historia">
              Conheça nossa história
            </Link>

            <Link className="homev2-button homev2-button--ghost" to="/apoie">
              Apoie o projeto
            </Link>
          </div>

          <div className="homev2-scroll">Role para explorar</div>
        </div>
      </section>

      <section className="homev2-ripped homev2-ripped--dark">
        <div className="homev2-pillars">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="homev2-pillar">
              <div className="homev2-pillar__icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="homev2-spotlight">
        <div className="homev2-spotlight__grid">
          {spotlightCards.map((card) => (
            <article key={card.title} className={card.className}>
              <div className="homev2-spotlight__overlay" />
              <div className="homev2-spotlight__content">
                <p>{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <Link to={card.to}>{card.button}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="homev2-mini-footer">
        <div className="homev2-mini-footer__brand">
          <div className="homev2-brand">
            <strong>VIVA</strong>
            <span>CIA DE ARTES</span>
          </div>

          <p>
            Transformamos vidas através da arte. Acreditamos no poder da cultura,
            da educação e da expressão criativa.
          </p>
        </div>

        <div className="homev2-mini-footer__cols">
          <div>
            <h4>Menu</h4>
            <Link to="/">Página Inicial</Link>
            <Link to="/nossa-historia">Nossa História</Link>
            <Link to="/apoie">Apoie</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contato">Contato</Link>
          </div>

          <div>
            <h4>Institucional</h4>
            <a href="/">Política de Cookies</a>
            <a href="/">Política de Privacidade</a>
          </div>

          <div>
            <h4>Siga-nos</h4>
            <a href="/">Instagram</a>
          </div>
        </div>
      </section>
    </main>
  );
}
