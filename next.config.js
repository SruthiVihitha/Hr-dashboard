
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove deprecated turbo config
  turbopack: {
    resolveAlias: {
        '@': './src',
        '@components': './src/components',
        '@lib': './src/lib',
        '@hooks': './src/hooks'
      }

  },
  typescript: {
    ignoreBuildErrors: true, // Temporary during debugging
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporary during debugging
  },
};

module.exports = nextConfig;