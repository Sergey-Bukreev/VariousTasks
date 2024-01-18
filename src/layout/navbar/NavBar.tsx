import React from 'react';
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const NavBar:React.FC = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to={"/button"} className={classes.item} >Button Task</NavLink>

            </div>
            <div>
                <NavLink to={"/useState"} className={classes.item} >UseState Task</NavLink>
            </div>
            <div>
                <NavLink to={"/filterTask"} className={classes.item} >Filter Task</NavLink>
            </div>
            <div>
                <NavLink to={"/inputTask"} className={classes.item} >Input Task</NavLink>
            </div>


        </nav>
    );
};

export default NavBar;