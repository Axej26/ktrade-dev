module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    "prefer-arrow-callback": "error",
    "max-len": "off",
    "new-cap": "off"
  },
};
