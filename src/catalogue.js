import set from 'lodash/set'
import get from 'lodash/get'

export const createCatalogue = () => {
  const catalogue = {}

  /**
   * Register a new item
   *
   * @param {object} details The details of the registration
   * @param {string} details.type The type that registration belongs to
   * @param {function} details.predicate A predicate function
   * @param {function} details.creator A function that creates the item
   *
   * @return {void}
   */
  const register = ({ type, predicate, creator }) => {
    const section = get(catalogue, type) || set(catalogue, type, [])[type]

    section.push({ predicate, creator })
  }

  /**
   * Get the items in a catalogue
   *
   * @param {string} type The type to get
   *
   * @return {array|undefined}
   */
  const items = type => get(catalogue, type)

  return {
    items,
    register,
  }
}
