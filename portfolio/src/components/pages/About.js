import React from "react";
import Image from "../assets/adominguez.jpg"

function About() {
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
          <a class="link" href="https://github.com/anthonydominguez86" target="Git Hub">Git Hub</a>
          <br></br>
          <a class="link" href="https://www.linkedin.com/in/anthony-dominguez-4884529b/" target="Linked In">Linked In</a>
          <br></br>
          <a class= "link" href="./assets/Resume Anthony Dominguez.docx" download="Resume">Resume</a>
          <hr></hr>
          <br></br>
        </p> 
        </section>
    </div>
);
}

export default About;
