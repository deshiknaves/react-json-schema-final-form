import React, { useContext, useMemo } from 'react'
import T from 'prop-types'
import { Field as FinalField } from 'react-final-form'

import { Schema } from 'types'
import { SchemaFormContext } from 'components/SchemaForm/SchemaFormContext'

type FieldProps = {
  schema: Schema
}

export const Field = ({ schema }: FieldProps) => {
  const { getComponent } = useContext(SchemaFormContext)

  const { component: Component, props } = useMemo(() => {
    const creator = getComponent(schema.type, schema)
    return creator(schema)
  }, [schema])

  console.log(Component, props)
  return <Component {...props} />
}
