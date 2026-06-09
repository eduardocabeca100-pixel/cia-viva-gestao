import { useEffect, useState } from "react";
import { defaultSiteContent, getSiteContent, type SiteEditableContent } from "./siteContent";

export function useSiteContent() {
  const [content, setContent] = useState<SiteEditableContent>(defaultSiteContent);

  useEffect(() => {
    const update = () => setContent(getSiteContent());

    update();

    window.addEventListener("storage", update);
    window.addEventListener("cia-viva-site-content-updated", update);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("cia-viva-site-content-updated", update);
    };
  }, []);

  return content;
}
