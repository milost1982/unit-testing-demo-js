const calc = require('../src/calculator')

// test addition
let result = calc.add(2,5)
let expected = 7
expect(result).toBe(expected)

// test substraction
result = calc.sub(11,3)
expected = 8
expect(result).toBe(expected)

function expect(actual) {
  return {
    toBe (expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    // toBeGreaterThan(expected) {},
    // toBeLessThan(expected) {},
    // toEqual(expected) {},
    // toBeNull() {}
  }
}
