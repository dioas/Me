export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/**
 * Prefixes a root-absolute asset path with the deployment base path.
 * Needed for GitHub Pages project pages where the site lives under /<repo>.
 */
export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE_PATH}${path}`;
}
