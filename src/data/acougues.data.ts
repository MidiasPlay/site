import type { PageType } from '../types/solucoes';

export const acougues: PageType = {
    slug: 'acougues',
    segmentLabel: 'Açougues',
    heroKicker: '🥩',
    heroTitle: 'Mídia Indoor para Açougues',
    heroSubtitle: 'Destaque suas ofertas e produtos com comunicação digital atrativa e moderna.',
    heroImage: 'https://public.midiasplay.com/site/solucao-acougue.webp',
    heroMedia: [
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1625943555737-9e22bc3f8c16?auto=format&fit=crop&w=1600&q=80',
            alt: 'Vitrine de açougue com telas exibindo promoções'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1604908177073-6413b32eac97?auto=format&fit=crop&w=1600&q=80',
            alt: 'Corte de carnes frescas exposto com display digital ao fundo'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1603046891744-87d3e2fbcf6b?auto=format&fit=crop&w=1600&q=80',
            alt: 'Área de atendimento de açougue com mídia indoor exibindo tabela de preços'
        },
    ],
    intro:
        'A solução de Mídia Indoor MidiasPlay Padrão foi desenvolvida especialmente para açougues e casas de carnes que desejam modernizar sua comunicação com os clientes. Com o MidiasPlay, é possível exibir tabelas de preços, ofertas e promoções, além de vídeos e imagens de produtos de forma visual e dinâmica, criando uma experiência de compra mais informativa e atrativa.',
    benefits: [
        'Atualização fácil de preços e promoções diretamente pela plataforma web',
        'Atraia a atenção dos clientes com vídeos e imagens de cortes e produtos especiais',
        'Aumente as vendas com campanhas visuais que destacam produtos do dia',
        'Melhore a experiência no ponto de venda com comunicação clara e moderna',
        'Transmita credibilidade e profissionalismo ao modernizar a fachada e o balcão de atendimento',
    ],
    canShow: [
        'Tabela de preços de carnes e produtos frescos',
        'Ofertas e promoções do dia ou da semana',
        'Imagens e vídeos de produtos e cortes especiais',
        'Mensagens institucionais e comunicados internos',
        'Conteúdos de apoio como dicas de preparo ou receitas rápidas',
    ],
    product: {
        id: 'midiasplay-padrao',
        name: 'MidiasPlay Padrão',
        badge: 'Recomendado',
        shortDescription:
            'Ideal para açougues e casas de carnes que desejam exibir preços, ofertas e vídeos de produtos com praticidade e impacto visual.',
        highlights: [
            'Gestão centralizada e fácil atualização de conteúdo',
            'Suporte a imagens, vídeos e listas de preços dinâmicas',
            'Layout personalizável para promoções e campanhas sazonais',
        ],
        ctaLabel: 'Conheça agora',
        ctaHref: '/contato?produto=midiasplay-padrao&segmento=acougues',
    },
    closingTitle: 'Comunicação que vende mais',
    closingText:
        'Com o MidiasPlay Padrão, seu açougue ganha destaque e dinamismo. Divulgue ofertas, mostre produtos frescos e mantenha uma comunicação moderna e envolvente com seus clientes.',
    seo: {
        title: 'Mídia Indoor para Açougues | MidiasPlay Padrão',
        description:
            'Solução de mídia indoor para açougues e casas de carnes. Exiba preços, promoções e vídeos de produtos com o MidiasPlay Padrão. Comunicação moderna e fácil de atualizar.',
        keywords: [
            'mídia indoor',
            'açougue',
            'carnes',
            'promoções',
            'digital signage',
            'ofertas',
            'tv de preços',
        ],
        image: '/images/segments/acougues/og.jpg',
    },
    faqs: [
        {
            q: 'Posso atualizar os preços e promoções facilmente?',
            a: 'Sim. O painel de controle do MidiasPlay permite editar e publicar novas ofertas ou tabelas de preços em tempo real, de forma simples e rápida.',
        },
        {
            q: 'É possível exibir vídeos de produtos ou receitas?',
            a: 'Sim. Você pode incluir vídeos promocionais, receitas e conteúdos visuais personalizados diretamente nas telas do seu açougue.',
        },
    ],
    badges: ['Açougues', 'Casas de Carnes', 'Empórios de Carnes'],
    theme: {
        primary: '#b91c1c', // vermelho carne
        accent: '#f59e0b',  // dourado promoção
        heroBg: 'linear-gradient(180deg, #fef2f2 0%, #ffffff 60%)',
        softBg: '#f9fafb',
    },
};