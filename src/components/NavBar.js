import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <div classname="link-wrapper">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>

    )
}

export default NavBar