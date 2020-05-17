import { createContext } from 'react'
import noop from 'lodash/noop'

type SchemaFormContextType = {
  getComponent(type: string, data: any)
}

export const SchemaFormContext = createContext<SchemaFormContextType>({
  getComponent: noop,
})
