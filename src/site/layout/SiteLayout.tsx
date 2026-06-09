import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSiteContent } from "../content/useSiteContent";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout() {
  const { global } = useSiteContent();

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--viva-heading-font", `"${global.headingFont || "Montserrat"}", system-ui, sans-serif`);
    root.style.setProperty("--viva-body-font", `"${global.bodyFont || "Poppins"}", system-ui, sans-serif`);
    root.style.setProperty("--viva-font-scale", global.fontScale || "0.88");

    const faviconSrc = global.favicon?.src;

    if (faviconSrc) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');

      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }

      link.href = faviconSrc;
    }
  }, [global.bodyFont, global.favicon?.src, global.fontScale, global.headingFont]);

  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}
