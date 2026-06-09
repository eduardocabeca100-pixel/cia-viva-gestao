import { Link } from "react-router-dom";
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
