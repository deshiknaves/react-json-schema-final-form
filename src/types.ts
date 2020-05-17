export type Component = {
  component: string | JSX.Element
  props: any
}

export type Creator = (fn?: any) => Component

export type RegistrationEntry = {
  type: string
  predicate(fn: any): boolean
  creator: Creator
}

export type Registration = Omit<RegistrationEntry, 'type'>

export type Catalogue = {
  string?: Registration[]
}

export type Schema = {
  type: string
}
