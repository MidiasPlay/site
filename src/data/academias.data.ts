import type { PageType } from '../types/solucoes';

export const academias: PageType = {
    slug: 'academias',
    segmentLabel: 'Academias',
    heroKicker: '💪',
    heroTitle: 'Mídia Indoor para Academias',
    heroSubtitle: 'Crie programas turbinados com vídeos e informações que motivam e engajam seus clientes.',
    heroImage: 'https://public.midiasplay.com/site/solucao-academia.webp',
    heroMedia: [
        {
            type: 'image',
            src: '/academia-02.png',
            alt: 'Academia moderna com monitores exibindo vídeos de treino'
        },
        // {
        //     type: 'image',
        //     src: 'https://images.unsplash.com/photo-1576671081837-49000212a1e3?auto=format&fit=crop&w=1600&q=80',
        //     alt: 'Painel de mídia indoor exibindo conteúdos motivacionais em academia'
        // },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1600&q=80',
            alt: 'Área de treino com telas digitais exibindo vídeos e informações em tempo real'
        },
    ],
    intro:
        'A solução de Mídia Indoor MidiasPlay Padrão foi desenvolvida especialmente para academias que desejam transformar o ambiente de treino em uma experiência mais dinâmica, motivadora e informativa. Com o MidiasPlay, é possível exibir vídeos interativos, trailers de filmes, dicas de bem-estar e informações em tempo real como clima, hora e notícias, tudo de forma moderna e automatizada.',
    benefits: [
        'Engaje seus alunos com vídeos motivacionais e treinos interativos.',
        'Transforme o ambiente com conteúdos dinâmicos e inspiradores.',
        'Exiba informações úteis em tempo real, como clima, hora e notícias.',
        'Promova seus serviços e planos de forma atrativa nas telas.',
        'Aumente a fidelização oferecendo uma experiência visual diferenciada.',
    ],
    canShow: [
        'Vídeos interativos e treinos guiados',
        'Trailres de filmes e conteúdos de entretenimento',
        'Informações em tempo real (hora, tempo, notícias)',
        'Mensagens motivacionais e dicas de saúde',
        'Divulgação de planos e serviços da academia',
    ],
    product: {
        id: 'midiasplay-padrao',
        name: 'MidiasPlay Padrão',
        badge: 'Recomendado',
        shortDescription:
            'Ideal para academias que desejam criar experiências visuais motivadoras e informativas através de vídeos e conteúdos dinâmicos.',
        highlights: [
            'Reprodução de vídeos em alta definição',
            'Integração com dados em tempo real (clima, hora, notícias)',
            'Gestão simples e remota de conteúdos e playlists',
        ],
        ctaLabel: 'Conheça agora',
        ctaHref: '/contato?produto=midiasplay-padrao&segmento=academias',
    },
    closingTitle: 'Motivação, informação e tecnologia',
    closingText:
        'Com o MidiasPlay Padrão, sua academia ganha uma ferramenta poderosa para motivar alunos, divulgar serviços e criar um ambiente moderno e conectado. Transforme o treino em uma experiência visual envolvente e inteligente.',
    seo: {
        title: 'Mídia Indoor para Academias | MidiasPlay Padrão',
        description:
            'Solução de mídia indoor para academias. Exiba vídeos interativos, trailers, informações em tempo real e conteúdos motivacionais com o MidiasPlay Padrão.',
        keywords: [
            'mídia indoor',
            'academias',
            'digital signage',
            'tv fitness',
            'treinos interativos',
            'informação em tempo real',
            'MidiasPlay',
        ],
        image: '/images/segments/academias/og.jpg',
    },
    faqs: [
        {
            q: 'Posso programar diferentes conteúdos para áreas distintas da academia?',
            a: 'Sim. O MidiasPlay permite criar playlists específicas para cada área — musculação, aeróbico, recepção, entre outras — com total controle e agendamento remoto.',
        },
        {
            q: 'O sistema suporta vídeos em alta definição?',
            a: 'Sim. O MidiasPlay Padrão é otimizado para reprodução de vídeos em alta qualidade, garantindo desempenho estável e fluidez nas transições.',
        },
    ],
    badges: ['Academias', 'Fitness', 'Bem-Estar', 'Esportes'],
    theme: {
        primary: '#059669', // verde energia e vitalidade
        accent: '#facc15',  // amarelo destaque motivacional
        heroBg: 'linear-gradient(180deg, #ecfdf5 0%, #ffffff 60%)',
        softBg: '#f9fafb',
    },
};