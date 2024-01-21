import {ChangeEvent, useMemo, useState} from "react";

export default {
    title: "Use memo",
}
export const DifficultCounting = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    //// Счиаю Факториал ////
    let resultA = 1
    let resultB = 1

     resultA = useMemo(() => {
        let tempResultA = 1
        for(let i=1; i<=a; i++) {
            //// увеличиваем время выполнения операции ////
            let fake = 0
            while (fake < 10000000){
                fake++
                const fakeValeu = Math.random()
            }
            ///////////////////////////////////////////////
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);

    for(let i=1; i<=b; i++) {
        resultB = resultB* i
    }

    return  <>
                <input onChange={(event:ChangeEvent<HTMLInputElement>) => setA(Number(event.currentTarget.value))}/>
                <input onChange={(event:ChangeEvent<HTMLInputElement>)=>setB(+event.currentTarget.value)}/>
                <hr/>
                <div>
                    Result for a : {resultA}
                </div>
                 <div>
                    Result for b : {resultB}
                 </div>
            </>
}