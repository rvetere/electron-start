const path = require('path')
const variables = require('./src/common/postcss/variables')
const IS_DEV = process.env.NODE_ENV === 'development'

const plugins = {
  'postcss-global-import': {},
  'postcss-mixins': {
    mixinsDir: path.join(process.cwd(), 'app', 'lib', '@postcss', 'mixins')
  },
  'postcss-simple-vars': {
    variables: () => variables
  },
  'postcss-color-function': {},

  'postcss-nested': {},
  autoprefixer: {},
  cssnano: !IS_DEV
}

module.exports = {
  plugins
}
