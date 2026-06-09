from pathlib import Path

Path("src/site/pages/site-global-polish.css").write_text(r'''
/* AJUSTE GERAL PREMIUM DO SITE PÚBLICO */

.viva-page,
.homev2-page,
.vol-page {
  background:
    radial-gradient(circle at 12% 8%, rgba(229, 9, 20, 0.16), transparent 26rem),
    radial-gradient(circle at 90% 18%, rgba(255, 255, 255, 0.05), transparent 22rem),
    linear-gradient(180deg, #050505 0%, #14110f 52%, #050505 100%) !important;
}

.viva-hero,
.homev2-hero,
.vol-hero {
  border-bottom: 0 !important;
}

.viva-card,
.viva-icon-grid article,
.viva-project-card,
.homev2-pillar,
.homev2-spotlight-card,
.vol-learning-card,
.vol-form,
.viva-contact-form {
  border-radius: 28px !important;
}

.viva-card,
.viva-icon-grid article,
.homev2-pillar {
  border: 1px solid rgba(255, 255, 255, 0.09) !important;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018)),
    rgba(0, 0, 0, 0.46) !important;
  box-shadow: 0 28px 72px rgba(0, 0, 0, 0.28) !important;
}

.viva-button,
.homev2-button,
.vol-form button,
.viva-contact-form button,
.viva-site-header__button {
  border-radius: 999px !important;
}

.viva-paper-section {
  position: relative;
  margin: 0 !important;
  padding-top: clamp(4.5rem, 8vw, 7rem) !important;
  padding-bottom: clamp(4.5rem, 8vw, 7rem) !important;
  background: #f4f0e8 !important;
  color: #090909 !important;
  overflow: visible;
}

.viva-paper-section::before,
.viva-paper-section::after {
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  height: 54px !important;
  background: #f4f0e8 !important;
  z-index: 2 !important;
  filter: drop-shadow(0 18px 16px rgba(0, 0, 0, 0.14));
}

.viva-paper-section::before {
  top: -52px !important;
  clip-path: polygon(
    0 55%, 4% 42%, 8% 58%, 12% 36%, 16% 52%, 21% 40%, 26% 62%,
    31% 45%, 36% 57%, 42% 34%, 48% 52%, 54% 38%, 60% 59%, 66% 41%,
    72% 55%, 78% 33%, 84% 52%, 90% 39%, 96% 58%, 100% 44%,
    100% 100%, 0 100%
  ) !important;
}

.viva-paper-section::after {
  bottom: -52px !important;
  clip-path: polygon(
    0 0, 100% 0,
    100% 50%, 96% 64%, 91% 45%, 86% 66%, 80% 48%, 75% 62%, 69% 43%,
    63% 59%, 57% 38%, 51% 55%, 45% 42%, 39% 64%, 33% 47%, 27% 59%,
    20% 39%, 14% 57%, 8% 44%, 3% 63%, 0 52%
  ) !important;
}

.homev2-ripped::before,
.homev2-ripped::after {
  content: "" !important;
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  height: 44px !important;
  background: #070707 !important;
  z-index: 4 !important;
}

.homev2-ripped::before {
  top: -42px !important;
  clip-path: polygon(
    0 64%, 5% 46%, 11% 66%, 17% 44%, 24% 62%, 31% 48%, 38% 69%,
    46% 40%, 54% 62%, 61% 48%, 69% 68%, 77% 43%, 85% 60%, 93% 49%,
    100% 64%, 100% 100%, 0 100%
  ) !important;
}

.homev2-ripped::after {
  bottom: -42px !important;
  clip-path: polygon(
    0 0, 100% 0,
    100% 44%, 94% 62%, 87% 43%, 79% 66%, 71% 46%, 63% 64%,
    55% 42%, 47% 66%, 39% 48%, 31% 64%, 23% 44%, 15% 62%, 8% 46%, 0 64%
  ) !important;
}

.viva-section,
.viva-projects,
.viva-cta,
.homev2-spotlight,
.vol-learning,
.vol-register {
  position: relative;
}

.viva-site-footer {
  margin-top: 0 !important;
}

.viva-site-footer__inner {
  padding-top: clamp(3rem, 6vw, 5rem) !important;
}

.viva-site-logo strong,
.homev2-brand strong {
  letter-spacing: -0.07em !important;
}

.viva-contact-layout {
  overflow: hidden;
}

.viva-contact-info h1 {
  word-break: normal;
}

@media (max-width: 760px) {
  .viva-paper-section::before,
  .viva-paper-section::after,
  .homev2-ripped::before,
  .homev2-ripped::after {
    height: 34px !important;
  }

  .viva-paper-section::before {
    top: -33px !important;
  }

  .viva-paper-section::after {
    bottom: -33px !important;
  }
}
''')

