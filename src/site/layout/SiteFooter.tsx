import { Link } from "react-router-dom";

const menu = [
  { label: "Página Inicial", to: "/" },
  { label: "Nossa História", to: "/nossa-historia" },
  { label: "Apoie", to: "/apoie" },
  { label: "Voluntariado 2026", to: "/voluntariado-2026" },
  { label: "Projetos", to: "/projetos" },
  { label: "Contato", to: "/contato" },
];

export function SiteFooter() {
  return (
    <footer className="viva-site-footer">
      <div className="viva-site-footer__glow" />

      <div className="viva-site-footer__inner">
        <div className="viva-site-footer__brand">
          <Link className="viva-site-logo viva-site-logo--footer" to="/">
            <strong>VIVA</strong>
            <span>CIA DE ARTES</span>
          </Link>

          <p>
            Arte, cultura, fé, formação e transformação social por meio do
            teatro, da dança, da música e da expressão criativa.
          </p>

          <div className="viva-site-footer__social">
            <a href="/" aria-label="Instagram">◎</a>
            <a href="/" aria-label="Facebook">f</a>
            <a href="/" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="viva-site-footer__column">
          <h3>Menu</h3>
          {menu.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="viva-site-footer__column">
          <h3>Institucional</h3>
          <Link to="/nossa-historia">Quem somos</Link>
          <Link to="/projetos">Projetos culturais</Link>
          <Link to="/voluntariado-2026">Voluntariado</Link>
          <Link to="/apoie">Apoio e incentivo</Link>
        </div>

        <div className="viva-site-footer__column">
          <h3>Contato</h3>
          <span>contato@ciaviva.com</span>
          <span>(11) 99999-9999</span>
          <span>São Paulo - SP</span>
          <Link className="viva-site-footer__contact" to="/contato">
            Fale conosco
          </Link>
        </div>
      </div>

      <div className="viva-site-footer__bottom">
        <span>© 2026 Cia de Artes Viva. Todos os direitos reservados.</span>
        <span>www.ciaviva.com</span>
      </div>
    </footer>
  );
}
