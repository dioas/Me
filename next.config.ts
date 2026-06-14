import type { NextConfig } from 'next';

// basePath/assetPrefix are needed when deploying to a GitHub Pages *project*
// page (e.g. username.github.io/Me). Set PAGES_BASE_PATH="/Me" in the CI env.
// Leave it empty for Vercel or a custom domain.
const basePath = process.env.PAGES_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  // Exposed to the client so plain <img>/<a> asset URLs can be prefixed too
  // (next/image + unoptimized does not apply basePath automatically).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
