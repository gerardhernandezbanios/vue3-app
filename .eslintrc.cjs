module.exports = {
  root: true,
  env: { node: true, browser: true },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
    "vue/multi-word-component-names": "off",
  },
};
