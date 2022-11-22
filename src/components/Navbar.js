import React from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <button onClick={logout}> Sign Out </button>
      <img className="logo" src="" alt="" />
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
