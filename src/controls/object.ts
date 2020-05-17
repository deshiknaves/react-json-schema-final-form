import { RegistrationEntry } from 'types'
import { SCHEMA_TYPE } from '../constants'
import stubTrue from 'lodash/stubTrue'

export const object: RegistrationEntry = {
  type: SCHEMA_TYPE.OBJECT,
  predicate: stubTrue,
  creator: () => 'object',
}
