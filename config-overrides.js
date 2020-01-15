module.exports = {
  webpack(config, env) {
    // ...add your webpack config
    return config;
  },
  // The paths config to use when compiling your react app for development or production.
  paths(paths, env) {
    // if (env === 'production') {
    //   const dirName = __dirname.replace('/src/Client', '');

    //   paths.appBuild = `${dirName}/public/dist`;
    // }

    return paths;
  },
};
