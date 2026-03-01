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
        // Ensure that explicit assets are not ignored by default handling
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [
          /^\/assets\//,
          /^\/bimi\//,
          /^\/sitemap\.xml$/,
          /^\/llms\.txt$/,
          /^\/llm-full\.txt$/,
          /^\/robots\.txt$/,
          /\.(png|jpg|jpeg|svg|webp|gif|txt|xml|json|webmanifest)$/ // Globally exclude all images and data files from navigation fallback
        ],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/assets/') || url.pathname.startsWith('/bimi/'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'assets-cache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 Days
              },
              cacheableResponse: {
                statuses: [200] // Only cache successful responses, avoid caching 404/errors
              }
            }
          },
          {
            urlPattern: ({ url }) => url.pathname.match(/\.(png|jpg|jpeg|svg|webp|gif)$/),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 Days
              },
              cacheableResponse: {
                statuses: [200] // Only cache successful responses
              }
            }
          }
        ]
      }
    })
  ],
})
