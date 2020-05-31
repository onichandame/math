import { clamp } from "./clamp"

const bounds = [0, 1] as [number, number]
const reversBounds = bounds.reverse() as [number, number]

describe("clamp", () => {
  test("can be imported as a function", () =>
    expect(typeof clamp).toEqual("function"))
  // on lower bound, on upper bound, between bounds
  test("leaves raw number in range unchanged", () => {
    // (num,lower bound, upper bound)
    expect(clamp(0, ...bounds)).toEqual(0)
    expect(clamp(1, ...bounds)).toEqual(1)
    expect(clamp(0.5, ...bounds)).toEqual(0.5)
    // (num,upper bound, lower bound)
    expect(clamp(0, ...reversBounds)).toEqual(0)
    expect(clamp(1, ...reversBounds)).toEqual(1)
    expect(clamp(0.5, ...reversBounds)).toEqual(0.5)
  })
  test("clamps number lower thant the lower bound", () => {
    // (num,lower bound, upper bound)
    expect(clamp(-1, ...bounds)).toEqual(0)
    // (num,upper bound, lower bound)
    expect(clamp(-1, ...reversBounds)).toEqual(0)
  })
  test("clamps number greater thant the upper bound", () => {
    // (num,lower bound, upper bound)
    expect(clamp(2, ...bounds)).toEqual(1)
    // (num,upper bound, lower bound)
    expect(clamp(2, ...reversBounds)).toEqual(1)
  })
})
