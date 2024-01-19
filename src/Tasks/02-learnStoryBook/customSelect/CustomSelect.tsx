import React, {useEffect, useMemo, useState} from 'react';
import classes from "./../customSelect/CustomSelect.module.css"

type CustomSelectPropsType = {
    value:any
    onChange: (value:any)=> void
    items: ItemsType[]
}
type ItemsType = {
    title: string
    value:any
}
export const CustomSelect = (props:CustomSelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hovoredItemValue, setHovoredItemValue] = useState(props.value)
    useEffect(() => {
        setHovoredItemValue(props.value)
    }, [props.value]);
    const selectedItem = props.items.find(item=>item.value === props.value)
    const hoveredItem = props.items.find(item=>item.value === hovoredItemValue)


    const toggleItems = ()=> setActive(!active)
    const onItemClick = (value:any)=> {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (event:React.KeyboardEvent<HTMLDivElement>) => {
       if(event.key === "ArrowDown" || event.key === "ArrowUp") {
           for (let i = 0; i< props.items.length; i++) {
               if(props.items[i].value === hovoredItemValue) {
                   const pretendentElement = event.key === "ArrowDown"
                       ? props.items[i+1]
                       : props.items[i-1]
                   if(pretendentElement){
                       props.onChange(pretendentElement.value)
                       return
                   }
               }
           }
       }
       }



    return (
        <div className={classes.select + " " } onKeyUp={onKeyUp} tabIndex={0}>

            <span className={classes.maine} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={classes.items}>
                    {props.items.map(i=> <div
                                                    key={i.value}
                                                    className={classes.item + " " + (hoveredItem === i ? classes.selected : "" ) }
                                                    onClick={()=>{onItemClick(i.value)}}
                                                    onMouseEnter={()=>{setHovoredItemValue(i.value)}}
                                                    >
                                                    {i.title}
                                                    </div>) }
                </div>
            }


        </div>
    );
};

