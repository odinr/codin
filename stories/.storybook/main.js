const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");



module.exports = {
  stories: ["../src/**/*.stories.ts"],
  addons: ["@storybook/addon-knobs/register"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader")
        }
        // {
        //   loader: require.resolve("react-docgen-typescript-loader")
        // }
      ]
    });
    config.resolve.extensions.push(".ts", ".tsx");

    config.plugins.push(
      new CopyPlugin([
        {
          from: "*/static/**/*",
          to: "static",
          context: "./src",
          transformPath: targetPath => targetPath.replace(/\/static\//, "/")
        }
      ])
    );

    // // find web-components rule for extra transpilation
    const webComponentsRule = config.module.rules.find(rule => {
      // rule.use && rule.use.options && console.log(rule.use.options.presets);
      return rule.use && rule.use.options && rule.use.options.babelrc === false;
    });
    // console.log(webComponentsRule);
    // // add your own `my-library`
    webComponentsRule.test.push(
      new RegExp(`packages(\\/|\\\\)*(\\/|\\\\)lib(\\/|\\\\)(.*)\\.js$`)
    );

    // config.optimization = {
    //   runtimeChunk: 'single',
    //   splitChunks: {
    //     // cacheGroups: {
    //     //   litHtml: {
    //     //     test: /lit-html/,
    //     //     name: "litHtml",
    //     //     chunks: "all"
    //     //   }
    //     // },
    //     cacheGroups: {
    //       litHtml: {
    //         test: /packages|lit-/,
    //         name: "ffs",
    //         chunks: "all"
    //       }
    //     }
    //   }
    // };

    // config.mode = "development";

    // config.experiments = { asset: true};

    return config;
  }
};
