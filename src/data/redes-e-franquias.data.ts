import type { PageType } from '../types/solucoes';

export const redesDeLojasEFranquias: PageType = {
    slug: 'redes-de-lojas-e-franquias',
    segmentLabel: 'Redes de Lojas e Franquias',
    heroKicker: '🏬',
    heroTitle: 'Mídia Indoor para Redes de Lojas e Franquias',
    heroSubtitle: 'Gerencie campanhas e conteúdos de forma centralizada para todas as suas unidades.',
    heroImage: 'https://public.midiasplay.com/site/solucao-franquia.webp',
    heroMedia: [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&w=1600&q=80',
            alt: 'Loja de franquia moderna com telas digitais exibindo promoções'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=80',
            alt: 'Rede de lojas com vitrines digitais sincronizadas'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1600&q=80',
            alt: 'Gerenciamento centralizado de mídia indoor em múltiplas lojas'
        },
    ],
    intro:
        'A solução de Mídia Indoor MidiasPlay Padrão foi desenvolvida para redes de lojas e franquias que desejam manter um padrão de comunicação visual e promocional em todas as suas unidades. Com o MidiasPlay, é possível controlar remotamente os conteúdos exibidos em cada ponto de venda, gerenciar campanhas por região ou loja específica e garantir uma identidade unificada em toda a rede.',
    benefits: [
        'Gestão centralizada de campanhas e conteúdos em múltiplas lojas',
        'Padronização da comunicação visual e promocional em toda a rede',
        'Programação segmentada por loja, região ou tipo de público',
        'Atualizações automáticas e em tempo real via plataforma web',
        'Redução de custos com impressão e logística de materiais promocionais',
    ],
    canShow: [
        'Ofertas e promoções de produtos ou serviços',
        'Cardápios digitais e tabelas de preços atualizadas',
        'TV corporativa com comunicados internos e informativos',
        'Campanhas de marketing e anúncios publicitários',
        'Conteúdos dinâmicos e personalizados por loja ou região',
    ],
    product: {
        id: 'midiasplay-padrao',
        name: 'MidiasPlay Padrão',
        badge: 'Recomendado',
        shortDescription:
            'Ideal para redes de lojas e franquias que precisam de controle centralizado de mídia indoor e programação personalizada por unidade.',
        highlights: [
            'Controle centralizado e escalável de múltiplas telas e lojas',
            'Gerenciamento remoto e segmentado de campanhas',
            'Layout personalizável e programação automática por região',
        ],
        ctaLabel: 'Solicite uma demonstração',
        ctaHref: '/contato?produto=midiasplay-padrao&segmento=franquias',
    },
    closingTitle: 'Comunicação unificada e gestão inteligente',
    closingText:
        'Com o MidiasPlay Padrão, sua rede de lojas ou franquias mantém a consistência visual, otimiza a gestão de campanhas e garante uma comunicação moderna, integrada e eficiente em todas as unidades.',
    seo: {
        title: 'Mídia Indoor para Redes de Lojas e Franquias | MidiasPlay Padrão',
        description:
            'Solução de mídia indoor com controle centralizado para redes de lojas e franquias. Gerencie campanhas, cardápios, promoções e anúncios em todas as unidades com o MidiasPlay Padrão.',
        keywords: [
            'mídia indoor',
            'franquias',
            'redes de lojas',
            'digital signage',
            'controle centralizado',
            'tv corporativa',
            'promoções',
        ],
        image: '/images/segments/franquias/og.jpg',
    },
    faqs: [
        {
            q: 'É possível exibir conteúdos diferentes em lojas de uma mesma rede?',
            a: 'Sim. O MidiasPlay permite segmentar a programação por unidade, região ou categoria, mantendo o controle centralizado da comunicação.',
        },
        {
            q: 'O sistema permite agendamento de campanhas?',
            a: 'Sim. As campanhas podem ser programadas para datas e horários específicos, com publicação automática em todas as lojas ou apenas em pontos selecionados.',
        },
    ],
    badges: ['Franquias', 'Redes de Lojas', 'Varejo', 'Centros Comerciais'],
    theme: {
        primary: '#1e3a8a', // azul institucional
        accent: '#f59e0b',  // dourado destaque
        heroBg: 'linear-gradient(180deg, #eef2ff 0%, #ffffff 60%)',
        softBg: '#f9fafb',
    },
};