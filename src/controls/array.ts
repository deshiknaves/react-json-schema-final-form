import { RegistrationEntry } from 'types'
import { SCHEMA_TYPE } from '../constants'
import stubTrue from 'lodash/stubTrue'

export const array: RegistrationEntry = {
  type: SCHEMA_TYPE.ARRAY,
  predicate: stubTrue,
  creator: () => ({
    component: 'input',
    props: {},
  }),
}
