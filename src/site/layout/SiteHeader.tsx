import { Link, NavLink } from "react-router-dom";
import { SiteMedia } from "../components/SiteMedia";
import { useSiteContent } from "../content/useSiteContent";

const navItems = [
  { label: "Página Inicial", to: "/" },
  { label: "Nossa História", to: "/nossa-historia" },
  { label: "Apoie", to: "/apoie" },
  { label: "Voluntariado 2026", to: "/voluntariado-2026" },
  { label: "Projetos", to: "/projetos" },
  { label: "Contato", to: "/contato" },
];

export function SiteHeader() {
  const { global } = useSiteContent();

  return (
    <header className="viva-site-header">
      <div className="viva-site-header__inner">
        <Link className="viva-site-logo" to="/" aria-label="Cia de Artes Viva">
          {global.logoMedia?.src ? (
            <SiteMedia media={global.logoMedia} className="viva-site-logo__media" />
          ) : (
            <>
              <strong>{global.logoTitle}</strong>
              <span>{global.logoSubtitle}</span>
            </>
          )}
        </Link>

        <nav className="viva-site-nav" aria-label="Menu principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive ? "viva-site-nav__link active" : "viva-site-nav__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link className="viva-site-header__button" to={global.ctaHref}>
          {global.ctaLabel}
        </Link>
      </div>
    </header>
  );
}
