const add = require("./calculatrice")

test("add 1 + 2 equals 3 ", () => {
  expect(add(1, 2)).toBe(4)
})
