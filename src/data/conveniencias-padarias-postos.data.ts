import type { PageType } from '../types/solucoes';

export const convenienciasPadariasPostos: PageType = {
    slug: 'conveniencias-padarias-postos',
    segmentLabel: 'Conveniências, Padarias e Postos de Combustível',
    heroKicker: '⛽',
    heroTitle: 'Mídia Indoor para Conveniências, Padarias e Postos de Combustível',
    heroSubtitle: 'Atraia mais clientes e aumente as vendas com comunicação digital dinâmica e atualizada.',
    heroImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80',
    heroMedia: [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1626885976563-3cc9e5a4b418?auto=format&fit=crop&w=1600&q=80',
            alt: 'Loja de conveniência moderna com displays digitais'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1590080875831-7f32b6ac72d0?auto=format&fit=crop&w=1600&q=80',
            alt: 'Padaria exibindo ofertas e produtos em telas de mídia indoor'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1610641818989-30dbfba1e06f?auto=format&fit=crop&w=1600&q=80',
            alt: 'Posto de combustível com loja de conveniência e telas digitais'
        },
    ],
    intro:
        'A solução de Mídia Indoor MidiasPlay Padrão é perfeita para conveniências, padarias e postos de combustível que desejam modernizar sua comunicação com os clientes. Com o MidiasPlay, é possível exibir tabelas de preços, promoções, ofertas e vídeos de produtos de forma dinâmica, criando um ambiente mais atrativo e estimulando as vendas por impulso.',
    benefits: [
        'Destaque produtos e promoções em tempo real com conteúdo visual impactante.',
        'Facilidade na atualização de preços e campanhas diretamente pelo painel web.',
        'Atraia clientes com vídeos e imagens de produtos e combos promocionais.',
        'Transforme o ambiente em um espaço moderno e conectado.',
        'Aumente o ticket médio exibindo ofertas complementares de forma estratégica.',
    ],
    canShow: [
        'Tabela de preços e promoções de produtos.',
        'Ofertas de combos e campanhas sazonais.',
        'Imagens e vídeos de produtos e bebidas.',
        'Anúncios institucionais e mensagens de parceiros.',
        'Conteúdos de utilidade pública (hora, clima, trânsito).',
    ],
    product: {
        id: 'midiasplay-padrao',
        name: 'MidiasPlay Padrão',
        badge: 'Recomendado',
        shortDescription:
            'Ideal para lojas de conveniência, padarias e postos de combustível que desejam divulgar ofertas, combos e produtos com praticidade e impacto visual.',
        highlights: [
            'Atualização remota e fácil de campanhas e preços',
            'Suporte a imagens, vídeos e conteúdos dinâmicos',
            'Layouts personalizáveis e adaptáveis ao ambiente',
        ],
        ctaLabel: 'Conheça agora',
        ctaHref: '/contato?produto=midiasplay-padrao&segmento=conveniencias',
    },
    closingTitle: 'Modernize e aumente as vendas',
    closingText:
        'Com o MidiasPlay Padrão, sua conveniência, padaria ou posto de combustível ganha um canal moderno de comunicação com o cliente. Destaque produtos, promoções e informações úteis com praticidade e estilo.',
    seo: {
        title: 'Mídia Indoor para Conveniências, Padarias e Postos de Combustível | MidiasPlay Padrão',
        description:
            'Solução de mídia indoor para conveniências, padarias e postos de combustível. Exiba preços, promoções e vídeos de produtos com o MidiasPlay Padrão.',
        keywords: [
            'mídia indoor',
            'conveniência',
            'padaria',
            'posto de combustível',
            'ofertas',
            'promoções',
            'digital signage',
        ],
        image: '/images/segments/conveniencias/og.jpg',
    },
    faqs: [
        {
            q: 'Posso exibir diferentes conteúdos em cada tela?',
            a: 'Sim. O MidiasPlay permite programar conteúdos diferentes por área ou tipo de produto, oferecendo personalização total da exibição.',
        },
        {
            q: 'O sistema funciona em locais com conexão limitada?',
            a: 'Sim. Os conteúdos são armazenados localmente e continuam sendo exibidos mesmo sem conexão, atualizando automaticamente quando o sinal retorna.',
        },
    ],
    badges: ['Conveniências', 'Padarias', 'Postos de Combustível'],
    theme: {
        primary: '#ea580c', // laranja vibrante
        accent: '#22c55e',  // verde energia
        heroBg: 'linear-gradient(180deg, #fff7ed 0%, #ffffff 60%)',
        softBg: '#f9fafb',
    },
};