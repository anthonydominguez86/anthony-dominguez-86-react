import React from "react";
import Image from "../assets/adominguez.jpg"
import Image2 from "../assets/screenshot8.png"
import Image3 from "../assets/employee directory.png"
import Image4 from "../assets/weather dash 4.png"
import Carousel from 'react-bootstrap/Carousel'

function Landing() {
    return(
    <div>
    <section>
    <h1>About Me</h1> 
    <hr></hr>        
    <img src={Image} class="rounded float-start img-fluid" alt="adominguez.jpg" style={{padding:"10px"}} width= "150" height="200"></img>       
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
  <Carousel>
  <Carousel.Item>
  
    <img
      className="d-block w-100"
      src={Image2}
      alt="Ment2Trade"
    />
<Carousel.Caption>
      <h4>Ment2Trade</h4>
      <h6>MySQL | JQuery| Bootstrap | HandlebarsJS</h6>
      <div/>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Employee Directory"
    />

    <Carousel.Caption>
      <h4>Employee Directory</h4>
      <h6>HTML5 | CSS3 | React | JS</h6>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image4}
      alt="Weather Dash"
    />

    <Carousel.Caption>
      <h4>Local Weather Dashboard</h4>
      <h6>HTML5 | CSS3 | Bootstrap | API | JS</h6>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </section>
  </div>
);
}

export default Landing;
