import type { PageType } from '../types/solucoes';

export const foodService: PageType = {
    slug: 'food-service',
    segmentLabel: 'Food Service',
    heroKicker: '🍔',
    heroTitle: 'Mídia Indoor para Food Service',
    heroSubtitle: 'Atraia clientes e aumente suas vendas com comunicação visual irresistível.',
    heroImage: 'https://public.midiasplay.com/site/solucao-restaurante-3.webp',
    heroMedia: [
        {
            type: 'image',
            src: 'https://public.midiasplay.com/site/solucao-restaurante-1.webp',
            alt: 'Restaurante moderno com mídia indoor',
        },
        {
            type: 'image',
            src: 'https://public.midiasplay.com/site/solucao-restaurante-2.webp',
            alt: 'Painel digital exibindo cardápio e promoções',
        },
    ],
    intro:
        'A solução de Mídia Indoor MidiasPlay Fila é perfeita para o setor de Food Service, atendendo restaurantes, bares, lanchonetes, sorveterias e açaiterias que desejam destacar seus produtos e promoções de forma dinâmica e atrativa. Com o MidiasPlay, você exibe cardápios digitais, controle de filas, vídeos de produtos e campanhas visuais que despertam o apetite e aumentam o ticket médio.',
    benefits: [
        'Atraia a atenção dos clientes com cardápios dinâmicos e imagens de alta qualidade',
        'Divulgue ofertas, combos e lançamentos em tempo real com controle remoto pelo painel web',
        'Reduza filas e organize o atendimento com o modo de exibição por senhas',
        'Crie um ambiente moderno e envolvente com vídeos e artes customizadas',
        'Aumente as vendas por impulso exibindo produtos e promoções estratégicas durante a espera',
    ],
    canShow: [
        'Cardápios digitais com fotos e preços atualizados',
        'Ofertas e combos promocionais em destaque',
        'Vídeos e imagens de produtos e preparos',
        'Controle de filas por senha com design personalizado',
        'Anúncios de parceiros e campanhas sazonais (como delivery e datas comemorativas)',
    ],
    product: {
        id: 'midiasplay-fila',
        name: 'MidiasPlay Fila',
        badge: 'Recomendado',
        shortDescription:
            'Ideal para restaurantes, lanchonetes e sorveterias que desejam unir controle de filas e comunicação visual moderna em um único sistema.',
        highlights: [
            'Cardápios digitais e multimídia',
            'Controle de filas e exibição dinâmica',
            'Gestão remota e agendamento de campanhas',
        ],
        ctaLabel: 'Saiba mais',
        ctaHref: '/contato?produto=midiasplay-fila&segmento=food-service',
    },
    closingTitle: 'Sabor, tecnologia e engajamento',
    closingText:
        'Transforme a experiência dos seus clientes desde o primeiro contato visual. Com o MidiasPlay Fila, sua marca ganha destaque, seus produtos brilham e o atendimento flui com agilidade e profissionalismo.',
    seo: {
        title: 'Mídia Indoor para Restaurantes e Lanchonetes | MidiasPlay Fila',
        description:
            'Cardápios digitais, promoções e controle de filas. A solução ideal de mídia indoor para restaurantes, bares e lanchonetes aumentarem suas vendas e encantarem clientes.',
        keywords: ['mídia indoor', 'food service', 'restaurantes', 'lanchonetes', 'cardápio digital', 'digital signage'],
        image: '/images/segments/food/og.jpg',
    },
    faqs: [
        {
            q: 'Posso mudar os preços e ofertas do cardápio em tempo real?',
            a: 'Sim. O painel web permite editar preços, promoções e imagens de forma instantânea, mesmo com o player em funcionamento.',
        },
        {
            q: 'O sistema permite exibir vídeos dos produtos?',
            a: 'Sim. É possível exibir vídeos curtos de produtos, preparos e campanhas promocionais para aumentar o engajamento visual.',
        },
    ],
    badges: ['Restaurantes', 'Lanchonetes', 'Sorveterias', 'Açaiterias', 'Bares'],
    theme: {
        primary: '#f97316', // laranja quente (comida e energia)
        accent: '#f59e0b',  // dourado vibrante
        heroBg: 'linear-gradient(180deg, #fff7ed 0%, #ffffff 60%)',
        softBg: '#fffaf5',
    },
};

