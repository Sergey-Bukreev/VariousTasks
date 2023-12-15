import React, {ChangeEvent, useState} from 'react';
import {Button} from "../myButton/Button";
import classes from "./UniversalInput.module.css"
type UniversalInputPropsType ={
    addMessage:(text:string)=> void
}
export const UniversalInput = (props:UniversalInputPropsType) => {
    const [text, setText] = useState("")
    const onChangeInputHandler =(event:ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)

    }
    const onClickBtnHandler = () => {
        props.addMessage(text)

    }
    return (
        <div className={classes.universalInput}>
            <input onChange={onChangeInputHandler}/>
            <Button title={"Add"} callBack={onClickBtnHandler} />
        </div>
    );
};

