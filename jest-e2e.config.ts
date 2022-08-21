/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import jestConfig from "./jest.config";

export default {
  ...jestConfig,
  testEnvironment: "./prisma/prisma-test-environment.ts",
  testRegex: ".e2e.test.ts$",
};
