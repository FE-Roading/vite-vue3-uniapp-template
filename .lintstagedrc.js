module.exports = {
  "**/*": "prettier --write --ignore-unknown",
  "**/*.{ts,tsx,js,jsx}": ["eslint --cache --fix"],
  "**/*.vue": ["eslint --cache --fix"],
  "**/*.{css,less}": ["stylelint --cache --fix"],
}
