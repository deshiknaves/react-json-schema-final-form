import { RegistrationEntry } from 'types'
import { SCHEMA_TYPES } from '../constants'
import stubTrue from 'lodash/stubTrue'

export const number: RegistrationEntry = {
  type: SCHEMA_TYPES.NUMBER,
  predicate: stubTrue,
  creator: () => 'number',
}

export const integer: RegistrationEntry = {
  type: SCHEMA_TYPES.INTEGER,
  predicate: stubTrue,
  creator: () => 'number',
}

export const float: RegistrationEntry = {
  type: SCHEMA_TYPES.FLOAT,
  predicate: stubTrue,
  creator: () => 'number',
}
