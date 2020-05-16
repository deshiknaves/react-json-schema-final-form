import { register, getByType, create, match } from './catalogue'

const items = [
  {
    type: 'string',
    predicate: () => true,
    creator: () => { },
  },
  {
    type: 'string',
    predicate: () => true,
    creator: () => { },
  },
]

describe('Catalogue', () => {
  it('should be able to register a new item', () => {
    const item = items[0]
    const catalogue = {}

    register(catalogue, item)

    const { predicate, creator } = getByType(catalogue, item.type)[0]

    expect(predicate).toEqual(item.predicate)
    expect(creator).toEqual(item.creator)
  })

  it('should be able to add multiple items to the catalogue', () => {
    const catalogue = create(items)

    expect(getByType(catalogue, 'string')).toHaveLength(2)
  })

  it('should be able to resolve the item that matches a predicate', () => {
    const catalogue = create([
      {
        type: 'string',
        predicate: ({ name }) => name === 'foo',
        creator: () => 'foo',
      },
      {
        type: 'string',
        predicate: ({ name }) => name === 'bar',
        creator: () => 'bar',
      },
      {
        type: 'string',
        predicate: ({ name }) => name === 'bar',
        creator: () => 'bar2',
      },
    ])

    const creator = match(catalogue, 'string', { name: 'bar' })

    expect(creator()).toEqual('bar')
  })
})
