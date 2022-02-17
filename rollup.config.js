import { uglify } from "rollup-plugin-uglify"

const pkg = require('./package.json')

export default {
  input: './index.ts',
  output: {
    file: pkg.main,
    format: 'cjs',
    // format: 'umd',
    name: 'JSEncrypt-mp',
    exports: 'default'
  },
  plugins: [
    uglify()
  ]
}

// module.exports = {
//   input: './src/main.js',
//   output: {
//     file: pkg.main,
//     format: 'umd',
//     name: 'JSEncrypt',
//     exports: 'named'
//   }
// }
