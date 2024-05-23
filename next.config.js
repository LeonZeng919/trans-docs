const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

module.exports = withNextra({
  webpack(config) {
    const allowedSvgRegex = /components\/icons\/.+\.svg$/;

    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    fileLoaderRule.exclude = allowedSvgRegex;

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  redirects: () => [
    {
      source: "/docs/guide/:slug(typescript|latex|tailwind-css|mermaid)",
      destination: "/docs/guide/advanced/:slug",
      permanent: true,
    },
    {
      source: "/docs/docs-theme/built-ins/:slug(callout|steps|tabs)",
      destination: "/docs/guide/built-ins/:slug",
      permanent: true,
    },
  ],
});
