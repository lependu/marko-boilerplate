const MarkoStarter = require('marko-starter')

const isProduction = process.env.NODE_ENV === 'production'

MarkoStarter.plugins = ['marko-starter-babel']

module.exports = MarkoStarter.projectConfig({
  routePathPrefix: '/',
  lassoConfig: {
    bundlingEnabled: isProduction,
    fingerprintsEnabled: isProduction,
    minify: isProduction,
    plugins: [
      'lasso-marko'
    ]
  }
});
