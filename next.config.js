const deploymentEnv = process.env.APP_ENV || 'development';
const environment = require(`./.env.${deploymentEnv}.js`);

console.log('conf', process.env.APP_ENV);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: { APP_ENV: process.env.APP_ENV, ...environment },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${environment.API_URL}/api/:path*`,
      },
    ];
  },
};
