import React from 'react';
type AccordionPropsType = {
    title:string
    collapsed:boolean
    onChange:()=> void
    items:ItemType[]
    onClick:(value:any)=> void
}
type AccordionTitlePropsType = {
    title:string
    onChange:()=> void
}
type AccordionBodyPropsType = { items:ItemType[], onClick:(value:any)=> void }
type ItemType = {title:string, value:any}
export const Accordion = (props:AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
};

const AccordionTitle = (props:AccordionTitlePropsType)=> {

    return <h3 onClick={(e)=>props.onChange()}>{props.title}</h3>
}
const AccordionBody = (props:AccordionBodyPropsType)=> {
    return  <ul>
                {props.items.map((item, index)=> <li onClick={()=>{props.onClick(item.value)}} key={index}>{item.title}</li>)}
            </ul>
}

