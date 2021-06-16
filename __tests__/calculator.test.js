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

function test(title, callback) {
  try {
    callback()
    console.log(`✔️  ${title}`)
  } catch (error) {
    console.error(`❌  ${title}`)
    console.error(error)
  }
}

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
