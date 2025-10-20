export type MediaItem = {
    type: 'image' | 'video';
    src: string;
    alt?: string;
};

export type ProductRef = {
    id: string;
    name: string;
    shortDescription?: string;
    badge?: string; // ex: "Recomendado"
    highlights?: string[];
    ctaLabel?: string;
    ctaHref?: string;
};

export type PageFAQ = {
    q: string;
    a: string;
};

export type PageSEO = {
    title: string;
    description: string;
    keywords?: string[];
    image?: string; // og:image
};

export type PageType = {
    // roteamento
    slug: string;

    // cabeçalho
    segmentLabel: string; // "Clínicas e Hospitais"
    heroTitle: string;    // "Mídia Indoor para Clínicas e Hospitais"
    heroKicker?: string;  // "🏥"
    heroSubtitle?: string;

    // mídia do herói
    heroImage?: string;   // caminho da imagem principal
    heroMedia?: MediaItem[];

    // seções
    intro: string;        // 1º parágrafo de contexto
    benefits: string[];   // bullets de benefícios
    canShow: string[];    // "O que pode ser exibido"
    product: ProductRef;  // cartão do produto recomendado

    // seção final/CTA
    closingTitle?: string;
    closingText?: string;

    // SEO
    seo: PageSEO;

    // extra (opcional)
    faqs?: PageFAQ[];
    badges?: string[]; // "Hospitais", "Clínicas", etc.
    theme?: {
        // permite personalizar cores por segmento sem CSS externo
        primary?: string;      // cor principal do gradiente/botões
        accent?: string;       // cor de realce
        heroBg?: string;       // background do herói
        softBg?: string;       // fundos suaves de seções
    };
};