import type { PageType } from '../types/solucoes';

export const agenciasPublicidade: PageType = {
    slug: 'agencias-de-publicidade-e-marketing',
    segmentLabel: 'Agências de Publicidade, Marketing e Design',
    heroKicker: '🎯',
    heroTitle: 'Revenda e Gestão de Mídia Indoor para Agências',
    heroSubtitle: 'Amplie seus serviços oferecendo soluções de mídia indoor completas para seus clientes.',
    heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    heroMedia: [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
            alt: 'Equipe de marketing planejando campanhas digitais'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
            alt: 'Profissionais de agência analisando resultados de mídia'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1603791452906-c3b9f6a1e357?auto=format&fit=crop&w=1600&q=80',
            alt: 'Gestão de campanhas e painéis digitais em ambiente corporativo'
        },
    ],
    intro:
        'A MidiasPlay oferece às agências de publicidade, marketing, comunicação e design uma oportunidade de expandir seus serviços com a revenda e gestão de soluções de Mídia Indoor para clientes dos mais diversos segmentos. Com o MidiasPlay, sua agência pode oferecer campanhas dinâmicas, programadas e personalizadas — unindo conteúdo, tecnologia e estratégia para maximizar o impacto visual de cada marca atendida.',
    benefits: [
        'Amplie seu portfólio de serviços oferecendo mídia indoor integrada aos seus projetos de marketing',
        'Gere receita recorrente com a revenda e gestão de telas e campanhas para seus clientes',
        'Gerencie múltiplos clientes e locais com uma única plataforma web intuitiva',
        'Crie experiências personalizadas para cada segmento (varejo, food service, saúde, corporativo, etc)',
        'Fortaleça o posicionamento da sua agência como provedora de soluções completas de comunicação',
    ],
    canShow: [
        'Ofertas e promoções de produtos ou serviços',
        'Cardápios e tabelas de preços dinâmicas',
        'Campanhas de marketing e anúncios publicitários',
        'TV corporativa e comunicação interna',
        'Mensagens institucionais e identidades visuais personalizadas',
    ],
    product: {
        id: 'midiasplay-padrao',
        name: 'MidiasPlay Padrão e MidiasPlay Fila',
        badge: 'Revenda Autorizada',
        shortDescription:
            'Perfeitos para agências que desejam oferecer e gerenciar soluções de mídia indoor completas para seus clientes.',
        highlights: [
            'Gestão multi-cliente e multi-local',
            'Suporte a múltiplos tipos de conteúdo (vídeo, imagem, texto, dashboards, tempo real)',
            'Modelos ideais para diferentes segmentos — Padrão e Fila',
        ],
        ctaLabel: 'Torne-se um parceiro',
        ctaHref: '/contato?produto=midiasplay-padrao&segmento=agencias',
    },
    closingTitle: 'Transforme sua agência em uma provedora de mídia digital completa',
    closingText:
        'Com as soluções MidiasPlay, sua agência pode ampliar sua atuação oferecendo mídia indoor para clientes de todos os segmentos. Entregue campanhas mais eficazes, gere novas fontes de receita e posicione sua marca na vanguarda da comunicação digital.',
    seo: {
        title: 'Soluções de Mídia Indoor para Agências de Publicidade e Marketing | MidiasPlay',
        description:
            'Revenda e gestão de mídia indoor para agências de publicidade, marketing, design e comunicação. Ofereça MidiasPlay Padrão e Fila para seus clientes.',
        keywords: [
            'mídia indoor',
            'agência de publicidade',
            'marketing',
            'revenda de mídia',
            'digital signage',
            'tv corporativa',
            'MidiasPlay',
        ],
        image: '/images/segments/agencias/og.jpg',
    },
    faqs: [
        {
            q: 'Como funciona o modelo de parceria para agências?',
            a: 'As agências parceiras podem revender e gerenciar o MidiasPlay diretamente, mantendo total controle das campanhas e clientes, além de acesso a condições comerciais exclusivas.',
        },
        {
            q: 'É possível personalizar a plataforma com a marca da agência?',
            a: 'Sim. Oferecemos opções de personalização visual para que sua agência possa apresentar o sistema de forma co-branded ou com identidade própria.',
        },
    ],
    badges: ['Agências de Publicidade', 'Marketing', 'Comunicação', 'Design', 'Gestão de Tráfego'],
    theme: {
        primary: '#7c3aed', // roxo criativo
        accent: '#f59e0b',  // amarelo destaque
        heroBg: 'linear-gradient(180deg, #f5f3ff 0%, #ffffff 60%)',
        softBg: '#fafafa',
    },
};