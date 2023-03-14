
import webpack from "webpack";

export default async function override(config, env) {
  console.log("override...");
  let loaders = config.resolve;
  loaders.fallback = {
    fs: false,
    http: require.resolve("stream-http"),
    zlib: require.resolve("browserify-zlib"),
    path: require.resolve("path-browserify"),
    crypto: require.resolve("crypto-browserify"),
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  config.ignoreWarnings = [/Failed to parse source map/];

  config.module.rules.push({
    test: /\.(js|mjs|jsx)$/,
    enforce: "pre",
    loader: require.resolve("source-map-loader"),
    resolve: {
      fullySpecified: false,
    },
  });

  return config;
}
