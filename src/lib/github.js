import { CURATED, GITHUB_USER } from './curated';

const HEADERS = {
  Accept: 'application/vnd.github+json',
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

async function fetchRepo(name) {
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${name}`, {
      headers: HEADERS,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stars: data.stargazers_count,
      language: data.language,
      pushedAt: data.pushed_at,
      url: data.html_url,
      githubDescription: data.description,
    };
  } catch {
    return null;
  }
}

// Curated entries enriched with live GitHub data; entries render fine when the
// API is unreachable or rate-limited (live fields just stay null).
export async function getProjects() {
  const live = await Promise.all(CURATED.map((p) => fetchRepo(p.repo)));
  return CURATED.map((p, i) => ({
    ...p,
    url: live[i]?.url || `https://github.com/${GITHUB_USER}/${p.repo}`,
    live: live[i],
  }));
}

export function formatPushed(iso) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
