import { RegistrationEntry } from 'types'
import { SCHEMA_TYPE, SCHEMA_FORMAT } from '../constants'
import stubTrue from 'lodash/stubTrue'

export const number: RegistrationEntry = {
  type: SCHEMA_TYPE.NUMBER,
  predicate: stubTrue,
  creator: () => 'number',
}

export const integer: RegistrationEntry = {
  type: SCHEMA_TYPE.NUMBER,
  predicate: ({ format }) => format === SCHEMA_FORMAT.INTEGER,
  creator: () => 'integer',
}

export const float: RegistrationEntry = {
  type: SCHEMA_TYPE.NUMBER,
  predicate: ({ format }) => format === SCHEMA_FORMAT.FLOAT,
  creator: () => 'float',
}
