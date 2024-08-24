const path = require('path');

module.exports = function override(config, env) {
  // Set up fallbacks for Node.js core modules
  config.resolve.fallback = {
    "path": require.resolve("path-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "os": require.resolve("os-browserify/browser"),
    // Add other fallbacks if needed
  };

  // Optional: Ensure `path-browserify` and other polyfills are treated as external dependencies
  config.externals = {
    ...config.externals,
    'path': 'path-browserify',
    'crypto': 'crypto-browserify',
    'os': 'os-browserify/browser',
  };

  return config;
};
