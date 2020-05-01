import { awesomeFunction } from './index'

test(awesomeFunction.name, () => {
  const result = awesomeFunction()

  expect(result).toEqual('foo')
})
