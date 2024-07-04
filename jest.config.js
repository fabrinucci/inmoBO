const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testRegex: ['((\\.|/*.)(spec))\\.ts?$', '((\\.|/*.)(spec))\\.tsx?$'],
};

module.exports = createJestConfig(config);
