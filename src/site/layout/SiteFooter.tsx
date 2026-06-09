import { Link } from "react-router-dom";
import { useSiteContent } from "../content/useSiteContent";

export function SiteFooter() {
  const { global } = useSiteContent();

  return (
    <footer className="viva-site-footer">
      <div className="viva-site-footer__inner">
        <div className="viva-site-footer__brand">
          <Link className="viva-site-logo" to="/">
            <strong>{global.logoTitle}</strong>
            <span>{global.logoSubtitle}</span>
          </Link>

          <p>{global.footerDescription}</p>

          <div className="viva-site-footer__social">
            <a href={global.instagram} aria-label="Instagram">◎</a>
            <a href="/" aria-label="Facebook">f</a>
            <a href="/" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="viva-site-footer__column">
          <h3>Menu</h3>
          <Link to="/">Página Inicial</Link>
          <Link to="/nossa-historia">Nossa História</Link>
          <Link to="/apoie">Apoie</Link>
          <Link to="/voluntariado-2026">Voluntariado 2026</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contato">Contato</Link>
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
          <span>{global.email}</span>
          <span>{global.phone}</span>
          <span>{global.location}</span>
          <Link className="viva-site-footer__contact" to="/contato">Fale conosco</Link>
        </div>
      </div>

      <div className="viva-site-footer__bottom">
        <span>© 2026 Cia de Artes Viva. Todos os direitos reservados.</span>
        <span>www.ciaviva.com</span>
      </div>
    </footer>
  );
}
