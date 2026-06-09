import { Eye, ImagePlus, Palette, Save, SlidersHorizontal } from "lucide-react";
import "../admin-pages.css";

export function ConfiguracoesVisuaisPage() {
  return (
    <main className="visual-admin-page">
      <div className="admin-section-header">
        <div>
          <p>CONFIGURAÇÕES VISUAIS</p>
          <h1>Identidade visual</h1>
          <span>Controle cores, fundos, logo, intensidade do preto, vermelho, bordas e estilo geral do site.</span>
        </div>

        <div className="admin-header-actions">
          <button className="admin-page-button dark"><Eye size={17} />Pré-visualizar</button>
          <button className="admin-page-button primary"><Save size={17} />Salvar visual</button>
        </div>
      </div>

      <section className="admin-panel-card">
        <div className="admin-card-title">
          <div>
            <h2>Paleta principal</h2>
            <p>Defina as cores oficiais do site institucional.</p>
          </div>
          <Palette color="#ff5360" />
        </div>

        <div className="visual-grid">
          <div className="color-card"><div className="color-preview black"></div><strong>Preto profundo</strong><span>#030303</span></div>
          <div className="color-card"><div className="color-preview offwhite"></div><strong>Off-white premium</strong><span>#f7f2ee</span></div>
          <div className="color-card"><div className="color-preview red"></div><strong>Vermelho Cia Viva</strong><span>#ff3845</span></div>
          <div className="color-card"><div className="color-preview graphite"></div><strong>Grafite teatral</strong><span>#151515</span></div>
        </div>
      </section>

      <section className="admin-panel-card">
        <div className="admin-card-title">
          <div>
            <h2>Estilo do site</h2>
            <p>Escolha a direção visual principal do site público.</p>
          </div>
          <SlidersHorizontal color="#ff5360" />
        </div>

        <div className="theme-options">
          <div className="theme-card active"><h3>Cinematográfico</h3><p>Escuro, teatral, com luz, contraste, fumaça e vermelho como destaque.</p></div>
          <div className="theme-card"><h3>Apple sofisticado</h3><p>Mais claro, mais respiro, minimalista, limpo e institucional.</p></div>
          <div className="theme-card"><h3>Editorial cultural</h3><p>Blocos fortes, papel rasgado, imagens grandes e identidade artística.</p></div>
        </div>
      </section>

      <section className="admin-panel-card">
        <div className="admin-card-title">
          <div>
            <h2>Logo e tela de carregamento</h2>
            <p>Configure a logo da bailarina e ator para aparecer ao abrir o site.</p>
          </div>
        </div>

        <div className="form-grid-2">
          <div className="upload-card">
            <div>
              <ImagePlus color="#ff5360" />
              <strong>Logo principal</strong>
              <span>PNG transparente recomendado</span>
              <small>1200 x 1200 px</small>
            </div>
          </div>

          <div className="upload-card">
            <div>
              <ImagePlus color="#ff5360" />
              <strong>Tela de abertura</strong>
              <span>Bailarina e ator animados</span>
              <small>1600 x 1200 px</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
