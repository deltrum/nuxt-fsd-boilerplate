# Nuxt FSD Boilerplate

A production-ready [Nuxt 3](https://nuxt.com) starter using [Feature-Sliced Design](https://feature-sliced.design/) architecture, TypeScript, Pinia, Vitest, ESLint, and Stylelint.

## Tech Stack

| Tool | Purpose |
|---|---|
| **Nuxt 3** | Vue meta-framework (SSR, file-based routing, auto-imports) |
| **TypeScript** | Static typing |
| **Pinia** | State management |
| **Vitest** | Unit & component testing |
| **ESLint** | Code linting & formatting (via `@nuxt/eslint` + Stylistic) |
| **Stylelint** | CSS / Vue `<style>` linting & formatting |
| **Yarn** | Package manager |

## Project Structure (FSD)

```
├── app/                  # App layer — layouts, global styles, plugins
│   ├── layouts/
│   └── styles/
├── pages/                # Pages layer — route entry points
├── widgets/              # Widgets layer — composite UI blocks
│   └── header/
├── features/             # Features layer — user interactions
│   └── counter/
│       ├── model/        # Pinia store / composables
│       └── ui/           # Feature components
├── entities/             # Entities layer — business objects
├── shared/               # Shared layer — reusable foundation
│   ├── api/              # API client
│   ├── config/           # Constants & runtime config
│   ├── lib/              # Utility functions
│   ├── ui/               # UI kit components (prefixed Shared*)
│   └── types/            # Shared TypeScript types
├── server/               # Nuxt server routes & API
├── tests/                # Test files
└── public/               # Static assets
```

**FSD import rule:** layers can only import from layers below them.

`pages → widgets → features → entities → shared`

## Prerequisites

- **Node.js** >= 22 (see `.nvmrc` / `.node-version`)
- **Yarn** 1.x

## Getting Started

```bash
# Install dependencies
yarn install

# Start dev server (http://localhost:3000)
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Scripts

| Command | Description |
|---|---|
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build |
| `yarn generate` | Static site generation |
| `yarn lint` | Lint with ESLint |
| `yarn lint:fix` | Lint & auto-fix with ESLint |
| `yarn lint:style` | Lint styles with Stylelint |
| `yarn lint:style:fix` | Lint & auto-fix styles |
| `yarn lint:all` | Run both linters |
| `yarn lint:all:fix` | Auto-fix both linters |
| `yarn test` | Run tests once |
| `yarn test:watch` | Run tests in watch mode |
| `yarn test:coverage` | Run tests with coverage |
| `yarn typecheck` | TypeScript type checking |

## Adding a New Feature (FSD Slice)

1. Create the slice directory:
   ```
   features/
     my-feature/
       model/        # Store or composable
       ui/           # Vue components
       api/          # API calls (optional)
       lib/          # Slice-specific utils (optional)
       index.ts      # Public API
   ```
2. Components placed under `features/my-feature/ui/` are auto-imported with the path prefix.
3. Composables placed under `features/my-feature/model/` are auto-imported.

## IDE Setup

Install the recommended VS Code extensions (prompted automatically):

- **Vue - Official (Volar)**
- **ESLint**
- **Stylelint**
- **EditorConfig**

## License

MIT
