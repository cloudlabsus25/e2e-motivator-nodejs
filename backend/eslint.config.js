module.exports = [
  {
    ignores: ["node_modules/", "dist/"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
    },
  },
];
