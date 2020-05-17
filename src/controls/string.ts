import { RegistrationEntry } from 'types'
import { SCHEMA_TYPE } from '../constants'
import stubTrue from 'lodash/stubTrue'

export const string: RegistrationEntry = {
  type: SCHEMA_TYPE.STRING,
  predicate: stubTrue,
  creator: () => ({
    component: 'input',
    props: {
      type: 'string',
    },
  }),
}
