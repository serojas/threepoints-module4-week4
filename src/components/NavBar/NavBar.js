import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(props) {


    const nav ={
        width:'100%'
    }

    const styleButtons = {
        display: 'none'
    }

    const styleSpan= {
        display: 'none',
        color: 'white',
        paddingLeft: '1em'
    }

    const styleIcons = {
        color: 'white'
    }
    if(props.enableNavBarButtons){
        styleButtons.display = 'block'
        styleSpan.display = 'inline'
        styleSpan.color = 'white'
        styleSpan.paddingLeft = '1em'
    }else{
        styleButtons.display = 'none'
        styleSpan.display = 'none'
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={nav}>
        <div className="container-md navbar-title">
            <NavLink className="navbar-brand" to="/">
                <i className="fas fa-bolt" style={styleIcons}></i>
                <span style={styleSpan}>  Three Pics  </span>
            </NavLink>
            <NavLink to="/profile">
                <i className="fa fa-user-circle fa-2x" style={styleIcons}></i>
            </NavLink>
        </div>
    </nav>)
}

export default NavBar