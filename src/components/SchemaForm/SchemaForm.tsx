import React, { useMemo, useCallback } from 'react'
import { Form } from 'react-final-form'

import { Field } from '../Field'
import { SCHEMA_TYPE } from '../../constants'
import { Schema, RegistrationEntry } from 'types'
import { SchemaFormContext } from './SchemaFormContext'
import { controls as defaultControls } from '../../controls'
import { create, match } from '../../catalogue'

type SchemaFormProps = {
  controls?: RegistrationEntry[]
  schema: Schema
  onSubmit(): void
}

export const SchemaForm = ({
  controls = [],
  schema,
  onSubmit,
}: SchemaFormProps) => {
  const catalogue = useMemo(() => {
    return create([...controls, ...defaultControls])
  }, [controls])

  const getComponent = useCallback(
    (type, schema) => {
      return match(catalogue, type, schema)
    },
    [catalogue],
  )

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <SchemaFormContext.Provider value={{ getComponent }}>
            {schema.type !== SCHEMA_TYPE.OBJECT ? (
              <Field schema={schema} />
            ) : (
              <p>Render object</p>
            )}
          </SchemaFormContext.Provider>
        </form>
      )}
    </Form>
  )
}
