module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb-base", "plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-unused-expressions": 0,
    "react/prop-types": 0,
    "no-console": 0,
    "no-undef": 0,
    "lines-between-class-members": 0,
    "react/display-name": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
