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

const pageOptions: Array<{ id: PageKey; label: string; path: string }> = [
  { id: "global", label: "Configurações gerais", path: "/" },
  { id: "home", label: "Página Inicial", path: "/" },
  { id: "story", label: "Nossa História", path: "/nossa-historia" },
  { id: "support", label: "Apoie", path: "/apoie" },
  { id: "volunteer", label: "Voluntariado 2026", path: "/voluntariado-2026" },
  { id: "projects", label: "Projetos", path: "/projetos" },
  { id: "contact", label: "Contato", path: "/contato" },
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
  ctaLabel: "Botão principal",
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
  visible: "Mostrar",
  media: "Imagem / GIF / Vídeo",
  mediaLeft: "Imagem lateral esquerda",
  mediaRight: "Imagem lateral direita",
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

function getSectionKeys(pageValue: unknown) {
  if (!isRecord(pageValue)) return [];
  return Object.keys(pageValue);
}

export function PaginasSitePage() {
  const [content, setContent] = useState<SiteEditableContent>(() => getSiteContent());
  const [mediaItems, setMediaItems] = useState<VivaMediaItem[]>(() => getMediaLibrary());
  const [activePage, setActivePage] = useState<PageKey>("home");
  const [activeSection, setActiveSection] = useState("");
  const [activeTool, setActiveTool] = useState<"pages" | "add" | "media" | "theme" | "links">("pages");
  const [message, setMessage] = useState("");
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [mediaPickerPath, setMediaPickerPath] = useState<PathPart[] | null>(null);
  const [previewVersion, setPreviewVersion] = useState(0);

  const pageValue = content[activePage];
  const sectionKeys = useMemo(() => getSectionKeys(pageValue), [pageValue]);
  const pageInfo = pageOptions.find((page) => page.id === activePage) ?? pageOptions[1];
  const selectedPath: PathPart[] = activeSection ? [activePage, activeSection] : [activePage];
  const selectedValue = getAtPath(content, selectedPath);

  useEffect(() => {
    if (sectionKeys.length === 0) {
      setActiveSection("");
      return;
    }

    if (!sectionKeys.includes(activeSection)) {
      setActiveSection(sectionKeys[0]);
    }
  }, [activePage, activeSection, sectionKeys]);

  useEffect(() => {
    saveSiteContent(content);

    const timer = window.setTimeout(() => {
      setPreviewVersion((current) => current + 1);
    }, 420);

    return () => window.clearTimeout(timer);
  }, [content]);

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
    setPreviewVersion((current) => current + 1);
    setMessage("Alterações salvas.");
  }

  function handleReset() {
    resetSiteContent();
    setContent(defaultSiteContent);
    setMessage("Conteúdo restaurado para o padrão.");
  }

  function handleRemoveMedia(id: string) {
    removeMediaItem(id);
    setMediaItems(getMediaLibrary());
    setMessage("Arquivo removido.");
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
    setMessage("Mídia aplicada.");
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

  function handleAddMenuPage() {
    const label = window.prompt("Nome da nova página no menu:");
    if (!label) return;

    const slug = window.prompt("URL da página. Exemplo: /minha-pagina", `/${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`);
    if (!slug) return;

    const current = Array.isArray(content.global.menuItems) ? content.global.menuItems : [];
    updateValue(["global", "menuItems"], [
      ...current,
      { label, href: slug.startsWith("/") ? slug : `/${slug}`, visible: true },
    ]);

    setActivePage("global");
    setActiveSection("menuItems");
    setMessage("Página adicionada ao menu. A criação da rota real entra na próxima etapa.");
  }

  function renderMediaEditor(value: Record<string, unknown>, path: PathPart[]) {
    const mediaType = String(value.type ?? "image") as MediaType;
    const src = String(value.src ?? "");
    const alt = String(value.alt ?? "");

    return (
      <div className="vix-media-control">
        <div className="vix-media-preview">
          {src ? (
            mediaType === "video" ? <video src={src} controls /> : <img src={src} alt={alt} />
          ) : (
            <span>Nenhuma mídia selecionada</span>
          )}
        </div>

        <div className="vix-action-row">
          <button
            type="button"
            onClick={() => {
              setMediaPickerPath(path);
              setMediaModalOpen(true);
            }}
          >
            Escolher mídia
          </button>

          <label>
            Upload rápido
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

        <div className="vix-two">
          <label>
            Tipo
            <select value={mediaType} onChange={(event) => updateValue([...path, "type"], event.target.value)}>
              <option value="image">Imagem</option>
              <option value="gif">GIF</option>
              <option value="video">Vídeo</option>
            </select>
          </label>

          <label>
            Descrição
            <input value={alt} onChange={(event) => updateValue([...path, "alt"], event.target.value)} />
          </label>
        </div>

        <details className="vix-details">
          <summary>Editar URL manual</summary>
          <input value={src} onChange={(event) => updateValue([...path, "src"], event.target.value)} />
        </details>
      </div>
    );
  }

  function renderPrimitive(value: unknown, path: PathPart[], keyName: string) {
    const stringValue = String(value ?? "");

    if (keyName === "icon") {
      return (
        <div className="vix-field">
          <label>
            <span>{labelFor(keyName)}</span>
            <input value={stringValue} onChange={(event) => updateValue(path, event.target.value)} />
          </label>

          <details className="vix-details">
            <summary>Escolher ícone</summary>
            <div className="vix-icon-grid">
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

    if (keyName === "href" || keyName === "ctaHref" || keyName.toLowerCase().includes("link")) {
      return (
        <div className="vix-field">
          <label>
            <span>{labelFor(keyName)}</span>
            <input value={stringValue} onChange={(event) => updateValue(path, event.target.value)} />
          </label>

          <details className="vix-details">
            <summary>Escolher link pronto</summary>
            <div className="vix-link-grid">
              {linkOptions.map((link) => (
                <button type="button" key={link.value} onClick={() => updateValue(path, link.value)}>
                  {link.label}
                  <small>{link.value}</small>
                </button>
              ))}
            </div>
          </details>
        </div>
      );
    }

    if (keyName === "headingFont" || keyName === "bodyFont") {
      return (
        <div className="vix-field">
          <label>
            <span>{labelFor(keyName)}</span>
            <select value={stringValue} onChange={(event) => updateValue(path, event.target.value)}>
              {fontOptions.map((font) => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </label>

          <div className="vix-font-preview" style={{ fontFamily: `"${stringValue}", system-ui, sans-serif` }}>
            Arte que inspira
          </div>
        </div>
      );
    }

    if (keyName === "fontScale") {
      return (
        <div className="vix-field">
          <label>
            <span>Tamanho geral das fontes</span>
            <input
              type="range"
              min="0.62"
              max="1"
              step="0.02"
              value={stringValue || "0.76"}
              onChange={(event) => updateValue(path, event.target.value)}
            />
          </label>
          <em>{stringValue || "0.76"}</em>
        </div>
      );
    }

    if (keyName === "mediaPosition") {
      return (
        <div className="vix-field">
          <label>
            <span>Posição da imagem</span>
            <select value={stringValue || "right"} onChange={(event) => updateValue(path, event.target.value)}>
              <option value="right">Direita</option>
              <option value="left">Esquerda</option>
              <option value="top">Topo</option>
              <option value="background">Fundo</option>
            </select>
          </label>
        </div>
      );
    }

    if (keyName === "animation") {
      return (
        <div className="vix-field">
          <label>
            <span>Animação</span>
            <select value={stringValue || "fade-up"} onChange={(event) => updateValue(path, event.target.value)}>
              <option value="none">Sem animação</option>
              <option value="fade-up">Subir suave</option>
              <option value="zoom-in">Zoom elegante</option>
              <option value="slide-left">Entrar pela esquerda</option>
              <option value="letters">Letras animadas</option>
            </select>
          </label>
        </div>
      );
    }

    if (keyName === "textAlign") {
      return (
        <div className="vix-field">
          <label>
            <span>Alinhamento</span>
            <select value={stringValue || "left"} onChange={(event) => updateValue(path, event.target.value)}>
              <option value="left">Esquerda</option>
              <option value="center">Centro</option>
            </select>
          </label>
        </div>
      );
    }

    if (typeof value === "boolean") {
      return (
        <label className="vix-check">
          <input checked={value} type="checkbox" onChange={(event) => updateValue(path, event.target.checked)} />
          {labelFor(keyName)}
        </label>
      );
    }

    if (typeof value === "number") {
      return (
        <div className="vix-field">
          <label>
            <span>{labelFor(keyName)}</span>
            <input type="number" value={value} onChange={(event) => updateValue(path, Number(event.target.value))} />
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
      <div className="vix-field">
        <label>
          <span>{labelFor(keyName)}</span>
          {useTextarea ? (
            <textarea rows={5} value={stringValue} onChange={(event) => updateValue(path, event.target.value)} />
          ) : (
            <input value={stringValue} onChange={(event) => updateValue(path, event.target.value)} />
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
        <div className="vix-array">
          <div className="vix-array__header">
            <strong>{labelFor(keyName)}</strong>
            <button type="button" onClick={() => addItem(path)}>Adicionar</button>
          </div>

          {value.map((item, index) => (
            <article className="vix-array-item" key={index}>
              <div className="vix-array-item__top">
                <strong>{labelFor(keyName)} {index + 1}</strong>
                <div>
                  <button type="button" onClick={() => moveItem(path, index, -1)}>↑</button>
                  <button type="button" onClick={() => moveItem(path, index, 1)}>↓</button>
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
        <div className="vix-object">
          {Object.entries(value).map(([key, nestedValue]) => (
            <section className="vix-group" key={key}>
              {isRecord(nestedValue) || Array.isArray(nestedValue) ? (
                <>
                  <h3>{labelFor(key)}</h3>
                  {renderEditor(nestedValue, [...path, key], key)}
                </>
              ) : (
                renderPrimitive(nestedValue, [...path, key], key)
              )}
            </section>
          ))}
        </div>
      );
    }

    return renderPrimitive(value, path, keyName);
  }

  return (
    <main className="vix-editor">
      <header className="vix-topbar">
        <div className="vix-brand">
          <strong>VIVA</strong>
          <span>GESTÃO</span>
        </div>

        <div className="vix-topbar__center">
          <span>Editor visual</span>
          <strong>{pageInfo.label}</strong>
        </div>

        <div className="vix-topbar__actions">
          <button type="button" onClick={() => setMediaModalOpen(true)}>Mídia</button>
          <button type="button" onClick={() => setPreviewVersion((current) => current + 1)}>Atualizar</button>
          <a href={pageInfo.path} target="_blank" rel="noreferrer">Visualizar</a>
          <button type="button" className="publish" onClick={handleSave}>Salvar</button>
        </div>
      </header>

      <section className="vix-workspace">
        <aside className="vix-rail">
          <button className={activeTool === "pages" ? "active" : ""} onClick={() => setActiveTool("pages")} title="Páginas">▤</button>
          <button className={activeTool === "add" ? "active" : ""} onClick={() => setActiveTool("add")} title="Adicionar">＋</button>
          <button className={activeTool === "media" ? "active" : ""} onClick={() => { setActiveTool("media"); setMediaModalOpen(true); }} title="Mídia">▧</button>
          <button className={activeTool === "theme" ? "active" : ""} onClick={() => { setActiveTool("theme"); setActivePage("global"); setActiveSection("headingFont"); }} title="Tema">◌</button>
          <button className={activeTool === "links" ? "active" : ""} onClick={() => setActiveTool("links")} title="Links">↗</button>
        </aside>

        <aside className="vix-pages-panel">
          <div className="vix-panel-head">
            <span>Páginas</span>
            <button type="button" onClick={handleAddMenuPage}>＋</button>
          </div>

          <div className="vix-page-list">
            {pageOptions.map((page) => (
              <button
                key={page.id}
                type="button"
                className={activePage === page.id ? "active" : ""}
                onClick={() => {
                  setActivePage(page.id);
                  setActiveTool("pages");
                }}
              >
                <span>{page.label}</span>
                <small>{page.path}</small>
              </button>
            ))}
          </div>

          {activeTool === "links" && (
            <div className="vix-mini-box">
              <strong>Links rápidos</strong>
              {linkOptions.map((link) => (
                <button type="button" key={link.value} onClick={() => navigator.clipboard?.writeText(link.value)}>
                  {link.label}
                  <small>{link.value}</small>
                </button>
              ))}
            </div>
          )}

          {activeTool === "add" && (
            <div className="vix-mini-box">
              <strong>Adicionar</strong>
              <button type="button" onClick={handleAddMenuPage}>Adicionar página ao menu</button>
              <button type="button" onClick={() => setMediaModalOpen(true)}>Adicionar imagem/vídeo</button>
              <small>A rota dinâmica real entra na próxima etapa.</small>
            </div>
          )}
        </aside>

        <section className="vix-canvas-area">
          <div className="vix-canvas-toolbar">
            <div>
              <span>Página</span>
              <strong>{pageInfo.label}</strong>
            </div>

            <select value={activePage} onChange={(event) => setActivePage(event.target.value as PageKey)}>
              {pageOptions.map((page) => (
                <option key={page.id} value={page.id}>{page.label}</option>
              ))}
            </select>
          </div>

          <div className="vix-canvas">
            <iframe
              key={`${pageInfo.path}-${previewVersion}`}
              src={pageInfo.path}
              title="Pré-visualização do site"
            />
          </div>
        </section>

        <aside className="vix-inspector">
          <div className="vix-inspector__head">
            <span>Editar</span>
            <strong>{labelFor(activeSection || String(activePage))}</strong>
          </div>

          <label className="vix-section-select">
            Seção
            <select value={activeSection} onChange={(event) => setActiveSection(event.target.value)}>
              {sectionKeys.map((section) => (
                <option key={section} value={section}>{labelFor(section)}</option>
              ))}
            </select>
          </label>

          {message && <div className="vix-message">{message}</div>}

          <div className="vix-inspector__scroll">
            {renderEditor(selectedValue, selectedPath, activeSection)}
          </div>

          <div className="vix-inspector__bottom">
            <button type="button" onClick={handleReset}>Restaurar</button>
            <button type="button" className="publish" onClick={handleSave}>Salvar</button>
          </div>
        </aside>
      </section>

      {mediaModalOpen && (
        <div className="vix-modal-backdrop" onClick={() => setMediaModalOpen(false)}>
          <section className="vix-media-modal" onClick={(event) => event.stopPropagation()}>
            <header>
              <div>
                <span>Arquivos do site</span>
                <h2>Escolha arquivos de mídia</h2>
              </div>
              <button type="button" onClick={() => setMediaModalOpen(false)}>×</button>
            </header>

            <div className="vix-upload-area">
              <label>
                <strong>Arraste ou envie imagens, GIFs e vídeos</strong>
                <span>Use arquivos da Cia Viva em qualquer página do site.</span>
                <input type="file" accept="image/*,video/*" multiple onChange={(event) => handleUpload(event.target.files)} />
              </label>
            </div>

            <div className="vix-media-grid">
              {mediaItems.length === 0 && (
                <div className="vix-empty-media">
                  Nenhum arquivo enviado ainda.
                </div>
              )}

              {mediaItems.map((item) => (
                <article key={item.id}>
                  {item.type === "video" ? <video src={item.src} /> : <img src={item.src} alt={item.name} />}
                  <strong>{item.name}</strong>
                  <div>
                    {mediaPickerPath && <button type="button" onClick={() => selectMediaForPath(item)}>Usar</button>}
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
