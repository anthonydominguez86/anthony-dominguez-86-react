import React from 'react'
import { Link, useLocation } from "react-router-dom";
import './style.css'

function Navbar(){

    const location = useLocation();


    return (
        <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "black"}}>        
        <div class="container-fluid">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          <h4>Anthony Dominguez</h4>
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
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav nav-bar"> 
              <li class="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar