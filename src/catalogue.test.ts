import { register, getByType, create, match } from './catalogue'
import noop from 'lodash/noop'
import stubTrue from 'lodash/stubTrue'

const items = [
  {
    type: 'string',
    predicate: stubTrue,
    creator: noop,
  },
  {
    type: 'string',
    predicate: stubTrue,
    creator: noop,
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

  it('should be able to return null for an empty type catalogue', () => {
    const catalogue = create([])

    const creator = match(catalogue, 'string', {})

    expect(creator).toBeNull()
  })

  it('should be able to resolve the item that matches a predicate', () => {
    const catalogue = create([
      {
        type: 'string',
        predicate: ({ name }): boolean => name === 'foo',
        creator: (): string => 'foo',
      },
      {
        type: 'string',
        predicate: ({ name }): boolean => name === 'bar',
        creator: (): string => 'bar',
      },
      {
        type: 'string',
        predicate: ({ name }): boolean => name === 'bar',
        creator: (): string => 'bar2',
      },
    ])

    const creator = match(catalogue, 'string', { name: 'bar' })

    expect(creator()).toEqual('bar')
  })
})
