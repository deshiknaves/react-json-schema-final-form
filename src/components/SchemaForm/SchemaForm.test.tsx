import React from 'react'
import { SchemaForm } from './SchemaForm'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { SCHEMA_TYPE } from '../../constants'

describe('SchemaForm', () => {
  const onSubmit = jest.fn()

  beforeEach(() => {
    onSubmit.mockReset()
  })

  const makeWrapper = (props = {}) =>
    render(
      <SchemaForm
        onSubmit={onSubmit}
        schema={{ type: SCHEMA_TYPE.STRING }}
        {...props}
      />,
    )

  xit('should be able to render a form', () => {
    const { getByLabelText, debug } = makeWrapper()
    const firstName = getByLabelText(/first name/i)

    userEvent.type(firstName, 'test')

    debug(firstName)
  })
})
