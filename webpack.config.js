const path = require('path');
console.log('test666')
console.log('test444')
console.log('test333')
console.log('test222')
console.log('test111')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};