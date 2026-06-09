import "../site-public.css";

const values = [
  ["Amor ao próximo", "Nossa essência está em amor, acolhimento e escuta."],
  ["Respeito às diferenças", "A arte como ponte entre pessoas, culturas e realidades."],
  ["Família e comunidade", "Fortalecemos laços que constroem sociedades mais fortes."],
  ["Excelência criativa", "Transformamos ideias em experiências com beleza e propósito."],
  ["Educação e impacto", "A arte como ferramenta para ensinar, inspirar e transformar."],
  ["Autenticidade", "Falamos de verdades com sensibilidade, sinceridade e amor."],
];

export function NossaHistoriaPage() {
  return (
    <main className="commercial-page">
      <section className="commercial-hero commercial-hero--story">
        <div className="commercial-hero__content">
          <span className="commercial-kicker">Onde tudo começou</span>
          <h1>
            Um pouco
            <strong> sobre nós.</strong>
          </h1>
          <p>
            Em 2017, Marcel Eduardo Cabeça Domingues deu vida a um sonho:
            criar um projeto que levasse amor e transformação através da arte.
            Natural de Igarapé, interior de São Paulo, Eduardo encontrou no teatro
            um caminho para emocionar, ensinar e aproximar pessoas.
          </p>
        </div>

        <div className="commercial-portrait-card">
          <div className="commercial-portrait-card__avatar">EC</div>
          <h3>Eduardo Cabeça</h3>
          <p>Fundador, artista, diretor e produtor cultural da Cia de Artes Viva.</p>
        </div>
      </section>

      <section className="commercial-section commercial-split">
        <article>
          <span className="commercial-kicker">Missão</span>
          <h2>Espalhar mensagens de amor, paz e transformação.</h2>
          <p>
            Alcançamos públicos de diferentes idades, religiões e realidades por
            meio do teatro, da dança, da música e da criatividade.
          </p>
        </article>

        <article>
          <span className="commercial-kicker">Valores</span>
          <h2>Ser um farol de esperança e impacto.</h2>
          <p>
            Utilizamos a arte como ponte entre culturas, promovendo reflexões que
            aproximam pessoas do amor e da compreensão.
          </p>
        </article>
      </section>

      <section className="commercial-section">
        <div className="commercial-section__header center">
          <span className="commercial-kicker">Nossos princípios</span>
          <h2>O que guia a Cia de Artes Viva.</h2>
        </div>

        <div className="commercial-value-grid">
          {values.map(([title, text]) => (
            <article className="commercial-value-card" key={title}>
              <div>✦</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-origin">
        <div className="commercial-map-shape">SC</div>
        <div>
          <span className="commercial-kicker">Nosso projeto começou aqui</span>
          <h2>Jaraguá do Sul é o início de um sonho em expansão.</h2>
          <p>
            Nosso objetivo é crescer, alcançar Santa Catarina e levar boas novas
            por meio da arte, da cultura e da formação humana.
          </p>
        </div>
      </section>
    </main>
  );
}
