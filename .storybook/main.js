const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
      "~/components": path.resolve(__dirname, "../src/components"),
      "~/i18n": path.resolve(__dirname, "../src/i18n"),
      "~/utils": path.resolve(__dirname, "../src/utils"),
      "~/hooks": path.resolve(__dirname, "../src/hooks")
    };

    const resourcesLoader = {
      loader: "sass-resources-loader",
      options: {
        resources: [
          path.resolve(__dirname, "../src/components/bosons/layout.scss"),
          path.resolve(__dirname, "../src/components/bosons/colors.scss"),
          path.resolve(__dirname, "../src/components/bosons/typografy.scss"),
          path.resolve(__dirname, "../src/components/bosons/button.scss"),
          path.resolve(__dirname, "../src/components/bosons/card.scss"),
          path.resolve(__dirname, "../src/components/bosons/input.scss"),
          path.resolve(__dirname, "../src/components/quarks/button.scss"),
          path.resolve(__dirname, "../src/components/quarks/card.scss"),
          path.resolve(__dirname, "../src/components/quarks/input.scss"),
          path.resolve(__dirname, "../src/styles/globals.scss")
        ]
      }
    };
    
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[local]--[hash:base64:5]',
            exportLocalsConvention: 'camelCase'
          },
          sourceMap: true,
        }
      }, {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            cssModules: true,
          }
        }
      }],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.map(rule => {
			if (
				rule.test.source.includes("scss") ||
				rule.test.source.includes("sass")
			) {
				rule.use.push(resourcesLoader);
			}
    });
    
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}