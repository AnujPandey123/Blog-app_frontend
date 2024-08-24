const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Exclude polyfills if they are not needed
      webpackConfig.resolve.fallback = {
        "crypto": false,
        "path": false,
        "os": false,
        // Add other fallbacks here if needed
      };

      return webpackConfig;
    }
  },
};
