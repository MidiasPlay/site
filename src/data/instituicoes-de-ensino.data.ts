import type { PageType } from '../types/solucoes';

export const instituicoesDeEnsino: PageType = {
    slug: 'instituicoes-de-ensino',
    segmentLabel: 'Instituições de Ensino',
    heroKicker: '🎓',
    heroTitle: 'Mídia Indoor para Escolas e Universidades',
    heroSubtitle: 'Comunicação eficiente e moderna para alunos, professores e visitantes.',
    heroImage: '/universidade-01.png',
    heroMedia: [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76d',
            alt: 'Painel digital em universidade exibindo comunicados',
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238',
            alt: 'Sala de espera de escola com mídia indoor',
        },
    ],
    intro:
        'A solução de Mídia Indoor MidiasPlay Padrão foi desenvolvida para instituições de ensino que desejam aprimorar a comunicação com alunos, professores e visitantes. Ideal para universidades, escolas e colégios, o sistema permite exibir avisos, eventos, campanhas educativas e conteúdos personalizados que informam e inspiram o público.',
    benefits: [
        'Modernize a comunicação interna com painéis digitais atrativos e fáceis de atualizar',
        'Divulgue avisos, prazos e eventos acadêmicos de forma clara e centralizada',
        'Fortaleça a identidade institucional com conteúdos visuais inspiradores e educativos',
        'Reduza custos e desperdício com informativos impressos e murais físicos',
        'Conecte alunos e comunidade por meio de conteúdos dinâmicos e colaborativos',
    ],
    canShow: [
        'Avisos e comunicados institucionais',
        'Calendário acadêmico e prazos de matrícula',
        'Campanhas educativas e sociais (meio ambiente, saúde, cidadania)',
        'Destaques de alunos, professores e projetos da instituição',
        'Divulgação de eventos e feiras acadêmicas',
        'Informações em tempo real (data, hora, clima e notícias)',
        'Conteúdos culturais, curiosidades e frases do dia',
    ],
    product: {
        id: 'midiasplay-padrao',
        name: 'MidiasPlay Padrão',
        badge: 'Recomendado',
        shortDescription:
            'Ideal para escolas, universidades e colégios que desejam modernizar a comunicação institucional com conteúdos visuais e educativos.',
        highlights: [
            'Gestão remota de telas e playlists',
            'Exibição de vídeos, imagens e informativos',
            'Atualização em tempo real e agendamento de campanhas',
        ],
        ctaLabel: 'Conheça agora',
        ctaHref: '/contato?produto=midiasplay-padrao&segmento=educacao',
    },
    closingTitle: 'Educação e tecnologia lado a lado',
    closingText:
        'Com o MidiasPlay Padrão, sua instituição comunica com clareza, inspira alunos e cria um ambiente moderno e conectado. Transforme murais físicos em experiências digitais dinâmicas e atualizadas em tempo real.',
    seo: {
        title: 'Mídia Indoor para Escolas e Universidades | MidiasPlay Padrão',
        description:
            'Comunicação digital moderna para instituições de ensino: avisos, eventos, campanhas educativas e muito mais. Mídia indoor para escolas, colégios e universidades.',
        keywords: [
            'mídia indoor',
            'educação',
            'escolas',
            'universidades',
            'colégios',
            'digital signage educacional',
        ],
        image: '/images/segments/education/og.jpg',
    },
    faqs: [
        {
            q: 'O sistema pode ser usado em vários prédios ou blocos?',
            a: 'Sim. É possível gerenciar múltiplas telas em diferentes locais, com conteúdos distintos ou sincronizados, tudo via painel online.',
        },
        {
            q: 'Podemos criar playlists específicas para cada curso ou departamento?',
            a: 'Sim. A plataforma permite segmentar conteúdos por áreas, horários ou tipos de público.',
        },
    ],
    badges: ['Universidades', 'Escolas', 'Colégios'],
    theme: {
        primary: '#3b82f6', // azul educacional
        accent: '#6366f1',  // roxo suave tecnológico
        heroBg: 'linear-gradient(180deg, #eef2ff 0%, #ffffff 60%)',
        softBg: '#f9fafb',
    },
};