# Strata Works

**Software, science, and structure — built in layers.**

The studio portfolio of Daniel C. Barletta. Next.js (app router), hand-built SVG
brand system, and a server-side GitHub integration that enriches a curated project
list with live repository data (ISR, 1h revalidate). See `BRAND.md` for the full
brand identity and services.

## Develop

```bash
npm install
npm run dev     # http://localhost:3140
```

Optional: set `GITHUB_TOKEN` to raise the GitHub API rate limit (the site renders
fine without it — live fields degrade gracefully).

## Endpoints

- `/` — the studio site
- `/api/repos` — curated projects with live GitHub data as JSON
