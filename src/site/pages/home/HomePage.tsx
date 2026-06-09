import { Link } from "react-router-dom";
import "../site-public.css";
import "./home.css";

export function HomePage() {
  return (
    <main className="public-page">
      <section className="public-hero">
        <div className="public-hero-grid">
          <div className="hero-symbol-area">
            <div className="hero-orbit"></div>
            <div className="hero-figures">
              <div className="hero-dancer"></div>
              <div className="hero-actor"></div>
              <div className="hero-mask"></div>
            </div>
          </div>

          <div>
            <p className="public-eyebrow">Companhia de Artes Viva</p>
            <h1 className="public-title">#ACREDITENOSSEUSSONHOS</h1>
            <p className="public-subtitle">
              A Companhia de Artes Viva é uma instituição sem fins lucrativos dedicada à promoção da cultura e das artes em todas as suas formas.
            </p>

            <div className="public-button-row">
              <Link className="public-button primary" to="/nossa-historia">Conheça nossa história</Link>
              <Link className="public-button outline" to="/apoie">Apoie o projeto</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="public-section light-section">
        <div className="public-container">
          <p className="public-eyebrow">Manifesto</p>
          <h2 className="public-title">Arte que transforma. Cultura que aproxima.</h2>
          <p className="public-subtitle">
            Criamos experiências artísticas que acolhem, inspiram e formam pessoas por meio do teatro, da dança, da música e da expressão criativa.
          </p>

          <div className="feature-grid">
            <div className="feature-card"><h3>Inspirar</h3><p>Despertar sonhos, talentos e novas possibilidades através da arte.</p></div>
            <div className="feature-card"><h3>Educar</h3><p>Formar pessoas por meio da prática artística, disciplina e criação coletiva.</p></div>
            <div className="feature-card"><h3>Conectar</h3><p>Aproximar comunidade, cultura, fé, propósito e transformação social.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
