
import {delay} from "./Delay";

describe(("Square"), ()=> {
    test("correct value", async ()=> {
        const sum = await delay(()=> 5 + 5, 1000)
        expect(sum).toBe(10)

    })
})