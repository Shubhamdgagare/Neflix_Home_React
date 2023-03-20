import React from 'react'
import logo from "../../logo.png";
import { NavLink } from 'react-router-dom';
import {ImSearch } from "react-icons/im"


const Header = () => {
  return (
    <nav className="header">
        <NavLink to="/"><img src={logo} alt="Netflix logo" /></NavLink> 
        <div>
            <NavLink to="/tvshows">TV SHOWS</NavLink>
            <NavLink to="/movies">MOVIES</NavLink>
            <NavLink to="/recent">RECENTLY ADDED</NavLink>
            <NavLink to="/mylist">MY LIST</NavLink>
        </div>

        <ImSearch/>

    </nav>
  )
}

export default Header