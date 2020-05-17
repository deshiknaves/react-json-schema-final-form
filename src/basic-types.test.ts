import { create, match } from 'catalogue'
import { controls } from 'controls'

describe('Basic Types', () => {
  const catalogue = create(controls)

  it('should be able to match a string', () => {
    const schema = { type: 'string' }
    const creator = match(catalogue, schema.type, schema)

    expect(creator()).toMatchInlineSnapshot(`"string"`)
  })

  it('should be able to match a number', () => {
    const schema = { type: 'number' }
    const creator = match(catalogue, schema.type, schema)

    expect(creator()).toMatchInlineSnapshot(`"number"`)
  })

  // Should it in JavaScript? To be safe just match them as number
  it('should be able to match an integer', () => {
    const schema = { type: 'integer' }
    const creator = match(catalogue, schema.type, schema)

    expect(creator()).toMatchInlineSnapshot(`"number"`)
  })

  // Should it in JavaScript? To be safe just match them as number
  it('should be able to match an float', () => {
    const schema = { type: 'float' }
    const creator = match(catalogue, schema.type, schema)

    expect(creator()).toMatchInlineSnapshot(`"number"`)
  })
})
