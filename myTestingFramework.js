async function test(title, callback) {
  try {
    await callback()
    console.log(`✔️  ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe (expected) {
      if (actual !== expected) {
        let error = new Error(`${actual} is not equal to ${expected}`)
        error.stack = error.stack.split('\n').filter((l,i) => i < 3 && i !== 1).join('\n')
        error.stack = '   ' + error.stack + '\n'
        throw error
      }
    },
    // toBeGreaterThan(expected) {},
    // toBeLessThan(expected) {},
    // toEqual(expected) {},
    // toBeNull() {}
  }
}

if (!global.test && !global.expect) {
  global.expect = expect
  global.test = test
}
