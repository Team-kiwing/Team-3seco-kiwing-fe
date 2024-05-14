import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.spec.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components': '<rootDir>/src/components/$1',
    '^@pages': '<rootDir>/src/pages/$1',
    '^@utils': '<rootDir>/src/utils/$1',
    '^@constants': '<rootDir>/src/constants/$1',
    '^@hooks': '<rootDir>/src/hooks/$1',
    '^@stores': '<rootDir>/src/stores/$1',
    '^@styles': '<rootDir>/src/styles/$1',
    '^@types': '<rootDir>/src/types/$1',
  },
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['jest-styled-components'],
};

export default config;
