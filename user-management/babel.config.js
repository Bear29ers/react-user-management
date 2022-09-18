module.exports = api => {
  api.cache(true);

  return {
    'presets': [
      ['@babel/preset-env', {
        useBuiltins: 'usage',
        corejs: 3
      }]
    ]
  }
};
