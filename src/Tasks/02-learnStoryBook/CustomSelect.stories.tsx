import {CustomSelect} from "./customSelect/CustomSelect";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default  {
    title:"Custom Select",
    component:CustomSelect
}
const items = [
    {title:"Moscow", value:1},
    {title:"Geneve", value:2},
    {title:"Zurich", value:3}
]
export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)
    return <CustomSelect value={value} onChange={setValue} items={items} />
}
export const SelectWithValue = () => {

    const [value, setValue] = useState(3)
    return <CustomSelect value={value} onChange={setValue} items={items} />
}