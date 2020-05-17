// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/**/*.(js|ts|tsx|jsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/coverage/', '/dist/', '/other/'],
}
