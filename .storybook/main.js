const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    })
    config.resolve.extensions.push('.ts', '.tsx')
    if (!config.resolve.alias) config.alias = {}
    config.resolve.alias.components = path.resolve(
      __dirname,
      '../src/components',
    )
    config.resolve.alias.controls = path.resolve(__dirname, '../src/controls')
    config.resolve.alias.catalogue = path.resolve(__dirname, '../src')
    config.resolve.alias.constants = path.resolve(__dirname, '../src')
    return config
  },
}
