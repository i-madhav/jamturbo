import { nextJsConfig } from "@repo/eslint-config/next-js";

/** @type {import("eslint").Linter.Config} */
const config = {
  ...nextJsConfig,
  rules: {
    // Set all rules to "off"
    "no-console": "off",
    "no-alert": "off",
    // Add any other specific rules you want to disable here
  },
};

// Disable all rules by setting them to "off"
Object.keys(config.rules).forEach(rule => {
  config.rules[rule] = "off";
});

export default config;
