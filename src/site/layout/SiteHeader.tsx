import { NavLink } from "react-router-dom";

const links = [
  { label: "PÁGINA INICIAL", path: "/" },
  { label: "NOSSA HISTÓRIA", path: "/nossa-historia" },
  { label: "APOIE", path: "/apoie" },
  { label: "VOLUNTARIADO 2026", path: "/voluntariado-2026" },
  { label: "PROJETOS", path: "/projetos" },
  { label: "CONTATO", path: "/contato" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <strong>VIVA <small>CIA DE ARTES</small></strong>

      <nav>
        {links.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
