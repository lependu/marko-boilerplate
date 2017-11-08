const MarkoStarter = require('marko-starter')
const homeTemplate = require('./src/templates/home.marko')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = MarkoStarter.projectConfig({
  routePathPrefix: '/',
  routes: [
    {
      path: '/',
      handler: (input, out) => {
        let page = {
          lang: 'en',
          title: 'Hello world!',
          meta: [
            {
              tagName: 'link',
              attributes: {
                rel: 'alternate',
                hreflang: 'de',
                href: 'http://example.com/de'
              }
            }
          ]
        }
        homeTemplate.render(page, out)
      }
    },
    {
      path: '/de',
      handler: (input, out) => {
        let page = {
          lang: 'de',
          title: 'Hallo Welt!',
          meta: [
            {
              tagName: 'link',
              attributes: {
                rel: 'alternate',
                hreflang: 'en',
                href: 'http://example.com'
              }
            }
          ]
        }
        homeTemplate.render(page, out)
      }
    }
  ]
});
