/** @type {import('jest').Config} */
const { defaults } = require("jest-config");

const config = {
  rootDir: ".",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  verbose: true,
  collectCoverageFrom: ["**/*.{js,jsx}"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "js"],
};

module.exports = config;
