import React from 'react'
import Logo from '../images/Logo.gif'
import { NavLink } from 'react-router-dom'
import '../styles/SideBar.css'

class SideBar extends React.Component {
    render() {
        return(
            <div className="side-bar">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="link-wrapper">
                    <NavLink to='/'>Home</NavLink><br></br>
                    <NavLink to='/about'>About</NavLink><br></br>
                    <NavLink to='/contact'>Contact</NavLink><br></br>
                    <NavLink to='/projects'>Projects</NavLink><br></br>
                    <NavLink to='/blogs' >Blogs</NavLink>
                </div>
                <div className="main">
                    <h1>testing</h1>
                </div>
            </div>

        )
    }

}

export default SideBar
