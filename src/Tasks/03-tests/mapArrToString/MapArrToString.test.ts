import {mapArrToString} from "./MapArrToString";

describe("mapArrToString", ()=> {
    test("correct value", ()=>{
        expect(mapArrToString([1, 2, 3, 5])).toEqual(["1", "2", "3", "5"])
    })
    test("different values", ()=>{
        expect(mapArrToString([1, 2, null, undefined, "addd"])).toEqual(["1", "2"])
    })
    test("empty array", ()=>{
        expect(mapArrToString([])).toEqual([])
    })
    test("negation", ()=>{
        expect(mapArrToString([1, 2, 3])).not.toEqual(["1", "2", "3", "4"])
    })
})