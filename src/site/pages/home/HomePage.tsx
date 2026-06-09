import { Link } from "react-router-dom";
import "../site-public.css";
import "./home.css";

const homeStats = [
  { value: "2026", label: "Voluntariado artístico" },
  { value: "6", label: "Frentes institucionais" },
  { value: "100%", label: "Cultura, fé e transformação" },
];

const homePillars = [
  {
    title: "Formação",
    text: "Criamos caminhos para que crianças, jovens e adultos descubram seus talentos por meio do teatro, da dança, da música e da expressão artística.",
  },
  {
    title: "Cena",
    text: "Produzimos experiências cênicas com linguagem teatral, visual forte e mensagens capazes de tocar públicos diversos.",
  },
  {
    title: "Propósito",
    text: "Acreditamos na arte como ponte entre pessoas, histórias, fé, identidade, comunidade e futuro.",
  },
];

const homeProjects = [
  {
    kicker: "Institucional",
    title: "Uma companhia para despertar sonhos",
    text: "A Cia de Artes Viva nasce para aproximar pessoas da cultura e tornar a arte uma experiência acessível, formativa e transformadora.",
  },
  {
    kicker: "Cultura",
    title: "Teatro, dança, música e criação",
    text: "Nossos projetos unem palco, movimento, palavra, imagem e presença para formar artistas e envolver a comunidade.",
  },
  {
    kicker: "Participação",
    title: "Voluntariado 2026",
    text: "Uma porta aberta para quem deseja servir, aprender, crescer artisticamente e participar da construção de algo maior.",
  },
];

export function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <div className="home-hero__image home-hero__image--main" />
          <div className="home-hero__image home-hero__image--circle" />
          <div className="home-hero__red-fabric" />
          <div className="home-hero__smoke" />
        </div>

        <div className="home-hero__content">
          <p className="home-eyebrow">Companhia de Artes Viva</p>

          <h1>
            Arte que acende
            <span> sonhos, fé e futuro.</span>
          </h1>

          <p className="home-hero__text">
            Uma companhia artística dedicada à cultura, à formação humana e à
            criação de experiências cênicas que aproximam pessoas, despertam
            talentos e transformam histórias.
          </p>

          <div className="home-hero__actions">
            <Link className="home-button home-button--primary" to="/nossa-historia">
              Conheça nossa história
            </Link>
            <Link className="home-button home-button--ghost" to="/apoie">
              Apoie o projeto
            </Link>
          </div>
        </div>

        <aside className="home-hero__card" aria-label="Mensagem institucional">
          <span>Manifesto</span>
          <strong>#ACREDITENOSSOSSONHOS</strong>
          <p>
            A arte é palco, encontro, disciplina, beleza e propósito. A Viva
            existe para formar, inspirar e abrir caminhos.
          </p>
        </aside>
      </section>

      <section className="home-stats" aria-label="Destaques da companhia">
        {homeStats.map((item) => (
          <div className="home-stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="home-section home-section--intro">
        <div className="home-section__copy">
          <p className="home-eyebrow">Nossa essência</p>
          <h2>Um espaço onde a arte ganha corpo, voz e direção.</h2>
        </div>

        <div className="home-section__text">
          <p>
            A Cia de Artes Viva une criação artística, formação cultural e
            compromisso social. Nosso trabalho nasce do palco, mas alcança a
            vida: desenvolvemos pessoas, fortalecemos vínculos e criamos
            experiências que permanecem na memória.
          </p>
        </div>
      </section>

      <section className="home-pillar-grid" aria-label="Pilares da Cia de Artes Viva">
        {homePillars.map((pillar, index) => (
          <article className="home-pillar-card" key={pillar.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="home-cinema">
        <div className="home-cinema__image" aria-hidden="true" />
        <div className="home-cinema__content">
          <p className="home-eyebrow">Teatro, presença e transformação</p>
          <h2>O palco como lugar de encontro entre beleza e propósito.</h2>
          <p>
            Nosso visual, nossa linguagem e nossos projetos carregam a força do
            teatro: luz, sombra, corpo, palavra, música, movimento e verdade.
          </p>
          <Link className="home-link" to="/projetos">
            Ver projetos
          </Link>
        </div>
      </section>

      <section className="home-projects">
        <div className="home-projects__header">
          <p className="home-eyebrow">Caminhos da Viva</p>
          <h2>Uma companhia viva se constrói por partes.</h2>
        </div>

        <div className="home-projects__grid">
          {homeProjects.map((project) => (
            <article className="home-project-card" key={project.title}>
              <span>{project.kicker}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div>
          <p className="home-eyebrow">Faça parte</p>
          <h2>Ajude a Cia de Artes Viva a formar novos artistas.</h2>
        </div>

        <div className="home-cta__actions">
          <Link className="home-button home-button--primary" to="/voluntariado-2026">
            Voluntariado 2026
          </Link>
          <Link className="home-button home-button--ghost" to="/contato">
            Fale conosco
          </Link>
        </div>
      </section>
    </main>
  );
}
