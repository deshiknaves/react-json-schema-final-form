import { create, match } from 'catalogue'
import { controls } from 'controls'
import { SCHEMA_TYPE, SCHEMA_FORMAT } from './constants'

describe('Basic Types', () => {
  const catalogue = create(controls)

  it('should be able to match a string', () => {
    const schema = { type: SCHEMA_TYPE.STRING }
    const creator = match(catalogue, schema.type, schema)

    expect(creator()).toMatchInlineSnapshot(`"string"`)
  })

  it('should be able to match a number', () => {
    const schema = { type: SCHEMA_TYPE.NUMBER }
    const creator = match(catalogue, schema.type, schema)

    expect(creator()).toMatchInlineSnapshot(`"number"`)
  })

  it('should be able to match an integer', () => {
    const schema = { type: SCHEMA_TYPE.NUMBER, format: SCHEMA_FORMAT.INTEGER }
    const creator = match(catalogue, schema.type, schema)

    expect(creator()).toMatchInlineSnapshot(`"integer"`)
  })

  it('should be able to match a float', () => {
    const schema = { type: SCHEMA_TYPE.NUMBER, format: SCHEMA_FORMAT.FLOAT }
    const creator = match(catalogue, schema.type, schema)

    expect(creator()).toMatchInlineSnapshot(`"float"`)
  })

  it('should be able to match an object', () => {
    const schema = { type: SCHEMA_TYPE.OBJECT }
    const creator = match(catalogue, schema.type, schema)

    expect(creator()).toMatchInlineSnapshot(`"object"`)
  })
})
