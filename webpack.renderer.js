const fs = require('fs')
const path = require('path')
const merge = require('webpack-merge')

RegExp.prototype.toJSON = RegExp.prototype.toString

module.exports = function(config) {
  const filtered = config.module.rules.filter(r => r.test && new RegExp(r.test).toString().indexOf('.css$') === -1)
  config.module.rules = filtered

  config = merge.smart(config, {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: /node_modules/,
          use: ['react-hot-loader/webpack']
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                // 0 => no loaders (default);
                // 1 => postcss-loader;
                // 2 => postcss-loader, sass-loader
                modules: true,
                sourceMap: true
              }
            },
            'postcss-loader'
          ]
        }
      ]
    }
  })

  fs.writeFileSync(path.resolve(__dirname, 'tmp.json'), JSON.stringify(config, null, 2))

  return config
}
