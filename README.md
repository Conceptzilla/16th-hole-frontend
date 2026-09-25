# 16th Hole frontend

Responsive landing page for a private members golf club, built with Next.js, React, TypeScript, and plain CSS.

Design: [16th Hole — Figma](https://www.figma.com/design/3GJcd4U4SUlmF8x4zNYik1/?node-id=388-21647). Component correspondence, maturity and pairing scope are described in [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md).

This evaluation draft is not redistribution-ready: the display font is a Trial font. Read [ASSET-NOTICE.md](ASSET-NOTICE.md) before publishing or transferring the package.

## Requirements

- Node.js 22.13 or newer
- npm 10 or newer

## Getting started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available commands

- `npm run dev` — start the local development server
- `npm run lint` — run the ESLint quality checks
- `npm run typecheck` — validate TypeScript types
- `npm run build` — create a production build
- `npm start` — serve the production build
- `npm test` — run all repository checks

## Project structure

```text
src/
  app/                       Next.js App Router entry points, fonts, and styles
  components/16th-hole/      Landing-page sections and interactions
public/
  assets/16th-hole/          Images and icons used by the page
```

## Configuration

`NEXT_PUBLIC_SITE_URL` is optional during local development. Set it to the deployed origin so Open Graph metadata resolves to the production URL. See `.env.example`.

The navigation and contact destinations are presentation links. Replace the placeholder email destination before production use.

The page shows a dismissible first-visit notice stating that the concept is not for commercial use, identifying Shakuro as its portfolio creator, and clarifying that it is not a live service or client-commissioned product.

## Assets

Third-party assets retain their own licensing requirements. The portfolio disclaimer does not replace those permissions; see [ASSET-NOTICE.md](ASSET-NOTICE.md).
