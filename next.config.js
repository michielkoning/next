/** @type {import('next').NextConfig} */

const StylelintPlugin = require("stylelint-webpack-plugin"); // line to add
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
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
};

module.exports = nextConfig;
