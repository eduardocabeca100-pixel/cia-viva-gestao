import { useMemo, useState } from "react";
import {
  defaultSiteContent,
  getSiteContent,
  resetSiteContent,
  saveSiteContent,
  type SiteEditableContent,
} from "../../../site/content/siteContent";
import { addMediaItem, getMediaLibrary, removeMediaItem, type VivaMediaItem } from "../../../site/content/mediaLibrary";
import "./paginas-site.css";

const imageSuggestions = [
  {
    label: "Bailarina com luz circular",
    url: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Palco teatral",
    url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Cortina vermelha",
    url: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Voluntariado",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
];

type EditorSection = "hero" | "pilares" | "cards";

export function PaginasSitePage() {
  const [content, setContent] = useState<SiteEditableContent>(() => getSiteContent());
  const [section, setSection] = useState<EditorSection>("hero");
  const [savedMessage, setSavedMessage] = useState("");
  const [mediaItems, setMediaItems] = useState<VivaMediaItem[]>(() => getMediaLibrary());

  const hero = content.home.hero;

  const activeTitle = useMemo(() => {
    if (section === "hero") return "Banner principal";
    if (section === "pilares") return "Pilares da Home";
    return "Cards de chamada";
  }, [section]);

  function updateHero(field: keyof SiteEditableContent["home"]["hero"], value: string) {
    setContent((current) => ({
      ...current,
      home: {
        ...current.home,
        hero: {
          ...current.home.hero,
          [field]: value,
        },
      },
    }));
  }

  function updatePillar(index: number, field: "title" | "text" | "icon", value: string) {
    setContent((current) => ({
      ...current,
      home: {
        ...current.home,
        pillars: current.home.pillars.map((pillar, pillarIndex) =>
          pillarIndex === index ? { ...pillar, [field]: value } : pillar
        ),
      },
    }));
  }

  function updateCard(
    index: number,
    field: "eyebrow" | "title" | "button" | "image",
    value: string
  ) {
    setContent((current) => ({
      ...current,
      home: {
        ...current.home,
        spotlightCards: current.home.spotlightCards.map((card, cardIndex) =>
          cardIndex === index ? { ...card, [field]: value } : card
        ),
      },
    }));
  }

  function handleSave() {
    saveSiteContent(content);
    setSavedMessage("Alterações salvas localmente. Abra a página inicial para visualizar.");
  }


  async function handleUploadMedia(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;

    const files = Array.from(fileList);

    for (const file of files) {
      await addMediaItem(file);
    }

    setMediaItems(getMediaLibrary());
    setSavedMessage("Imagem enviada para a biblioteca de mídia.");
  }

  function handleUseImage(target: "imageLeft" | "imageCenter" | "imageRight", src: string) {
    updateHero(target, src);
    setSavedMessage("Imagem aplicada no banner. Clique em salvar alterações.");
  }

  function handleRemoveMedia(id: string) {
    removeMediaItem(id);
    setMediaItems(getMediaLibrary());
    setSavedMessage("Imagem removida da biblioteca local.");
  }

  function handleReset() {
    resetSiteContent();
    setContent(defaultSiteContent);
    setSavedMessage("Conteúdo restaurado para o padrão.");
  }

  return (
    <main className="site-editor-page">
      <header className="site-editor-header">
        <div>
          <span>Viva Gestão</span>
          <h1>Páginas do site</h1>
          <p>Edite o site público por partes: textos, imagens, botões, cards e seções.</p>
        </div>

        <div className="site-editor-actions">
          <a href="/" target="_blank" rel="noreferrer">
            Visualizar site
          </a>
          <button type="button" onClick={handleSave}>
            Salvar alterações
          </button>
        </div>
      </header>

      {savedMessage && <div className="site-editor-message">{savedMessage}</div>}

      <section className="site-editor-layout">
        <aside className="site-editor-sidebar">
          <h2>Páginas</h2>

          <button className="active" type="button">
            Página Inicial
          </button>
          <button type="button" disabled>
            Nossa História
          </button>
          <button type="button" disabled>
            Apoie
          </button>
          <button type="button" disabled>
            Voluntariado 2026
          </button>
          <button type="button" disabled>
            Projetos
          </button>
          <button type="button" disabled>
            Contato
          </button>

          <small>
            Agora começamos pela Home. Depois conectamos as outras abas no mesmo editor.
          </small>
        </aside>

        <section className="site-editor-panel">
          <div className="site-editor-tabs">
            <button
              type="button"
              className={section === "hero" ? "active" : ""}
              onClick={() => setSection("hero")}
            >
              Banner principal
            </button>
            <button
              type="button"
              className={section === "pilares" ? "active" : ""}
              onClick={() => setSection("pilares")}
            >
              Pilares
            </button>
            <button
              type="button"
              className={section === "cards" ? "active" : ""}
              onClick={() => setSection("cards")}
            >
              Cards
            </button>
          </div>

          <div className="site-editor-panel-header">
            <div>
              <span>Seção</span>
              <h2>{activeTitle}</h2>
            </div>

            <button type="button" className="site-editor-reset" onClick={handleReset}>
              Restaurar padrão
            </button>
          </div>

          {section === "hero" && (
            <div className="site-editor-grid">
              <div className="site-editor-form">
                <label>
                  Texto pequeno acima do título
                  <input
                    value={hero.eyebrow}
                    onChange={(event) => updateHero("eyebrow", event.target.value)}
                  />
                </label>

                <label>
                  Primeira linha do título
                  <input
                    value={hero.titleTop}
                    onChange={(event) => updateHero("titleTop", event.target.value)}
                  />
                </label>

                <label>
                  Palavra em vermelho
                  <input
                    value={hero.titleAccent}
                    onChange={(event) => updateHero("titleAccent", event.target.value)}
                  />
                </label>

                <label>
                  Final do título
                  <input
                    value={hero.titleBottom}
                    onChange={(event) => updateHero("titleBottom", event.target.value)}
                  />
                </label>

                <label>
                  Descrição
                  <textarea
                    rows={5}
                    value={hero.description}
                    onChange={(event) => updateHero("description", event.target.value)}
                  />
                </label>

                <div className="site-editor-two-columns">
                  <label>
                    Botão principal
                    <input
                      value={hero.primaryButtonText}
                      onChange={(event) =>
                        updateHero("primaryButtonText", event.target.value)
                      }
                    />
                  </label>

                  <label>
                    Botão secundário
                    <input
                      value={hero.secondaryButtonText}
                      onChange={(event) =>
                        updateHero("secondaryButtonText", event.target.value)
                      }
                    />
                  </label>
                </div>
              </div>

              <div className="site-editor-media">
                <h3>Imagens do banner</h3>

                <label>
                  Imagem esquerda
                  <input
                    value={hero.imageLeft}
                    onChange={(event) => updateHero("imageLeft", event.target.value)}
                  />
                </label>

                <label>
                  Bailarina / imagem central
                  <input
                    value={hero.imageCenter}
                    onChange={(event) => updateHero("imageCenter", event.target.value)}
                  />
                </label>

                <label>
                  Imagem direita
                  <input
                    value={hero.imageRight}
                    onChange={(event) => updateHero("imageRight", event.target.value)}
                  />
                </label>

                <div className="site-editor-preview-row">
                  {[hero.imageLeft, hero.imageCenter, hero.imageRight].map((image) => (
                    <img key={image} src={image} alt="" />
                  ))}
                </div>

                <div className="site-editor-upload-box">
                  <h3>Subir fotos do computador</h3>
                  <p>
                    Use aqui fotos dos atores, voluntários, banners ou imagens criadas
                    para a Cia Viva.
                  </p>

                  <label className="site-editor-upload-button">
                    Enviar imagens
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(event) => handleUploadMedia(event.target.files)}
                    />
                  </label>
                </div>

                {mediaItems.length > 0 && (
                  <>
                    <h3>Biblioteca enviada</h3>

                    <div className="site-editor-media-library">
                      {mediaItems.map((image) => (
                        <article key={image.id}>
                          <img src={image.src} alt={image.name} />
                          <strong>{image.name}</strong>

                          <div>
                            <button
                              type="button"
                              onClick={() => handleUseImage("imageLeft", image.src)}
                            >
                              Usar esquerda
                            </button>

                            <button
                              type="button"
                              onClick={() => handleUseImage("imageCenter", image.src)}
                            >
                              Usar centro
                            </button>

                            <button
                              type="button"
                              onClick={() => handleUseImage("imageRight", image.src)}
                            >
                              Usar direita
                            </button>

                            <button
                              type="button"
                              className="danger"
                              onClick={() => handleRemoveMedia(image.id)}
                            >
                              Remover
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                  </>
                )}

                <h3>Imagens sugeridas</h3>

                <div className="site-editor-suggestions">
                  {imageSuggestions.map((image) => (
                    <button
                      type="button"
                      key={image.url}
                      onClick={() => updateHero("imageCenter", image.url)}
                    >
                      <img src={image.url} alt="" />
                      <span>{image.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {section === "pilares" && (
            <div className="site-editor-card-list">
              {content.home.pillars.map((pillar, index) => (
                <article key={index} className="site-editor-edit-card">
                  <label>
                    Ícone
                    <input
                      value={pillar.icon}
                      onChange={(event) => updatePillar(index, "icon", event.target.value)}
                    />
                  </label>

                  <label>
                    Título
                    <input
                      value={pillar.title}
                      onChange={(event) => updatePillar(index, "title", event.target.value)}
                    />
                  </label>

                  <label>
                    Texto
                    <textarea
                      rows={4}
                      value={pillar.text}
                      onChange={(event) => updatePillar(index, "text", event.target.value)}
                    />
                  </label>
                </article>
              ))}
            </div>
          )}

          {section === "cards" && (
            <div className="site-editor-card-list">
              {content.home.spotlightCards.map((card, index) => (
                <article key={index} className="site-editor-edit-card">
                  <label>
                    Texto vermelho pequeno
                    <input
                      value={card.eyebrow}
                      onChange={(event) => updateCard(index, "eyebrow", event.target.value)}
                    />
                  </label>

                  <label>
                    Título
                    <textarea
                      rows={3}
                      value={card.title}
                      onChange={(event) => updateCard(index, "title", event.target.value)}
                    />
                  </label>

                  <label>
                    Botão
                    <input
                      value={card.button}
                      onChange={(event) => updateCard(index, "button", event.target.value)}
                    />
                  </label>

                  <label>
                    Imagem
                    <input
                      value={card.image}
                      onChange={(event) => updateCard(index, "image", event.target.value)}
                    />
                  </label>

                  <img className="site-editor-card-image" src={card.image} alt="" />
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
