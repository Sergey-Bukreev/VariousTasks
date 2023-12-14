import React from 'react';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";

import {Header} from "./components/header/Header";
import {Button} from "./components/myButton/Button";



type AppPropsType = {
    onClickHandler: (name:string) => void
}

function App(props:AppPropsType) {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
           <Header />
            <NavBar />
            <div className="app-wrapper-content">
                <Route render = {() => <Button title={"MyFirstYouTubeChanel"} onClickHandler={props.onClickHandler} />} path={"/button"}/>
            </div>

        </div>
    </BrowserRouter>

  );
}

export default App;
