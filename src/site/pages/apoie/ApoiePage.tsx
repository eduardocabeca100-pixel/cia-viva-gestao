import "../site-public.css";

export function ApoiePage() {
  return (
    <main className="public-page">
      <section className="public-section light-section">
        <div className="public-container">
          <p className="public-eyebrow">Apoie</p>
          <h1 className="public-title">Aqui seu imposto vira arte.</h1>
          <p className="public-subtitle">
            Empresas e pessoas físicas podem apoiar projetos culturais da Cia Viva por meio da Lei de Incentivo à Cultura.
          </p>

          <div className="feature-grid">
            <div className="feature-card"><h3>1. Conheça</h3><p>Veja os projetos culturais disponíveis para apoio.</p></div>
            <div className="feature-card"><h3>2. Incentive</h3><p>Destine parte do imposto devido para a cultura.</p></div>
            <div className="feature-card"><h3>3. Transforme</h3><p>Ajude a levar arte, formação e impacto social para mais pessoas.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
