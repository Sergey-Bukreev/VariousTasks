import {validateValue} from "./ValidateValue";

test ("correct value", ()=> {
    expect (validateValue(60)).toBe(true)
})
describe("validateValue", ()=> {
    test("correct value", ()=>{
        expect (validateValue(50)).toBe(true)
    })
    test("more then correct value", ()=>{
        expect (validateValue(102)).toBe(false)
    })
    test("less than correct value", ()=>{
        expect (validateValue(-10)).toBe(false)
    })
    test("lower limit value", ()=>{
        expect (validateValue(0)).toBe(true)
    })
    test("high limit value", ()=>{
        expect (validateValue(100)).toBe(true)
    })
})