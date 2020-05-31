import { radToDeg } from "."

let examples: { [key: string]: number } = {}

examples[0] = 0
examples[Math.PI] = 180
examples[4 * Math.PI] = 720

describe("radToDeg", () => {
  test("can be imported", () => {
    expect(typeof radToDeg).toEqual("function")
  })
  test("can convert rad to deg", () => {
    for (const rad in examples) {
      const r = parseFloat(rad)
      console.warn(r)
      expect(Math.abs(radToDeg(r) - examples[rad])).toBeLessThan(1e-6)
    }
  })
})
