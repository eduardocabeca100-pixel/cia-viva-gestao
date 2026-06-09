import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth, isFirebaseConfigured } from "../../firebase/firebase";

type ProtectedAdminRouteProps = {
  children: ReactNode;
};

export function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      setChecking(false);
      setUser(null);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setChecking(false);
    });

    return () => unsubscribe();
  }, []);

  if (checking) {
    return (
      <main style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#050506",
        color: "#f7f2ee",
        fontFamily: "Inter, Arial, sans-serif"
      }}>
        <div style={{ textAlign: "center" }}>
          <strong style={{ color: "#ff3845", letterSpacing: "0.2em" }}>
            VIVA GESTÃO
          </strong>
          <p>Verificando acesso...</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}