vol_ts = r'''import "../site-public.css";
import "./voluntariado-premium.css";

const team = [
  { name: "Eduardo Cabeça", role: "Direção / Coordenação", initials: "EC", highlight: true },
  { name: "Cacau Ricartte", role: "Voluntária", initials: "CR" },
  { name: "Julia Titz", role: "Voluntária", initials: "JT" },
  { name: "Heya Camargo", role: "Voluntária", initials: "HC" },
  { name: "Bruna Lazzarotto", role: "Voluntária", initials: "BL" },
  { name: "Katy Souza", role: "Voluntária", initials: "KS" },
  { name: "Ricardo Costa", role: "Voluntário", initials: "RC" },
  { name: "Renaldo BK", role: "Voluntário", initials: "RB" },
];

const learningCards = [
  {
    title: "Teatro e atuação",
    text: "Introdução à atuação teatral, construção de expressão corporal e vocal, improvisação, concentração e presença em cena.",
    icon: "🎭",
  },
  {
    title: "Trabalho em equipe",
    text: "Vivência prática de colaboração, apoio ao elenco, organização, comunicação e construção coletiva de processos artísticos.",
    icon: "✣",
  },
  {
    title: "Audiovisual e criação de curtas",
    text: "Noções de atuação para câmera, linguagem audiovisual, participação na captação e criação de registros para divulgação.",
    icon: "🎬",
  },
  {
    title: "Vivência de palco e bastidores",
    text: "Contato direto com bastidores do teatro, organização, figurino, produção, entrada de cena e rotina de apresentações.",
    icon: "🕺",
  },
];

export function VoluntariadoPage() {
  return (
    <main className="vol-page">
      <section className="vol-hero">
        <div className="vol-hero__paper">
          <span>Inscrições abertas</span>
          <h1>
            Voluntariado
            <strong>2026</strong>
          </h1>
        </div>
      </section>

      <section className="vol-intro">
        <div className="vol-intro__copy">
          <p className="vol-kicker">2025 foi um ano de aprendizados e crescimento coletivo</p>

          <p>
            Em 2026, seguimos avançando. Se você sonha em fazer teatro de forma
            consciente e transformadora, este é o seu momento. A Companhia de
            Artes Viva abre as inscrições para o programa de voluntariado 2026,
            um espaço gratuito de formação, prática artística e desenvolvimento
            humano por meio da arte.
          </p>

          <p>
            Acreditamos no teatro como ferramenta de expressão, reflexão e
            impacto social. O voluntariado é voltado a pessoas que desejam
            aprender, colaborar e viver experiências reais de palco e bastidores,
            promovendo trabalho em equipe, empatia e transformação cultural.
          </p>

          <h2>Inscrições abertas até 25 de janeiro</h2>
        </div>
      </section>

      <section className="vol-team">
        <div className="vol-team__paper" />

        <div className="vol-team__grid">
          <div className="vol-team__people">
            {team.map((person) => (
              <article
                className={person.highlight ? "vol-person vol-person--highlight" : "vol-person"}
                key={person.name}
              >
                <div className="vol-person__avatar">{person.initials}</div>
                <strong>{person.name}</strong>
                <span>{person.role}</span>
              </article>
            ))}
          </div>

          <div className="vol-team__headline">
            <p>Somos um time formado</p>
            <em>por voluntários</em>
            <strong>com um propósito</strong>
          </div>
        </div>
      </section>

      <section className="vol-learning">
        <div className="vol-section-title">
          <span>Aqui você aprenderá</span>
        </div>

        <div className="vol-learning__grid">
          {learningCards.map((card) => (
            <article className="vol-learning-card" key={card.title}>
              <div>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vol-register">
        <div className="vol-register__call">
          <p>Em 2026 você</p>
          <h2>
            não pode ficar
            <span>de fora,</span>
            inscreva-se
          </h2>

          <div className="vol-register__seal">
            <strong>Companhia de Artes Viva</strong>
            <span>Voluntariado 2026</span>
          </div>
        </div>

        <form className="vol-form">
          <label>
            Nome completo
            <input type="text" placeholder="Digite seu nome completo" />
          </label>

          <label>
            E-mail
            <input type="email" placeholder="seuemail@email.com" />
          </label>

          <label>
            WhatsApp
            <input type="tel" placeholder="(00) 00000-0000" />
          </label>

          <label>
            Você é de Jaraguá do Sul? Caso não seja, liste a sua cidade.
            <input type="text" placeholder="Cidade / Estado" />
          </label>

          <label>
            O que te chamou para o voluntariado 2026?
            <textarea rows={3} placeholder="Conte um pouco sobre você" />
          </label>

          <label>
            O que te levou a se inscrever no voluntariado 2026?
            <textarea rows={3} placeholder="Escreva sua motivação" />
          </label>

          <label>
            Como você acredita que pode contribuir?
            <textarea rows={4} placeholder="Fale sobre suas habilidades e disponibilidade" />
          </label>

          <div className="vol-form__terms">
            <label>
              <input type="checkbox" />
              <span>Li e concordo com os termos do Voluntariado 2026.</span>
            </label>
          </div>

          <button type="button">Enviar inscrição</button>
        </form>
      </section>
    </main>
  );
}
'''
Path("src/site/pages/voluntariado/VoluntariadoPage.tsx").write_text(vol_ts)

