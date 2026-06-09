from pathlib import Path

files = {
"src/site/pages/home/HomePage.tsx": r'''import { Link } from "react-router-dom";
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
''',

"src/site/pages/nossa-historia/NossaHistoriaPage.tsx": r'''import "../site-public.css";

const timeline = [
  ["2012", "Início das atividades com oficinas de dança e teatro."],
  ["2016", "Primeiros espetáculos e apresentações comunitárias."],
  ["2019", "Criação do programa de formação artística."],
  ["2023", "Ampliação de projetos e novas parcerias culturais."],
  ["2026", "Novos horizontes para inspirar e transformar."],
];

const pillars = [
  ["Arte", "Como expressão e transformação."],
  ["Educação", "Como caminho para o futuro."],
  ["Inclusão", "Para uma sociedade mais justa."],
  ["Comunidade", "Juntos, somos mais fortes."],
];

export function NossaHistoriaPage() {
  return (
    <main className="viva-page">
      <section className="viva-hero viva-hero-history">
        <div className="viva-hero-image viva-hero-image-red-dance" />
        <div className="viva-hero-content">
          <h1>Nossa história</h1>
          <h2>Onde tudo começou</h2>
          <p>
            Nascemos do sonho de levar a arte mais longe. Desde então, seguimos
            transformando vidas e comunidades através do movimento, da música e
            do teatro.
          </p>
          <p>
            Nossa missão é inspirar e formar novas gerações para um mundo mais
            criativo e humano.
          </p>
        </div>
      </section>

      <section className="viva-section">
        <div className="viva-section-header center">
          <p className="viva-eyebrow">Linha do tempo</p>
          <h2>Uma história construída em movimento</h2>
        </div>

        <div className="viva-timeline">
          {timeline.map(([year, text]) => (
            <article key={year}>
              <span>{year}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="viva-section viva-section-compact">
        <div className="viva-section-header center">
          <p className="viva-eyebrow">Nossos pilares</p>
        </div>

        <div className="viva-icon-grid viva-icon-grid-4">
          {pillars.map(([title, text]) => (
            <article key={title}>
              <span>✦</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="viva-banner viva-banner-history">
        <h2>Mais que espetáculos, transformamos vidas.</h2>
      </section>
    </main>
  );
}
''',

"src/site/pages/apoie/ApoiePage.tsx": r'''import { Link } from "react-router-dom";
import "../site-public.css";

const supportWays = [
  ["Doação direta", "Contribua com qualquer valor e faça a diferença."],
  ["Lei de incentivo", "Apoie via leis fiscais e incentive a cultura."],
  ["Patrocínio", "Empresas que acreditam no poder da arte."],
  ["Doe valor", "Sua doação vira arte, educação e transformação."],
];

export function ApoiePage() {
  return (
    <main className="viva-page">
      <section className="viva-hero viva-hero-support">
        <div className="viva-hero-image viva-hero-image-hands" />
        <div className="viva-hero-content">
          <h1>Apoie a cultura.</h1>
          <h2>Transforme vidas.</h2>
          <p>
            Sua contribuição fortalece nossos programas e garante que a arte
            continue acessível para todos que precisam e merecem.
          </p>
        </div>
      </section>

      <section className="viva-paper-section">
        <div className="viva-section-header center">
          <h2>Como você pode apoiar</h2>
        </div>

        <div className="viva-card-grid viva-card-grid-4">
          {supportWays.map(([title, text]) => (
            <article className="viva-card viva-card-light" key={title}>
              <span>⌘</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="viva-cta">
        <h2>Faça parte dessa história</h2>
        <p>
          Cada gesto mantém nossos projetos vivos e impacta o futuro de milhares
          de pessoas.
        </p>
        <Link className="viva-button viva-button-red" to="/contato">
          Quero apoiar
        </Link>
      </section>
    </main>
  );
}
''',

"src/site/pages/voluntariado/VoluntariadoPage.tsx": r'''import { Link } from "react-router-dom";
import "../site-public.css";

const benefits = [
  ["Trabalho em equipe", "Colaboração que faz acontecer."],
  ["Vivência artística", "Aprenda, crie e compartilhe."],
  ["Impacto social", "Transforme vidas com sua ação."],
  ["Desenvolvimento pessoal", "Cresça enquanto faz o bem."],
];

const activities = [
  "Produção de eventos",
  "Apoio em ensaios e oficinas",
  "Ações sociais e culturais",
  "Comunicação e divulgação",
  "Apoio administrativo",
];

export function VoluntariadoPage() {
  return (
    <main className="viva-page">
      <section className="viva-hero viva-hero-volunteer">
        <div className="viva-hero-image viva-hero-image-volunteers" />
        <div className="viva-hero-content">
          <h1>Seja um voluntário.</h1>
          <h2>Faça parte do movimento.</h2>
          <p>
            Juntos, levamos oportunidades, arte e esperança para ainda mais
            pessoas e comunidades.
          </p>
        </div>
      </section>

      <section className="viva-paper-section">
        <div className="viva-section-header center">
          <h2>Inscrições abertas</h2>
          <p>Até 25 de janeiro</p>
        </div>

        <div className="viva-icon-grid viva-icon-grid-4 viva-icon-grid-dark-text">
          {benefits.map(([title, text]) => (
            <article key={title}>
              <span>✣</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="viva-center-action">
          <Link className="viva-button viva-button-red" to="/contato">
            Quero me inscrever
          </Link>
        </div>
      </section>

      <section className="viva-red-section">
        <div>
          <p className="viva-eyebrow">Atividades dos voluntários</p>
          <ul>
            {activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
''',

"src/site/pages/projetos/ProjetosPage.tsx": r'''import "../site-public.css";

const projects = [
  ["Espetáculos", "Criações cênicas com impacto visual, poesia e presença."],
  ["Oficinas", "Formação artística para crianças, jovens e adultos."],
  ["Turnês e circulações", "Levamos arte para novos públicos e territórios."],
  ["Ações sociais", "Projetos culturais conectados à comunidade."],
];

export function ProjetosPage() {
  return (
    <main className="viva-page">
      <section className="viva-hero viva-hero-projects">
        <div className="viva-hero-image viva-hero-image-stage" />
        <div className="viva-hero-content">
          <h1>Nossos projetos</h1>
          <h2>Levam arte onde ela é necessária.</h2>
        </div>
      </section>

      <section className="viva-section">
        <div className="viva-card-grid viva-card-grid-2">
          {projects.map(([title, text], index) => (
            <article className={`viva-project-card viva-project-card-${index + 1}`} key={title}>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="viva-cta">
        <h2>Novos projetos em breve!</h2>
        <p>Estamos preparando novas experiências para a Cia de Artes Viva.</p>
      </section>
    </main>
  );
}
''',

"src/site/pages/contato/ContatoPage.tsx": r'''import "../site-public.css";

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
''',

"src/site/pages/site-public.css": r'''@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap");

:root {
  --viva-black: #030303;
  --viva-black-2: #090909;
  --viva-panel: #111;
  --viva-panel-2: #171717;
  --viva-red: #e50914;
  --viva-red-2: #ff2b2b;
  --viva-white: #ffffff;
  --viva-muted: rgba(255, 255, 255, 0.68);
  --viva-line: rgba(255, 255, 255, 0.12);
}

body {
  margin: 0;
  background: var(--viva-black);
  color: var(--viva-white);
  font-family: "Poppins", system-ui, sans-serif;
}

a {
  color: inherit;
}

.site-header,
.public-header,
header {
  background: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid var(--viva-line);
  backdrop-filter: blur(18px);
}

.site-header a,
.public-header a,
header a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.site-header a:hover,
.public-header a:hover,
header a:hover {
  color: var(--viva-red-2);
}

.viva-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 18% 10%, rgba(229, 9, 20, 0.2), transparent 26rem),
    radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.08), transparent 22rem),
    linear-gradient(180deg, #020202 0%, #090909 55%, #020202 100%);
  color: #fff;
  overflow: hidden;
}

.viva-eyebrow {
  margin: 0 0 0.7rem;
  color: var(--viva-red-2);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.72rem;
  font-weight: 900;
}

.viva-hero {
  position: relative;
  min-height: 74vh;
  display: grid;
  align-items: center;
  padding: clamp(4rem, 8vw, 7rem) clamp(1.2rem, 5vw, 5rem);
  isolation: isolate;
  border-bottom: 1px solid var(--viva-line);
}

.viva-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.96), rgba(0, 0, 0, 0.7) 46%, rgba(0, 0, 0, 0.22)),
    radial-gradient(circle at 68% 42%, rgba(255, 255, 255, 0.22), transparent 9rem);
  z-index: -2;
}

.viva-hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.viva-hero-content-right {
  margin-left: auto;
  max-width: 620px;
}

.viva-hero h1,
.viva-contact-info h1 {
  margin: 0;
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: clamp(3rem, 6vw, 6.8rem);
  line-height: 0.88;
  letter-spacing: -0.07em;
  text-transform: uppercase;
}

.viva-hero h1 span {
  display: block;
  color: var(--viva-red-2);
}

.viva-hero h2,
.viva-contact-info h2 {
  margin: 0.45rem 0 1.2rem;
  color: var(--viva-red-2);
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: clamp(1.5rem, 3.2vw, 3.4rem);
  line-height: 1;
  letter-spacing: -0.05em;
  text-transform: uppercase;
}

.viva-hero p,
.viva-contact-info p {
  max-width: 520px;
  color: var(--viva-muted);
  line-height: 1.75;
}

.viva-hero-image {
  position: absolute;
  inset: 0;
  z-index: -3;
  background-size: cover;
  background-position: center;
  opacity: 0.82;
  filter: saturate(0.9) contrast(1.08);
}

.viva-hero-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 32% 42%, transparent 0 8rem, rgba(0, 0, 0, 0.16) 8.2rem, transparent 15rem),
    linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.86));
}

.viva-hero-image-ballerina {
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.78)),
    url("https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1800&q=80");
  background-position: 24% center;
}

.viva-hero-image-red-dance {
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.42)),
    url("https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1800&q=80");
  background-position: 72% center;
}

.viva-hero-image-hands {
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.38)),
    url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80");
}

.viva-hero-image-volunteers {
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.42)),
    url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80");
}

.viva-hero-image-stage {
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.36)),
    url("https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1800&q=80");
}

.viva-red-ribbon {
  position: absolute;
  left: -8rem;
  bottom: -9rem;
  width: min(70vw, 900px);
  height: 24rem;
  background:
    radial-gradient(circle at 30% 45%, rgba(255, 43, 43, 0.92), transparent 8rem),
    linear-gradient(135deg, rgba(229, 9, 20, 0.8), rgba(229, 9, 20, 0));
  filter: blur(18px);
  transform: rotate(-8deg);
  opacity: 0.55;
  pointer-events: none;
}

.viva-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.8rem;
}

.viva-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0 1.35rem;
  border-radius: 4px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  border: 1px solid transparent;
}

.viva-button-red {
  background: var(--viva-red);
  color: #fff;
  box-shadow: 0 18px 48px rgba(229, 9, 20, 0.28);
}

.viva-button-dark {
  background: rgba(0, 0, 0, 0.35);
  border-color: rgba(255, 255, 255, 0.22);
  color: #fff;
}

.viva-black-band {
  padding: clamp(2rem, 5vw, 4rem) clamp(1.2rem, 5vw, 5rem);
  background: rgba(0, 0, 0, 0.62);
  border-bottom: 1px solid var(--viva-line);
}

.viva-black-band > p {
  margin: 0 0 2rem;
  text-align: center;
  font-size: 0.86rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.viva-section {
  padding: clamp(4rem, 8vw, 7rem) clamp(1.2rem, 5vw, 5rem);
}

.viva-section-compact {
  padding-top: 0;
}

.viva-section-header {
  margin-bottom: 2rem;
}

.viva-section-header.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.viva-section-header h2,
.viva-banner h2,
.viva-cta h2 {
  margin: 0;
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: clamp(2rem, 4.8vw, 4.8rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
  text-transform: uppercase;
}

.viva-section-header p:not(.viva-eyebrow) {
  color: var(--viva-red);
  text-transform: uppercase;
  font-weight: 900;
}

.viva-icon-grid,
.viva-card-grid {
  display: grid;
  gap: 1rem;
}

.viva-icon-grid-3,
.viva-card-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.viva-icon-grid-4,
.viva-card-grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

.viva-card-grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.viva-icon-grid article,
.viva-card,
.viva-project-card {
  border: 1px solid var(--viva-line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.065), rgba(255, 255, 255, 0.02)),
    rgba(0, 0, 0, 0.45);
  padding: clamp(1.2rem, 2.2vw, 2rem);
  min-height: 190px;
}

.viva-icon-grid article {
  text-align: center;
}

.viva-icon-grid span,
.viva-card span {
  display: inline-flex;
  margin-bottom: 0.9rem;
  color: var(--viva-red-2);
  font-size: 1.6rem;
}

.viva-icon-grid h3,
.viva-card h3,
.viva-project-card h3 {
  margin: 0 0 0.7rem;
  font-family: "Montserrat", system-ui, sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -0.04em;
}

.viva-icon-grid p,
.viva-card p,
.viva-project-card p,
.viva-cta p,
.viva-quote span {
  margin: 0;
  color: var(--viva-muted);
  line-height: 1.65;
}

.viva-card a {
  display: inline-flex;
  margin-top: 1.3rem;
  color: var(--viva-red-2);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.72rem;
  font-weight: 900;
}

.viva-timeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  position: relative;
}

.viva-timeline::before {
  content: "";
  position: absolute;
  left: 8%;
  right: 8%;
  top: 1rem;
  height: 1px;
  background: rgba(255, 255, 255, 0.18);
}

.viva-timeline article {
  position: relative;
  padding: 2.2rem 1rem 0;
  text-align: center;
}

.viva-timeline article::before {
  content: "";
  position: absolute;
  top: 0.68rem;
  left: 50%;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 999px;
  background: var(--viva-red);
  transform: translateX(-50%);
  box-shadow: 0 0 0 0.35rem rgba(229, 9, 20, 0.12);
}

.viva-timeline span {
  font-weight: 900;
  color: #fff;
}

.viva-timeline p {
  color: var(--viva-muted);
  font-size: 0.82rem;
  line-height: 1.55;
}

.viva-banner {
  min-height: 380px;
  display: grid;
  place-items: center;
  padding: clamp(3rem, 7vw, 6rem);
  background-size: cover;
  background-position: center;
  border-top: 1px solid var(--viva-line);
  border-bottom: 1px solid var(--viva-line);
}

.viva-banner-history {
  background-image:
    linear-gradient(180deg, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.92)),
    url("https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1800&q=80");
}

.viva-paper-section {
  position: relative;
  padding: clamp(4rem, 8vw, 6rem) clamp(1.2rem, 5vw, 5rem);
  background: #f4f0e8;
  color: #050505;
}

.viva-paper-section::before,
.viva-paper-section::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 32px;
  background:
    linear-gradient(135deg, transparent 12px, #f4f0e8 0) 0 0 / 28px 32px,
    linear-gradient(225deg, transparent 12px, #f4f0e8 0) 0 0 / 28px 32px;
}

.viva-paper-section::before {
  top: -31px;
}

.viva-paper-section::after {
  bottom: -31px;
  transform: rotate(180deg);
}

.viva-paper-section .viva-section-header h2 {
  color: #050505;
}

.viva-card-light {
  background: #080808;
  color: #fff;
  border-radius: 8px;
  min-height: 210px;
}

.viva-icon-grid-dark-text article {
  background: transparent;
  border-color: rgba(0, 0, 0, 0.14);
}

.viva-icon-grid-dark-text h3,
.viva-icon-grid-dark-text p {
  color: #070707;
}

.viva-center-action {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.viva-cta {
  text-align: center;
  padding: clamp(4rem, 8vw, 7rem) clamp(1.2rem, 5vw, 5rem);
  background:
    radial-gradient(circle at 50% 0%, rgba(229, 9, 20, 0.25), transparent 28rem),
    #030303;
}

.viva-cta p {
  max-width: 640px;
  margin: 1rem auto 1.8rem;
}

.viva-red-section {
  padding: clamp(4rem, 8vw, 6rem) clamp(1.2rem, 5vw, 5rem);
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.12)),
    linear-gradient(135deg, #6b0508, #e50914);
}

.viva-red-section ul {
  display: grid;
  gap: 0.8rem;
  max-width: 560px;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.viva-red-section li::before {
  content: "•";
  color: #fff;
  margin-right: 0.7rem;
}

.viva-project-card {
  min-height: 340px;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.viva-project-card > div {
  position: relative;
  z-index: 2;
}

.viva-project-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 20%, rgba(0, 0, 0, 0.88));
}

.viva-project-card {
  position: relative;
}

.viva-project-card-1 {
  background-image: url("https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80");
}

.viva-project-card-2 {
  background-image: url("https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?auto=format&fit=crop&w=1000&q=80");
}

.viva-project-card-3 {
  background-image: url("https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=80");
}

.viva-project-card-4 {
  background-image: url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80");
}

.viva-contact-page {
  background:
    radial-gradient(circle at 70% 10%, rgba(255, 255, 255, 0.08), transparent 20rem),
    radial-gradient(circle at 12% 90%, rgba(229, 9, 20, 0.25), transparent 26rem),
    #030303;
}

.viva-contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.7fr);
  gap: clamp(2rem, 6vw, 6rem);
  padding: clamp(5rem, 9vw, 8rem) clamp(1.2rem, 5vw, 5rem);
  align-items: start;
}

.viva-contact-list {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
}

.viva-contact-list p {
  margin: 0;
}

.viva-contact-list strong {
  display: block;
  color: var(--viva-red-2);
  text-transform: uppercase;
  font-size: 0.76rem;
}

.viva-contact-form {
  display: grid;
  gap: 0.8rem;
  padding: clamp(1.2rem, 2.5vw, 2rem);
  border: 1px solid var(--viva-line);
  background: rgba(255, 255, 255, 0.035);
}

.viva-contact-form input,
.viva-contact-form textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(0, 0, 0, 0.42);
  color: #fff;
  padding: 0.95rem 1rem;
  font-family: inherit;
  outline: none;
}

.viva-contact-form button {
  border: 0;
  background: var(--viva-red);
  color: #fff;
  min-height: 3.1rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.06em;
  cursor: pointer;
}

.viva-map {
  min-height: 360px;
  margin: 0 clamp(1.2rem, 5vw, 5rem) clamp(4rem, 8vw, 7rem);
  display: grid;
  place-items: center;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px) 0 0 / 48px 48px,
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px) 0 0 / 48px 48px,
    #d9d2c7;
  border: 1px solid var(--viva-line);
}

.viva-map-pin {
  width: 4rem;
  height: 4rem;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: var(--viva-red);
  color: #fff;
  font-size: 2rem;
  box-shadow: 0 20px 60px rgba(229, 9, 20, 0.42);
}

.viva-quote {
  text-align: center;
  padding: clamp(4rem, 7vw, 6rem) clamp(1.2rem, 5vw, 5rem);
  background:
    radial-gradient(circle at 10% 100%, rgba(229, 9, 20, 0.2), transparent 18rem),
    #030303;
}

.viva-quote p {
  margin: 0 0 0.8rem;
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: clamp(1.6rem, 3vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.05em;
}

@media (max-width: 980px) {
  .viva-hero {
    min-height: 64vh;
  }

  .viva-hero-content-right {
    margin-left: 0;
  }

  .viva-icon-grid-3,
  .viva-icon-grid-4,
  .viva-card-grid-2,
  .viva-card-grid-3,
  .viva-card-grid-4,
  .viva-timeline,
  .viva-contact-layout {
    grid-template-columns: 1fr;
  }

  .viva-timeline::before {
    display: none;
  }

  .viva-timeline article {
    text-align: left;
    padding-left: 2.2rem;
  }

  .viva-timeline article::before {
    left: 0.4rem;
  }
}

@media (max-width: 620px) {
  .viva-hero {
    padding-top: 4rem;
    min-height: 72vh;
  }

  .viva-hero h1,
  .viva-contact-info h1 {
    font-size: clamp(2.8rem, 14vw, 4.4rem);
  }

  .viva-actions,
  .viva-button {
    width: 100%;
  }

  .viva-hero-image {
    opacity: 0.48;
  }
}
'''
}

for path, content in files.items():
    file = Path(path)
    file.parent.mkdir(parents=True, exist_ok=True)
    file.write_text(content)

home_css = Path("src/site/pages/home/home.css")
if home_css.exists():
    home_css.write_text("")

print("OK: site publico aplicado conforme o layout de referencia.")
