

import React from "react";
import "../navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ol id="list">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ol>
    );
};

export default NavBar;