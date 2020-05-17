import set from 'lodash/set'
import get from 'lodash/get'

type Creator = (fn?: any) => any

type RegistrationEntry = {
  type: string
  predicate(fn: any): boolean
  creator: Creator
}

type Registration = Omit<RegistrationEntry, 'type'>

type Catalogue = {
  string?: Registration[]
}

export const register = (catalogue: Catalogue, { type, predicate, creator }): void => {
  const section =
    get(catalogue, type) || set(catalogue, type, [])[type]

  section.push({ predicate, creator })
}

export const registerItems = (catalogue = {}, items: RegistrationEntry[]): Catalogue => {
  items.forEach(registration => register(catalogue, registration))

  return catalogue
}

export const create = (items: RegistrationEntry[]): Catalogue => {
  return registerItems({}, items)
}

export const getByType = (catalogue: Catalogue, type: string): Registration[] => get(catalogue, type)

export const match = (catalogue: Catalogue, type: string, data: any): Creator | null => {
  const items = getByType(catalogue, type)
  if (!items) return null
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