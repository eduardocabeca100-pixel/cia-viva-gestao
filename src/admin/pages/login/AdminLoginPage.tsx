import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, getFirebaseStatus, isFirebaseConfigured } from "../../../firebase/firebase";
import "./login.css";

export function AdminLoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@ciaviva.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      if (!isFirebaseConfigured || !auth) {
        console.log("Status Firebase:", getFirebaseStatus());
        setErrorMessage("Firebase ainda não configurado. Preencha o arquivo .env e reinicie o servidor.");
        return;
      }

      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate("/admin/dashboard");
    } catch (error: any) {
      console.error("Erro no login Firebase:", error);

      if (error?.code === "auth/invalid-credential") {
        setErrorMessage("E-mail ou senha incorretos. Confira o usuário criado no Firebase.");
        return;
      }

      if (error?.code === "auth/user-not-found") {
        setErrorMessage("Usuário não encontrado no Firebase.");
        return;
      }

      if (error?.code === "auth/wrong-password") {
        setErrorMessage("Senha incorreta.");
        return;
      }

      if (error?.code === "auth/invalid-api-key") {
        setErrorMessage("Chave do Firebase inválida. Confira o arquivo .env.");
        return;
      }

      setErrorMessage(`Erro Firebase: ${error?.code || error?.message || "erro desconhecido"}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-visual">
        <div className="login-orbit"></div>

        <div className="login-stage">
          <div className="login-dancer"></div>
          <div className="login-actor"></div>
          <div className="login-mask"></div>
        </div>

        <div className="login-brand-copy">
          <p>COMPANHIA DE ARTES VIVA</p>
          <h1>Viva Gestão</h1>
          <span>
            Painel privado para editar páginas, imagens, formulários, rodapé,
            voluntariado e identidade visual do site.
          </span>
        </div>

        <div className="login-dots">
          <i></i><i></i><i></i><i></i><i></i>
        </div>
      </section>

      <section className="login-card">
        <p className="login-eyebrow">ACESSO ADMINISTRATIVO</p>
        <h2>Entrar no painel</h2>
        <p className="login-card-text">
          Utilize seu login de administrador para acessar o Viva Gestão.
        </p>

        <form onSubmit={handleLogin}>
          <label>
            E-mail
            <input
              type="email"
              value={email}
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </label>

          {errorMessage && <div className="login-error">{errorMessage}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar no Viva Gestão"}
          </button>
        </form>

        <small>
          Nenhuma senha fica salva no código. O acesso é validado pelo Firebase.
        </small>
      </section>
    </main>
  );
}
