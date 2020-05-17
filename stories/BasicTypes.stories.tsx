import React from 'react'
import { SchemaForm } from '../src/components/SchemaForm'
import noop from 'lodash/noop'
import { SCHEMA_TYPE } from '../src/constants'

export const string = () => (
  <SchemaForm onSubmit={noop} schema={{ type: SCHEMA_TYPE.STRING }} />
)

export const number = () => (
  <SchemaForm onSubmit={noop} schema={{ type: SCHEMA_TYPE.NUMBER }} />
)

export default {
  title: 'Basic Types',
  component: SchemaForm,
}
