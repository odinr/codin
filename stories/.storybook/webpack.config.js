module.exports = ({ config, transpilePackages = ['lit-html', 'lit-element'] }) => {
  config.resolve = {
    extensions: ['.js'],
    mainFields: ['main'] // or [ 'main', 'module' ], same results
  };
  return config;
};
