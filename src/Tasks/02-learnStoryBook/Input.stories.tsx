import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {ChangeEvent, useRef, useState} from "react";


export default {
    title:"input",
    component: input
}

///      Uncontrolled Input      ///
export const UncontrolledInput = ()=> <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event:ChangeEvent<HTMLInputElement>)=> {
        const actualValue:string = event.currentTarget.value
        setValue(actualValue)
    }
    return <> <input onChange={onChange} /> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () =>{

    const [value, setValue] = useState("")
    const inputRef:React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
    const onClickSave = ()=> {
        const el:HTMLInputElement=inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef}/> <button onClick={onClickSave}>save</button> - actual value:{value}</>
}

///      Controlled Input        ///
export const ControlledInput = ()=> {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e:ChangeEvent<HTMLInputElement>)=> {
        setParentValue(e.currentTarget.value)
    }


 return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckBox = ()=> {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e:ChangeEvent<HTMLInputElement>)=> {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}