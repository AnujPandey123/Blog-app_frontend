const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ensure the fallback configuration includes necessary polyfills
      webpackConfig.resolve.fallback = {
        "crypto": require.resolve("crypto-browserify"),
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        // Add other fallbacks here if needed
      };

      return webpackConfig;
    }
  },
};
