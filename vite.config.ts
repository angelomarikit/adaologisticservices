import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const og = {
  title: 'ADAO Logistic Services | Marilao Bulacan NLEX',
  description:
    'Trucking, sea freight forwarding, container safekeeping, and lift off/out — Marilao NLEX, Bulacan. Safe • Fast • Reliable.',
  imagePath: '/og-image.jpg',
  imageWidth: '1024',
  imageHeight: '341',
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/$/, '')
  const ogImage = siteUrl ? `${siteUrl}${og.imagePath}` : og.imagePath

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'html-og-meta',
        transformIndexHtml(html) {
          let out = html
            .replaceAll('__OG_TITLE__', og.title)
            .replaceAll('__OG_DESCRIPTION__', og.description)
            .replaceAll('__OG_IMAGE__', ogImage)
            .replaceAll('__OG_IMAGE_WIDTH__', og.imageWidth)
            .replaceAll('__OG_IMAGE_HEIGHT__', og.imageHeight)

          if (siteUrl) {
            out = out.replace(
              '<!-- OG_URL -->',
              `<meta property="og:url" content="${siteUrl}/" />`,
            )
          } else {
            out = out.replace('<!-- OG_URL -->', '')
          }
          return out
        },
      },
    ],
  }
})
