import React from 'react';
import classes from "./Button.module.css"
export type ButtonPropsType = {
    title: string
    callBack: () => void
}




export const Button:React.FC<ButtonPropsType> = (props:ButtonPropsType) => {
     const onClickHandler = () => {
         props.callBack()
    }
    return (
        <button className={classes.button} onClick={onClickHandler}>{props.title}</button>
    );
};

