import type { PageType } from '../types/solucoes';

export const cinemas: PageType = {
    slug: 'cinemas',
    segmentLabel: 'Cinemas',
    heroKicker: '🎬',
    heroTitle: 'Mídia Indoor para Cinemas',
    heroSubtitle: 'Crie experiências envolventes com trailers, horários e informações em tempo real para seu público.',
    heroImage: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=1600&q=80',
    heroMedia: [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=1600&q=80',
            alt: 'Fachada de cinema com painéis digitais exibindo trailers'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1581905764498-0a3b3a0c59b8?auto=format&fit=crop&w=1600&q=80',
            alt: 'Saguão de cinema com displays mostrando horários e lançamentos'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1600&q=80',
            alt: 'Sala de cinema com projeção e iluminação ambiente moderna'
        },
    ],
    intro:
        'A solução de Mídia Indoor MidiasPlay Padrão foi criada para cinemas que desejam proporcionar uma experiência ainda mais imersiva e informativa para o público. Exiba trailers de lançamentos, tabelas de horários, vídeos interativos e informações em tempo real de forma totalmente automatizada e sincronizada com a identidade do seu cinema.',
    benefits: [
        'Divulgue trailers de filmes e próximos lançamentos de forma atrativa',
        'Exiba a tabela de horários e sessões em tempo real',
        'Mantenha o público informado com conteúdos como hora, clima e notícias',
        'Crie playlists dinâmicas que combinam informação e entretenimento',
        'Transforme o ambiente do cinema em uma experiência tecnológica completa',
    ],
    canShow: [
        'Trailers de filmes e próximos lançamentos',
        'Tabela de horários e sessões atualizadas',
        'Vídeos interativos e informativos',
        'Informações em tempo real (hora, tempo, notícias)',
        'Mensagens institucionais e promoções de combos e produtos da bombonière',
    ],
    product: {
        id: 'midiasplay-padrao',
        name: 'MidiasPlay Padrão',
        badge: 'Recomendado',
        shortDescription:
            'Ideal para cinemas que desejam criar experiências imersivas com trailers, horários e informações em tempo real de forma dinâmica e automatizada.',
        highlights: [
            'Reprodução de trailers e vídeos promocionais em alta definição',
            'Gestão centralizada de horários e campanhas',
            'Integração com dados dinâmicos e informações em tempo real',
        ],
        ctaLabel: 'Conheça agora',
        ctaHref: '/contato?produto=midiasplay-padrao&segmento=cinemas',
    },
    closingTitle: 'Experiência cinematográfica além da tela',
    closingText:
        'Com o MidiasPlay Padrão, seu cinema se transforma em um espaço interativo e moderno. Divulgue trailers, horários e campanhas promocionais com praticidade e estilo, oferecendo uma experiência completa desde o saguão até a sala de exibição.',
    seo: {
        title: 'Mídia Indoor para Cinemas | MidiasPlay Padrão',
        description:
            'Solução de mídia indoor para cinemas. Exiba trailers de filmes, horários, vídeos e informações em tempo real com o MidiasPlay Padrão.',
        keywords: [
            'mídia indoor',
            'cinema',
            'trailers',
            'tabela de horários',
            'digital signage',
            'tv digital',
            'MidiasPlay',
        ],
        image: '/images/segments/cinemas/og.jpg',
    },
    faqs: [
        {
            q: 'É possível integrar a exibição dos horários com o sistema de bilheteria?',
            a: 'Sim. O MidiasPlay pode se integrar com sistemas de bilheteria e APIs para atualização automática da tabela de horários e sessões.',
        },
        {
            q: 'O sistema suporta trailers em alta resolução?',
            a: 'Sim. O MidiasPlay Padrão é otimizado para exibição de vídeos em alta definição, garantindo qualidade e fluidez nas transições.',
        },
    ],
    badges: ['Cinemas', 'Centros de Entretenimento', 'Multiplex', 'Cultura e Lazer'],
    theme: {
        primary: '#dc2626', // vermelho cinema
        accent: '#fbbf24',  // dourado iluminação
        heroBg: 'linear-gradient(180deg, #fef2f2 0%, #ffffff 60%)',
        softBg: '#f9fafb',
    },
};