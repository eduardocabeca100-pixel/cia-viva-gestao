import { Link } from "react-router-dom";
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
