import { Bell, Eye, Save } from "lucide-react";

export function AdminTopbar() {
  return (
    <header className="admin-topbar">
      <div className="admin-search">Buscar no painel...</div>

      <div className="admin-topbar-actions">
        <button className="admin-ghost-button">
          <Eye size={16} />
          Ver site
        </button>

        <button className="admin-primary-button">
          <Save size={16} />
          Salvar alterações
        </button>

        <button className="admin-icon-button">
          <Bell size={17} />
        </button>

        <div className="admin-user">
          <span>AD</span>
          <div>
            <strong>Administrador</strong>
            <small>admin@ciaviva.com</small>
          </div>
        </div>
      </div>
    </header>
  );
}
