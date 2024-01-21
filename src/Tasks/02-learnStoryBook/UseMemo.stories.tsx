import React, {useMemo, useState} from "react";

export default {
    title: "React Memo Demo",

}
const NewMessageCounter = (props:any)=> {
    return <div>{props.count}</div>
}
const UsersSecret = (props:{users:string[]})=> {
    return <div>{props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
}
const Users = React.memo(UsersSecret)
export const Example1 = ()=> {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Sergio", "Alice", "Ben"])

    const newArray = useMemo(() => {
       const newArray = users.filter(user => user.toLowerCase().indexOf("a") > -1)
       return newArray
    }, [users]);
    const addUser = ()=> {
        const newUser = [...users, `Sveta + ${new Date().getTime()}`]
        setUsers(newUser)
    }
    return  <>
                 <Users users={users}/>
                <button onClick={()=>{setCounter(counter + 1)}}>+</button>
                <button onClick={addUser}>add user</button>
                <NewMessageCounter count={counter}/>

                <Users users={newArray}/>
            </>
}