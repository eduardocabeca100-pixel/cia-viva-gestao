import "../site-public.css";

export function NossaHistoriaPage() {
  return (
    <main className="public-page">
      <section className="public-section dark-band">
        <div className="public-container">
          <p className="public-eyebrow">Onde tudo começou</p>
          <h1 className="public-title">Um pouco sobre nós.</h1>
          <p className="public-subtitle">
            A Cia de Artes Viva nasceu do desejo de transformar vidas por meio da arte, criando espaços de formação, acolhimento e expressão criativa.
          </p>
        </div>
      </section>

      <section className="public-section light-section">
        <div className="public-container">
          <div className="feature-grid">
            <div className="feature-card"><h3>Missão</h3><p>Espalhar mensagens de amor, paz e transformação através da cultura e das artes.</p></div>
            <div className="feature-card"><h3>Valores</h3><p>Amor ao próximo, excelência criativa, respeito, educação e impacto social.</p></div>
            <div className="feature-card"><h3>Propósito</h3><p>Fazer da arte um caminho de recomeço, descoberta, expressão e esperança.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
