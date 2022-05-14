loadEnv(process.env.APP_ENV);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

function loadEnv(appEnv = "production") {
  const env = {
    ...require(`./.env/env.${appEnv}`),
    NEXT_PUBLIC_APP_ENV: appEnv,
  };

  Object.entries(env).forEach(([key, value]) => {
    process.env[key] = value;
  });
}
