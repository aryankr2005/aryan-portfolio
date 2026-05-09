# Aryan Kumar Portfolio

Interactive mechanical engineering portfolio built with TanStack Start, React 19, Vite, and Three.js.

The site presents Aryan Kumar's work across CAD, CAE, FEM simulation, and product design, including dedicated project pages for lumbar spine vibration analysis, Silico Damp, and MotoPulse.

## Tech Stack

- TanStack Start
- React 19
- Vite 7
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Three Fiber / Drei
- Radix UI

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The app starts locally at:

```text
http://localhost:8080/
```

## Available Scripts

```bash
npm run dev        # start local dev server
npm run build      # create production build
npm run build:dev  # build using development mode
npm run preview    # preview the production build locally
npm run lint       # run ESLint
npm run format     # format the codebase with Prettier
```

## Project Structure

```text
src/
  components/      reusable UI, layout, and 3D scene components
  hooks/           shared React hooks
  lib/             utilities and error handling helpers
  routes/          TanStack file-based routes
  assets/          static assets, including project media
  router.tsx       router setup
  server.ts        server entry used by TanStack Start / Cloudflare build
  start.ts         application bootstrap
  styles.css       global styles
```

## Main Routes

- `/` - landing page and portfolio overview
- `/projects` - engineering project index
- `/projects/lumbar` - lumbar spine FEM case study
- `/projects/silico` - Silico Damp case study
- `/projects/motopulse` - MotoPulse case study
- `/skills` - skills matrix
- `/contact` - contact page

## Notes

- The Vite config is wrapped by `@lovable.dev/vite-tanstack-config`, which already wires up several plugins and local development defaults.
- The project includes `wrangler.jsonc` for Cloudflare-oriented deployment/build integration.

## Development Workflow

1. Install dependencies with `npm install`.
2. Start the app with `npm run dev`.
3. Make changes in `src/`.
4. Run `npm run lint` before shipping changes.
5. Use `npm run build` to verify the production bundle.
