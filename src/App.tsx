import React from 'react';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";

import {Header} from "./components/header/Header";
import {Button} from "./components/myButton/Button";

import {UseState} from "./Tasks/useState/UseState";
import {FilterTasks} from "./Tasks/filterTasks/FilterTasks";
import {InputTask} from "./Tasks/inputTask/InputTask";



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
                <Route render = {() => <UseState />} path={"/useState"}/>
                <Route render = {() => <FilterTasks />} path={"/filterTask"}/>
                <Route render = {() => <InputTask />} path={"/inputTask"}/>

            </div>

        </div>
    </BrowserRouter>

  );
}

export default App;
