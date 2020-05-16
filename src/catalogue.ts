import set from 'lodash/set'
import get from 'lodash/get'


type RegistrationEntry = {
  type: string
  predicate(fn: any): boolean
  creator(fn: any): any
}

type Registration = Omit<RegistrationEntry, 'type'>

type Catalogue = {
  string?: Registration[]
}

export const create = (items: RegistrationEntry[]) => registerItems({}, items)

export const registerItems = (catalogue = {}, items: RegistrationEntry[]) => {
  items.forEach(registration => register(catalogue, registration))

  return catalogue
}

export const register = (catalogue: Catalogue, { type, predicate, creator }) => {
  const section =
    get(catalogue, type) || set(catalogue, type, [])[type]

  section.push({ predicate, creator })
}

export const getByType = (catalogue: Catalogue, type: string) => get(catalogue, type)

export const match = (catalogue: Catalogue, type: string, data: any) => {
  const items = getByType(catalogue, type)
  const iterator = items[Symbol.iterator]()

  let next = iterator.next()
  let found = null
  while (!next.done && !found) {
    const { predicate, creator } = next.value
    if (predicate(data)) {
      found = creator
    }
    next = iterator.next()
  }

  return found
}