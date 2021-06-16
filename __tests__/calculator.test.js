require('../myTestingFramework')

const calc = require('../src/calculator')

// test addition
test('2 + 5 = 7', () => {
  const expected = 7
  const result = calc.add(2,5)
  expect(result).toBe(expected)
})

// test substraction
test('11 + 3 = 8', () => {
  const expected = 8
  const result = calc.sub(11,3)
  expect(result).toBe(expected)
})

// test async addition
test('async 2 + 5 = 7', async () => {
  const expected = 7
  const result = await calc.addAsync(2,5)
  expect(result).toBe(expected)
})

// test async substraction
test('async 11 + 3 = 8', async () => {
  const expected = 8
  const result = await calc.subAsync(11,3)
  expect(result).toBe(expected)
})
