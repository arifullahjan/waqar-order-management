import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="MenuPage">MenuPage</NavLink>
      <NavLink to="/ItemDetailPage">ItemDetailPage</NavLink>
    </nav>
  );
};

export default Navbar;
