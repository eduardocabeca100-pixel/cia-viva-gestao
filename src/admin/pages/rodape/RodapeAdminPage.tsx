import { AtSign, ImagePlus, Link as LinkIcon, Save, Upload } from "lucide-react";
import "./rodape.css";

export function RodapeAdminPage() {
  return (
    <main className="footer-admin-page">
      <div className="footer-admin-header">
        <div>
          <p>RODAPÉ</p>
          <h1>Editor do rodapé</h1>
          <span>
            Edite logo, texto, links, redes sociais, imagem e informações finais do site.
          </span>
        </div>

        <button className="footer-admin-button primary">
          <Save size={17} />
          Salvar rodapé
        </button>
      </div>

      <section className="footer-admin-layout">
        <article className="footer-admin-card">
          <div className="footer-card-title">
            <div>
              <h2>Informações do rodapé</h2>
              <p>Conteúdos institucionais exibidos no final do site.</p>
            </div>

            <LinkIcon color="#ff5360" />
          </div>

          <div className="footer-form-grid">
            <label>
              Nome exibido
              <input defaultValue="Companhia de Artes Viva" />
            </label>

            <label>
              Site
              <input defaultValue="www.ciaviva.com" />
            </label>

            <label>
              Instagram
              <input defaultValue="https://instagram.com/ciaviva" />
            </label>

            <label>
              YouTube
              <input defaultValue="https://youtube.com/@ciaviva" />
            </label>
          </div>

          <label className="footer-textarea-field">
            Texto de direitos autorais
            <textarea defaultValue="© 2026 Companhia de Artes Viva. Todos os direitos reservados." />
          </label>

          <div className="footer-upload-area">
            <div>
              <h3>Imagem do rodapé</h3>
              <p>Use uma imagem horizontal, discreta e institucional.</p>
              <strong>Tamanho recomendado:</strong>
              <span>1400 x 500 px</span>
              <small>PNG, JPG ou WEBP até 2MB.</small>
            </div>

            <label className="footer-admin-button dark">
              <Upload size={17} />
              Inserir imagem
              <input type="file" accept="image/*" />
            </label>
          </div>
        </article>

        <article className="footer-admin-card">
          <div className="footer-card-title">
            <div>
              <h2>Prévia do rodapé</h2>
              <p>Como o rodapé aparecerá no site público.</p>
            </div>

            <AtSign color="#ff5360" />
          </div>

          <div className="footer-public-preview">
            <div className="footer-logo-preview">
              <strong>CIA VIVA</strong>
              <span>COMPANHIA DE ARTES</span>
            </div>

            <p>www.ciaviva.com</p>

            <nav>
              <a>Início</a>
              <a>Nossa História</a>
              <a>Apoie</a>
              <a>Voluntariado 2026</a>
              <a>Projetos</a>
              <a>Contato</a>
            </nav>

            <div className="footer-preview-links">
              <span>Instagram</span>
              <span>YouTube</span>
              <span>Políticas de cookies</span>
              <span>Privacidade</span>
            </div>

            <p className="copyright">
              © 2026 Companhia de Artes Viva. Todos os direitos reservados.
            </p>

            <button className="footer-admin-button dark">
              <ImagePlus size={17} />
              Imagem do rodapé
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
