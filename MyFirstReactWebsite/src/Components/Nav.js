import React, { useState } from "react";
import Logo from "../Assets/logo-transparent.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import Sidebar from './Sidebar';
const Nav = () => {
  
  const location = useLocation();
  // console.log(location.pathname);
  const [navbar, setNavbar] = useState(false)
  const changebackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  // "navbar navbar-expand-sm  navbar-dark px-5 py-0 "
  window.addEventListener('scroll', changebackground)
  return (
    <nav className={'navbar navbar-expand-sm  navbar-dark px-5 py-0 ' + (navbar ? " nactive " : "")+(location.pathname != "/Contact" ? " transparent" : "")}>
      <ul className="navbar-nav container-fluid">
        <li className="nav-item">
          <Link className="nav-link fs-2" to="/"><img src={Logo} className="me-2 " />YAto</Link>
        </li>
        <li>
          <div className="menu-header d-flex flex-row">
            <NavLink className="nav-link " to="/">Home</NavLink>
            <NavLink className="nav-link " to="/Menu">Menu</NavLink>
            <NavLink className="nav-link " to="/Reservation">Reservation</NavLink>
            <NavLink className="nav-link " to="/Gallery">Gallery</NavLink>
            <NavLink className="nav-link " to="/About">About</NavLink>
            <NavLink className="nav-link " to="/Blog">Blog</NavLink>
            <NavLink className="nav-link " to="/Contact">Contact</NavLink>
          </div>
        </li>
        <li>
          <div className="icon-part">
            <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
          </div>
        </li>
        <li className="nav-item " >
          <Sidebar />
        </li>
      </ul>

    </nav>
  );
};


export default Nav;

