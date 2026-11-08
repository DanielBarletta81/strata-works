// One project per skill — chosen for structural bones, never two of the same organ.
export const GITHUB_USER = 'DanielBarletta81';

export const CURATED = [
  {
    repo: 'buildboard',
    title: 'BuildBoard',
    layer: 'Product engineering',
    blurb: 'Construction-project tracking taken from data model to deployed product — software shaped by years on real job sites.',
    stack: ['TypeScript', 'React', 'Node'],
  },
  {
    repo: 'noaa-signals-lab',
    title: 'NOAA Signals Lab',
    layer: 'Scientific dashboards & data viz',
    blurb: 'Instrument-grade readouts over live NOAA observation feeds — hand-built SVG charts, validated palettes, no chart libraries.',
    stack: ['JavaScript', 'SVG', 'NOAA APIs'],
  },
  {
    repo: 'mlb-live-event-pipeline',
    title: 'MLB Live Event Pipeline',
    layer: 'Data pipelines & API integration',
    blurb: 'Live game events ingested, normalized, and streamed to a legible interface — the full path from raw feed to screen.',
    stack: ['JavaScript', 'Node', 'Streaming'],
  },
  {
    repo: 'player-safety-dashboard',
    title: 'Player Safety Dashboard',
    layer: 'Operations & trust-and-safety tooling',
    blurb: 'Moderation queues, policy workflows, and reviewer ergonomics for platform health — an internal console built like a product.',
    stack: ['TypeScript', 'React'],
  },
  {
    repo: 'Soma_Wellness',
    title: 'Soma Wellness',
    layer: 'Design-led web presence',
    blurb: 'A small-business site with production discipline: fast, search-ready, and designed to convert without shouting.',
    stack: ['TypeScript', 'Next.js'],
  },
];

// Private build — featured via its live surfaces instead of the GitHub API.
export const FLAGSHIP = {
  title: 'World of Tethys platform',
  layer: 'Interactive 3D & game systems',
  blurb: 'A bilingual Next.js campaign platform wired to live Roblox experiences, release pipelines, and Blender-to-Luau asset flows. Source private; the world is live.',
  stack: ['Next.js', 'Roblox / Luau', 'Blender'],
  links: [
    ['worldoftethys.com', 'https://worldoftethys.com'],
    ['dcbarletta.com', 'https://dcbarletta.com'],
  ],
};
