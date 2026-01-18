# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to dist/
npm run preview   # Preview production build
npm run format    # Format .astro and .ts files with Prettier
npm run lint      # Check formatting
npm run check     # Run Astro type checking
npm run clean     # Remove dist, node_modules, .astro
```

## Architecture

This is an Astro 5 static blog site for joeycato.com.

### Content Structure

- Blog posts live in `content/blog/stuff/<post-slug>/index.md` with co-located assets (images, etc.)
- Content schema defined in `src/content.config.ts`: title, tags[], date, img (optional), excerpt (optional)
- The glob loader pattern `**/index.md` collects all posts

### Routing

- `/` - Home page listing all posts sorted by date (src/pages/index.astro)
- `/stuff/<slug>/` - Individual post pages (src/pages/stuff/[...slug].astro)
- `/tags/` - Tag index (src/pages/tags/index.astro)
- `/tags/<tag>/` - Posts filtered by tag (src/pages/tags/[tag].astro)

### Asset Handling

In development, a custom Vite plugin (`serveContentAssets`) serves assets from `content/blog/stuff/` at `/stuff/`. For production builds, `vite-plugin-static-copy` copies non-markdown assets to `dist/stuff/<folder>/`.

### Styling

SCSS with partials in `src/styles/`. Main entry is `main.scss`. Uses self-hosted fonts (@fontsource/lato, @fontsource/pt-serif).

### Layout

Single `BaseLayout.astro` wraps all pages with sidebar, metadata, and Google Analytics (via Partytown for offloading).

### Key Integrations

- `@astrojs/sitemap` - Generates sitemap.xml
- `@astrojs/partytown` - Offloads analytics scripts to web worker
- `rehype-external-links` - Opens external links in new tabs with noopener/noreferrer

### Commands

You should always assume I'm running from a PowerShell terminal
