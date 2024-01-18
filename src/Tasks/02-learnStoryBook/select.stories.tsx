import {Simulate} from "react-dom/test-utils";
import select = Simulate.select
import {ChangeEvent, useState} from "react";

export default {
    title:"select",
    component: select
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState("2")
    const onChange = (e:ChangeEvent<HTMLSelectElement>)=> {
        setParentValue(e.currentTarget.value)
    }

    return  <select value={parentValue} onChange={onChange}>
                <option>none</option>
                <option value={"1"}>Moscow</option>
                <option value={"2"}>Geneve</option>
                 <option value={"3"}>Minsk</option>
            </select>
}