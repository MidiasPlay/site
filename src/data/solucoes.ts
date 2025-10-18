import type { PageType } from "../types/page";

// clínicas e hospitais
// açougue e padaria
// varejo (supermercados, farmácias, roupa, material de construção, lojas em geral)
// alimentos (restaurantes, bares, lanchonetes, sorveterias, açaiterias)
// pet shop
// feiras e eventos
// shoppings e galerias
// hotéis
// agências de publicidade, marketing, comunicação e design
// gestão de tráfego e mídias sociais
// indústria
// escritórios corpotarivos
// conveniências e postos de combustível
// redes de lojas e franquias
// universidades, escolas e colégios
// aeroporto
// rodoviária
// oficinas mecânicas
// cinemas

const solucoesList: PageType[] = [
    {
        slug: 'clinicas-e-hospitais',
        title: "Clínicas e Hospitais",
        content: "Soluções para o setor de saúde, incluindo clínicas e hospitais.",
        imageList: []
    },
    {
        slug: 'acougue-e-padaria',
        title: "Açougue e Padaria",
        content: "Soluções para açougues e padarias, otimizando operações e atendimento.",
        imageList: []
    },
    {
        slug: 'varejo',
        title: "Varejo",
        content: "Soluções para o setor de varejo, abrangendo supermercados, farmácias, lojas de roupas, materiais de construção e mais.",
        imageList: []
    },
    {
        slug: 'alimentos',
        title: "Alimentos",
        content: "Soluções para restaurantes, bares, lanchonetes, sorveterias e açaiterias.",
        imageList: []
    },
    {
        slug: 'pet-shop',
        title: "Pet Shop",
        content: "Soluções especializadas para pet shops, melhorando a experiência do cliente e a gestão do negócio.",
        imageList: []
    },
    {
        slug: 'feiras-e-eventos',
        title: "Feiras e Eventos",
        content: "Soluções para a organização e gestão de feiras e eventos.",
        imageList: []
    },
    {
        slug: 'shoppings-e-galerias',
        title: "Shoppings e Galerias",
        content: "Soluções para shoppings e galerias comerciais, otimizando operações e experiência do cliente.",
        imageList: []
    },
    {
        slug: 'hoteis',
        title: "Hotéis",
        content: "Soluções para hotéis, melhorando a gestão e a experiência dos hóspedes.",
        imageList: []
    },
    {
        slug: 'agencias-de-publicidade-marketing-comunicacao-e-design',
        title: "Agências de Publicidade, Marketing, Comunicação e Design",
        content: "Soluções para agências de publicidade, marketing, comunicação e design.",
        imageList: []
    },
    {
        slug: 'gestao-de-trafego-e-midias-sociais',
        title: "Gestão de Tráfego e Mídias Sociais",
        content: "Soluções para gestão de tráfego e mídias sociais, otimizando campanhas e presença online.",
        imageList: []
    },
    {
        slug: 'industria',
        title: "Indústria",
        content: "Soluções para o setor industrial, melhorando processos e eficiência.",
        imageList: []
    },
    {
        slug: 'escritorios-corporativos',
        title: "Escritórios Corporativos",
        content: "Soluções para escritórios corporativos, otimizando operações e ambiente de trabalho.",
        imageList: []
    },
    {
        slug: 'conveniencias-e-postos-de-combustivel',
        title: "Conveniências e Postos de Combustível",
        content: "Soluções para conveniências e postos de combustível, melhorando a gestão e atendimento ao cliente.",
        imageList: []
    },
    {
        slug: 'redes-de-lojas-e-franquias',
        title: "Redes de Lojas e Franquias",
        content: "Soluções para redes de lojas e franquias, otimizando operações e expansão.",
        imageList: []
    },
    {
        slug: 'universidades-escolas-e-colegios',
        title: "Universidades, Escolas e Colégios",
        content: "Soluções para instituições de ensino, melhorando a gestão acadêmica e administrativa.",
        imageList: []
    },
    {
        slug: 'aeroportos',
        title: "Aeroportos",
        content: "Soluções para aeroportos, otimizando operações e experiência dos passageiros.",
        imageList: []
    },
    {
        slug: 'rodoviarias',
        title: "Rodoviárias",
        content: "Soluções para rodoviárias, melhorando a gestão e atendimento aos viajantes.",
        imageList: []
    },
    {
        slug: 'oficinas-mecanicas',
        title: "Oficinas Mecânicas",
        content: "Soluções para oficinas mecânicas, otimizando processos e atendimento ao cliente.",
        imageList: []
    },
    {
        slug: 'cinemas',
        title: "Cinemas",
        content: "Soluções para cinemas, melhorando a gestão e experiência dos espectadores.",
        imageList: []
    }
]