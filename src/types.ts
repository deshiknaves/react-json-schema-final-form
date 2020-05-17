export type Creator = (fn?: any) => any

export type RegistrationEntry = {
  type: string
  predicate(fn: any): boolean
  creator: Creator
}

export type Registration = Omit<RegistrationEntry, 'type'>

export type Catalogue = {
  string?: Registration[]
}
