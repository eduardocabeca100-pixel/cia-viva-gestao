export type MediaType = "image" | "gif" | "video";
export type MediaPosition = "right" | "left" | "top" | "background";
export type AnimationStyle = "none" | "fade-up" | "zoom-in" | "slide-left" | "letters";
export type TextAlignOption = "left" | "center";

export type MediaValue = {
  type: MediaType;
  src: string;
  alt: string;
};

export type EditableButton = {
  label: string;
  href: string;
};

export type EditableHero = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  primaryButton: EditableButton;
  secondaryButton: EditableButton;
  media: MediaValue;
  mediaPosition?: MediaPosition;
  animation?: AnimationStyle;
  textAlign?: TextAlignOption;
};

export type EditableCard = {
  eyebrow: string;
  title: string;
  text: string;
  icon: string;
  button: EditableButton;
  media: MediaValue;
};

export type EditablePerson = {
  name: string;
  role: string;
  initials: string;
  photo: MediaValue;
};

export type EditableFormField = {
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
};

export type SiteEditableContent = {
  global: {
    logoTitle: string;
    logoSubtitle: string;
    logoMedia?: MediaValue;
    favicon?: MediaValue;
    headingFont?: string;
    bodyFont?: string;
    fontScale?: string;
    ctaLabel: string;
    ctaHref: string;
    footerDescription: string;
    email: string;
    phone: string;
    location: string;
    instagram: string;
  };
  home: {
    hero: EditableHero;
    pillars: EditableCard[];
    cards: EditableCard[];
    cta: {
      eyebrow: string;
      title: string;
      button: EditableButton;
    };
  };
  story: {
    hero: EditableHero;
    founder: EditablePerson & {
      text: string;
    };
    mission: {
      title: string;
      text: string;
    };
    valuesIntro: {
      title: string;
      text: string;
    };
    values: EditableCard[];
    origin: {
      eyebrow: string;
      title: string;
      text: string;
      media: MediaValue;
    };
  };
  support: {
    hero: EditableHero;
    formTitle: string;
    project: {
      eyebrow: string;
      title: string;
      text: string;
    };
    steps: EditableCard[];
    donation: {
      eyebrow: string;
      title: string;
      text: string;
      media: MediaValue;
      button: EditableButton;
    };
    formFields: EditableFormField[];
  };
  volunteer: {
    hero: EditableHero;
    intro: {
      eyebrow: string;
      title: string;
      textOne: string;
      textTwo: string;
      deadline: string;
    };
    team: {
      eyebrow: string;
      title: string;
      people: EditablePerson[];
    };
    learning: {
      eyebrow: string;
      title: string;
      cards: EditableCard[];
    };
    register: {
      eyebrow: string;
      title: string;
      text: string;
      formFields: EditableFormField[];
    };
  };
  projects: {
    hero: EditableHero;
    items: EditableCard[];
    cta: {
      eyebrow: string;
      title: string;
      text: string;
      button: EditableButton;
    };
  };
  contact: {
    hero: EditableHero;
    info: {
      email: string;
      phone: string;
      location: string;
      text: string;
    };
    formFields: EditableFormField[];
  };
};

export const SITE_CONTENT_STORAGE_KEY = "cia-viva-site-content-v2";

const emptyMedia: MediaValue = {
  type: "image",
  src: "",
  alt: "",
};

const defaultDanceMedia: MediaValue = {
  type: "image",
  src: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1400&q=80",
  alt: "Dança e arte cênica",
};

const defaultStageMedia: MediaValue = {
  type: "image",
  src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
  alt: "Palco teatral",
};

const defaultGroupMedia: MediaValue = {
  type: "image",
  src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
  alt: "Grupo de pessoas",
};

