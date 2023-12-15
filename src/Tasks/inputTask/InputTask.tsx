import React, {useState} from 'react';
import classes from "./InputTask.module.css"
import {UniversalInput} from "../../components/universalInput/UniversalInput";


let MessageData:{message:string}[] = [
    {message: 'Hello'},
    {message: 'You can write your message'},

]

export const InputTask = () => {
    const [message, setMessage] = useState(MessageData)
    let addMessage = (text:string) => {
        let newMessage={message: text}
        setMessage((MessageData) =>[newMessage, ...MessageData])

    }
    return (
        <div className={classes.inputTask}>
            <UniversalInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

