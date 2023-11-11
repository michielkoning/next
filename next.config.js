const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["nl-NL"],
    defaultLocale: "nl-NL",
  },
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withPWA(nextConfig);
