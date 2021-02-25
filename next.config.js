const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

const path = require('path');
const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const css = require('@zeit/next-css');
const sass = require('@zeit/next-sass');

const resourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      path.resolve(__dirname, 'src/components/bosons/layout.scss'),
      path.resolve(__dirname, 'src/components/bosons/colors.scss'),
      path.resolve(__dirname, 'src/components/bosons/typografy.scss'),
      path.resolve(__dirname, 'src/components/bosons/button.scss'),
      path.resolve(__dirname, 'src/components/bosons/card.scss'),
      path.resolve(__dirname, 'src/components/bosons/input.scss'),
      path.resolve(__dirname, 'src/components/quarks/button.scss'),
      path.resolve(__dirname, 'src/components/quarks/card.scss'),
      path.resolve(__dirname, 'src/components/quarks/input.scss'),
      path.resolve(__dirname, 'src/styles/globals.scss'),
      path.resolve(__dirname, 'src/styles/reset.scss'),
    ],
  },
};

const cssConfig = {
  cssModules: true,
};

const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]__[local]___[hash:base64:5]',
    camelCase: true,
  },
};

const imagesConfig = {
  exclude: path.resolve(__dirname, 'src/assets/icons'),
};

const nextConfig = {
  webpack: (config) => {
    config.module.rules.map((rule) => {
      if (rule.test && (rule.test.source.includes('scss') || rule.test.source.includes('sass'))) {
        rule.use.push(resourcesLoader);
      }
      return rule;
    });

    return config;
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },

};

module.exports = withPlugins([
  [sass, sassConfig],
  [css, cssConfig],
  [images, imagesConfig],
], nextConfig);
