import { Link } from "react-router-dom";
import "../site-public.css";

const actionCards = [
  {
    title: "Projetos Culturais",
    text: "Espetáculos, oficinas e apresentações para todos.",
    link: "/projetos",
    cta: "Saiba mais",
  },
  {
    title: "Voluntariado 2026",
    text: "Faça parte do nosso time e transforme vidas.",
    link: "/voluntariado-2026",
    cta: "Quero ser voluntário",
  },
  {
    title: "Apoie via incentivo",
    text: "Sua contribuição mantém a arte viva e acessível.",
    link: "/apoie",
    cta: "Apoiar agora",
  },
];

export function HomePage() {
  return (
    <main className="viva-page viva-home">
      <section className="viva-hero viva-hero-home">
        <div className="viva-hero-image viva-hero-image-ballerina" />
        <div className="viva-red-ribbon" />

        <div className="viva-hero-content viva-hero-content-right">
          <p className="viva-eyebrow">Companhia de Artes Viva</p>
          <h1>
            Acredite nos
            <span> seus sonhos</span>
          </h1>
          <p>
            Transformamos vidas por meio da arte, cultura e educação. Nosso
            palco é o futuro.
          </p>

          <div className="viva-actions">
            <Link className="viva-button viva-button-red" to="/nossa-historia">
              Conheça nossa história
            </Link>
            <Link className="viva-button viva-button-dark" to="/projetos">
              Veja os projetos
            </Link>
          </div>
        </div>
      </section>

      <section className="viva-black-band">
        <p>Arte que transforma. Cultura que aproxima. Pessoas que florescem.</p>

        <div className="viva-icon-grid viva-icon-grid-3">
          <article>
            <span>✣</span>
            <h3>Inspirar</h3>
            <p>Estimulamos talentos e valores por meio da arte.</p>
          </article>
          <article>
            <span>▱</span>
            <h3>Educar</h3>
            <p>Formação artística acessível e de qualidade.</p>
          </article>
          <article>
            <span>⌘</span>
            <h3>Conectar</h3>
            <p>Criamos pontes entre pessoas e comunidades.</p>
          </article>
        </div>
      </section>

      <section className="viva-section">
        <div className="viva-section-header center">
          <p className="viva-eyebrow">Caminhos da Viva</p>
          <h2>Escolha como você quer caminhar com a Cia Viva</h2>
        </div>

        <div className="viva-card-grid viva-card-grid-3">
          {actionCards.map((card) => (
            <article className="viva-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <Link to={card.link}>{card.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="viva-quote">
        <p>“O palco também é um lugar de recomeço.”</p>
        <span>
          Cada apresentação é um convite para sonhar, emocionar e imaginar novos
          futuros.
        </span>
      </section>
    </main>
  );
}
