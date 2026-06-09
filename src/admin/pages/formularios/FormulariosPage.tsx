import { useState } from "react";
import type { ChangeEvent } from "react";
import {
  Calendar,
  CheckSquare,
  Copy,
  Eye,
  FileText,
  GripVertical,
  Mail,
  MoveRight,
  Phone,
  Plus,
  Save,
  Settings,
  Trash2,
  Type,
  Upload,
} from "lucide-react";
import "./formularios.css";

type FieldItem = {
  id: number;
  label: string;
  type: string;
  icon: "text" | "email" | "phone" | "date" | "long" | "check";
};

const initialFields: FieldItem[] = [
  { id: 1, label: "Nome completo", type: "Texto curto", icon: "text" },
  { id: 2, label: "E-mail", type: "E-mail", icon: "email" },
  { id: 3, label: "Telefone / WhatsApp", type: "Telefone", icon: "phone" },
  { id: 4, label: "Data de nascimento", type: "Data", icon: "date" },
  { id: 5, label: "Cidade", type: "Texto curto", icon: "text" },
  { id: 6, label: "O que é o teatro para você?", type: "Texto longo", icon: "long" },
  { id: 7, label: "Você já fez ou faz teatro?", type: "Texto curto", icon: "text" },
  { id: 8, label: "O que te levou a se inscrever?", type: "Texto longo", icon: "long" },
];

function FieldIcon({ type }: { type: FieldItem["icon"] }) {
  if (type === "email") return <Mail size={16} />;
  if (type === "phone") return <Phone size={16} />;
  if (type === "date") return <Calendar size={16} />;
  if (type === "long") return <FileText size={16} />;
  if (type === "check") return <CheckSquare size={16} />;
  return <Type size={16} />;
}

