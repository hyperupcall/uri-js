import resolve from '@rollup/plugin-node-resolve'
const packageJson = require('./package.json')

export default {
  entry: 'dist/esnext/index.js',
  format: 'umd',
  moduleName: 'URI',
  plugins: [
    resolve({
      module: true,
      jsnext: true,
      preferBuiltins: false,
    }),
  ],
  dest: 'dist/es5/uri.all.js',
  sourceMap: true,
  banner:
    '/** @license URI.js v' +
    packageJson.version +
    ' (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */',
}
