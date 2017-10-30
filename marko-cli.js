module.exports = function(markoCli) {
  markoCli.config.browserBuilder = {
    plugins: [
      'lasso-marko',
    ],
    require: {
      transforms: [
        {
          transform: 'lasso-babel-transform'
        }
      ]
    }
  };
}
