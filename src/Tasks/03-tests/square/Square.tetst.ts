import {square} from "./Square";

describe(("Square"), ()=> {
    test("correct value", ()=> {
        expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeGreaterThan(3)
        expect(square(2)).not.toBe(undefined)

        /// Проверям что метод был отработан 1 раз  ////
        const spyMathPow = jest.spyOn(Math, "pow")
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)

        afterEach(()=> {
            jest.clearAllMocks()
        })

        /// Проверям что метод  не отработан ////
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })
})