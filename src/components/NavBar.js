import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = ()=> {
    return(
        <div className="navigation">
            <div className="link-wrapper">
                <NavLink to='/'>Home</NavLink><br></br>
                <NavLink to='/about'>About</NavLink><br></br>
                <NavLink to='/contact'>Contact</NavLink><br></br>
                <NavLink to='/projects'>Projects</NavLink><br></br>
                <NavLink to='/blogs' >Blogs</NavLink>
            </div>
        </div>

    )
    
}

export default NavBar

/* <div className="navigation">
<img src={logo} className="App-logo" alt="logo" />
<div className="navigation-bar"> */