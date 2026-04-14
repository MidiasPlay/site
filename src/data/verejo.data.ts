import type { PageType } from '../types/solucoes';

export const varejo: PageType = {
    slug: 'varejo',
    segmentLabel: 'Varejo',
    heroKicker: '🛒',
    heroTitle: 'Mídia Indoor para o Varejo',
    heroSubtitle:
        'Transforme sua loja em uma poderosa vitrine digital: aumente vendas, engaje clientes e comunique com eficiência.',
    heroImage: 'https://public.midiasplay.com/site/solucao-mercado.webp',
    heroMedia: [
        {
            type: 'image',
            src: 'https://public.midiasplay.com/site/solucao-mercado-2.webp',
            alt: 'Supermercado com telas exibindo ofertas e promoções'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80',
            alt: 'Loja de roupas com displays digitais apresentando novos produtos'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1556741533-f6acd647ab9c?auto=format&fit=crop&w=1600&q=80',
            alt: 'Farmácia com monitores digitais mostrando promoções e campanhas de saúde'
        },
    ],
    intro:
        'O setor de Varejo é o coração do consumo e o segmento de maior potencial para mídia indoor. Nossa solução oferece uma experiência completa para supermercados, farmácias, lojas de roupas, materiais de construção, pet shops e comércios em geral, combinando tecnologia, comunicação e estratégia. \
        Com o MidiasPlay, você pode potencializar vendas, promover produtos, informar clientes e engajar colaboradores — tudo em uma única plataforma integrada.',
    benefits: [
        'Aumente o faturamento com campanhas de vídeo e promoções dinâmicas nos pontos de maior visibilidade',
        'Gerencie toda a comunicação visual da sua loja de forma centralizada e em tempo real',
        'Crie uma nova fonte de receita revendendo espaço de mídia para fornecedores e parceiros comerciais',
        'Ofereça experiências mais imersivas e modernas com conteúdos multimídia e informativos',
        'Melhore a comunicação interna com uma solução de TV Corporativa voltada aos colaboradores',
        'Unifique sua estratégia de marketing entre setores como açougue, padaria, bazar, vestuário e mais',
    ],
    canShow: [
        'Ofertas e promoções em destaque nas seções de maior fluxo',
        'Imagens e vídeos de produtos, combos e lançamentos',
        'Informações em tempo real (tempo, hora, notícias, clima)',
        'TV Corporativa com comunicados internos e campanhas institucionais',
        'Campanhas de fornecedores e anunciantes locais',
    ],
    product: {
        id: 'midiasplay-padrao',
        name: 'MidiasPlay Padrão e MidiasPlay Fila',
        badge: 'Destaque',
        shortDescription:
            'Soluções ideais para o Varejo — desde a comunicação promocional até o controle de filas e TV Corporativa. Modernize sua loja e aumente resultados.',
        highlights: [
            'Gestão centralizada e atualização em tempo real de todas as telas',
            'Exibição de vídeos, ofertas, informações e campanhas de fornecedores',
            'Integração com controle de filas (açougue e padaria) via MidiasPlay Fila',
        ],
        ctaLabel: 'Solicite uma demonstração',
        ctaHref: '/contato?produto=midiasplay-padrao&segmento=varejo',
    },
    closingTitle: 'Transforme seu ponto de venda em um ponto de experiência',
    closingText:
        'O MidiasPlay é muito mais do que um sistema de mídia indoor — é uma ferramenta estratégica para o varejo moderno. \
        Com ele, sua loja ganha poder de comunicação, agilidade operacional e novas oportunidades de monetização. \
        Atraia clientes, engaje equipes e conquiste fornecedores com uma plataforma feita para vender mais e comunicar melhor.',
    seo: {
        title: 'Mídia Indoor para o Varejo | MidiasPlay Padrão e Fila',
        description:
            'Solução completa de mídia indoor para o varejo. Aumente vendas, engaje clientes e fortaleça sua marca com o MidiasPlay — ideal para supermercados, farmácias, pet shops e lojas em geral.',
        keywords: [
            'mídia indoor',
            'varejo',
            'supermercado',
            'farmácia',
            'pet shop',
            'digital signage',
            'tv corporativa',
            'promoções',
            'MidiasPlay',
        ],
        image: '/images/segments/varejo/og.jpg',
    },
    faqs: [
        {
            q: 'Posso gerenciar várias lojas ao mesmo tempo?',
            a: 'Sim. O MidiasPlay permite o controle centralizado de todas as unidades, possibilitando campanhas unificadas ou segmentadas por loja, setor ou região.',
        },
        {
            q: 'É possível integrar a comunicação do açougue e padaria com o sistema de senhas?',
            a: 'Sim. O MidiasPlay Fila foi desenvolvido especialmente para setores como açougue e padaria, integrando controle de filas e exibição de conteúdos multimídia no mesmo painel.',
        },
        {
            q: 'Posso vender espaço publicitário para fornecedores?',
            a: 'Sim. A plataforma foi pensada para gerar novas fontes de receita permitindo anúncios de marcas e parceiros diretamente nas telas do seu estabelecimento.',
        },
    ],
    badges: [
        'Supermercados',
        'Farmácias',
        'Lojas de Roupas',
        'Materiais de Construção',
        'Pet Shops',
        'Varejo em Geral',
    ],
    theme: {
        primary: '#2563eb', // azul destaque corporativo
        accent: '#16a34a',  // verde crescimento e vendas
        heroBg: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 60%)',
        softBg: '#f9fafb',
    },
};