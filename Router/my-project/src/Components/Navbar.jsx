import React from 'react';
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <NavLink className = {(e) => {return e.isActive? "red" : " "}} to="/">Home</NavLink>
            <NavLink className = {(e) => {return e.isActive? "red" : " "}} to="/aboutus">About Us</NavLink>
            <NavLink className = {(e) => {return e.isActive? "red" : " "}} to="/contactus">Contact Us</NavLink>
            <NavLink className = {(e) => {return e.isActive? "red" : " "}} to="/login">Login</NavLink>
            <NavLink className = {(e) => {return e.isActive? "red" : " "}} to="/gallary">Gallary</NavLink>
        </nav>
    )}

    export default Navbar;