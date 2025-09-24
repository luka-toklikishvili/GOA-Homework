import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    margin: "0 10px",
    textDecoration: "none",
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/create" style={linkStyle}>
        Home Create
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
      <NavLink to="/about/create" style={linkStyle}>
        About Create
      </NavLink>
    </nav>
  );
};

export default Navbar;
