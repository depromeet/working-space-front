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
    "no-unused-vars": 0,
    "no-param-reassign": 0,
    "no-shadow": 0,
    "react/prop-types": 0,
    "no-console": 0,
    "no-undef": 0,
    "no-debugger": 0,
    "no-plusplus": 0,
    "consistent-return": 0,
    "lines-between-class-members": 0,
    "react/display-name": 0,
    "import/prefer-default-export": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
