import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Type Tigers
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/game" className="nav-links" onClick={closeMobileMenu}>
              Game
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" onClick={handleLogOut} className="nav-links-mobile">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>{" "}
    </>
  );
}
