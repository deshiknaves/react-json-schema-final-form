import { createCatalogue } from './catalogue'

const items = [
  {
    type: 'string',
    predicate: () => {},
    creator: () => {},
  },
  {
    type: 'string',
    predicate: () => {},
    creator: () => {},
  },
]

describe('Catalogue', () => {
  it('should be able to register a new item', () => {
    const item = items[0]
    const catalogue = createCatalogue()

    catalogue.register(item)

    const { predicate, creator } = catalogue.items(item.type)[0]

    expect(predicate).toEqual(item.predicate)
    expect(creator).toEqual(item.creator)
  })
})
