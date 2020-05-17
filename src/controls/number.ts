import { RegistrationEntry } from 'types'
import { SCHEMA_TYPE } from '../constants'
import stubTrue from 'lodash/stubTrue'

export const number: RegistrationEntry = {
  type: SCHEMA_TYPE.NUMBER,
  predicate: stubTrue,
  creator: () => 'number',
}

export const integer: RegistrationEntry = {
  type: SCHEMA_TYPE.INTEGER,
  predicate: stubTrue,
  creator: () => 'number',
}

export const float: RegistrationEntry = {
  type: SCHEMA_TYPE.FLOAT,
  predicate: stubTrue,
  creator: () => 'number',
}
