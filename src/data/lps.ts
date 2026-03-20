export interface LandingPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  bannerTitle: string;
  bannerSubtitle: string;
  whatsappMessage: string;
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
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento de lembrancinhas corporativas de Dia das Mães.',
    clientsLogos: clientsDiaDasMaes,
    positioningText:
      'Criamos lembrancinhas corporativas com personalizacao estrategica para fortalecer sua marca no Dia das Maes.',
    carrossel: [
      {
        name: 'Item 1',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Kit-para-as-maes-presentes.JPG',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 1',
      },
      {
        name: 'Item 2',
        imageUrl:
          '/images/dia-das-maes-lembrancinha-empresas/Brinde-personalizado-com-logo-Dia-das-Maes.JPG',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 2',
      },
      {
        name: 'Item 3',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Garrafa-Termica-Com-Nome-E-Logo-Mulheres.jpg',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 3',
      },
      {
        name: 'Item 4',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Embalagem-E-Porta-Joias-Para-Dia-Das-Maes.jpg',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 4',
      },
      {
        name: 'Item 5',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Lembrancinha-Elastico-Beach-Tennis.jpg',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 5',
      },
      {
        name: 'Item 6',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Mini-Lixa-Dia-Das-Mulheres-Lembrancinha.JPG',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 6',
      },
      {
        name: 'Item 7',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Garrafa-Plastica-Mimo-Para-Elas.jpg',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 7',
      },
      {
        name: 'Item 8',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Necessaire-De-Bolsa-Olho-Grego.png',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 8',
      },
      {
        name: 'Item 9',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Gloss-Lembrancinha-Dia-das-Maes.JPG',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 9',
      },
      {
        name: 'Item 10',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Necessaire-personalizada-com-logo-e-frase-Dia-das-Maes.jpg',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 10',
      },
      {
        name: 'Item 11',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/LipGloss.JPG',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 11',
      },
      {
        name: 'Item 12',
        imageUrl: '/images/dia-das-maes-lembrancinha-empresas/Produto-personalizado-Dia-das-Maes.JPG',
        altText: 'Lembrancinha de Dia das Maes para empresas - item 12',
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
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento de brindes corporativos para o Dia das Mães.',
    clientsLogos: clientsDiaDasMaes,
    positioningText:
      'Desenvolvemos brindes corporativos de alto valor percebido para campanhas de Dia das Mães com foco em relacionamento.',
    carrossel: [
      {
        name: 'Item 1',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Garrafa-Termica-Com-Nome-E-Logo-Mulheres.jpg',
        altText: 'Brindes corporativos para o Dia das Mães - item 1',
      },
      {
        name: 'Item 2',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Espelinho-de-bolsa-com-nome-e-logo-personalizado.JPG',
        altText: 'Brindes corporativos para o Dia das Mães - item 2',
      },
      {
        name: 'Item 3',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Garrafa-Plastica-Mimo-Para-Elas.jpg',
        altText: 'Brindes corporativos para o Dia das Mães - item 3',
      },
      {
        name: 'Item 4',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Necessaire-delicada-dia-das-maes-com-logo.jpg',
        altText: 'Brindes corporativos para o Dia das Mães - item 4',
      },
      {
        name: 'Item 5',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Necessaire-Com-Iniciais-Brindes.png',
        altText: 'Brindes corporativos para o Dia das Mães - item 5',
      },
      {
        name: 'Item 6',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Necessaire-para-bolsa-dia-das-maes-brinde.jpg',
        altText: 'Brindes corporativos para o Dia das Mães - item 6',
      },
      {
        name: 'Item 7',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Brinde-para-as-maes-lenço-personalizado.jpg',
        altText: 'Brindes corporativos para o Dia das Mães - item 7',
      },
      {
        name: 'Item 8',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Produto-personalizado-Dia-das-Maes.JPG',
        altText: 'Brindes corporativos para o Dia das Mães - item 8',
      },
      {
        name: 'Item 9',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Gloss-lembrancinha-personalizada.jpg',
        altText: 'Brindes corporativos para o Dia das Mães - item 9',
      },
      {
        name: 'Item 10',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Mini-Lixa-Dia-Das-Mulheres-Lembrancinha 2.JPG',
        altText: 'Brindes corporativos para o Dia das Mães - item 10',
      },
      {
        name: 'Item 11',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Lembrancinha-Elastico-Beach-Tennis.jpg',
        altText: 'Brindes corporativos para o Dia das Mães - item 11',
      },
      {
        name: 'Item 12',
        imageUrl: '/images/dia-das-maes-brindes-corporativos/Lembrancinha-personalizada-para-as-maes.JPG',
        altText: 'Brindes corporativos para o Dia das Mães - item 12',
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
