module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "airbnb-base",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-native", "@typescript-eslint"],
}
