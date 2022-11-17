import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <button className="nav-button">logout</button>
            <img className="logo" src="" alt="" />
            <ul className="nav-list">                
                <li className="nav-item">
                    <a href="#">calender</a>
                </li>
                <li className="nav-item">
                    mood
                </li>
                
            </ul>
        </nav>
    )
    
}

export default Navbar;