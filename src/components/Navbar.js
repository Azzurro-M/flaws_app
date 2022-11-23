import React from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useAuth } from "../context/auth.Context";

export default function Navbar() {
  const {logout} = useAuth();
  
  return (
    <nav className="navbar">
      <button onClick={logout}> Sign Out </button>      
      <ul className="nav-list">
        <CustomLink to="/calender"> Calender</CustomLink>
        <CustomLink to="/form"> Form</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink ({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
