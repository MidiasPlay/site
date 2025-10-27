import type { PageType } from '../types/solucoes';

export const clinicasEHospitais: PageType = {
    slug: 'clinicas-e-hospitais',
    segmentLabel: 'Clínicas e Hospitais',
    heroKicker: '🏥',
    heroTitle: 'Mídia Indoor para Clínicas e Hospitais',
    heroSubtitle: 'Transforme a experiência dos pacientes com comunicação visual inteligente.',
    heroImage: 'https://hospitaligesp.com.br/wp-content/uploads/2023/03/DSCF3283-scaled.jpg', // opcional
    heroMedia: [
        {
            type: 'image',
            src: 'https://hospitaligesp.com.br/wp-content/uploads/2023/03/DSCF3283-scaled.jpg',
            alt: 'Recepção com mídia indoor'
        },
        {
            type: 'image',
            src: 'https://hospitaligesp.com.br/wp-content/uploads/2023/03/DSCF3283-scaled.jpg',
            alt: 'Painel de senhas'
        },
    ],
    intro:
        'A solução de Mídia Indoor MidiasPlay Fila foi desenvolvida especialmente para o setor de saúde, atendendo clínicas, hospitais e consultórios que desejam oferecer uma experiência moderna, organizada e informativa em suas recepções e salas de espera. Com o MidiasPlay Fila, é possível integrar o controle de senhas e chamadas de atendimento a uma exibição atrativa de conteúdos multimídia.',
    benefits: [
        'Organização e fluidez no atendimento: controle de filas com senhas automáticas e exibição em tempo real',
        'Comunicação eficiente: destaque serviços, planos de saúde e equipe clínica com conteúdo visual atrativo',
        'Ambiente mais agradável: reduza a percepção de espera com vídeos e artes informativas personalizadas',
        'Monetização do espaço: inclua anunciantes locais ou parceiros de saúde para gerar receita adicional',
        'Gestão simplificada: controle remoto e atualização em tempo real via plataforma web',
    ],
    canShow: [
        'Painel de chamada de senhas (número e consultório)',
        'Vídeos institucionais, campanhas e orientações médicas',
        'Informações em tempo real (data, hora e clima)',
        'Anúncios publicitários e avisos internos',
        'Artes customizadas com a identidade da clínica',
    ],
    product: {
        id: 'midiasplay-fila',
        name: 'MidiasPlay Fila',
        badge: 'Recomendado',
        shortDescription:
            'Ideal para recepções e áreas de espera que utilizam controle de senha e desejam integrar comunicação visual dinâmica.',
        highlights: [
            'Integração com senhas e chamadas',
            'Controle remoto e agendamento',
            'Layout personalizável e multimídia',
        ],
        ctaLabel: 'Conheça agora',
        ctaHref: '/contato?produto=midiasplay-fila&segmento=saude',
    },
    closingTitle: 'Tecnologia e bem-estar',
    closingText:
        'Ofereça aos seus pacientes uma experiência moderna, informativa e acolhedora. Com o MidiasPlay Fila, sua clínica ou hospital comunica melhor, organiza o atendimento e fortalece sua imagem profissional.',
    seo: {
        title: 'Mídia Indoor para Clínicas e Hospitais | MidiasPlay Fila',
        description:
            'Controle de filas com senhas, comunicação visual, campanhas de saúde e anúncios. Solução completa para recepções de clínicas e hospitais.',
        keywords: ['mídia indoor', 'clínicas', 'hospitais', 'painel de senhas', 'digital signage saúde'],
        image: '/images/segments/health/og.jpg',
    },
    faqs: [
        {
            q: 'O sistema funciona sem internet?',
            a: 'É recomendado internet para atualizações e dados em tempo real. Conteúdos podem ser cacheados conforme configuração.',
        },
        {
            q: 'Posso personalizar layouts com a identidade da clínica?',
            a: 'Sim. É possível ajustar cores, logotipo, fontes e organizar blocos de conteúdo por tela.',
        },
    ],
    badges: ['Clínicas', 'Hospitais', 'Consultórios'],
    theme: {
        primary: '#0ea5e9', // azul saúde
        accent: '#14b8a6',  // água-marinha
        heroBg: 'linear-gradient(180deg, #ecfeff 0%, #ffffff 60%)',
        softBg: '#f8fafc',
    },
};