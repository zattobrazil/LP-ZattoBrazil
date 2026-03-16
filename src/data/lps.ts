export interface LandingPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  bannerTitle: string;
  bannerSubtitle: string;
  catalogLink?: string;
  clientsLogos: Array<{
    url: string;
    altText: string;
    size?: 'small' | 'medium' | 'large' | 'aegea';
  }>;
  positioningText: string;
  carrossel: Array<{
    name: string;
    imageUrl: string;
    altText: string;
  }>;
}

export const DEFAULT_CATALOG_LINK =
  'https://www.canva.com/design/DAGoFjSVOHI/jgTpxA83MGENdPfO5Ge5SQ/view?utm_content=DAGoFjSVOHI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3b1876d186';

// Preencha este mapa quando tiver catalogos personalizados por LP.
export const CATALOG_LINKS_BY_SLUG: Record<string, string> = {
  // Exemplo:
  // 'dia-das-maes-lembrancinha-empresas': 'https://...'
};

export function getCatalogLinkBySlug(slug: string, fallback?: string): string {
  return CATALOG_LINKS_BY_SLUG[slug] ?? fallback ?? DEFAULT_CATALOG_LINK;
}

const clientsDiaDasMaes: LandingPageData['clientsLogos'] = [
  {
    url: '/images/cliente-hyundai.webp',
    altText: 'Logo do cliente Hyundai AutoEver Brasil',
    size: 'large',
  },
  {
    url: '/images/cliente-denso.png',
    altText: 'Logo do cliente Denso',
    size: 'medium',
  },
  {
    url: '/images/cliente-octapharma.webp',
    altText: 'Logo do cliente Octapharma',
  },
  {
    url: '/images/cliente-cpfl.webp',
    altText: 'Logo do cliente CPFL',
    size: 'small',
  },
  {
    url: '/images/cliente-ecoprimos.png',
    altText: 'Logo do cliente Ecoprimos Brindes',
  },
  {
    url: '/images/cliente-ollie.webp',
    altText: 'Logo do cliente Ollie',
    size: 'small',
  },
];

export const landingPages: LandingPageData[] = [
  {
    slug: 'dia-das-maes-lembrancinha-empresas',
    metaTitle: 'Lembrancinha de Dia das Mães para Empresas | Zatto Brazil',
    metaDescription:
      'Ideias de lembrancinhas de Dia das Mães para sua empresa, personalizadas para presentear colaboradoras e clientes.',
    bannerTitle: 'LEMBRANCINHAS PERSONALIZADAS PARA O DIA DAS MÃES',
    bannerSubtitle:
      'Ideias de lembrancinhas de Dia das Mães para sua empresa, personalizadas para presentear colaboradoras e clientes.',
    clientsLogos: clientsDiaDasMaes,
    positioningText:
      'Criamos lembrancinhas corporativas com personalizacao estrategica para fortalecer sua marca no Dia das Maes.',
    carrossel: [
      {
        name: 'Item 1',
        imageUrl:
          '/images/dia-das-maes-lembrancinha-empresas/Espelho-Personalizado-com-Nome-em-Couro-Sintetico-Lembrancinha-Dia-das-Maes.jpeg',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 1',
      },
      {
        name: 'Item 2',
        imageUrl:
          '/images/dia-das-maes-lembrancinha-empresas/Necessaire-personalizada-com-logo-e-frase-Dia-das-Maes.jpg',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 2',
      },
      {
        name: 'Item 3',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Gloss-Brinde-Dia-das-Maes.jpg',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 3',
      },
      {
        name: 'Item 4',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Produto-personalizado-Dia-das-Maes.JPG',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 4',
      },
    ],
  },
  {
    slug: 'dia-das-maes-brindes-corporativos',
    metaTitle: 'Brindes Corporativos para o Dia das Mães | Zatto Brazil',
    metaDescription:
      'Ideias de brindes personalizados para homenagear colaboradoras, clientes e parceiras da sua empresa no Dia das Mães.',
    bannerTitle: 'Brindes Corporativos para o Dia das Mães',
    bannerSubtitle:
      'Ideias de brindes personalizados para homenagear colaboradoras, clientes e parceiras da sua empresa no Dia das Mães.',
    clientsLogos: clientsDiaDasMaes,
    positioningText:
      'Desenvolvemos brindes corporativos de alto valor percebido para campanhas de Dia das Mães com foco em relacionamento.',
    carrossel: [
      {
        name: 'Item 1',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Espelinho-de-bolsa-com-nome-e-logo-personalizado.JPG',
        altText: 'Brindes corporativos para o Dia das Mães - item 1',
      },
      {
        name: 'Item 2',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Necessaire-Dia-das-Maes-Personalizada.jpg',
        altText: 'Brindes corporativos para o Dia das Mães - item 2',
      },
      {
        name: 'Item 3',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Brinde-para-as-maes-lenço-personalizado.jpg',
        altText: 'Brindes corporativos para o Dia das Mães - item 3',
      },
      {
        name: 'Item 4',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Lembrancinha-personalizada-para-as-maes.JPG',
        altText: 'Brindes corporativos para o Dia das Mães - item 4',
      },
    ],
  },
];

export function getLandingPageBySlug(slug: string): LandingPageData | undefined {
  return landingPages.find((page) => page.slug === slug);
}

export function getAllSlugs(): string[] {
  return landingPages.map((page) => page.slug);
}
