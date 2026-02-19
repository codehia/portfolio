# Portfolio — [sacharya.dev](https://sacharya.dev)

Personal portfolio built with [Astro 5](https://astro.build/) using the [Spectre](https://github.com/louisescher/spectre) theme. Refer to the [Getting Started](src/content/posts/getting-started.mdx) post in the repo for theme configuration details.

## Quick Start

```bash
pnpm install
pnpm dev        # Dev server at localhost:4321
pnpm build      # Production build (includes Pagefind search indexing)
pnpm preview    # Preview production build
```

## What to Edit

### Content (`src/content/`)

This is where most day-to-day changes happen:

| File / Folder | What it controls |
|---|---|
| `posts/*.mdx` | Blog posts (frontmatter: `title`, `description`, `image`, `createdAt`, `tags`, `draft`) |
| `projects/*.mdx` | Project showcases (frontmatter: `title`, `date`, `description`, `image`, `info[]`) |
| `other/about.mdx` | About section on the homepage |
| `info.json` | Quick facts displayed on homepage sidebar (name, email, location) |
| `socials.json` | Social links shown on homepage sidebar |
| `work.json` | Work experience entries |
| `tags.json` | Valid tag IDs that blog posts can reference |
| `assets/` | Images used by posts and projects (referenced via relative paths in frontmatter) |

Dates in frontmatter use `MM-DD-YYYY` format.

### Site Configuration (`astro.config.ts`)

Controls site name, OpenGraph metadata, and Giscus comments (currently disabled). These are passed to the custom Spectre integration and available globally via `import { ... } from 'spectre:globals'`.

### Pages (`src/pages/`)

Astro file-based routing. Edit these to change page structure/layout:

- `index.astro` — Homepage
- `blog.astro` / `blog/[post].astro` — Blog listing and individual posts
- `projects.astro` / `projects/[project].astro` — Projects listing and individual projects
- `404.astro` — Not found page

### Styling (`src/styles/`)

Vanilla CSS with CSS custom properties. Key files:

- `globals.css` — Theme variables (colors, fonts)
- `article.css` — Blog post styling
- `index.css` — Homepage styling

### Components (`src/components/`)

Reusable Astro components — `Layout.astro` (page wrapper with SEO), `Navbar.astro` (navigation + search), `Card.astro`, `Icon.astro`, `ImageGlow.astro`, `LayoutGrid.astro`.

### Static Assets (`public/`)

Files served as-is: favicons, OG images, etc.

## GitHub Actions

The deployment workflow lives at `.github/workflows/deploy.yml`. It triggers on pushes to `master` and deploys the static build to GitHub Pages via `actions/deploy-pages`.

## Linting

Uses [Biome](https://biomejs.dev/) — config in `biome.jsonc`.

```bash
pnpm lint       # Check
pnpm lint:fix   # Auto-fix
```
