import React from "react";
import Image from "../assets/adominguez.jpg"
import Image2 from "../assets/screenshot8.png"
import Image3 from "../assets/employee directory.png"

function Landing() {
    return(
    <div>
    <section>
    <h1>About Me</h1> 
    <hr></hr>        
    <img src={Image} class="rounded float-start img-fluid" alt="adominguez.jpg" style={{padding:"10px"}} width= "150" height="200"></img>
    <hr></hr>        
        <p>
          I started my career as a chef but I am now changing that career to be a full stack web developer. 
          I became very interested in the field and started doing some extensive research 
          I came across the Georgia Tech Boot Camp and the journey began.  So far I have been immersed in so much new material it almost mind-blowing. 
          I first learned of the simple and plain HTML then how it is styled with CSS and now we are onto the much more complex node.JS, express, MySQL, MongoDB and React. 
          I have enjoyed learning this field so far and will enjoy everything I am going to learn. It will be a long road but I am going to take from it as much as I can and put into it all I have. 
          I believe this will make me a great web developer and I am anxious to be able to add to this portfolio and make it a showcase for my newly acquired talent and for my new career. 
          Please enjoy my work with professional links below, as well as some screenshots of my work in the portfolio link above each screenshot leads to the deployed website and 
          corresponding GitHub repository containing the code. 
          <hr></hr>
          <a class="link" href="https://github.com/anthonydominguez86" target="Git Hub"><i class="fab fa-github-square fa-3x"></i> Git Hub</a>
          <br></br>
          <a class="link" href="https://www.linkedin.com/in/anthony-dominguez-4884529b/" target="Linked In"><i class="fab fa-linkedin fa-3x"></i> Linked In</a>
          <br></br>
          <a class= "link" href="./assets/Resume Anthony Dominguez.docx" download="Resume"><i class="fas fa-envelope-open-text fa-3x"></i> Resume</a>
          <hr></hr>
          <br></br>
        </p> 
        
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel"></div>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner"></div>
    <div class="carousel-item active"></div>
      <img src={Image2} class="d-block w-100" alt="Ment2Trade"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Ment2Trade</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    <div></div>
    <div class="carousel-item"></div>
      <img src={Image3} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      <div></div>
    <div class="carousel-item"></div>
      <img src="..." class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
      <div></div>
      <div></div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </section>
  </div>
);
}

export default Landing;
