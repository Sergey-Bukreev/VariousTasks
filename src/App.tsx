import React from 'react';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";

import {Header} from "./components/header/Header";
import {Button} from "./components/myButton/Button";


type AppPropsType = {
    button1Click:(subs:string, age:number) => void
        button2Click:(subs:string, age:number) => void
}


function App(props:AppPropsType):JSX.Element {

    return (
    <BrowserRouter>
        <div className="app-wrapper">
           <Header />
            <NavBar />
            <div className="app-wrapper-content">
                <Route render = {() => <Button title={"My First YouTube Chanel"} callBack={()=>props.button1Click("Sergio", 21)} />} path={"/button"}/>
                <Route render = {() => <Button title={"My Second YouTube Chanel"} callBack={()=>props.button2Click("Alice", 20)} />} path={"/button"}/>
            </div>

        </div>
    </BrowserRouter>

  );
}

export default App;
