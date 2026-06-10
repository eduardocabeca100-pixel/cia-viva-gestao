import { FormEvent, useMemo, useState } from "react";
import "./admin-users.css";

type Role = "Administrador" | "Editor" | "Visualizador";

type PermissionKey =
  | "Configurações gerais"
  | "Página Inicial"
  | "Nossa História"
  | "Apoie"
  | "Voluntariado 2026"
  | "Projetos"
  | "Contato"
  | "Biblioteca de mídia"
  | "Configurações visuais"
  | "Rodapé"
  | "Usuários e acessos";

type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  active: boolean;
  permissions: PermissionKey[];
};

const STORAGE_KEY = "cia-viva-admin-users-v1";

const allPermissions: PermissionKey[] = [
  "Configurações gerais",
  "Página Inicial",
  "Nossa História",
  "Apoie",
  "Voluntariado 2026",
  "Projetos",
  "Contato",
  "Biblioteca de mídia",
  "Configurações visuais",
  "Rodapé",
  "Usuários e acessos",
];

const defaultUsers: AdminUser[] = [
  {
    id: "admin-principal",
    name: "Administrador Cia Viva",
    email: "admin@ciaviva.com",
    role: "Administrador",
    active: true,
    permissions: allPermissions,
  },
];

function loadUsers(): AdminUser[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultUsers;
  } catch {
    return defaultUsers;
  }
}

function saveUsers(users: AdminUser[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>(() => loadUsers());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("Editor");
  const [message, setMessage] = useState("");

  const activeUsers = useMemo(() => users.filter((user) => user.active), [users]);

  function updateUsers(next: AdminUser[]) {
    setUsers(next);
    saveUsers(next);
  }

  function handleAddUser(event: FormEvent) {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      setMessage("Preencha nome e e-mail.");
      return;
    }

    const permissions =
      role === "Administrador"
        ? allPermissions
        : role === "Editor"
          ? allPermissions.filter((permission) => permission !== "Usuários e acessos")
          : ["Página Inicial", "Nossa História", "Apoie", "Voluntariado 2026", "Projetos", "Contato"];

    const next: AdminUser = {
      id: crypto.randomUUID(),
      name,
      email,
      role,
      active: true,
      permissions,
    };

    updateUsers([next, ...users]);
    setName("");
    setEmail("");
    setRole("Editor");
    setMessage("Usuário adicionado à lista de acessos.");
  }

  function toggleActive(id: string) {
    updateUsers(users.map((user) => user.id === id ? { ...user, active: !user.active } : user));
  }

  function removeUser(id: string) {
    updateUsers(users.filter((user) => user.id !== id));
  }

  function updateRole(id: string, nextRole: Role) {
    updateUsers(users.map((user) => {
      if (user.id !== id) return user;

      return {
        ...user,
        role: nextRole,
        permissions: nextRole === "Administrador" ? allPermissions : user.permissions,
      };
    }));
  }

  function togglePermission(id: string, permission: PermissionKey) {
    updateUsers(users.map((user) => {
      if (user.id !== id) return user;

      const exists = user.permissions.includes(permission);

      return {
        ...user,
        permissions: exists
          ? user.permissions.filter((item) => item !== permission)
          : [...user.permissions, permission],
      };
    }));
  }

  return (
    <main className="admin-users-page">
      <header className="admin-users-header">
        <div>
          <span>Viva Gestão</span>
          <h1>Logins e acessos</h1>
          <p>Cadastre quem pode editar o site e organize permissões por área.</p>
        </div>

        <div className="admin-users-counter">
          <strong>{activeUsers.length}</strong>
          <span>ativos</span>
        </div>
      </header>

      {message && <div className="admin-users-message">{message}</div>}

      <section className="admin-users-layout">
        <form className="admin-users-form" onSubmit={handleAddUser}>
          <h2>Adicionar usuário</h2>

          <label>
            Nome
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Nome do usuário" />
          </label>

          <label>
            E-mail
            <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="email@exemplo.com" />
          </label>

          <label>
            Papel
            <select value={role} onChange={(event) => setRole(event.target.value as Role)}>
              <option>Administrador</option>
              <option>Editor</option>
              <option>Visualizador</option>
            </select>
          </label>

          <button type="submit">Adicionar</button>

          <p>
            Para esse login funcionar de verdade, o e-mail também precisa existir no Firebase Auth.
            Esta tela organiza as permissões do painel.
          </p>
        </form>

        <section className="admin-users-list">
          {users.map((user) => (
            <article className="admin-user-card" key={user.id}>
              <div className="admin-user-card__top">
                <div>
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                </div>

                <em className={user.active ? "active" : ""}>
                  {user.active ? "Ativo" : "Bloqueado"}
                </em>
              </div>

              <div className="admin-user-card__controls">
                <label>
                  Papel
                  <select value={user.role} onChange={(event) => updateRole(user.id, event.target.value as Role)}>
                    <option>Administrador</option>
                    <option>Editor</option>
                    <option>Visualizador</option>
                  </select>
                </label>

                <button type="button" onClick={() => toggleActive(user.id)}>
                  {user.active ? "Bloquear" : "Ativar"}
                </button>

                {user.id !== "admin-principal" && (
                  <button type="button" className="danger" onClick={() => removeUser(user.id)}>
                    Remover
                  </button>
                )}
              </div>

              <details className="admin-user-permissions">
                <summary>Permissões</summary>

                <div>
                  {allPermissions.map((permission) => (
                    <label key={permission}>
                      <input
                        type="checkbox"
                        checked={user.permissions.includes(permission)}
                        onChange={() => togglePermission(user.id, permission)}
                      />
                      {permission}
                    </label>
                  ))}
                </div>
              </details>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
