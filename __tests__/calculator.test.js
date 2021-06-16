const calc = require('../src/calculator')

// test addition
let result = calc.add(2,5)
let expected = 7
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

// test substraction
result = calc.sub(11,3)
expected = 8
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}
