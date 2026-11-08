import { getProjects } from '../../../lib/github';

export const revalidate = 3600;

export async function GET() {
  const projects = await getProjects();
  return Response.json({
    studio: 'Strata Works',
    curationRule: 'one project per layer',
    projects: projects.map(({ repo, title, layer, blurb, stack, url, live }) => ({
      repo, title, layer, blurb, stack, url,
      language: live?.language ?? null,
      stars: live?.stars ?? null,
      pushedAt: live?.pushedAt ?? null,
    })),
  });
}
