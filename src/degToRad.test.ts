import { degToRad } from "."

const examples = {
  "0": 0,
  "180": Math.PI,
  "720": 4 * Math.PI
} as { [key: string]: number }

describe("degToRad", () => {
  test("can be imported", () => {
    expect(typeof degToRad).toEqual("function")
  })
  test("can convert deg to rad", () => {
    for (const deg in examples) {
      const d = parseInt(deg)
      expect(degToRad(d)).toEqual(examples[deg])
    }
  })
})
