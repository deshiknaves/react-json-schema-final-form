import { RegistrationEntry } from 'types'
import { SCHEMA_TYPES } from '../constants'
import stubTrue from 'lodash/stubTrue'

export const string: RegistrationEntry = {
  type: SCHEMA_TYPES.STRING,
  predicate: stubTrue,
  creator: () => 'string'
}