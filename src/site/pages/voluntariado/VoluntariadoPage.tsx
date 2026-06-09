import "../site-public.css";

export function VoluntariadoPage() {
  return (
    <main className="public-page">
      <section className="public-section dark-band">
        <div className="public-container">
          <p className="public-eyebrow">Inscrições abertas</p>
          <h1 className="public-title">Voluntariado 2026</h1>
          <p className="public-subtitle">
            Faça parte de um time movido por cultura, propósito e fé.
          </p>

          <div className="volunteer-public-card">
            <div className="volunteer-art-public">
              <h2>EM 2026 VOCÊ NÃO PODE FICAR DE FORA, INSCREVA-SE</h2>
            </div>

            <form className="volunteer-form-public">
              <h3>Inscreva-se</h3>
              <label>Nome completo<input /></label>
              <label>E-mail<input /></label>
              <label>WhatsApp<input /></label>
              <label>Conte um pouco sobre você<textarea /></label>
              <button className="public-button primary" type="button">Enviar inscrição</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
