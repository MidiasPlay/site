import type { PageType } from '../types/solucoes';

export const corporativo: PageType = {
    slug: 'corporativo',
    segmentLabel: 'Corporativo',
    heroKicker: '🏢',
    heroTitle: 'TV Corporativa para Empresas e Indústrias',
    heroSubtitle: 'Melhore a comunicação interna e fortaleça o engajamento dos colaboradores com mídia digital corporativa.',
    heroImage: 'https://public.midiasplay.com/site/solucao-corporativo.webp',
    heroMedia: [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1603791452906-c3b9f6a1e357?auto=format&fit=crop&w=1600&q=80',
            alt: 'Tela corporativa exibindo comunicados internos'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80',
            alt: 'Ambiente de escritório moderno com display informativo'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1581091870627-3d4a5b6ef98b?auto=format&fit=crop&w=1600&q=80',
            alt: 'Indústria com monitores exibindo indicadores de produção'
        },
    ],
    intro:
        'A solução de TV Corporativa MidiasPlay Padrão foi desenvolvida para empresas, escritórios, indústrias e ambientes corporativos que desejam aprimorar a comunicação interna e manter seus colaboradores informados em tempo real. Com o MidiasPlay, é possível exibir comunicados, metas, resultados e indicadores de forma visual e dinâmica, reforçando a cultura organizacional e o alinhamento entre equipes.',
    benefits: [
        'Comunicação interna eficaz: mantenha todos informados sobre metas, resultados e novidades da empresa',
        'Transparência e engajamento: exiba indicadores e reconhecimentos de equipes em tempo real',
        'Gestão centralizada: atualize conteúdos de forma remota e imediata via plataforma web',
        'Ambiente conectado: inclua informações úteis como tempo, hora e notícias corporativas',
        'Modernização do ambiente: displays elegantes que reforçam a imagem tecnológica e inovadora da empresa',
    ],
    canShow: [
        'Comunicados para colaboradores e gestores',
        'Demonstração de resultados e estatísticas de produção',
        'Indicadores de performance e produtividade',
        'Informações em tempo real (tempo, hora, notícias)',
        'Mapas e orientações internas (layout do local, setores, rotas de segurança)',
    ],
    product: {
        id: 'midiasplay-padrao',
        name: 'MidiasPlay Padrão',
        badge: 'Recomendado',
        shortDescription:
            'Ideal para ambientes empresariais que desejam aprimorar a comunicação interna e exibir informações corporativas de forma visual e dinâmica.',
        highlights: [
            'Gestão de conteúdo centralizada e segura',
            'Suporte a imagens, vídeos, dashboards e dados ao vivo',
            'Personalização de layout conforme identidade corporativa',
        ],
        ctaLabel: 'Saiba mais',
        ctaHref: '/contato?produto=midiasplay-padrao&segmento=corporativo',
    },
    closingTitle: 'Engajamento e comunicação inteligente',
    closingText:
        'Com o MidiasPlay Padrão, sua empresa comunica-se de forma moderna, transparente e eficaz. Reforce o alinhamento interno, aumente o engajamento dos colaboradores e transforme a informação em uma ferramenta de cultura e produtividade.',
    seo: {
        title: 'TV Corporativa para Empresas e Indústrias | MidiasPlay Padrão',
        description:
            'Solução de TV Corporativa para comunicação interna em escritórios e indústrias. Exiba comunicados, resultados, estatísticas e informações em tempo real com o MidiasPlay Padrão.',
        keywords: [
            'tv corporativa',
            'comunicação interna',
            'indústrias',
            'empresas',
            'mídia indoor corporativa',
            'digital signage corporativo',
        ],
        image: '/images/segments/corporativo/og.jpg',
    },
    faqs: [
        {
            q: 'O sistema pode se integrar a dashboards ou ERPs da empresa?',
            a: 'Sim. O MidiasPlay permite integração com APIs, planilhas e sistemas corporativos para exibição de dados e indicadores em tempo real.',
        },
        {
            q: 'É possível restringir o acesso a determinados setores?',
            a: 'Sim. A plataforma permite controle de permissões e distribuição segmentada de conteúdo por local ou departamento.',
        },
    ],
    badges: ['Empresas', 'Indústrias', 'Escritórios', 'Centros Corporativos'],
    theme: {
        primary: '#1d4ed8', // azul corporativo forte
        accent: '#10b981',  // verde produtividade
        heroBg: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 60%)',
        softBg: '#f8fafc',
    },
};