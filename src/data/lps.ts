/**
 * Banco de Dados Estático - Landing Pages
 * 
 * Este arquivo contém todos os dados das LPs para os diferentes nichos.
 * Cada LP possui seu próprio slug, conteúdo e dados de SEO.
 */

export interface LandingPage {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    imageUrl: string;
  };
  benefits: {
    title: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  about: {
    title: string;
    description: string;
    imageUrl: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

/**
 * Array com todas as Landing Pages do projeto
 * Adicione novos nichos seguindo a mesma estrutura
 */
export const landingPages: LandingPage[] = [
  {
    slug: 'agro',
    title: 'Brindes para o Agro',
    subtitle: 'Brindes Personalizados para o Agronegócio',
    description: 'Fortaleça sua marca no agronegócio com brindes personalizados de alta qualidade.',
    hero: {
      headline: 'Brindes Personalizados para o Agronegócio',
      subheadline: 'Fortaleça sua marca no campo com produtos exclusivos e de alta qualidade. Conquiste produtores, cooperativas e distribuidores.',
      ctaText: 'Solicite um Orçamento',
      imageUrl: '/images/agro-hero.jpg'
    },
    benefits: {
      title: 'Por que escolher nossos brindes para o Agro?',
      items: [
        {
          icon: '🌾',
          title: 'Durabilidade Comprovada',
          description: 'Produtos resistentes ao uso intenso no campo, desenvolvidos pensando na rotina do agricultor.'
        },
        {
          icon: '🎯',
          title: 'Personalização Total',
          description: 'Seu logotipo e identidade visual aplicados com perfeição em cada item.'
        },
        {
          icon: '📦',
          title: 'Grandes Volumes',
          description: 'Atendemos cooperativas e empresas com pedidos de qualquer tamanho.'
        },
        {
          icon: '🚚',
          title: 'Entrega em Todo Brasil',
          description: 'Logística ágil para levar seus brindes onde você precisar.'
        }
      ]
    },
    about: {
      title: 'Especialistas em Brindes para o Agronegócio',
      description: 'Com mais de 15 anos de experiência, a Zatto Brazil entende as necessidades específicas do setor agrícola. Oferecemos desde bonés e camisetas até ferramentas personalizadas, sempre com o compromisso de qualidade e entrega no prazo.',
      imageUrl: '/images/agro-about.jpg'
    },
    cta: {
      title: 'Pronto para Fortalecer sua Marca no Agro?',
      description: 'Entre em contato agora e receba uma proposta personalizada para seu negócio.',
      buttonText: 'Falar com Especialista'
    },
    seo: {
      title: 'Brindes Personalizados para Agronegócio | Zatto Brazil',
      description: 'Brindes personalizados de alta qualidade para o agronegócio. Fortaleça sua marca no campo com produtos duráveis e exclusivos. Orçamento grátis!',
      keywords: ['brindes agro', 'brindes agronegócio', 'brindes personalizados campo', 'brindes cooperativa', 'brindes rural']
    }
  },
  {
    slug: 'tecnologia',
    title: 'Brindes para Tecnologia',
    subtitle: 'Brindes Tech para sua Empresa Inovadora',
    description: 'Impressione clientes e colaboradores com brindes tecnológicos modernos e funcionais.',
    hero: {
      headline: 'Brindes Tecnológicos que Fazem a Diferença',
      subheadline: 'Surpreenda seu público com gadgets, acessórios tech e produtos inovadores. Perfeito para startups, empresas de TI e eventos corporativos.',
      ctaText: 'Ver Catálogo Tech',
      imageUrl: '/images/tech-hero.jpg'
    },
    benefits: {
      title: 'Benefícios dos Nossos Brindes Tech',
      items: [
        {
          icon: '💡',
          title: 'Produtos Inovadores',
          description: 'Sempre com as últimas tendências em gadgets e acessórios tecnológicos.'
        },
        {
          icon: '⚡',
          title: 'Alta Qualidade',
          description: 'Produtos testados e certificados, com garantia de funcionamento.'
        },
        {
          icon: '🎨',
          title: 'Design Moderno',
          description: 'Visual clean e contemporâneo, alinhado com a identidade da sua marca tech.'
        },
        {
          icon: '🔋',
          title: 'Utilidade Garantida',
          description: 'Itens que realmente serão usados no dia a dia, mantendo sua marca em evidência.'
        }
      ]
    },
    about: {
      title: 'Parceiro Ideal para Empresas de Tecnologia',
      description: 'Entendemos o universo tech e sabemos o que funciona. Power banks, fones bluetooth, mousepads ergonômicos, suportes para notebook e muito mais. Todos os produtos podem ser personalizados com sua marca.',
      imageUrl: '/images/tech-about.jpg'
    },
    cta: {
      title: 'Leve Inovação para seu Evento',
      description: 'Solicite um orçamento personalizado e descubra as melhores opções tech para sua empresa.',
      buttonText: 'Solicitar Orçamento'
    },
    seo: {
      title: 'Brindes Tecnológicos Personalizados | Zatto Brazil',
      description: 'Brindes tech de alta qualidade: power banks, fones bluetooth, gadgets e muito mais. Personalize com sua marca. Orçamento sem compromisso!',
      keywords: ['brindes tecnológicos', 'brindes tech', 'gadgets personalizados', 'brindes TI', 'brindes startup']
    }
  },
  {
    slug: 'eventos',
    title: 'Brindes para Eventos',
    subtitle: 'Torne seu Evento Inesquecível',
    description: 'Brindes personalizados que deixam uma impressão duradoura nos participantes do seu evento.',
    hero: {
      headline: 'Brindes que Transformam Eventos em Experiências',
      subheadline: 'Seja congresso, feira, workshop ou convenção, temos os brindes perfeitos para engajar seu público e fortalecer sua marca.',
      ctaText: 'Planejar Meus Brindes',
      imageUrl: '/images/eventos-hero.jpg'
    },
    benefits: {
      title: 'Vantagens para seu Evento',
      items: [
        {
          icon: '🎪',
          title: 'Variedade Completa',
          description: 'Desde ecobags até kits completos, temos opções para todos os tipos de evento.'
        },
        {
          icon: '⏱️',
          title: 'Prazos Flexíveis',
          description: 'Produção ágil para atender suas datas, mesmo em eventos de grande porte.'
        },
        {
          icon: '💰',
          title: 'Custo-Benefício',
          description: 'Preços competitivos sem comprometer a qualidade dos produtos.'
        },
        {
          icon: '🎁',
          title: 'Kits Personalizados',
          description: 'Montamos kits exclusivos combinando diferentes produtos conforme sua necessidade.'
        }
      ]
    },
    about: {
      title: 'Experiência em Grandes Eventos',
      description: 'Já atendemos centenas de eventos corporativos, feiras e congressos por todo o Brasil. Nossa equipe especializada ajuda você a escolher os brindes ideais para causar o impacto desejado no seu público.',
      imageUrl: '/images/eventos-about.jpg'
    },
    cta: {
      title: 'Seu Evento Merece os Melhores Brindes',
      description: 'Fale com nosso time e receba uma consultoria gratuita para seu evento.',
      buttonText: 'Consultar Especialista'
    },
    seo: {
      title: 'Brindes para Eventos Corporativos | Zatto Brazil',
      description: 'Brindes personalizados para congressos, feiras e eventos. Qualidade garantida e entrega no prazo. Solicite orçamento grátis para seu evento!',
      keywords: ['brindes para eventos', 'brindes corporativos', 'brindes congresso', 'brindes feira', 'kit evento']
    }
  }
];

/**
 * Função auxiliar para buscar uma LP pelo slug
 * @param slug - Slug da landing page
 * @returns Landing page encontrada ou undefined
 */
export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find(lp => lp.slug === slug);
}

/**
 * Função para obter todos os slugs disponíveis
 * Útil para gerar as rotas estáticas no Next.js
 * @returns Array com todos os slugs
 */
export function getAllSlugs(): string[] {
  return landingPages.map(lp => lp.slug);
}
