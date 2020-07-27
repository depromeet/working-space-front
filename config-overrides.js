const { useBabelRc, override } = require("customize-cra");

module.exports = {
  webpack: override(useBabelRc()),
};
