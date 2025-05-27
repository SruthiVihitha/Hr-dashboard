/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        '@': './src',
        '@components': './src/components',
        '@lib': './src/lib',
        '@hooks': './src/hooks'
      }
    }
  }
};

module.exports = nextConfig;