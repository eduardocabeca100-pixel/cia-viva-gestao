import { NavLink } from "react-router-dom";
import "./admin-sidebar-safe.css";

const adminMenuItems = [
  {
    label: "Painel",
    path: "/admin/dashboard",
    icon: "◌",
  },
  {
    label: "Páginas do site",
    path: "/admin/paginas",
    icon: "▤",
  },
  {
    label: "Mídia / Imagens",
    path: "/admin/midia",
    icon: "▧",
  },
  {
    label: "Voluntariado 2026",
    path: "/admin/voluntariado",
    icon: "♡",
  },
  {
    label: "Formulários",
    path: "/admin/formularios",
    icon: "▣",
  },
  {
    label: "Configurações Visuais",
    path: "/admin/configuracoes-visuais",
    icon: "◌",
  },
  {
    label: "Rodapé",
    path: "/admin/rodape",
    icon: "▬",
  },
  {
    label: "Logins e acessos",
    path: "/admin/usuarios",
    icon: "👤",
  },
  {
    label: "Segurança",
    path: "/admin/seguranca",
    icon: "◇",
  },
];

export function AdminSidebar() {
  return (
    <aside className="admin-sidebar-safe">
      <div className="admin-sidebar-safe__brand">
        <strong>VIVA</strong>
        <span>Painel de controle</span>
      </div>

      <nav className="admin-sidebar-safe__nav" aria-label="Menu do painel">
        {adminMenuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "admin-sidebar-safe__link active" : "admin-sidebar-safe__link"
            }
          >
            <span className="admin-sidebar-safe__icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="admin-sidebar-safe__footer">
        <span>admin@ciaviva.com</span>
      </div>
    </aside>
  );
}

export default AdminSidebar;
