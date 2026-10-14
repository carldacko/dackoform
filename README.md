# dackoform.com

Statisk sajt byggd med Astro. Bygger till ren HTML i mappen `dist/`.

## Kom igång

    npm install
    npm run dev      # förhandsvisning på http://localhost:4321
    npm run build    # bygger färdig sajt till dist/

## Lägga till ett case

1. Skapa en mapp i `src/content/work/`, till exempel `src/content/work/seb/`.
2. Lägg en omslagsbild där som `cover.jpg`, i full storlek. Astro optimerar den.
3. Kopiera `index.md` från ett befintligt case och fyll i fälten.
4. `order` styr ordningen (lägst först). `draft: true` döljer caset.

Fält med `TODO` i de befintliga casen är platshållare som ska kontrolleras.

## Struktur

- `src/pages/` sidorna (index, work, contact, 404)
- `src/content/work/` ett case per mapp
- `src/layouts/Base.astro` gemensam ram och SEO-taggar
- `src/components/` header, footer, casekort
- `src/styles/global.css` grundstil (ersätts i designfasen)

## Språk

Engelska ligger på roten. Svenska läggs under `src/pages/sv/` när texterna finns, i18n är redan påslaget i `astro.config.mjs`.

## Publicering

Koppla mappen till ett GitHub-repo och anslut det till Netlify eller Cloudflare Pages.
Byggkommando: `npm run build`, publiceringsmapp: `dist`.
