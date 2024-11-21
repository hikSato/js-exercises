module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  extends: ["eslint:recommended", "prettier"],
  env: {
    es2022: true,
    node: true,
    jest: true,
    browser: true,
  },
  rules: {
    "prefer-const": "warn",
    strict: ["off"],
  },
  ignorePatterns: ["format_sample.js", "task.flow.js", "page.tsx"],
  root: true,
};
