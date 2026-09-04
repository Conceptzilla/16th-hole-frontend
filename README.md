# 16th Hole frontend

Responsive landing page for a private members golf club, built with Next.js, React, TypeScript, and plain CSS.

## Requirements

- Node.js 22.13 or newer
- npm 10 or newer

## Getting started

```bash
npm install
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

## Assets

The repository contains project photography, generated imagery, Inter Tight, and Big Daily Short Trial font files. Confirm the applicable usage rights—especially the trial font license—before public or commercial deployment.
