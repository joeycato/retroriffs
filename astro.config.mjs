import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import sirv from 'sirv';
import rehypeExternalLinks from 'rehype-external-links';

// Custom plugin to serve content assets in dev mode
function serveContentAssets() {
  return {
    name: 'serve-content-assets',
    configureServer(server) {
      // Serve /stuff/* from content/blog/stuff/*
      server.middlewares.use('/stuff', sirv('content/blog/stuff', { dev: true }));
    },
  };
}

export default defineConfig({
  site: 'https://joeycato.com',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    plugins: [
      serveContentAssets(),
      viteStaticCopy({
        targets: [
          {
            src: 'content/blog/stuff/*/!(index.md)',
            dest: '.',
            rename: (fileName, fileExtension, fullPath) => {
              const parts = fullPath.split(/[/\\]/);
              const folderIndex = parts.indexOf('stuff') + 1;
              const folder = parts[folderIndex];
              const ext = fileExtension ? `.${fileExtension}` : '';
              return `stuff/${folder}/${fileName}${ext}`;
            },
          },
        ],
      }),
    ],
  },
});
