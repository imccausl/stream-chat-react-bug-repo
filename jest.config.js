module.exports = {
 testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/examples/', '__snapshots__', '/e2e/'],
  transform: {
    '^.+\\.([tj]s|[tj]sx)?$': 'babel-jest',
  },
  transformIgnorePatterns: [],
  verbose: true,
}
