'use strict'

const path = require('path')
const { CLIEngine } = require('eslint')

function fixtureFile (name) {
  return path.resolve(__dirname, 'fixtures', name)
}

describe('eslint-config-flowtype-essential', () => {
  let cli

  beforeAll(() => {
    cli = new CLIEngine({
      useEslintrc: true,
      configFile: path.resolve(__dirname, '..', 'index.js')
    })
  })

  test('correct style', () => {
    const result = cli.executeOnFiles([fixtureFile('correct.js')])
    expect(result.errorCount).toEqual(0)
  })

  test('incorrect style', () => {
    const result = cli.executeOnFiles([fixtureFile('incorrect.js')])
    expect(result.errorCount).toEqual(11)

    const errors = [
      'flowtype/no-primitive-constructor-types',
      'flowtype/union-intersection-spacing', // twice
      'flowtype/boolean-style',
      'flowtype/delimiter-dangle',
      'flowtype/space-after-type-colon', // twice
      'flowtype/generic-spacing', // twice
      'flowtype/array-style-complex-type',
      'flowtype/array-style-simple-type'
    ]

    const eslintErrors = []
    for (const error of result.results[0].messages) {
      eslintErrors.push(error.ruleId)
    }

    for (const error of errors) {
      expect(eslintErrors).toContain(error)
    }
  })
})
