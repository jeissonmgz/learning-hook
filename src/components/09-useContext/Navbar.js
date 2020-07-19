import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-item nav-link"
              to="./"
            >
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              to="./about"
            >
              About
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              to="./login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
