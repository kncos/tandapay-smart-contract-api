import { createDefaultPreset, JestConfigWithTsJest } from 'ts-jest';

/** @type {import('ts-jest').JestConfigWithTsJest} **/
//export default {
//  testEnvironment: "node",
//  transform: {
//    "^.+.tsx?$": ["ts-jest",{}],
//  },
//};

const presetConfig = createDefaultPreset({
  // ... options
});

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
};

export default jestConfig;