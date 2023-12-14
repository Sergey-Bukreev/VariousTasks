import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Button1Click, Button2Click} from "./state/State";

ReactDOM.render(
    <App  button1Click ={Button1Click}
          button2Click={Button2Click} />,
  document.getElementById('root')
);