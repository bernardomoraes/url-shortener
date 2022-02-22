module.exports = {
  collectCoverageFrom: [
    '<rootDir>/server/**/*.js',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/server/$1'
  },
  testMatch: ['**/*.spec.js'],
  roots: [
    '<rootDir>/server',
    '<rootDir>/tests'
  ],
  clearMocks: true
}
