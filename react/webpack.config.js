const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "Systek",
    projectName: "react",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    externals: ["react", "react-dom"],
  });
};
