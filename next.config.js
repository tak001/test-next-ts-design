const deploymentEnv = process.env.APP_ENV || 'development';
const environment = require(`./.env.${deploymentEnv}.js`);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: environment,
};
