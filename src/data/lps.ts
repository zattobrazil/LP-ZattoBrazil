export interface LandingPageData {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  catalogLink?: string;
  clientsLogos: string[];
  positioningText: string;
  kitsList: string[];
}

export const landingPages: LandingPageData[] = [
  {
    slug: 'dia-das-maes',
    heroTitle: 'Presentes corporativos que encantam no Dia das Mães',
    heroSubtitle:
      'Kits personalizados com a identidade da sua marca para surpreender colaboradoras e clientes nesta data especial.',
    clientsLogos: [
      '/images/clients/logo-01.png',
      '/images/clients/logo-02.png',
      '/images/clients/logo-03.png',
      '/images/clients/logo-04.png',
      '/images/clients/logo-05.png',
      '/images/clients/logo-06.png',
    ],
    positioningText:
      'A Zatto Brazil é especialista em criar experiências memoráveis por meio de brindes premium. Cada kit é pensado para transmitir carinho e fortalecer o vínculo entre sua marca e quem mais importa.',
    kitsList: [
      'Kit Bem-Estar Spa',
      'Kit Aromas & Sabores',
      'Kit Plantinha com Amor',
      'Kit Doces Especiais',
      'Kit Home Office Deluxe',
      'Kit Beleza Personalizado',
    ],
  },
];