export function FormulariosPage() {
  const [fields, setFields] = useState<FieldItem[]>(initialFields);
  const [sideArtImage, setSideArtImage] = useState<string | null>(null);
  const [sideArtMode, setSideArtMode] = useState<"text" | "image">("text");

  function handleAddField() {
    const fieldName = window.prompt("Nome do novo campo:");
    if (!fieldName) return;

    setFields((current) => [
      ...current,
      {
        id: Date.now(),
        label: fieldName,
        type: "Texto curto",
        icon: "text",
      },
    ]);
  }

  function handleDeleteField(id: number) {
    const confirmDelete = window.confirm("Deseja apagar este campo?");
    if (!confirmDelete) return;

    setFields((current) => current.filter((field) => field.id !== id));
  }

  function handleDuplicateField(field: FieldItem) {
    setFields((current) => [
      ...current,
      {
        ...field,
        id: Date.now(),
        label: `${field.label} cópia`,
      },
    ]);
  }

  function handleUploadSideArt(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setSideArtImage(imageUrl);
    setSideArtMode("image");
  }

  function handleSave() {
    alert("Formulário salvo visualmente. Depois vamos conectar esse salvamento ao Firebase.");
  }

  function handlePreview() {
    alert("Pré-visualização aberta. Depois vamos abrir isso em uma aba pública real.");
  }

  return (
    <main className="forms-admin">
      <div className="forms-header">
        <div>
          <p>FORMULÁRIOS</p>
          <h1>Editor de formulários</h1>
          <span>
            Personalize campos, rótulos, textos, estilos e aparência dos formulários do site.
          </span>
        </div>

        <div className="forms-actions">
          <button className="forms-button dark" onClick={handlePreview}>
            <Eye size={17} />
            Pré-visualizar
          </button>

          <button className="forms-button primary" onClick={handleSave}>
            <Save size={17} />
            Salvar formulário
          </button>
        </div>
      </div>

      <section className="forms-workspace">
        <aside className="forms-builder-panel">
          <div className="form-selector">
            <label>
              Formulário ativo
              <select defaultValue="voluntariado">
                <option value="voluntariado">Voluntariado 2026</option>
                <option value="contato">Contato</option>
                <option value="apoie">Apoie</option>
              </select>
            </label>
          </div>

          <div className="forms-tabs">
            <button className="active">Campos</button>
            <button>Estilo</button>
            <button>Configurações</button>
          </div>

          <div className="builder-section">
            <div className="builder-title">
              <div>
                <h2>Seção 1</h2>
                <p>Dados pessoais</p>
              </div>

              <button onClick={() => alert("Configurações da seção serão ativadas na próxima etapa.")}>
                <Settings size={16} />
              </button>
            </div>

            <div className="field-list">
              {fields.map((field) => (
                <div className="field-row" key={field.id}>
                  <GripVertical size={17} className="field-drag" />

                  <div className="field-icon">
                    <FieldIcon type={field.icon} />
                  </div>

                  <div className="field-info">
                    <strong>{field.label}</strong>
                    <span>{field.type}</span>
                  </div>

                  <div className="field-actions">
                    <button onClick={() => handleDuplicateField(field)} title="Duplicar campo">
                      <Copy size={15} />
                    </button>
                    <button className="danger" onClick={() => handleDeleteField(field.id)} title="Excluir campo">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="add-field-button" onClick={handleAddField}>
              <Plus size={17} />
              Adicionar campo
            </button>
          </div>

          <div className="builder-section compact">
            <div className="builder-title">
              <div>
                <h2>Arte lateral</h2>
                <p>Use texto editável ou envie uma imagem pronta.</p>
              </div>
            </div>

            <div className="side-art-controls">
              <button
                className={sideArtMode === "text" ? "active" : ""}
                onClick={() => setSideArtMode("text")}
              >
                Texto editável
              </button>

              <label className={sideArtMode === "image" ? "active upload-label" : "upload-label"}>
                <Upload size={16} />
                Inserir imagem
                <input type="file" accept="image/*" onChange={handleUploadSideArt} />
              </label>
            </div>

            <div className="image-size-note">
              <strong>Tamanho recomendado</strong>
              <span>1200 x 1600 px</span>
              <span>ou 1080 x 1620 px</span>
              <small>PNG, JPG ou WEBP até 2MB.</small>
            </div>
          </div>

          <div className="add-fields-box">
            <h2>Adicionar tipo de campo</h2>

            <div className="field-type-grid">
              <button onClick={handleAddField}><Type size={16} /> Texto curto</button>
              <button onClick={handleAddField}><FileText size={16} /> Texto longo</button>
              <button onClick={handleAddField}><Mail size={16} /> E-mail</button>
              <button onClick={handleAddField}><Phone size={16} /> Telefone</button>
              <button onClick={handleAddField}><Calendar size={16} /> Data</button>
              <button onClick={() => alert("Campo de arquivo será conectado depois.")}><Upload size={16} /> Arquivo</button>
              <button onClick={() => alert("Campo de seleção será conectado depois.")}><CheckSquare size={16} /> Seleção</button>
              <button onClick={handleAddField}><Type size={16} /> Título</button>
            </div>
          </div>
        </aside>

        <section className="forms-preview-panel">
          <div className="preview-topbar">
            <div>
              <h2>Pré-visualização pública</h2>
              <p>Veja como o formulário aparecerá para o visitante.</p>
            </div>

            <div className="preview-mode">
              <button className="active">Desktop</button>
              <button>Mobile</button>
            </div>
          </div>

          <div className="form-preview-stage">
            <div className={sideArtMode === "image" && sideArtImage ? "form-art-preview image-mode" : "form-art-preview"}>
              {sideArtMode === "image" && sideArtImage ? (
                <img src={sideArtImage} alt="Arte lateral do formulário" />
              ) : (
                <>
                  <p>EM 2026 VOCÊ</p>
                  <h2>NÃO PODE FICAR DE FORA,</h2>
                  <strong>INSCREVA-SE</strong>
                  <span>O futuro do teatro será construído com pessoas como você.</span>
                </>
              )}
            </div>

            <form className="public-form-preview">
              <h2>Voluntariado <b>2026</b></h2>
              <p>Preencha seus dados para se inscrever.</p>

              <label>
                Nome completo *
                <input placeholder="Digite seu nome completo" />
              </label>

              <label>
                E-mail *
                <input placeholder="seu@email.com" />
              </label>

              <label>
                Telefone / WhatsApp *
                <input placeholder="(11) 99999-9999" />
              </label>

              <label>
                Data de nascimento *
                <input placeholder="dd/mm/aaaa" />
              </label>

              <label>
                O que é o teatro para você?
                <textarea placeholder="Conte sua resposta..." />
              </label>

              <div className="terms-preview">
                <input type="checkbox" />
                <span>Li e concordo com os termos do Voluntariado 2026.</span>
              </div>

              <button type="button">
                Enviar inscrição
                <MoveRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}
