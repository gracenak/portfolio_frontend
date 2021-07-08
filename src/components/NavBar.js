import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {
    return(
        <div classname="link-wrapper">
            <NavLink to='/'>Home</NavLink><br></br>
            <NavLink to='/about'>About</NavLink><br></br>
            <NavLink to='/contact'>Contact</NavLink><br></br>
            <NavLink to='/projects'>Projects</NavLink><br></br>
        </div>

    )
}

export default NavBar