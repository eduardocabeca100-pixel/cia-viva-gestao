import { useState } from "react";
import type { ChangeEvent } from "react";
import { Calendar, Download, Eye, FileText, Lock, Save, Unlock, Upload, UserCheck, Users } from "lucide-react";
import "../admin-pages.css";

type VolunteerStatus = "aberto" | "fechado" | "agendado";

export function VoluntariadoAdminPage() {
  const [status, setStatus] = useState<VolunteerStatus>("aberto");
  const [campaignTitle, setCampaignTitle] = useState("Voluntariado 2026");
  const [openingDate, setOpeningDate] = useState("01/01/2026");
  const [closingDate, setClosingDate] = useState("25/01/2026");
  const [mainText, setMainText] = useState("Em 2026 você não pode ficar de fora. Inscreva-se para fazer parte da Companhia de Artes Viva.");
  const [sideArtImage, setSideArtImage] = useState<string | null>(null);

  function handleUploadArt(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setSideArtImage(URL.createObjectURL(file));
  }

  const statusLabel = {
    aberto: "Inscrições abertas",
    fechado: "Inscrições fechadas",
    agendado: "Inscrições agendadas",
  }[status];

  const statusClass = {
    aberto: "open",
    fechado: "closed",
    agendado: "draft",
  }[status];

  return (
    <main className="volunteer-admin-page">
      <div className="admin-section-header">
        <div>
          <p>VOLUNTARIADO 2026</p>
          <h1>Gestão do voluntariado</h1>
          <span>Controle abertura, encerramento, arte lateral, formulário e inscrições recebidas.</span>
        </div>

        <div className="admin-header-actions">
          <button className="admin-page-button dark"><Eye size={17} />Pré-visualizar</button>
          <button className="admin-page-button primary"><Save size={17} />Salvar alterações</button>
        </div>
      </div>

      <section className="volunteer-status-actions">
        <button className={status === "aberto" ? "volunteer-status-button active" : "volunteer-status-button"} onClick={() => setStatus("aberto")}>
          <Unlock size={18} /> Abrir inscrições
        </button>

        <button className={status === "fechado" ? "volunteer-status-button active" : "volunteer-status-button"} onClick={() => setStatus("fechado")}>
          <Lock size={18} /> Fechar inscrições
        </button>

        <button className={status === "agendado" ? "volunteer-status-button active" : "volunteer-status-button"} onClick={() => setStatus("agendado")}>
          <Calendar size={18} /> Agendar inscrições
        </button>
      </section>

      <section className="volunteer-layout">
        <div className="admin-panel-card">
          <div className="admin-card-title">
            <div>
              <h2>Configurações da campanha</h2>
              <p>Abra, feche ou agende as inscrições do voluntariado.</p>
            </div>

            <span className={`status-pill ${statusClass}`}>{statusLabel}</span>
          </div>

          <div className="form-grid-2">
            <label className="admin-field">
              Status das inscrições
              <select value={status} onChange={(event) => setStatus(event.target.value as VolunteerStatus)}>
                <option value="aberto">Aberto</option>
                <option value="fechado">Fechado</option>
                <option value="agendado">Agendado</option>
              </select>
            </label>

            <label className="admin-field">
              Título da campanha
              <input value={campaignTitle} onChange={(event) => setCampaignTitle(event.target.value)} />
            </label>

            <label className="admin-field">
              Data de abertura
              <input value={openingDate} onChange={(event) => setOpeningDate(event.target.value)} />
            </label>

            <label className="admin-field">
              Data de encerramento
              <input value={closingDate} onChange={(event) => setClosingDate(event.target.value)} />
            </label>
          </div>

          <div style={{ marginTop: 18 }}>
            <label className="admin-field">
              Texto principal
              <textarea value={mainText} onChange={(event) => setMainText(event.target.value)} />
            </label>
          </div>

          <div className="upload-card" style={{ marginTop: 20 }}>
            <label className="admin-page-button primary">
              <Upload size={17} />
              Inserir arte lateral
              <input type="file" accept="image/*" onChange={handleUploadArt} style={{ display: "none" }} />
            </label>

            <span>Arte lateral do formulário</span>
            <small>1200 x 1600 px ou 1080 x 1620 px</small>
          </div>
        </div>

        <div className="volunteer-preview-card">
          {sideArtImage ? (
            <img src={sideArtImage} alt="Arte lateral" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div>
              <p>EM 2026 VOCÊ</p>
              <h2>NÃO PODE FICAR DE FORA,</h2>
              <p>INSCREVA-SE</p>
              <span>{mainText}</span>
            </div>
          )}
        </div>
      </section>

      <section className="admin-panel-card">
        <div className="admin-card-title">
          <div>
            <h2>Inscrições recebidas</h2>
            <p>Lista inicial dos candidatos que preencheram o formulário.</p>
          </div>

          <button className="admin-page-button dark"><Download size={17} />Exportar lista</button>
        </div>

        <div className="applicant-list">
          <div className="applicant-row">
            <div>
              <strong>Nenhuma inscrição recebida ainda</strong>
              <span>As fichas aparecerão aqui quando o formulário estiver conectado ao Firebase.</span>
            </div>

            <span className="status-pill draft">Aguardando</span>
          </div>
        </div>
      </section>

      <section className="admin-panel-card">
        <div className="admin-card-title">
          <div>
            <h2>Fluxo de análise</h2>
            <p>Estados que cada ficha poderá receber dentro do painel.</p>
          </div>
          <UserCheck color="#ff5360" />
        </div>

        <div className="quick-grid">
          <div className="quick-card"><FileText color="#ff5360" /><h3>Nova ficha</h3><p>Inscrição recebida.</p></div>
          <div className="quick-card"><Eye color="#ff5360" /><h3>Em análise</h3><p>A equipe está avaliando.</p></div>
          <div className="quick-card"><UserCheck color="#ff5360" /><h3>Aprovada</h3><p>Candidato aprovado.</p></div>
        </div>
      </section>
    </main>
  );
}
