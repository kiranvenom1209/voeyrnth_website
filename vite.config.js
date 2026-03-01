import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  ssr: {
    noExternal: ['react-helmet-async']
  },
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        'llms.txt',
        'llm-full.txt',
        'apple-touch-icon.png',
        'bimi/logo.svg',       // Explicitly precache BIMI logo
        'assets/logo/logo.svg', // Explicitly precache main logo
        'assets/logo/logo-gold-200.png' // Explicitly precache gold logo
      ],
      manifest: false, // Use the existing manifest.webmanifest in public/
      workbox: {
        // Force the new SW to activate immediately and claim all clients
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [
          /^\/assets\//,
          /^\/bimi\//,
          /^\/sitemap\.xml$/,
          /^\/llms\.txt$/,
          /^\/llm-full\.txt$/,
          /^\/robots\.txt$/,
          /\.(png|jpg|jpeg|svg|webp|gif|txt|xml|json|webmanifest)$/
        ],
        // One-time purge: delete ALL old runtime caches on SW activation
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/assets/') || url.pathname.startsWith('/bimi/'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'assets-v2',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
              },
              cacheableResponse: {
                statuses: [200]
              },
              networkTimeoutSeconds: 3
            }
          },
          {
            urlPattern: ({ url }) => url.pathname.match(/\.(png|jpg|jpeg|svg|webp|gif)$/),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'images-v2',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
              },
              cacheableResponse: {
                statuses: [200]
              },
              networkTimeoutSeconds: 3
            }
          }
        ]
      }
    })
  ],
})
