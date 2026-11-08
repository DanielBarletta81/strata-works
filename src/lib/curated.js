// One project per skill — chosen for structural bones, never two of the same organ.
export const GITHUB_USER = 'DanielBarletta81';

export const CURATED = [
  {
    repo: 'buildboard',
    title: 'BuildBoard',
    layer: 'Product engineering',
    blurb: 'Construction-project tracking built like a product — typed data model, clean TypeScript build, shaped by years on real job sites.',
    stack: ['TypeScript', 'React', 'Next.js'],
  },
  {
    repo: 'noaa-signals-lab',
    title: 'NOAA Signals Lab',
    layer: 'Scientific dashboards & data viz',
    blurb: 'A working adapter → processor → insight pipeline over live NOAA observation feeds, rendered as chart readouts.',
    stack: ['JavaScript', 'Express', 'NOAA APIs'],
  },
  {
    repo: 'mlb-live-event-pipeline',
    title: 'MLB Live Event Pipeline',
    layer: 'Data pipelines & API integration',
    blurb: 'Simulated game events ingested, normalized, and broadcast over WebSockets to a live interface — the full path from feed to screen.',
    stack: ['JavaScript', 'Node', 'WebSockets'],
  },
  {
    repo: 'player-safety-dashboard',
    title: 'Player Safety Dashboard',
    layer: 'Operations & trust-and-safety tooling',
    blurb: 'A Trust & Safety console prototype: moderation queues, case workflows, and an audit trail with reviewer ergonomics in mind.',
    stack: ['TypeScript', 'React', 'Vite'],
  },
  {
    repo: 'Soma_Wellness',
    title: 'Soma Wellness',
    layer: 'Design-led web presence',
    blurb: 'A small-business site with production discipline: fast, search-ready, and designed to convert without shouting.',
    stack: ['TypeScript', 'Next.js'],
  },
];

// Featured builds — private sources, shown via live surfaces instead of the GitHub API.
export const FEATURED = [
  {
    title: 'Microsat Atlas',
    layer: 'Molecular ecology & geospatial genetics',
    blurb: 'Population genetics on an interactive coastal map: load microsatellite assignments as CSV (or paste from Excel) and read structure as geography — spatial outliers, stock composition north to south, trends along the coast. Hand-built SVG, no map libraries, data never leaves the browser.',
    stack: ['Next.js', 'SVG cartography', 'Population genetics'],
    links: [
      ['request a demo', 'mailto:hello@dcbarletta.com?subject=Microsat Atlas demo'],
    ],
  },
  {
    title: 'World of Tethys platform',
    layer: 'Interactive 3D & game systems',
    blurb: 'A bilingual Next.js campaign platform wired to live Roblox experiences, release pipelines, and Blender-to-Luau asset flows. Source private; the world is live.',
    stack: ['Next.js', 'Roblox / Luau', 'Blender'],
    links: [
      ['worldoftethys.com', 'https://worldoftethys.com'],
      ['dcbarletta.com', 'https://dcbarletta.com'],
    ],
  },
];
