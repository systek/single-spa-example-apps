const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "Systek",
    projectName: "styles",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    externals: ["react", "react-dom"],
    // modify the webpack config however you'd like to by adding to this object
  });
};
