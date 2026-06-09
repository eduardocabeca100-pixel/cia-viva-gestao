export type HomePillar = {
  title: string;
  text: string;
  icon: string;
};

export type HomeSpotlightCard = {
  eyebrow: string;
  title: string;
  button: string;
  to: string;
  image: string;
};

export type SiteEditableContent = {
  home: {
    hero: {
      eyebrow: string;
      titleTop: string;
      titleAccent: string;
      titleBottom: string;
      description: string;
      primaryButtonText: string;
      secondaryButtonText: string;
      imageLeft: string;
      imageCenter: string;
      imageRight: string;
    };
    pillars: HomePillar[];
    spotlightCards: HomeSpotlightCard[];
  };
};

export const SITE_CONTENT_STORAGE_KEY = "cia-viva-site-content-v1";

export const defaultSiteContent: SiteEditableContent = {
  home: {
    hero: {
      eyebrow: "Companhia de Artes Viva",
      titleTop: "#ACREDITE",
      titleAccent: "NOS",
      titleBottom: "SEUSSONHOS",
      description:
        "A Companhia de Artes Viva é uma instituição sem fins lucrativos dedicada à promoção da cultura e das artes em todas as suas formas. Nossa missão é inspirar, educar e conectar pessoas por meio da expressão criativa.",
      primaryButtonText: "Conheça nossa história",
      secondaryButtonText: "Apoie o projeto",
      imageLeft:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
      imageCenter:
        "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
      imageRight:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1000&q=80",
    },
    pillars: [
      {
        title: "Inspirar",
        text: "Despertar sonhos, talentos e novas possibilidades através da arte.",
        icon: "✣",
      },
      {
        title: "Educar",
        text: "Formar pessoas por meio da prática artística, da disciplina e da criação.",
        icon: "▱",
      },
      {
        title: "Conectar",
        text: "Aproximar comunidade, cultura, fé, propósito e transformação social.",
        icon: "⌘",
      },
    ],
    spotlightCards: [
      {
        eyebrow: "Projetos Culturais",
        title: "Conheça nossas obras, espetáculos e iniciativas.",
        button: "Ver projetos",
        to: "/projetos",
        image:
          "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
      },
      {
        eyebrow: "Voluntariado 2026",
        title: "Faça parte de um time movido por cultura, fé e propósito.",
        button: "Saiba mais",
        to: "/voluntariado-2026",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      },
      {
        eyebrow: "Apoie via incentivo",
        title: "Apoie projetos culturais por meio da Lei de Incentivo à Cultura.",
        button: "Apoiar agora",
        to: "/apoie",
        image:
          "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
};

function mergeContent(value: Partial<SiteEditableContent> | null): SiteEditableContent {
  if (!value) return defaultSiteContent;

  return {
    home: {
      hero: {
        ...defaultSiteContent.home.hero,
        ...(value.home?.hero ?? {}),
      },
      pillars:
        Array.isArray(value.home?.pillars) && value.home.pillars.length > 0
          ? value.home.pillars
          : defaultSiteContent.home.pillars,
      spotlightCards:
        Array.isArray(value.home?.spotlightCards) &&
        value.home.spotlightCards.length > 0
          ? value.home.spotlightCards
          : defaultSiteContent.home.spotlightCards,
    },
  };
}

export function getSiteContent(): SiteEditableContent {
  if (typeof window === "undefined") return defaultSiteContent;

  try {
    const saved = window.localStorage.getItem(SITE_CONTENT_STORAGE_KEY);
    if (!saved) return defaultSiteContent;
    return mergeContent(JSON.parse(saved));
  } catch {
    return defaultSiteContent;
  }
}

export function saveSiteContent(content: SiteEditableContent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SITE_CONTENT_STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event("cia-viva-site-content-updated"));
}

export function resetSiteContent() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SITE_CONTENT_STORAGE_KEY);
  window.dispatchEvent(new Event("cia-viva-site-content-updated"));
}
