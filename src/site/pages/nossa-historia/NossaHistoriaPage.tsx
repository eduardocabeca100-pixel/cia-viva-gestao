import "../site-public.css";

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
