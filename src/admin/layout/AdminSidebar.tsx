import { NavLink } from "react-router-dom";
import {
  Gauge,
  FileText,
  Images,
  HeartHandshake,
  ClipboardList,
  Palette,
  PanelBottom,
  Shield,
} from "lucide-react";

const links = [
  { label: "Painel", path: "/admin/dashboard", icon: Gauge },
  { label: "Páginas do site", path: "/admin/paginas", icon: FileText },
  { label: "Mídia / Imagens", path: "/admin/midia", icon: Images },
  { label: "Voluntariado 2026", path: "/admin/voluntariado-2026", icon: HeartHandshake },
  { label: "Formulários", path: "/admin/formularios", icon: ClipboardList },
  { label: "Configurações Visuais", path: "/admin/configuracoes-visuais", icon: Palette },
  { label: "Rodapé", path: "/admin/rodape", icon: PanelBottom },
  { label: "Logins e acessos", to: "/admin/usuarios" },
    { label: "Segurança", path: "/admin/seguranca", icon: Shield },
];

export function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">
        <div className="admin-brand-icon"></div>

        <div>
          <strong>Viva Gestão</strong>
          <span>Painel de controle</span>
        </div>
      </div>

      <nav className="admin-menu">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "admin-menu-link active" : "admin-menu-link"
              }
            >
              <Icon size={19} strokeWidth={2.2} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
