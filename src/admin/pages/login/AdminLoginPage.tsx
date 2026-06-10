import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import "./admin-login.css";

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@ciaviva.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch {
      setMessage("Não foi possível entrar. Confira o e-mail e a senha cadastrados no Firebase.");
    } finally {
      setLoading(false);
    }
  }

  async function handleResetPassword() {
    if (!email) {
      setMessage("Digite seu e-mail para receber a recuperação de senha.");
      return;
    }

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setMessage("Enviamos um e-mail de recuperação de senha.");
    } catch {
      setMessage("Não foi possível enviar a recuperação agora.");
    }
  }

  return (
    <main className="admin-login-page">
      <section className="admin-login-visual">
        <div className="admin-login-visual__logo">
          <strong>VIVA</strong>
          <span>CIA DE ARTES</span>
        </div>

        <div className="admin-login-visual__art">
          <div className="admin-login-visual__circle" />
          <div className="admin-login-visual__figure">✦</div>
        </div>

        <div className="admin-login-visual__text">
          <span>Painel privado</span>
          <h1>Arte, gestão e criação em um só lugar.</h1>
          <p>Controle páginas, mídia, voluntariado, formulários e identidade visual da Cia Viva.</p>
        </div>
      </section>

      <section className="admin-login-card">
        <span>Viva Gestão</span>
        <h2>Entrar no painel</h2>
        <p>Acesse com o usuário cadastrado no Firebase.</p>

        <form onSubmit={handleSubmit}>
          <label>
            E-mail
            <input
              type="email"
              value={email}
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              value={password}
              autoComplete="current-password"
              placeholder="Digite sua senha"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          {message && <div className="admin-login-message">{message}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <button type="button" className="admin-login-forgot" onClick={handleResetPassword}>
            Esqueci minha senha
          </button>
        </form>
      </section>
    </main>
  );
}
