import type { PageType } from '../types/solucoes';

export const shoppingsEGalerias: PageType = {
    slug: 'shoppings-e-galerias',
    segmentLabel: 'Shoppings e Galerias',
    heroKicker: '🏢',
    heroTitle: 'Mídia Indoor para Shoppings e Galerias',
    heroSubtitle: 'Modernize a comunicação e valorize a experiência dos visitantes e lojistas.',
    heroImage: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1600&q=80',
    heroMedia: [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1600&q=80',
            alt: 'Corredor de shopping com displays digitais'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1616627458510-61bc3e303d9b?auto=format&fit=crop&w=1600&q=80',
            alt: 'Praça de alimentação moderna com monitores'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1520950237264-dfe336995c3b?auto=format&fit=crop&w=1600&q=80',
            alt: 'Mapa digital interativo de galeria comercial'
        },
    ],
    intro:
        'A solução de Mídia Indoor MidiasPlay Padrão foi desenvolvida especialmente para shoppings centers, galerias comerciais e centros empresariais que desejam modernizar sua comunicação e fortalecer a visibilidade das marcas presentes em seus ambientes. Com o MidiasPlay, é possível centralizar e automatizar a exibição de conteúdos multimídia em diversos pontos do local — entradas, corredores, elevadores e praças de alimentação — garantindo uma comunicação visual envolvente e eficiente.',
    benefits: [
        'Valorização das marcas: destaque campanhas, produtos e serviços das lojas com vídeos e imagens atrativas.',
        'Aumento do engajamento: transforme o tempo de permanência em uma experiência visual envolvente e informativa.',
        'Gestão centralizada: atualize conteúdos remotamente e em tempo real em todos os displays.',
        'Informação útil e contextual: exiba dados dinâmicos como tempo, hora e notícias locais.',
        'Inovação e modernidade: comunique-se com visitantes e lojistas de forma profissional e tecnológica.',
    ],
    canShow: [
        'Anúncios publicitários e institucionais.',
        'Imagens e vídeos de produtos e serviços.',
        'Informações em tempo real (tempo, hora, notícias).',
        'Mapas interativos do local e direcionamento de áreas.',
        'Campanhas promocionais das lojas participantes.',
    ],
    product: {
        id: 'midiasplay-padrao',
        name: 'MidiasPlay Padrão',
        badge: 'Recomendado',
        shortDescription:
            'Ideal para exibição de conteúdos multimídia e informações em áreas de circulação, corredores e praças de alimentação.',
        highlights: [
            'Suporte a imagens, vídeos e integrações dinâmicas',
            'Gestão centralizada via plataforma web',
            'Layouts personalizáveis e responsivos',
        ],
        ctaLabel: 'Conheça agora',
        ctaHref: '/contato?produto=midiasplay-padrao&segmento=shoppings',
    },
    closingTitle: 'Inovação e impacto visual',
    closingText:
        'Com o MidiasPlay Padrão, seu shopping ou galeria oferece uma experiência moderna, informativa e integrada. Melhore a comunicação com o público e valorize a presença das marcas parceiras com tecnologia e estilo.',
    seo: {
        title: 'Mídia Indoor para Shoppings e Galerias | MidiasPlay Padrão',
        description:
            'Solução completa de mídia indoor para shoppings e galerias. Anúncios publicitários, vídeos, informações em tempo real e mapas digitais. Comunicação moderna e centralizada.',
        keywords: [
            'mídia indoor',
            'shoppings',
            'galerias comerciais',
            'digital signage',
            'publicidade indoor',
            'mapa digital',
        ],
        image: '/images/segments/shoppings/og.jpg',
    },
    faqs: [
        {
            q: 'O sistema pode exibir anúncios de múltiplas lojas?',
            a: 'Sim. O MidiasPlay permite gerenciar campanhas de diferentes lojistas com programação personalizada para cada display ou grupo de telas.',
        },
        {
            q: 'É possível integrar informações em tempo real como clima e notícias?',
            a: 'Sim. O sistema pode exibir dados dinâmicos como temperatura, hora e notícias de fontes externas em tempo real.',
        },
    ],
    badges: ['Shoppings', 'Galerias Comerciais', 'Centros Empresariais'],
    theme: {
        primary: '#2563eb', // azul corporativo
        accent: '#f59e0b',  // dourado moderno
        heroBg: 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 60%)',
        softBg: '#f9fafb',
    },
};