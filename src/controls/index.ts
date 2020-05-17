import { string } from './string'
import { number, integer, float } from './number'
import { object } from './object'

// Order matters. More specific > generic
export const controls = [object, integer, float, number, string]
