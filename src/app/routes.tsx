import { Navigate, Route, Routes } from "react-router-dom";

import { SiteLayout } from "../site/layout/SiteLayout";
import { HomePage } from "../site/pages/home/HomePage";
import { NossaHistoriaPage } from "../site/pages/nossa-historia/NossaHistoriaPage";
import { ApoiePage } from "../site/pages/apoie/ApoiePage";
import { VoluntariadoPage } from "../site/pages/voluntariado/VoluntariadoPage";
import { ProjetosPage } from "../site/pages/projetos/ProjetosPage";
import { ContatoPage } from "../site/pages/contato/ContatoPage";

import { AdminLoginPage } from "../admin/pages/login/AdminLoginPage";
import { AdminLayout } from "../admin/layout/AdminLayout";
import { DashboardPage } from "../admin/pages/dashboard/DashboardPage";
import { PaginasSitePage } from "../admin/pages/paginas/PaginasSitePage";
import { MidiaPage } from "../admin/pages/midia/MidiaPage";
import { VoluntariadoAdminPage } from "../admin/pages/voluntariado/VoluntariadoAdminPage";
import { FormulariosPage } from "../admin/pages/formularios/FormulariosPage";
import { ConfiguracoesVisuaisPage } from "../admin/pages/configuracoes-visuais/ConfiguracoesVisuaisPage";
import { RodapeAdminPage } from "../admin/pages/rodape/RodapeAdminPage";
import { SegurancaPage } from "../admin/pages/seguranca/SegurancaPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/nossa-historia" element={<NossaHistoriaPage />} />
        <Route path="/apoie" element={<ApoiePage />} />
        <Route path="/voluntariado-2026" element={<VoluntariadoPage />} />
        <Route path="/projetos" element={<ProjetosPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Route>

      <Route path="/admin/login" element={<AdminLoginPage />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="paginas" element={<PaginasSitePage />} />
        <Route path="midia" element={<MidiaPage />} />
        <Route path="voluntariado-2026" element={<VoluntariadoAdminPage />} />
        <Route path="formularios" element={<FormulariosPage />} />
        <Route path="configuracoes-visuais" element={<ConfiguracoesVisuaisPage />} />
        <Route path="rodape" element={<RodapeAdminPage />} />
        <Route path="seguranca" element={<SegurancaPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
