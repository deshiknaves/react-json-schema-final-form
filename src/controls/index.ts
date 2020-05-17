import { string } from './string'
import { number, integer, float } from './number'

// Order matters. More specific > generic
export const controls = [integer, float, number, string]
