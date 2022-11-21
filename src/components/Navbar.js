import React from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logout">
        Log out
      </Link>
      <img className="logo" src="" alt="" />
      <ul className="nav-list">
        <CustomLink to="/Calender"> Calender</CustomLink>
        <CustomLink to="/Form"> Form</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
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
