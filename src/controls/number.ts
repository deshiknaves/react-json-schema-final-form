import { RegistrationEntry } from 'types'
import { SCHEMA_TYPE, SCHEMA_FORMAT } from '../constants'
import stubTrue from 'lodash/stubTrue'

export const number: RegistrationEntry = {
  type: SCHEMA_TYPE.NUMBER,
  predicate: stubTrue,
  creator: () => ({
    component: 'input',
    props: {
      type: 'number',
    },
  }),
}

export const integer: RegistrationEntry = {
  type: SCHEMA_TYPE.NUMBER,
  predicate: ({ format }) => format === SCHEMA_FORMAT.INTEGER,
  creator: () => ({
    component: 'input',
    props: {
      type: 'number',
    },
  }),
}

export const float: RegistrationEntry = {
  type: SCHEMA_TYPE.NUMBER,
  predicate: ({ format }) => format === SCHEMA_FORMAT.FLOAT,
  creator: () => ({
    component: 'input',
    props: {
      type: 'number',
    },
  }),
}
