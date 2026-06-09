import { FileText, Images, Palette, PanelBottom, Shield, Users } from "lucide-react";
import "../admin-pages.css";

export function DashboardPage() {
  return (
    <main className="admin-dashboard-page">
      <div className="admin-section-header">
        <div>
          <p>ORGANIZAÇÃO DO PAINEL</p>
          <h1>Visão geral</h1>
          <span>Resumo real do site, atalhos de edição e status das principais áreas.</span>
        </div>

        <button className="admin-page-button primary">Salvar tudo agora</button>
      </div>

      <section className="metric-grid">
        <div className="metric-card"><strong>06</strong><span>Páginas publicadas</span></div>
        <div className="metric-card"><strong>01</strong><span>Formulário ativo</span></div>
        <div className="metric-card"><strong>00</strong><span>Imagens enviadas</span></div>
        <div className="metric-card"><strong>01</strong><span>Usuário administrador</span></div>
      </section>

      <section className="admin-panel-card">
        <div className="admin-card-title">
          <div>
            <h2>Comece pelo que precisa alterar</h2>
            <p>Atalhos rápidos para as áreas mais usadas do Viva Gestão.</p>
          </div>
        </div>

        <div className="quick-grid">
          <div className="quick-card"><FileText color="#ff5360" /><h3>Páginas do site</h3><p>Crie, edite, apague e reorganize as abas do site.</p></div>
          <div className="quick-card"><Images color="#ff5360" /><h3>Mídia / Imagens</h3><p>Envie fotos, banners, logos, artes e imagens do rodapé.</p></div>
          <div className="quick-card"><Users color="#ff5360" /><h3>Voluntariado</h3><p>Controle inscrições, formulário e lista de candidatos.</p></div>
          <div className="quick-card"><Palette color="#ff5360" /><h3>Visual</h3><p>Altere cores, fundo, estilo, sombras e identidade visual.</p></div>
          <div className="quick-card"><PanelBottom color="#ff5360" /><h3>Rodapé</h3><p>Edite textos, links, redes sociais e imagem do rodapé.</p></div>
          <div className="quick-card"><Shield color="#ff5360" /><h3>Segurança</h3><p>Gerencie login, usuários, senha e acesso ao painel.</p></div>
        </div>
      </section>
    </main>
  );
}
