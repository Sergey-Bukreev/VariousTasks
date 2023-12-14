import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {onClickHandler} from "./state/State";
ReactDOM.render(
    <App onClickHandler = {onClickHandler} />,
  document.getElementById('root')
);