export const defaultSiteContent: SiteEditableContent = {
  global: {
    logoTitle: "VIVA",
    logoSubtitle: "CIA DE ARTES",
    logoMedia: emptyMedia,
    favicon: emptyMedia,
    headingFont: "Montserrat",
    bodyFont: "Poppins",
    fontScale: "0.88",
    ctaLabel: "Apoiar",
    ctaHref: "/apoie",
    footerDescription:
      "Arte, cultura, fé, formação e transformação social por meio do teatro, da dança, da música e da expressão criativa.",
    email: "contato@ciaviva.com",
    phone: "(47) 99274-7545",
    location: "Jaraguá do Sul - SC",
    instagram: "Instagram",
  },
  home: {
    hero: {
      eyebrow: "Companhia de Artes Viva",
      title: "Arte que inspira",
      accent: "forma e transforma.",
      description:
        "A Companhia de Artes Viva é uma instituição sem fins lucrativos dedicada à promoção da cultura e das artes em todas as suas formas. Nossa missão é inspirar, educar e conectar pessoas por meio da expressão criativa.",
      primaryButton: {
        label: "Nossa história",
        href: "/nossa-historia",
      },
      secondaryButton: {
        label: "Apoie o projeto",
        href: "/apoie",
      },
      media: defaultDanceMedia,
      mediaPosition: "top",
      animation: "letters",
      textAlign: "center",
    },
    pillars: [
      {
        eyebrow: "Pilar",
        title: "Inspirar",
        text: "Despertar sonhos, talentos e novas possibilidades através da arte.",
        icon: "✦",
        button: { label: "Saiba mais", href: "/nossa-historia" },
        media: emptyMedia,
      },
      {
        eyebrow: "Pilar",
        title: "Educar",
        text: "Formar pessoas por meio da prática artística, da disciplina e da criação.",
        icon: "▱",
        button: { label: "Saiba mais", href: "/projetos" },
        media: emptyMedia,
      },
      {
        eyebrow: "Pilar",
        title: "Conectar",
        text: "Aproximar comunidade, cultura, fé, propósito e transformação social.",
        icon: "⌘",
        button: { label: "Saiba mais", href: "/contato" },
        media: emptyMedia,
      },
    ],
    cards: [
      {
        eyebrow: "Projetos culturais",
        title: "Conheça nossas obras, espetáculos e iniciativas.",
        text: "Projetos criados para inspirar, formar e transformar.",
        icon: "🎭",
        button: { label: "Ver projetos", href: "/projetos" },
        media: defaultStageMedia,
      },
      {
        eyebrow: "Voluntariado 2026",
        title: "Faça parte de um time movido por cultura, fé e propósito.",
        text: "Uma experiência de formação, prática e comunidade.",
        icon: "👥",
        button: { label: "Saiba mais", href: "/voluntariado-2026" },
        media: defaultGroupMedia,
      },
      {
        eyebrow: "Apoie via incentivo",
        title: "Apoie projetos culturais por meio da Lei de Incentivo à Cultura.",
        text: "Transforme imposto em arte e impacto social.",
        icon: "♥",
        button: { label: "Apoiar agora", href: "/apoie" },
        media: defaultStageMedia,
      },
    ],
    cta: {
      eyebrow: "Faça parte",
      title: "Ajude a manter a arte viva, acessível e transformadora.",
      button: {
        label: "Fale com a Cia Viva",
        href: "/contato",
      },
    },
  },
  story: {
    hero: {
      eyebrow: "Onde tudo começou",
      title: "Um pouco",
      accent: "sobre nós.",
      description:
        "Em 2017, Marcel Eduardo Cabeça Domingues deu vida a um sonho: criar um projeto que levasse amor e transformação através da arte. Eduardo encontrou no teatro um caminho para emocionar, ensinar e aproximar pessoas.",
      primaryButton: { label: "Conheça os projetos", href: "/projetos" },
      secondaryButton: { label: "Fale conosco", href: "/contato" },
      media: defaultStageMedia,
      mediaPosition: "right",
      animation: "fade-up",
      textAlign: "left",
    },
    founder: {
      name: "Eduardo Cabeça",
      role: "Fundador, artista, diretor e produtor cultural",
      initials: "EC",
      text: "A Companhia de Artes Viva é mais que um sonho realizado. É um movimento, uma missão de tocar corações e transformar vidas por meio da arte.",
      photo: emptyMedia,
    },
    mission: {
      title: "Espalhar mensagens de amor, paz e transformação.",
      text: "Alcançamos públicos de diferentes idades, religiões e realidades por meio do teatro, da dança, da música e da criatividade.",
    },
    valuesIntro: {
      title: "Ser um farol de esperança e impacto.",
      text: "Utilizamos a arte como ponte entre culturas, promovendo reflexões que aproximam pessoas do amor e da compreensão.",
    },
    values: [
      {
        eyebrow: "Valor",
        title: "Amor ao próximo",
        text: "Nossa essência está em amor, acolhimento e escuta.",
        icon: "♥",
        button: { label: "", href: "" },
        media: emptyMedia,
      },
      {
        eyebrow: "Valor",
        title: "Respeito às diferenças",
        text: "A arte como ponte entre pessoas, culturas e realidades.",
        icon: "🤝",
        button: { label: "", href: "" },
        media: emptyMedia,
      },
      {
        eyebrow: "Valor",
        title: "Família e comunidade",
        text: "Fortalecemos laços que constroem sociedades mais fortes.",
        icon: "⌂",
        button: { label: "", href: "" },
        media: emptyMedia,
      },
      {
        eyebrow: "Valor",
        title: "Excelência criativa",
        text: "Transformamos ideias em experiências com beleza e propósito.",
        icon: "✦",
        button: { label: "", href: "" },
        media: emptyMedia,
      },
      {
        eyebrow: "Valor",
        title: "Educação e impacto",
        text: "A arte como ferramenta para ensinar, inspirar e transformar.",
        icon: "▱",
        button: { label: "", href: "" },
        media: emptyMedia,
      },
      {
        eyebrow: "Valor",
        title: "Autenticidade",
        text: "Falamos de verdades com sensibilidade, sinceridade e amor.",
        icon: "◉",
        button: { label: "", href: "" },
        media: emptyMedia,
      },
    ],
    origin: {
      eyebrow: "Nosso projeto começou aqui",
      title: "Jaraguá do Sul é o início de um sonho em expansão.",
      text: "Nosso objetivo é crescer, alcançar Santa Catarina e levar boas novas por meio da arte, da cultura e da formação humana.",
      media: emptyMedia,
    },
  },
  support: {
    hero: {
      eyebrow: "Lei de Incentivo",
      title: "Aqui seu imposto",
      accent: "vira arte.",
      description:
        "Apoiar a cultura é simples, seguro e transforma realidades. Empresas e pessoas físicas podem destinar parte do imposto devido para projetos culturais aprovados.",
      primaryButton: { label: "Quero apoiar", href: "/contato" },
      secondaryButton: { label: "Ver projetos", href: "/projetos" },
      media: defaultStageMedia,
      mediaPosition: "right",
      animation: "fade-up",
      textAlign: "left",
    },
    formTitle: "Receba informações para apoiar",
    project: {
      eyebrow: "Nossos projetos",
      title: "Irreversível",
      text: "Venha ser um agente transformador e faça a diferença na vida de quem precisa.",
    },
    steps: [
      {
        eyebrow: "Passo 01",
        title: "Calcule",
        text: "Calcule o valor possível para doação.",
        icon: "01",
        button: { label: "", href: "" },
        media: emptyMedia,
      },
      {
        eyebrow: "Passo 02",
        title: "Escolha",
        text: "Escolha o projeto cultural.",
        icon: "02",
        button: { label: "", href: "" },
        media: emptyMedia,
      },
      {
        eyebrow: "Passo 03",
        title: "Transfira",
        text: "Faça a transferência identificada para a conta do projeto.",
        icon: "03",
        button: { label: "", href: "" },
        media: emptyMedia,
      },
      {
        eyebrow: "Passo 04",
        title: "Curta",
        text: "Acompanhe e curta o projeto.",
        icon: "04",
        button: { label: "", href: "" },
        media: emptyMedia,
      },
      {
        eyebrow: "Passo 05",
        title: "Declare",
        text: "Declare o valor doado no imposto do ano seguinte.",
        icon: "05",
        button: { label: "", href: "" },
        media: emptyMedia,
      },
    ],
    donation: {
      eyebrow: "Doação segura",
      title: "Doe é simples e seguro.",
      text: "Empresas que apuram pelo Lucro Real podem pagar até 4% do imposto devido. Pessoas físicas podem pagar até 6%.",
      media: emptyMedia,
      button: {
        label: "Clique aqui e faça o cálculo",
        href: "https://www.gov.br/receitafederal",
      },
    },
    formFields: [
      { label: "Nome", placeholder: "Seu nome", type: "text" },
      { label: "Sobrenome", placeholder: "Seu sobrenome", type: "text" },
      { label: "E-mail", placeholder: "seuemail@email.com", type: "email" },
      { label: "Contato / WhatsApp", placeholder: "(00) 00000-0000", type: "tel" },
    ],
  },
  volunteer: {
    hero: {
      eyebrow: "Inscrições abertas",
      title: "Voluntariado",
      accent: "2026.",
      description:
        "Se você sonha em fazer teatro de forma consciente e transformadora, este é o seu momento. Um programa gratuito de formação, prática artística e desenvolvimento humano por meio da arte.",
      primaryButton: { label: "Inscreva-se", href: "#inscricao" },
      secondaryButton: { label: "Conheça o programa", href: "#formacao" },
      media: defaultGroupMedia,
      mediaPosition: "right",
      animation: "fade-up",
      textAlign: "left",
    },
    intro: {
      eyebrow: "Crescimento coletivo",
      title: "2025 foi um ano de aprendizados. 2026 será de expansão.",
      textOne:
        "Em 2026, seguimos avançando. A Companhia de Artes Viva abre as inscrições para o programa de voluntariado 2026.",
      textTwo:
        "Acreditamos no teatro como ferramenta de expressão, reflexão e impacto social. O voluntariado é voltado a pessoas que desejam aprender, colaborar e viver experiências reais de palco e bastidores.",
      deadline: "Inscrições abertas até 25 de janeiro",
    },
    team: {
      eyebrow: "Nosso time",
      title: "Somos formados por voluntários com um propósito.",
      people: [
        { name: "Eduardo Cabeça", role: "Direção / Coordenação", initials: "EC", photo: emptyMedia },
        { name: "Cacau Ricartte", role: "Voluntária", initials: "CR", photo: emptyMedia },
        { name: "Julia Titz", role: "Voluntária", initials: "JT", photo: emptyMedia },
        { name: "Heya Camargo", role: "Voluntária", initials: "HC", photo: emptyMedia },
        { name: "Bruna Lazzarotto", role: "Voluntária", initials: "BL", photo: emptyMedia },
        { name: "Katy Souza", role: "Voluntária", initials: "KS", photo: emptyMedia },
        { name: "Ricardo Costa", role: "Voluntário", initials: "RC", photo: emptyMedia },
        { name: "Renaldo BK", role: "Voluntário", initials: "RB", photo: emptyMedia },
      ],
    },
    learning: {
      eyebrow: "Formação",
      title: "Aqui você aprenderá.",
      cards: [
        {
          eyebrow: "Formação",
          title: "Teatro e atuação",
          text: "Construção de expressão corporal e vocal, improvisação, concentração e presença em cena.",
          icon: "🎭",
          button: { label: "", href: "" },
          media: emptyMedia,
        },
        {
          eyebrow: "Formação",
          title: "Trabalho em equipe",
          text: "Colaboração, organização, comunicação e construção coletiva de processos artísticos.",
          icon: "✣",
          button: { label: "", href: "" },
          media: emptyMedia,
        },
        {
          eyebrow: "Formação",
          title: "Audiovisual e curtas",
          text: "Noções de atuação para câmera, registros, bastidores e criação de conteúdo.",
          icon: "🎬",
          button: { label: "", href: "" },
          media: emptyMedia,
        },
        {
          eyebrow: "Formação",
          title: "Palco e bastidores",
          text: "Vivência de produção, figurino, entrada de cena, rotina de ensaios e apresentações.",
          icon: "🕺",
          button: { label: "", href: "" },
          media: emptyMedia,
        },
      ],
    },
    register: {
      eyebrow: "Inscreva-se",
      title: "Em 2026 você não pode ficar de fora.",
      text: "Preencha o formulário e participe do Voluntariado 2026 da Cia de Artes Viva.",
      formFields: [
        { label: "Nome completo", placeholder: "Digite seu nome completo", type: "text" },
        { label: "E-mail", placeholder: "seuemail@email.com", type: "email" },
        { label: "WhatsApp", placeholder: "(00) 00000-0000", type: "tel" },
        { label: "Cidade", placeholder: "Cidade / Estado", type: "text" },
        { label: "O que te motivou?", placeholder: "Conte um pouco sobre você", type: "textarea" },
      ],
    },
  },
  projects: {
    hero: {
      eyebrow: "Projetos",
      title: "Arte onde",
      accent: "ela é necessária.",
      description:
        "Espetáculos, oficinas, ações sociais e experiências que aproximam a comunidade da cultura.",
      primaryButton: { label: "Fale conosco", href: "/contato" },
      secondaryButton: { label: "Apoie", href: "/apoie" },
      media: defaultStageMedia,
      mediaPosition: "right",
      animation: "fade-up",
      textAlign: "left",
    },
    items: [
      {
        eyebrow: "Projeto",
        title: "Espetáculos",
        text: "Criações cênicas com impacto visual, poesia e presença.",
        icon: "🎭",
        button: { label: "Saiba mais", href: "/contato" },
        media: defaultStageMedia,
      },
      {
        eyebrow: "Projeto",
        title: "Oficinas",
        text: "Formação artística para crianças, jovens e adultos.",
        icon: "▱",
        button: { label: "Saiba mais", href: "/contato" },
        media: defaultGroupMedia,
      },
      {
        eyebrow: "Projeto",
        title: "Turnês e circulações",
        text: "Levamos arte para novos públicos e territórios.",
        icon: "✦",
        button: { label: "Saiba mais", href: "/contato" },
        media: defaultStageMedia,
      },
      {
        eyebrow: "Projeto",
        title: "Ações sociais",
        text: "Projetos culturais conectados à comunidade.",
        icon: "♥",
        button: { label: "Saiba mais", href: "/contato" },
        media: defaultGroupMedia,
      },
    ],
    cta: {
      eyebrow: "Em breve",
      title: "Novos projetos estão sendo preparados.",
      text: "Acompanhe a Cia Viva para conhecer os próximos espetáculos, oficinas e ações culturais.",
      button: { label: "Entrar em contato", href: "/contato" },
    },
  },
  contact: {
    hero: {
      eyebrow: "Contato",
      title: "Fale",
      accent: "conosco.",
      description:
        "Vamos conversar sobre projetos, voluntariado, apoio cultural e parcerias.",
      primaryButton: { label: "Enviar mensagem", href: "#formulario" },
      secondaryButton: { label: "Apoie", href: "/apoie" },
      media: defaultStageMedia,
      mediaPosition: "right",
      animation: "fade-up",
      textAlign: "left",
    },
    info: {
      email: "contato@ciaviva.com",
      phone: "(47) 99274-7545",
      location: "Jaraguá do Sul - SC",
      text: "Entre em contato para parcerias, voluntariado, projetos culturais e apoio institucional.",
    },
    formFields: [
      { label: "Nome", placeholder: "Seu nome", type: "text" },
      { label: "E-mail", placeholder: "seuemail@email.com", type: "email" },
      { label: "Telefone", placeholder: "(00) 00000-0000", type: "tel" },
      { label: "Assunto", placeholder: "Sobre o que deseja falar?", type: "text" },
      { label: "Mensagem", placeholder: "Escreva sua mensagem", type: "textarea" },
    ],
  },
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function deepMerge<T>(base: T, override: unknown): T {
  if (Array.isArray(base)) {
    return Array.isArray(override) && override.length > 0 ? (override as T) : base;
  }

  if (!isPlainObject(base) || !isPlainObject(override)) {
    return override === undefined || override === null ? base : (override as T);
  }

  const result: Record<string, unknown> = { ...base };

  for (const key of Object.keys(base)) {
    result[key] = deepMerge((base as Record<string, unknown>)[key], override[key]);
  }

  return result as T;
}

export function getSiteContent(): SiteEditableContent {
  if (typeof window === "undefined") return defaultSiteContent;

  try {
    const saved = window.localStorage.getItem(SITE_CONTENT_STORAGE_KEY);
    if (!saved) return defaultSiteContent;

    return deepMerge(defaultSiteContent, JSON.parse(saved));
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
