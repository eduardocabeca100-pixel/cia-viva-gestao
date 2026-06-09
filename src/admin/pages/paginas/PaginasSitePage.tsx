import {
  Copy,
  Eye,
  GripVertical,
  ImagePlus,
  Pencil,
  Plus,
  Save,
  Trash2,
  Upload,
} from "lucide-react";
import "./paginas.css";

const pages = [
  {
    title: "Página Inicial",
    slug: "/",
    status: "Publicado",
    tag: "Página inicial",
  },
  {
    title: "Nossa História",
    slug: "/nossa-historia",
    status: "Publicado",
    tag: "Institucional",
  },
  {
    title: "Apoie",
    slug: "/apoie",
    status: "Publicado",
    tag: "Captação",
  },
  {
    title: "Voluntariado 2026",
    slug: "/voluntariado-2026",
    status: "Publicado",
    tag: "Formulário",
  },
  {
    title: "Projetos",
    slug: "/projetos",
    status: "Publicado",
    tag: "Portfólio",
  },
  {
    title: "Contato",
    slug: "/contato",
    status: "Publicado",
    tag: "Contato",
  },
  {
    title: "Política de Privacidade",
    slug: "/politica-de-privacidade",
    status: "Rascunho",
    tag: "Legal",
  },
];

export function PaginasSitePage() {
  return (
    <main className="pages-admin">
      <div className="pages-admin-header">
        <div>
          <p>ABAS DO SITE</p>
          <h1>Páginas do site</h1>
          <span>
            Gerencie as páginas, menus, imagens e conteúdos exibidos no site público da Cia Viva.
          </span>
        </div>

        <div className="pages-admin-actions">
          <button className="admin-action dark">
            <Eye size={17} />
            Visualizar
          </button>

          <button className="admin-action dark">
            <Copy size={17} />
            Duplicar aba
          </button>

          <button className="admin-action danger">
            <Trash2 size={17} />
            Apagar aba
          </button>

          <button className="admin-action primary">
            <Plus size={17} />
            Adicionar aba
          </button>
        </div>
      </div>

      <section className="pages-admin-grid">
        <article className="pages-list-panel">
          <div className="panel-title">
            <div>
              <h2>Lista de páginas</h2>
              <p>Arraste para reorganizar o menu do site.</p>
            </div>
            <button className="icon-button">
              <Plus size={18} />
            </button>
          </div>

          <div className="pages-list">
            {pages.map((page, index) => (
              <div
                className={index === 0 ? "page-row active" : "page-row"}
                key={page.slug}
              >
                <GripVertical className="drag-icon" size={18} />

                <div className="page-info">
                  <strong>{page.title}</strong>
                  <span>{page.slug}</span>
                </div>

                <span className={page.status === "Publicado" ? "status published" : "status draft"}>
                  {page.status}
                </span>

                <span className="page-tag">{page.tag}</span>

                <div className="page-row-actions">
                  <button title="Editar">
                    <Pencil size={16} />
                  </button>
                  <button title="Visualizar">
                    <Eye size={16} />
                  </button>
                  <button title="Duplicar">
                    <Copy size={16} />
                  </button>
                  <button title="Excluir" className="trash">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="add-page-full">
            <Plus size={18} />
            Adicionar nova página
          </button>
        </article>

        <article className="page-editor-panel">
          <div className="panel-title">
            <div>
              <h2>Editar página</h2>
              <p>Personalize informações básicas da página selecionada.</p>
            </div>

            <span className="status published">Publicado</span>
          </div>

          <div className="editor-layout">
            <form className="page-form">
              <label>
                Título da página
                <input defaultValue="Página Inicial" />
              </label>

              <label>
                Descrição da página
                <textarea defaultValue="Página principal da Cia Viva com apresentação institucional, chamadas para apoio, voluntariado e projetos culturais." />
              </label>

              <label>
                Slug / URL
                <input defaultValue="/" />
                <small>A URL será exibida no formato: ciaviva.com/</small>
              </label>

              <div className="form-row">
                <label>
                  Aparece no menu?
                  <select defaultValue="sim">
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </label>

                <label>
                  Tipo de página
                  <select defaultValue="home">
                    <option value="home">Página inicial</option>
                    <option value="institucional">Institucional</option>
                    <option value="formulario">Formulário</option>
                    <option value="projetos">Projetos</option>
                    <option value="contato">Contato</option>
                  </select>
                </label>
              </div>

              <div className="editor-buttons">
                <button type="button" className="admin-action dark">
                  <Eye size={16} />
                  Pré-visualizar
                </button>

                <button type="button" className="admin-action primary">
                  <Save size={16} />
                  Salvar alterações
                </button>
              </div>
            </form>

            <div className="featured-image-box">
              <h3>Imagem de destaque</h3>

              <div className="image-preview">
                <ImagePlus size={42} />
                <p>Imagem da página inicial</p>
              </div>

              <div className="image-actions">
                <button>
                  <Upload size={16} />
                  Alterar imagem
                </button>

                <button className="remove">
                  <Trash2 size={16} />
                  Remover
                </button>
              </div>

              <div className="image-sizes">
                <strong>Tamanhos recomendados</strong>
                <p>Hero desktop: 1920 x 1080 px</p>
                <p>Banner interno: 1600 x 900 px</p>
                <p>Card: 1080 x 1350 px</p>
                <p>Formatos: PNG, JPG ou WEBP</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="footer-editor-panel">
        <div className="panel-title">
          <div>
            <h2>Editor do rodapé</h2>
            <p>Controle as informações exibidas no rodapé do site.</p>
          </div>

          <button className="admin-action primary">
            <Save size={16} />
            Salvar rodapé
          </button>
        </div>

        <div className="footer-editor-grid">
          <label>
            Texto do rodapé
            <textarea defaultValue="© 2026 Companhia de Artes Viva. Todos os direitos reservados." />
          </label>

          <div className="social-links-box">
            <h3>Links sociais</h3>

            <label>
              Instagram
              <input defaultValue="https://instagram.com/ciaviva" />
            </label>

            <label>
              YouTube
              <input defaultValue="https://youtube.com/@ciaviva" />
            </label>

            <label>
              Facebook
              <input defaultValue="https://facebook.com/ciaviva" />
            </label>
          </div>

          <div className="footer-image-upload">
            <h3>Imagem do rodapé</h3>
            <div className="dropzone">
              <Upload size={28} />
              <strong>Arraste uma imagem aqui</strong>
              <span>ou clique para selecionar</span>
              <small>PNG, JPG ou WEBP até 2MB</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
