import React, {useState} from 'react';
import {Button} from "../../components/myButton/Button";
import classes from "./UseState.module.css"


export const UseState = () => {

    let [num,setNum] = useState(0)
     let addOne = () => {
        setNum(++num)
    }
    let clearNum = () => {
        setNum(0)
    }
    let deleteOne = () => {
        setNum(--num)
    }
    return (
        <div className={classes.useStateTask}>
            <h1>{num}</h1>
            <div className={classes.buttonWraper}>
                <Button title={"Add +1"} callBack={()=>addOne()} />
                <Button title={"Delete -1"} callBack={()=>deleteOne()} />
                <Button title={"Clear"} callBack={()=>clearNum()} />
            </div>


        </div>
    );
};

