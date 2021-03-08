module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,

  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',

    // Disable Files
    '!src/pages/*.ts(x)?',
    '!src/types/*.ts(x)?',
    '!src/styles/global.ts'
  ],

  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
