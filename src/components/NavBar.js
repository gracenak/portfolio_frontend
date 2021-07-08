import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {
    return(
        <div classname="link-wrapper">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>

    )
}

export default NavBar