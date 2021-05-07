import React from 'react'
// import './style.css'

function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "black"}}>        
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">Anthony Dominguez</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav"> 
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar