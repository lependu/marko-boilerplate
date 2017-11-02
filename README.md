# Marko Boilerplate

This repo demos how
  - [`marko@4.5.6`](https://github.com/marko-js/marko)
  - [`marko-starter@2.0.2`](https://github.com/marko-js/marko-starter)
  - [`marko-cli@2.2.1`](https://github.com/marko-js/marko-cli)

plays together.
Minimal `lasso` config and few basic test with nyc coverage included.

## Prepare
You need to ensure that chrome based mocha tests can run in your envitonment.
For start take a look at the [`puppeteer`](https://github.com/GoogleChrome/puppeteer) project.

Tested with `node:8.8.1-slim` docker based docker image on `debian 8.9` host. `Dockerfile` included.

1. Clone the repo `$ git clone https://github.com/lependu/marko-boilerplate`
2. `$ cd marko-boilerplate`
3. Build the container: `$ docker build -t [image-name] .`
4. Install dependencies:
`$ docker run -ti [--rm] -v $(pwd):/home/node/app -p [host-port]:8080 [image-name] -c "npm install"`
5. Run the container:
`$ docker run -ti [--rm] -v $(pwd):/home/node/app -p [host-port]:8080 [image-name] -c "npm run [start|build|serve|lint|test]"`

Be advised that the image size is ~ 600Mb + it will take ~400Mb more in the `./node_modules` after install.

I am not intend to test it in Windows or Mac environments, but any PR appreciated.


## Starting the server

```bash
$ npm start
```

Start the server in production mode (minification enabled, etc.):

```bash
$ NODE_ENV=production npm start
```

## Build a static site
Build the project in production mode:

```bash
$ npm run build
```

## Tests
```bash
$ npm run lint
```
Eslint

```bash
$ npm run test
```
Test with mocha.
```bash
$ npm run coverage
```
Generates istanbul coverage report into `coverage` directory.
For further configuration take a look at the `.nycrc` file.

## Known issues

### Handling click() events in tests
I could not make `Element.click()` test to work. I guess it is related with
[this](https://github.com/GoogleChrome/puppeteer/pull/1125) or
[this](https://github.com/GoogleChrome/puppeteer/issues/1082)
puppeteer issue. Any help appreciated.

### Lasso incompability
The `marko-starter@2.x.x` has `lasso@3.0.0-beta.x` dependency,

while `marko-cli@2.x.x` has `lassso@2.x.x` dependency.

Thats why we have to add `"lasso": "*"` in the `package.json`

Which is a bit messy, but works...
