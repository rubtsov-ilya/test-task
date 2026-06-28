import type { NextConfig } from 'next';
import path from 'path';
/* const withSvgr = require('next-svgr'); */

const nextConfig: NextConfig = {
  // Поддержка SCSS
  sassOptions: {
    includePaths: [path.join(__dirname, '.')],
  },

  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 5000,
        aggregateTimeout: 300,
      }
    }
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    config.resolve.alias['src'] = path.resolve(__dirname, 'src');
    return config
  },

  // Настройки TypeScript
  //typescript: {
  //  ignoreBuildErrors: true, // Игнорировать ошибки при сборке (если это необходимо)
  //},
};

module.exports = nextConfig
export default nextConfig;
