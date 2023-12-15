import React, {useState} from 'react';
import {Button} from "../../components/myButton/Button";
import classes from "./FilterTask.module.css"


type FilterType = "All Money" |"ruble" | "dollar"
export const FilterTasks = () => {
    const arrMoney= [
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ]

    const [filter, setFilter] = useState<FilterType>("All Money")
    let currentMoney = arrMoney

    if (filter === "ruble") {  currentMoney = arrMoney.filter((el)=>el.banknote === "ruble") }
    else if(filter === "dollar") {currentMoney = arrMoney.filter((el)=>el.banknote === "dollar")}

    let FilterOnClick = (title:FilterType) => {
       setFilter(title)

    }
    return (
        <div className={classes.filterTask}>

                <ul>
                    {currentMoney.map((objFromMoneyArr, index) => {
                        return(
                            <li key={index}>
                                <span>{objFromMoneyArr.banknote}</span>
                                <span>{objFromMoneyArr.nominal}</span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        )
                    })}
                </ul>


            <div className={classes.buttonWraper}>
                <Button title={"All Money"} callBack={()=>FilterOnClick("All Money")}/>
                <Button title={"Ruble"} callBack={()=>FilterOnClick("ruble")}/>
                <Button title={"Dollar"} callBack={()=>FilterOnClick("dollar")}/>
            </div>

        </div>
    );
};

