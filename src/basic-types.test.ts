import { create, match } from 'catalogue'
import { controls } from 'controls'

describe('Basic Types', () => {
  const catalogue = create(controls)

  it('should be able to match a string', () => {
    const schema = { type: 'string' }

    const creator = match(catalogue, schema.type, schema)

    expect(creator()).toMatchInlineSnapshot(`"string"`)
  })
})
