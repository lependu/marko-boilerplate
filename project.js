const MarkoStarter = require('marko-starter')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = MarkoStarter.projectConfig({
  routePathPrefix: '/',
  lassoConfig: {
    bundlingEnabled: isProduction,
    fingerprintsEnabled: isProduction,
    minify: isProduction,
    require: {
      transforms: [
        {
          transform: 'lasso-babel-transform'
        }
      ]
    },
    plugins: [
      'lasso-marko',
      {
        plugin: "lasso-autoprefixer",
        config: {
          browsers: [
             "Android >= 2.3",
             "BlackBerry >= 7",
             "Chrome >= 9",
             "Firefox >= 4",
             "Explorer >= 9",
             "iOS >= 5",
             "Opera >= 11",
             "Safari >= 5",
             "OperaMobile >= 11",
             "OperaMini >= 6",
             "ChromeAndroid >= 9",
             "FirefoxAndroid >= 4",
             "ExplorerMobile >= 9"
          ]
        }
      },
    ]
  }
});
