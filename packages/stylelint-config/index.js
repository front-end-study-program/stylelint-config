'use strict'

module.exports = {
  overrides: [
    {
      files: ["*.css", "**/*.css"],
      extends: [
        "stylelint-config-standard",
        "stylelint-config-rational-order"
      ]
    },
    {
      files: ["*.scss", "**/*.scss"],
      extends: [
        "stylelint-config-standard",
        "stylelint-config-recommended-scss",
        "stylelint-config-rational-order"
      ]
    },
    {
      files: ["*.less", "**/*.less"],
      extends: [
        "stylelint-config-standard",
        "stylelint-config-recommended-less",
        "stylelint-config-rational-order"
      ]
    },
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "stylelint-config-standard",
        "stylelint-config-recommended-vue",
        "stylelint-config-rational-order"
      ]
    }
  ],
  "defaultSeverity": "warning",
}