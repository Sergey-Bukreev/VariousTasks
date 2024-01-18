import {Accordion} from "./02-learnStoryBook/accordion/Accordion";
import { action } from '@storybook/addon-actions';
import {useState} from "react";
export default {
    title: "Accordion",
    component: Accordion
}
const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion title={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion title={"Users"} collapsed={false} onChange={callback} items={[{title:"Sergio", value:1}, {title:"Alice", value:2}, {title:"Ben", value:3}]} onClick={onClickCallback}/>
export const ModeChanging = ()=> {
    const [value, setValue] = useState(true)
    return <Accordion title={"Users"} collapsed={value} onChange={()=>{setValue(!value)}} items={[{title:"Sergio", value:1}, {title:"Alice", value:2}, {title:"Ben", value:3}]} onClick={(id)=> {alert(`User with ID ${id} should be happy`) }} />
}