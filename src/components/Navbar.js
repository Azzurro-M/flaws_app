import React from "react";
import "./Navbar.css"

export default function Navbar() {  
    const path=window.location.pathname
    return (
        
        <nav className="navbar">
            <button className="nav-button">logout</button>
            <img className="logo" src="" alt="" />
            <ul className="nav-list">
                <CustomLink href="/Calender"> Calender</CustomLink>    
                <CustomLink href="/Form"> Form</CustomLink>       
            </ul>
        </nav>
        
    )
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href}{...props}>{ children}</a>
        </li>
    )
}