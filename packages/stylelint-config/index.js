'use strict'

module.exports = {
  overrides: [
    {
      files: ["*.css", "**/*.css", "*.less", "**/*.less", "*.scss", "**/*.scss", "*.vue", "**/*.vue"],
      extends: [
        "stylelint-config-standard",
        "stylelint-config-rational-order"
      ]
    },
    {
      files: ["*.scss", "**/*.scss"],
      extends: [
        "stylelint-config-recommended-scss"
      ]
    },
    {
      files: ["*.less", "**/*.less"],
      extends: [
        "stylelint-config-recommended-less"
      ]
    },
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "stylelint-config-recommended-vue"
      ]
    }
  ]
}