import { KeyRound, LogOut, Mail, Save, Shield, UserPlus } from "lucide-react";
import "../admin-pages.css";

export function SegurancaPage() {
  return (
    <main className="security-admin-page">
      <div className="admin-section-header">
        <div>
          <p>SEGURANÇA</p>
          <h1>Login e senha</h1>
          <span>Controle usuários autorizados, troca de senha, sessão e acesso ao painel Viva Gestão.</span>
        </div>

        <button className="admin-page-button primary"><Save size={17} />Salvar segurança</button>
      </div>

      <section className="security-layout">
        <div className="admin-panel-card">
          <div className="admin-card-title">
            <div>
              <h2>Usuário administrador</h2>
              <p>Conta principal conectada ao Firebase Authentication.</p>
            </div>
            <Shield color="#ff5360" />
          </div>

          <div className="security-user-card">
            <div className="user-avatar">AD</div>
            <div>
              <strong>Administrador</strong>
              <span>admin@ciaviva.com</span>
            </div>
            <span className="status-pill open">Ativo</span>
          </div>

          <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="admin-page-button dark"><UserPlus size={17} />Adicionar usuário</button>
            <button className="admin-page-button dark"><Mail size={17} />Enviar convite</button>
          </div>
        </div>

        <div className="admin-panel-card">
          <div className="admin-card-title">
            <div>
              <h2>Alterar acesso</h2>
              <p>Campos visuais para futura troca de senha e dados do usuário.</p>
            </div>
          </div>

          <div className="form-grid-2">
            <label className="admin-field">
              E-mail atual
              <input defaultValue="admin@ciaviva.com" />
            </label>

            <label className="admin-field">
              Nova senha
              <input type="password" placeholder="Digite uma nova senha" />
            </label>
          </div>

          <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="admin-page-button dark"><KeyRound size={17} />Enviar redefinição</button>
            <button className="admin-page-button danger"><LogOut size={17} />Sair do painel</button>
          </div>
        </div>
      </section>

      <section className="admin-panel-card">
        <div className="admin-card-title">
          <div>
            <h2>Regras de segurança</h2>
            <p>Lista de controles que serão conectados na próxima fase.</p>
          </div>
        </div>

        <div className="quick-grid">
          <div className="quick-card"><Shield color="#ff5360" /><h3>Rotas protegidas</h3><p>Usuários sem login são enviados para a tela de acesso.</p></div>
          <div className="quick-card"><KeyRound color="#ff5360" /><h3>Senha no Firebase</h3><p>A senha não fica salva no código do site.</p></div>
          <div className="quick-card"><LogOut color="#ff5360" /><h3>Sessão ativa</h3><p>O usuário permanece logado enquanto a sessão estiver ativa.</p></div>
        </div>
      </section>
    </main>
  );
}
