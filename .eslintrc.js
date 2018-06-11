// During tests we need to have just the standard rules:
const base = process.env.NODE_ENV === 'test' ? 'standard' : 'wemake'

module.exports = {
  extends: base,
  env: {
    node: true
  },
  rules: {},

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  }
}
