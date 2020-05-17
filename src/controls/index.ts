import { string } from './string'
import { number, integer, float } from './number'
import { object } from './object'
import { array } from './array'

// Order matters. More specific > generic
export const controls = [object, array, integer, float, number, string]
