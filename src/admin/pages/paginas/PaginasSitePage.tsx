import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  defaultSiteContent,
  getSiteContent,
  resetSiteContent,
  saveSiteContent,
  type MediaType,
  type SiteEditableContent,
} from "../../../site/content/siteContent";
import {
  addMediaItem,
  getMediaLibrary,
  removeMediaItem,
  type VivaMediaItem,
} from "../../../site/content/mediaLibrary";
import "./paginas-site.css";

type PathPart = string | number;
type PageKey = keyof SiteEditableContent;

const pageOptions: Array<{ id: PageKey; label: string }> = [
  { id: "global", label: "Configurações gerais" },
  { id: "home", label: "Página Inicial" },
  { id: "story", label: "Nossa História" },
  { id: "support", label: "Apoie" },
  { id: "volunteer", label: "Voluntariado 2026" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

const linkOptions = [
  { label: "Página Inicial", value: "/" },
  { label: "Nossa História", value: "/nossa-historia" },
  { label: "Apoie", value: "/apoie" },
  { label: "Voluntariado 2026", value: "/voluntariado-2026" },
  { label: "Projetos", value: "/projetos" },
  { label: "Contato", value: "/contato" },
  { label: "Inscrição Voluntariado", value: "/voluntariado-2026#inscricao" },
  { label: "Formação Voluntariado", value: "/voluntariado-2026#formacao" },
  { label: "Site oficial", value: "https://www.ciaviva.com/" },
  { label: "Receita Federal", value: "https://www.gov.br/receitafederal" },
];

const iconOptions = [
  "✦", "✣", "✧", "✺", "●", "◉", "◎", "◇", "◆", "▱", "▰", "⌘", "★", "☆",
  "🎭", "🎬", "🎤", "🎧", "🎼", "🎹", "🎨", "🩰", "💃", "🕺", "📖", "📚",
  "👥", "🤝", "♥", "❤️", "🔥", "✨", "🌟", "💡", "🏛️", "🎟️", "📍", "📩",
  "01", "02", "03", "04", "05"
];

const fontOptions = [
  "Montserrat",
  "Poppins",
  "Inter",
  "Bebas Neue",
  "Oswald",
  "Anton",
  "Archivo Black",
  "Raleway",
  "Cinzel",
  "Playfair Display",
  "Cormorant Garamond"
];

const mediaPositionOptions = [
  { label: "Imagem à direita", value: "right" },
  { label: "Imagem à esquerda", value: "left" },
  { label: "Imagem em cima", value: "top" },
  { label: "Imagem no fundo", value: "background" },
];

const animationOptions = [
  { label: "Sem animação", value: "none" },
  { label: "Subir suave", value: "fade-up" },
  { label: "Zoom elegante", value: "zoom-in" },
  { label: "Entrar pela esquerda", value: "slide-left" },
  { label: "Letras animadas", value: "letters" },
];

const textAlignOptions = [
  { label: "Alinhado à esquerda", value: "left" },
  { label: "Centralizado", value: "center" },
];

const fieldLabels: Record<string, string> = {
  global: "Configurações gerais",
  home: "Página Inicial",
  story: "Nossa História",
  support: "Apoie",
  volunteer: "Voluntariado 2026",
  projects: "Projetos",
  contact: "Contato",

  hero: "Banner principal",
  pillars: "Pilares",
  cards: "Cards",
  cta: "Chamada final",
  founder: "Fundador",
  mission: "Missão",
  valuesIntro: "Introdução dos valores",
  values: "Valores",
  origin: "Origem / mapa",
  project: "Projeto em destaque",
  steps: "Passo a passo",
  donation: "Doação",
  formFields: "Campos do formulário",
  intro: "Introdução",
  team: "Equipe",
  learning: "Formação",
  register: "Inscrição",
  items: "Lista de projetos",
  info: "Informações",
  menuItems: "Menu do site",

  logoTitle: "Logo - título",
  logoSubtitle: "Logo - subtítulo",
  logoMedia: "Imagem da logo",
  favicon: "Favicon",
  headingFont: "Fonte dos títulos",
  bodyFont: "Fonte dos textos",
  fontScale: "Tamanho geral das fontes",
  ctaLabel: "Botão principal do menu",
  ctaHref: "Link do botão principal",
  footerDescription: "Descrição do rodapé",
  email: "E-mail",
  phone: "Telefone",
  location: "Localização",
  instagram: "Instagram",

  eyebrow: "Texto pequeno",
  title: "Título",
  accent: "Destaque em vermelho",
  description: "Descrição",
  text: "Texto",
  textOne: "Texto 1",
  textTwo: "Texto 2",
  deadline: "Prazo / chamada",
  primaryButton: "Botão principal",
  secondaryButton: "Botão secundário",
  button: "Botão",
  label: "Texto",
  href: "Link",
  visible: "Mostrar no menu",
  media: "Imagem / GIF / Vídeo",
  src: "Arquivo ou URL",
  alt: "Descrição da mídia",
  type: "Tipo",
  icon: "Ícone",
  name: "Nome",
  role: "Função",
  initials: "Iniciais",
  photo: "Foto",
  placeholder: "Texto de exemplo",
  mediaPosition: "Posição da imagem",
  animation: "Animação",
  textAlign: "Alinhamento",
};

function labelFor(key: string) {
  return fieldLabels[key] ?? key;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function getAtPath(source: unknown, path: PathPart[]): unknown {
  return path.reduce<unknown>((current, key) => {
    if (current == null) return undefined;
    return (current as Record<string, unknown>)[String(key)];
  }, source);
}

function setAtPath<T>(source: T, path: PathPart[], value: unknown): T {
  const clone = JSON.parse(JSON.stringify(source));
  let target: Record<string, unknown> = clone;

  for (let index = 0; index < path.length - 1; index += 1) {
    target = target[String(path[index])] as Record<string, unknown>;
  }

  target[String(path[path.length - 1])] = value;

  return clone;
}

function cloneValue(value: unknown) {
  return JSON.parse(JSON.stringify(value));
}

function looksLikeMedia(value: unknown) {
  return isRecord(value) && "src" in value && "type" in value && "alt" in value;
}

export function PaginasSitePage() {
  const [content, setContent] = useState<SiteEditableContent>(() => getSiteContent());
  const [mediaItems, setMediaItems] = useState<VivaMediaItem[]>(() => getMediaLibrary());
  const [activePage, setActivePage] = useState<PageKey>("home");
  const [activeSection, setActiveSection] = useState("");
  const [message, setMessage] = useState("");
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [mediaPickerPath, setMediaPickerPath] = useState<PathPart[] | null>(null);

  const pageValue = content[activePage];

  const sectionKeys = useMemo(() => {
    if (!isRecord(pageValue)) return [];
    return Object.keys(pageValue);
  }, [pageValue]);

  useEffect(() => {
    if (sectionKeys.length === 0) {
      setActiveSection("");
      return;
    }

    if (!sectionKeys.includes(activeSection)) {
      setActiveSection(sectionKeys[0]);
    }
  }, [activePage, activeSection, sectionKeys]);

  const selectedPath: PathPart[] = activeSection ? [activePage, activeSection] : [activePage];
  const selectedValue = getAtPath(content, selectedPath);

  function updateValue(path: PathPart[], value: unknown) {
    setContent((current) => setAtPath(current, path, value));
  }

  async function handleUpload(files: FileList | null) {
    if (!files || files.length === 0) return;

    for (const file of Array.from(files)) {
      await addMediaItem(file);
    }

    setMediaItems(getMediaLibrary());
    setMessage("Arquivo enviado para a biblioteca.");
  }

  function handleSave() {
    saveSiteContent(content);
    setMessage("Alterações salvas. Abra o site público para visualizar.");
  }

  function handleReset() {
    resetSiteContent();
    setContent(defaultSiteContent);
    setMessage("Conteúdo restaurado para o padrão.");
  }

  function handleRemoveMedia(id: string) {
    removeMediaItem(id);
    setMediaItems(getMediaLibrary());
    setMessage("Arquivo removido da biblioteca.");
  }

  function addItem(path: PathPart[]) {
    const current = getAtPath(content, path);

    if (!Array.isArray(current)) return;

    const newItem = current.length > 0 ? cloneValue(current[current.length - 1]) : {};
    updateValue(path, [...current, newItem]);
  }

  function duplicateItem(path: PathPart[], index: number) {
    const current = getAtPath(content, path);

    if (!Array.isArray(current)) return;

    const next = [...current];
    next.splice(index + 1, 0, cloneValue(current[index]));
    updateValue(path, next);
  }

  function removeItem(path: PathPart[], index: number) {
    const current = getAtPath(content, path);

    if (!Array.isArray(current)) return;

    updateValue(path, current.filter((_, itemIndex) => itemIndex !== index));
  }

  function moveItem(path: PathPart[], index: number, direction: -1 | 1) {
    const current = getAtPath(content, path);

    if (!Array.isArray(current)) return;

    const target = index + direction;
    if (target < 0 || target >= current.length) return;

    const next = [...current];
    const [item] = next.splice(index, 1);
    next.splice(target, 0, item);
    updateValue(path, next);
  }

  function selectMediaForPath(item: VivaMediaItem) {
    if (!mediaPickerPath) return;

    updateValue(mediaPickerPath, {
      src: item.src,
      type: item.type,
      alt: item.name,
    });

    setMediaPickerPath(null);
    setMediaModalOpen(false);
    setMessage("Mídia aplicada no campo selecionado.");
  }

  function renderMediaEditor(value: Record<string, unknown>, path: PathPart[]) {
    const mediaType = String(value.type ?? "image") as MediaType;
    const src = String(value.src ?? "");
    const alt = String(value.alt ?? "");

    return (
      <div className="site-editor-media-field">
        <div className="site-editor-media-preview">
          {src ? (
            mediaType === "video" ? (
              <video src={src} controls />
            ) : (
              <img src={src} alt={alt} />
            )
          ) : (
            <span>Nenhuma mídia selecionada</span>
          )}
        </div>

        <div className="site-editor-media-actions">
          <button
            type="button"
            onClick={() => {
              setMediaPickerPath(path);
              setMediaModalOpen(true);
            }}
          >
            Escolher da biblioteca
          </button>

          <label>
            Subir arquivo
            <input
              type="file"
              accept="image/*,video/*"
              onChange={async (event) => {
                const file = event.target.files?.[0];
                if (!file) return;
                const item = await addMediaItem(file);
                setMediaItems(getMediaLibrary());
                updateValue(path, { src: item.src, type: item.type, alt: item.name });
              }}
            />
          </label>
        </div>

        <div className="site-editor-two-columns">
          <label>
            Tipo
            <select
              value={mediaType}
              onChange={(event) => updateValue([...path, "type"], event.target.value)}
            >
              <option value="image">Imagem</option>
              <option value="gif">GIF</option>
              <option value="video">Vídeo</option>
            </select>
          </label>

          <label>
            Descrição
            <input
              value={alt}
              onChange={(event) => updateValue([...path, "alt"], event.target.value)}
              placeholder="Descrição da imagem/vídeo"
            />
          </label>
        </div>

        <details className="site-editor-details">
          <summary>Editar URL manualmente</summary>
          <label>
            URL ou base64
            <input
              value={src}
              onChange={(event) => updateValue([...path, "src"], event.target.value)}
              placeholder="Cole a URL da mídia"
            />
          </label>
        </details>
      </div>
    );
  }

  function renderPrimitive(value: unknown, path: PathPart[], keyName: string) {
    const stringValue = String(value ?? "");

    if (keyName === "icon") {
      return (
        <div className="site-editor-field-card">
          <label>
            {labelFor(keyName)}
            <input
              value={stringValue}
              onChange={(event) => updateValue(path, event.target.value)}
              placeholder="Escolha ou digite um ícone"
            />
          </label>

          <details className="site-editor-details">
            <summary>Escolher ícone</summary>
            <div className="site-editor-icon-palette">
              {iconOptions.map((icon) => (
                <button type="button" key={icon} onClick={() => updateValue(path, icon)}>
                  {icon}
                </button>
              ))}
            </div>
          </details>
        </div>
      );
    }

    if (keyName === "href" || keyName.toLowerCase().includes("link") || keyName === "ctaHref") {
      return (
        <div className="site-editor-field-card">
          <label>
            {labelFor(keyName)}
            <input
              value={stringValue}
              onChange={(event) => updateValue(path, event.target.value)}
              placeholder="Escolha um link pronto ou digite outro"
            />
          </label>

          <details className="site-editor-details">
            <summary>Escolher link pronto</summary>
            <div className="site-editor-link-list">
              {linkOptions.map((link) => (
                <button type="button" key={link.value} onClick={() => updateValue(path, link.value)}>
                  {link.label}
                  <span>{link.value}</span>
                </button>
              ))}
            </div>
          </details>
        </div>
      );
    }

    if (keyName === "headingFont" || keyName === "bodyFont") {
      return (
        <div className="site-editor-field-card">
          <label>
            {labelFor(keyName)}
            <select value={stringValue} onChange={(event) => updateValue(path, event.target.value)}>
              {fontOptions.map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </label>

          <div className="site-editor-font-preview" style={{ fontFamily: `"${stringValue}", system-ui, sans-serif` }}>
            Arte que inspira forma e transforma
          </div>
        </div>
      );
    }

    if (keyName === "fontScale") {
      return (
        <div className="site-editor-field-card">
          <label>
            Tamanho geral das fontes
            <input
              type="range"
              min="0.66"
              max="1"
              step="0.02"
              value={stringValue || "0.78"}
              onChange={(event) => updateValue(path, event.target.value)}
            />
          </label>
          <span className="site-editor-range-value">{stringValue || "0.78"}</span>
        </div>
      );
    }

    if (keyName === "mediaPosition") {
      return (
        <div className="site-editor-field-card">
          <label>
            Posição da imagem / vídeo
            <select value={stringValue || "right"} onChange={(event) => updateValue(path, event.target.value)}>
              {mediaPositionOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        </div>
      );
    }

    if (keyName === "animation") {
      return (
        <div className="site-editor-field-card">
          <label>
            Animação
            <select value={stringValue || "fade-up"} onChange={(event) => updateValue(path, event.target.value)}>
              {animationOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        </div>
      );
    }

    if (keyName === "textAlign") {
      return (
        <div className="site-editor-field-card">
          <label>
            Alinhamento do texto
            <select value={stringValue || "left"} onChange={(event) => updateValue(path, event.target.value)}>
              {textAlignOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        </div>
      );
    }

    if (typeof value === "boolean") {
      return (
        <label className="site-editor-checkbox site-editor-field-card">
          <input
            type="checkbox"
            checked={value}
            onChange={(event) => updateValue(path, event.target.checked)}
          />
          {labelFor(keyName)}
        </label>
      );
    }

    if (typeof value === "number") {
      return (
        <div className="site-editor-field-card">
          <label>
            {labelFor(keyName)}
            <input
              type="number"
              value={value}
              onChange={(event) => updateValue(path, Number(event.target.value))}
            />
          </label>
        </div>
      );
    }

    const lowerKey = keyName.toLowerCase();
    const useTextarea =
      stringValue.length > 80 ||
      lowerKey.includes("description") ||
      lowerKey.includes("text") ||
      lowerKey.includes("footer");

    return (
      <div className="site-editor-field-card">
        <label>
          {labelFor(keyName)}
          {useTextarea ? (
            <textarea
              rows={5}
              value={stringValue}
              onChange={(event) => updateValue(path, event.target.value)}
            />
          ) : (
            <input
              value={stringValue}
              onChange={(event) => updateValue(path, event.target.value)}
            />
          )}
        </label>
      </div>
    );
  }

  function renderEditor(value: unknown, path: PathPart[], keyName = ""): ReactNode {
    if (looksLikeMedia(value)) {
      return renderMediaEditor(value, path);
    }

    if (Array.isArray(value)) {
      return (
        <div className="site-editor-array">
          <div className="site-editor-array-header">
            <h3>{labelFor(keyName)}</h3>
            <button type="button" onClick={() => addItem(path)}>Adicionar item</button>
          </div>

          {value.map((item, index) => (
            <article className="site-editor-array-item" key={index}>
              <div className="site-editor-array-item-header">
                <strong>{labelFor(keyName)} {index + 1}</strong>
                <div>
                  <button type="button" onClick={() => moveItem(path, index, -1)}>Subir</button>
                  <button type="button" onClick={() => moveItem(path, index, 1)}>Descer</button>
                  <button type="button" onClick={() => duplicateItem(path, index)}>Duplicar</button>
                  <button type="button" className="danger" onClick={() => removeItem(path, index)}>Remover</button>
                </div>
              </div>

              {renderEditor(item, [...path, index], String(index))}
            </article>
          ))}
        </div>
      );
    }

    if (isRecord(value)) {
      return (
        <div className="site-editor-object">
          {Object.entries(value).map(([key, nestedValue]) => (
            <div className="site-editor-field-group" key={key}>
              {isRecord(nestedValue) || Array.isArray(nestedValue) ? (
                <>
                  <h3>{labelFor(key)}</h3>
                  {renderEditor(nestedValue, [...path, key], key)}
                </>
              ) : (
                renderPrimitive(nestedValue, [...path, key], key)
              )}
            </div>
          ))}
        </div>
      );
    }

    return renderPrimitive(value, path, keyName);
  }

  return (
    <main className="site-editor-page">
      <header className="site-editor-header">
        <div>
          <span>Viva Gestão</span>
          <h1>Editor do site</h1>
          <p>Escolha uma página, selecione uma seção e edite os blocos com calma.</p>
        </div>

        <div className="site-editor-actions">
          <button type="button" onClick={() => setMediaModalOpen(true)}>Biblioteca</button>
          <a href="/" target="_blank" rel="noreferrer">Visualizar site</a>
          <button type="button" onClick={handleSave}>Salvar</button>
        </div>
      </header>

      {message && <div className="site-editor-message">{message}</div>}

      <section className="site-editor-layout">
        <aside className="site-editor-sidebar">
          <h2>Páginas</h2>

          {pageOptions.map((page) => (
            <button
              key={page.id}
              type="button"
              className={activePage === page.id ? "active" : ""}
              onClick={() => setActivePage(page.id)}
            >
              {page.label}
            </button>
          ))}

          <div className="site-editor-pages-box">
            <h3>Páginas novas</h3>
            <p>
              O menu já pode ser editado em Configurações gerais. No próximo passo
              conectamos criação de página com URL própria.
            </p>
            <button type="button" disabled>Adicionar página</button>
          </div>
        </aside>

        <section className="site-editor-panel">
          <div className="site-editor-panel-top">
            <div>
              <span>{pageOptions.find((page) => page.id === activePage)?.label}</span>
              <h2>{labelFor(activeSection || String(activePage))}</h2>
            </div>

            <label className="site-editor-section-select">
              Seção
              <select value={activeSection} onChange={(event) => setActiveSection(event.target.value)}>
                {sectionKeys.map((section) => (
                  <option key={section} value={section}>{labelFor(section)}</option>
                ))}
              </select>
            </label>

            <button type="button" className="site-editor-reset" onClick={handleReset}>
              Restaurar tudo
            </button>
          </div>

          <div className="site-editor-clean-panel">
            {renderEditor(selectedValue, selectedPath, activeSection)}
          </div>
        </section>
      </section>

      {mediaModalOpen && (
        <div className="site-editor-modal-backdrop" onClick={() => setMediaModalOpen(false)}>
          <section className="site-editor-media-modal" onClick={(event) => event.stopPropagation()}>
            <header>
              <div>
                <span>Biblioteca de mídia</span>
                <h2>Escolha arquivos de mídia</h2>
              </div>
              <button type="button" onClick={() => setMediaModalOpen(false)}>Fechar</button>
            </header>

            <div className="site-editor-upload-area">
              <label>
                Arraste ou envie fotos, GIFs e vídeos
                <input
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  onChange={(event) => handleUpload(event.target.files)}
                />
              </label>
            </div>

            <div className="site-editor-modal-grid">
              {mediaItems.length === 0 && (
                <div className="site-editor-empty-media">
                  Nenhum arquivo enviado ainda.
                </div>
              )}

              {mediaItems.map((item) => (
                <article key={item.id}>
                  {item.type === "video" ? <video src={item.src} /> : <img src={item.src} alt={item.name} />}
                  <strong>{item.name}</strong>
                  <div>
                    {mediaPickerPath && (
                      <button type="button" onClick={() => selectMediaForPath(item)}>Usar</button>
                    )}
                    <button type="button" className="danger" onClick={() => handleRemoveMedia(item.id)}>Remover</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
