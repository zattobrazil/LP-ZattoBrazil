# Zatto Brazil - Sistema de Landing Pages Dinâmicas

Sistema de One Page com rotas dinâmicas para múltiplos nichos, desenvolvido com Next.js 14 (App Router), React, TypeScript e Tailwind CSS.

## 🎯 Conceito do Projeto

O Zatto Brazil utiliza uma arquitetura de "Página Mestre" que é replicada dinamicamente para 22 nichos diferentes, alterando apenas os dados (textos, imagens e SEO). Cada nicho possui sua própria URL otimizada para SEO.

## 🚀 Estrutura do Projeto

```
ZattoBrazil/
├── src/
│   ├── app/
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Página dinâmica para cada nicho
│   │   ├── layout.tsx             # Layout global + SEO base
│   │   ├── page.tsx               # Home (One Page principal)
│   │   └── globals.css            # Estilos globais Tailwind
│   └── data/
│       └── lps.ts                 # Banco de dados estático das LPs
├── public/                        # Arquivos estáticos (imagens, etc)
├── next.config.js                 # Configurações Next.js
├── tailwind.config.ts             # Configurações Tailwind CSS
├── tsconfig.json                  # Configurações TypeScript
└── package.json                   # Dependências do projeto
```

## 📦 Tecnologias Utilizadas

- **Next.js 14** (App Router) - Framework React com SSG/SSR
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Processamento de CSS

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🎨 Como Funciona

### 1. Banco de Dados Estático (`src/data/lps.ts`)

Contém todos os dados das landing pages em um array TypeScript:

```typescript
export interface LandingPage {
  slug: string;           // URL da página (ex: 'agro')
  title: string;          // Título do nicho
  hero: { ... };          // Dados da seção hero
  benefits: { ... };      // Benefícios específicos
  about: { ... };         // Sobre o nicho
  cta: { ... };           // Call-to-action
  seo: { ... };           // Metadados para SEO
}
```

### 2. Página Home (`src/app/page.tsx`)

Página principal do site (zattobrazil.com.br) que serve como vitrine e apresenta todos os nichos disponíveis.

### 3. Rotas Dinâmicas (`src/app/[slug]/page.tsx`)

- Captura a URL através do parâmetro `[slug]`
- Busca os dados correspondentes no `lps.ts`
- Renderiza a página com o layout da "Página Mestre"
- Gera metadados únicos para cada nicho

**Exemplos de URLs:**
- `/agro` → Brindes para o Agro
- `/tecnologia` → Brindes para Tecnologia
- `/eventos` → Brindes para Eventos

### 4. SEO Técnico

Cada rota dinâmica possui:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  // Gera metadados únicos para cada página
  return {
    title: lpData.seo.title,
    description: lpData.seo.description,
    keywords: lpData.seo.keywords,
    openGraph: { ... },
    twitter: { ... }
  };
}
```

## ➕ Adicionando Novos Nichos

Para adicionar um novo nicho, basta adicionar um novo objeto ao array `landingPages` em `src/data/lps.ts`:

```typescript
{
  slug: 'novo-nicho',
  title: 'Brindes para Novo Nicho',
  // ... demais campos
}
```

O Next.js irá gerar automaticamente a nova rota durante o build.

## 🎯 Funcionalidades de SEO

- ✅ Title e Description únicos por página
- ✅ Keywords específicas por nicho
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Structured Data (Schema.org)
- ✅ Sitemap automático
- ✅ Robots.txt otimizado
- ✅ Static Site Generation (SSG)

## 🚀 Deploy

O projeto está otimizado para deploy na Vercel:

```bash
# Deploy automático via Git
vercel --prod
```

Ou use outros provedores como:
- Netlify
- AWS Amplify
- Digital Ocean App Platform

## 📝 Notas Importantes

1. **Imagens**: Substitua os placeholders de imagens em `lpData.hero.imageUrl` por URLs reais
2. **Contatos**: Atualize os números de WhatsApp e e-mails nos CTAs
3. **Google Verification**: Adicione seu código do Google Search Console em `src/app/layout.tsx`
4. **Analytics**: Integre Google Analytics ou outra ferramenta de análise

## 🔧 Customização

### Cores da Marca
Edite as cores em `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#3b82f6', // Azul principal
    // ...
  }
}
```

### Fontes
Altere a fonte em `src/app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google';
// Substitua por outra fonte do Google Fonts
```

## 📄 Licença

Este projeto é privado e pertence à Zatto Brazil.

---

Desenvolvido com ❤️ por um Engenheiro Front-end Sênior
