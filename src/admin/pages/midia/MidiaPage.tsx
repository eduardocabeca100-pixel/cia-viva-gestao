import {
  Download,
  Eye,
  FileImage,
  Filter,
  ImagePlus,
  MoreVertical,
  Search,
  Trash2,
  Upload,
} from "lucide-react";
import "./midia.css";

const mediaItems = [
  { title: "Hero Página Inicial", type: "Banner", size: "1920 x 1080 px" },
  { title: "Bailarina e Ator", type: "Logo / Abertura", size: "1600 x 1200 px" },
  { title: "Voluntariado 2026", type: "Arte lateral", size: "1200 x 1600 px" },
  { title: "Projetos Culturais", type: "Card", size: "1080 x 1350 px" },
  { title: "Apoie via incentivo", type: "Banner", size: "1600 x 900 px" },
  { title: "Rodapé Cia Viva", type: "Rodapé", size: "1400 x 500 px" },
];

export function MidiaPage() {
  return (
    <main className="media-admin">
      <div className="media-header">
        <div>
          <p>MÍDIA / IMAGENS</p>
          <h1>Biblioteca de mídia</h1>
          <span>
            Envie, organize e reutilize imagens do site institucional da Cia Viva.
          </span>
        </div>

        <button className="media-primary-button">
          <Upload size={18} />
          Enviar nova imagem
        </button>
      </div>

      <section className="media-upload-panel">
        <div className="upload-dropzone-large">
          <div className="upload-icon">
            <ImagePlus size={34} />
          </div>

          <h2>Arraste suas imagens aqui</h2>
          <p>ou clique para selecionar arquivos do computador</p>

          <small>Formatos aceitos: PNG, JPG, JPEG ou WEBP até 5MB</small>
        </div>

        <div className="media-size-guide">
          <h2>Tamanhos recomendados</h2>

          <div className="size-item">
            <strong>Hero / Página Inicial</strong>
            <span>1920 x 1080 px</span>
          </div>

          <div className="size-item">
            <strong>Banner interno</strong>
            <span>1600 x 900 px</span>
          </div>

          <div className="size-item">
            <strong>Arte lateral de formulário</strong>
            <span>1200 x 1600 px</span>
          </div>

          <div className="size-item">
            <strong>Cards de projetos</strong>
            <span>1080 x 1350 px</span>
          </div>

          <div className="size-item">
            <strong>Imagem de rodapé</strong>
            <span>1400 x 500 px</span>
          </div>

          <div className="size-item">
            <strong>Logo / tela de carregamento</strong>
            <span>1600 x 1200 px</span>
          </div>
        </div>
      </section>

      <section className="media-library-panel">
        <div className="media-toolbar">
          <div>
            <h2>Imagens cadastradas</h2>
            <p>Use as imagens nas páginas, formulários, banners e rodapé.</p>
          </div>

          <div className="media-tools">
            <div className="media-search">
              <Search size={17} />
              <span>Buscar imagem...</span>
            </div>

            <button>
              <Filter size={17} />
              Filtrar
            </button>
          </div>
        </div>

        <div className="media-tabs">
          <button className="active">Todas</button>
          <button>Banners</button>
          <button>Ícones</button>
          <button>Galeria</button>
          <button>Rodapé</button>
        </div>

        <div className="media-grid">
          {mediaItems.map((item, index) => (
            <article className="media-card" key={item.title}>
              <div className={`media-thumb thumb-${index + 1}`}>
                <FileImage size={34} />
              </div>

              <div className="media-card-content">
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.type}</span>
                  <small>{item.size}</small>
                </div>

                <button className="media-more">
                  <MoreVertical size={17} />
                </button>
              </div>

              <div className="media-card-actions">
                <button>
                  <Eye size={15} />
                  Ver
                </button>

                <button>
                  <Download size={15} />
                  Usar
                </button>

                <button className="danger">
                  <Trash2 size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
