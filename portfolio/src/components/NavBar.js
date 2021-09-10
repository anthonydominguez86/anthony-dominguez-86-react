import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import { Link, useLocation } from "react-router-dom";
import './style.css'

function NavBar(){

    const location = useLocation();


    return (
        <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "black"}}>        
        <div class="container-fluid">
          <Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          <h3>Anthony Dominguez</h3>
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>      
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </nav>
    )
}

export default NavBar