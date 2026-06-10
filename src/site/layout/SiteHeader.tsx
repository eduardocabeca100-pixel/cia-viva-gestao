import { Link, NavLink } from "react-router-dom";
import { SiteMedia } from "../components/SiteMedia";
import { useSiteContent } from "../content/useSiteContent";

const fallbackNavItems = [
  { label: "Página Inicial", href: "/", visible: true },
  { label: "Nossa História", href: "/nossa-historia", visible: true },
  { label: "Apoie", href: "/apoie", visible: true },
  { label: "Voluntariado 2026", href: "/voluntariado-2026", visible: true },
  { label: "Projetos", href: "/projetos", visible: true },
  { label: "Contato", href: "/contato", visible: true },
];

export function SiteHeader() {
  const { global } = useSiteContent();
  const menuItems = global.menuItems?.length ? global.menuItems : fallbackNavItems;

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
          {menuItems
            .filter((item) => item.visible !== false)
            .map((item) => (
              <NavLink
                key={`${item.label}-${item.href}`}
                to={item.href}
                end={item.href === "/"}
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
