import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import { unified } from '@astrojs/markdown-remark';
import fs from 'node:fs/promises';
import path from 'node:path';
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

function copyContentAssets() {
  return {
    name: 'copy-content-assets',
    async closeBundle() {
      const sourceRoot = path.resolve('content/blog/stuff');
      const outputRoot = path.resolve('dist');
      const folders = await fs.readdir(sourceRoot, { withFileTypes: true });

      for (const folder of folders) {
        if (!folder.isDirectory()) continue;

        const sourceFolder = path.join(sourceRoot, folder.name);
        const files = await fs.readdir(sourceFolder, { withFileTypes: true });

        for (const file of files) {
          if (!file.isFile() || file.name === 'index.md') continue;

          const destination = path.join(outputRoot, 'stuff', folder.name, file.name);
          await fs.mkdir(path.dirname(destination), { recursive: true });
          await fs.copyFile(path.join(sourceFolder, file.name), destination);
        }
      }
    },
  };
}

export default defineConfig({
  site: 'https://joeycato.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/tags/'),
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  markdown: {
    processor: unified({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['noopener', 'noreferrer'],
          },
        ],
      ],
    }),
  },
  vite: {
    cacheDir: '.astro/vite',
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    plugins: [
      serveContentAssets(),
      copyContentAssets(),
    ],
  },
});
