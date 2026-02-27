/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita modo estrito do React
  reactStrictMode: true,
  
  // Configurações de imagens
  images: {
    domains: ['localhost'],
    // Adicione aqui os domínios das suas imagens quando usar CDN
    // domains: ['cdn.example.com'],
  },

  // Configurações de compilação
  swcMinify: true,

  // Headers personalizados para SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