Path("src/site/pages/voluntariado/voluntariado-premium.css").write_text(r'''
.vol-page {
  --vol-bg: #302c2a;
  --vol-red: #ff4a4f;
  --vol-paper: #f4f0e8;
  --vol-muted: rgba(255, 255, 255, 0.72);
  min-height: 100vh;
  background:
    radial-gradient(circle at 18% 8%, rgba(255, 74, 79, 0.16), transparent 26rem),
    radial-gradient(circle at 86% 50%, rgba(255, 255, 255, 0.05), transparent 24rem),
    var(--vol-bg);
  color: #fff;
  overflow: hidden;
}

.vol-hero {
  position: relative;
  min-height: 52vh;
  display: grid;
  place-items: center;
  padding: clamp(5rem, 9vw, 8rem) 1.5rem;
  background:
    radial-gradient(circle at 50% 38%, rgba(255,255,255,0.10), transparent 18rem),
    linear-gradient(180deg, #2f2b29 0%, #302c2a 100%);
}

.vol-hero__paper {
  position: relative;
  z-index: 2;
  width: min(1180px, calc(100% - 2rem));
  min-height: 250px;
  display: grid;
  place-items: center;
  text-align: center;
  color: #555;
  background: var(--vol-paper);
  transform: rotate(-2deg);
  filter: drop-shadow(0 24px 28px rgba(0, 0, 0, 0.22));
  clip-path: polygon(
    0 16%, 5% 10%, 10% 18%, 16% 9%, 22% 15%, 30% 8%, 38% 17%,
    46% 10%, 55% 16%, 63% 9%, 72% 15%, 81% 8%, 90% 17%, 100% 11%,
    100% 88%, 94% 82%, 88% 91%, 80% 84%, 72% 92%, 64% 85%, 56% 94%,
    48% 86%, 40% 91%, 32% 84%, 24% 93%, 16% 85%, 8% 91%, 0 84%
  );
}

.vol-hero__paper span {
  display: block;
  margin-bottom: -0.45rem;
  font-size: clamp(1rem, 2.4vw, 2.4rem);
  letter-spacing: 0.42em;
  font-weight: 500;
  text-transform: uppercase;
}

.vol-hero__paper h1 {
  margin: 0;
  font-family: "Montserrat", system-ui, sans-serif;
  color: #565656;
  font-size: clamp(3.8rem, 9.5vw, 9rem);
  line-height: 0.76;
  letter-spacing: -0.08em;
  text-transform: uppercase;
}

.vol-hero__paper h1 strong {
  display: block;
  font-size: 0.9em;
  font-weight: 950;
}

.vol-intro {
  padding: clamp(4rem, 8vw, 7rem) 1.5rem clamp(3rem, 7vw, 5rem);
}

.vol-intro__copy {
  width: min(840px, 100%);
  margin: 0 auto;
}

.vol-kicker {
  margin: 0 0 1.4rem !important;
  color: #dedede !important;
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: clamp(1.35rem, 2.7vw, 2.25rem);
  line-height: 1.05 !important;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: -0.05em;
}

.vol-intro p {
  margin: 0 0 1.3rem;
  color: rgba(255,255,255,0.80);
  font-size: 1rem;
  line-height: 1.75;
  font-weight: 600;
}

.vol-intro h2 {
  margin: 2rem 0 0;
  color: var(--vol-red);
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  line-height: 1;
  letter-spacing: -0.05em;
  text-transform: uppercase;
}

.vol-team {
  position: relative;
  padding: clamp(5rem, 9vw, 7rem) 1.5rem;
}

.vol-team__paper {
  position: absolute;
  left: -4vw;
  right: -4vw;
  top: 0;
  height: 160px;
  background: var(--vol-paper);
  transform: rotate(-3deg);
  clip-path: polygon(
    0 26%, 7% 14%, 14% 31%, 22% 12%, 30% 27%, 39% 15%, 48% 30%,
    58% 13%, 68% 28%, 78% 14%, 88% 31%, 100% 15%,
    100% 100%, 0 100%
  );
  filter: drop-shadow(0 22px 20px rgba(0,0,0,0.18));
}

.vol-team__grid {
  position: relative;
  z-index: 2;
  width: min(1180px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(320px, 0.9fr) minmax(360px, 1fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 6rem);
}

.vol-team__people {
  display: grid;
  grid-template-columns: repeat(4, minmax(72px, 1fr));
  gap: 1rem;
  align-items: end;
}

.vol-person {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 0.35rem;
}

.vol-person__avatar {
  width: 74px;
  height: 74px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background:
    radial-gradient(circle at 35% 20%, rgba(255,255,255,0.42), transparent 22px),
    linear-gradient(135deg, #ff6b6f, #ff353b);
  color: #111;
  font-family: "Montserrat", system-ui, sans-serif;
  font-weight: 950;
  border: 4px solid #ff565b;
  box-shadow: 0 22px 44px rgba(0,0,0,0.2);
}

.vol-person--highlight {
  grid-column: 1 / -1;
}

.vol-person--highlight .vol-person__avatar {
  width: 118px;
  height: 118px;
  font-size: 1.8rem;
}

.vol-person strong {
  color: #fff;
  font-size: 0.74rem;
  text-transform: uppercase;
}

.vol-person span {
  color: rgba(255,255,255,0.62);
  font-size: 0.66rem;
  text-transform: uppercase;
}

.vol-team__headline {
  font-family: "Montserrat", system-ui, sans-serif;
  text-transform: uppercase;
}

.vol-team__headline p,
.vol-team__headline strong {
  display: block;
  margin: 0;
  color: #d9d9df;
  font-size: clamp(2.6rem, 5.5vw, 5.7rem);
  line-height: 0.84;
  letter-spacing: -0.08em;
  font-weight: 950;
}

.vol-team__headline em {
  display: block;
  margin: 0.45rem 0;
  color: var(--vol-red);
  font-family: "Brush Script MT", cursive;
  font-size: clamp(2.4rem, 4.8vw, 5.2rem);
  line-height: 0.75;
  text-transform: none;
  font-weight: 400;
}

.vol-learning {
  padding: clamp(4rem, 8vw, 6rem) 1.5rem;
}

.vol-section-title {
  text-align: center;
  margin-bottom: 2rem;
}

.vol-section-title span {
  color: var(--vol-red);
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: clamp(2rem, 4vw, 3.6rem);
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: -0.06em;
}

.vol-learning__grid {
  width: min(1240px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.vol-learning-card {
  min-height: 310px;
  padding: clamp(1.2rem, 2vw, 1.8rem);
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.065)),
    #5b5b5b;
  color: #fff;
  box-shadow: 0 24px 58px rgba(0,0,0,0.22);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.vol-learning-card div {
  font-size: 2.65rem;
  margin-bottom: 1rem;
}

.vol-learning-card h3 {
  margin: 0 0 1rem;
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: 1.12rem;
  line-height: 1;
  text-transform: uppercase;
}

.vol-learning-card p {
  margin: 0;
  color: rgba(255,255,255,0.84);
  font-size: 0.82rem;
  line-height: 1.55;
  font-weight: 600;
}

.vol-register {
  width: min(1240px, calc(100% - 3rem));
  margin: 0 auto;
  padding: clamp(4rem, 8vw, 7rem) 0;
  display: grid;
  grid-template-columns: minmax(300px, 0.85fr) minmax(360px, 0.9fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: center;
}

.vol-register__call p {
  margin: 0 0 0.5rem;
  color: var(--vol-red);
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: clamp(2rem, 4vw, 3.7rem);
  line-height: 0.9;
  text-transform: uppercase;
  font-weight: 950;
}

.vol-register__call h2 {
  margin: 0;
  color: var(--vol-red);
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: clamp(4rem, 8vw, 8rem);
  line-height: 0.8;
  letter-spacing: -0.08em;
  text-transform: uppercase;
}

.vol-register__call h2 span {
  display: block;
}

.vol-register__seal {
  margin-top: 2rem;
  display: inline-flex;
  flex-direction: column;
  color: #fff;
  text-transform: uppercase;
}

.vol-register__seal strong {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
}

.vol-register__seal span {
  color: var(--vol-red);
  font-weight: 900;
}

.vol-form {
  padding: clamp(1.4rem, 2.5vw, 2rem);
  border-radius: 26px;
  background: #f8f5ef;
  color: #111;
  box-shadow: 0 30px 80px rgba(0,0,0,0.32);
  display: grid;
  gap: 0.85rem;
}

.vol-form label {
  display: grid;
  gap: 0.35rem;
  color: #222;
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
}

.vol-form input,
.vol-form textarea {
  border: 1px solid #d8d2ca;
  border-radius: 14px;
  background: #fff;
  color: #111;
  padding: 0.85rem 0.95rem;
  font-family: inherit;
  outline: none;
}

.vol-form__terms label {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  text-transform: none;
  font-size: 0.78rem;
  line-height: 1.45;
}

.vol-form__terms input {
  width: auto;
  margin-top: 0.2rem;
}

.vol-form button {
  min-height: 3rem;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff4a4f, #e50914);
  color: #fff;
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 18px 40px rgba(229,9,20,0.24);
}

@media (max-width: 1050px) {
  .vol-team__grid,
  .vol-register {
    grid-template-columns: 1fr;
  }

  .vol-learning__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .vol-team__headline {
    text-align: center;
  }
}

@media (max-width: 680px) {
  .vol-hero {
    min-height: 46vh;
  }

  .vol-hero__paper {
    min-height: 210px;
  }

  .vol-hero__paper h1 {
    font-size: clamp(3.4rem, 18vw, 6rem);
  }

  .vol-team__people {
    grid-template-columns: repeat(2, 1fr);
  }

  .vol-learning__grid {
    grid-template-columns: 1fr;
  }

  .vol-register {
    width: min(100% - 1.5rem, 1240px);
  }
}
''')

site_public = Path("src/site/pages/site-public.css")
text = site_public.read_text()
imp = '@import "./site-global-polish.css";'
if imp not in text:
    text = text.rstrip() + "\n" + imp + "\n"
site_public.write_text(text)

print("OK: ajuste geral aplicado em todas as paginas publicas.")
