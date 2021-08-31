import React from "react";
import Image from "../assets/screenshot8.png"
import Image1 from "../assets/screenshot10.png"
import Image2 from "../assets/Practical Exchange3.png"
import Image3 from "../assets/Practical Exchange5.png"
import Image4 from "../assets/employee directory.png"
import Image5 from "../assets/employee directory3.png"
import Image6 from "../assets/Notetaker 1.png"
import Image7 from "../assets/Notetaker 2.png"
import Image8 from "../assets/E-commerce 1.png"
import Image9 from "../assets/E-commerce 2.png"
import Image10 from "../assets/weather dash 3.png"
import Image11 from "../assets/weather dash 4.png"



function Portfolio() {
    return(
    <div>
    <aside>
        <h1>Portfolio</h1>
        <hr></hr>
        <h5>Click the images below to check out the website and GitHub repository</h5>
        <hr></hr>
        <h3>Ment2Trade</h3> 
        <p>MySQL | JQuery| Bootstrap | HandlebarsJS</p>
        <a href= "https://rhubarb-cake-73090.herokuapp.com/"><img src={Image} class="rounded float-left" alt="project" style={{margin: "20px"}} height="170" width="250"></img></a> 
        <a href= "https://github.com/Milan1422/A-Brave-Dolphin-App"><img src= {Image1} class="rounded float-right" alt="project2" style={{margin: "20px"}} height="170" width="250"></img></a>

        <h3>The Practical Exchange</h3> 
        <p>HTML5 | CSS3 | Bulma | JS </p>
        <a href= "https://milan1422.github.io/The-Practical-Exchange/"><img src= {Image2} class="rounded float-left" alt="project3" style={{margin: "20px"}} height="170" width="250"></img></a>
        <a href= "https://github.com/Milan1422/The-Practical-Exchange"><img src= {Image3} class="rounded float-right" alt="project4" style={{margin: "20px"}} height="170" width="250"></img></a>

        <h3>Employee Directory</h3> 
        <p>HTML5 | CSS3 | React | JS </p>
        <a href= "hhttps://anthonydominguez86.github.io/react-employee-directory/"><img src= {Image4} class="rounded float-left" alt="project3" style={{margin: "20px"}} height="170" width="250"></img></a>
        <a href= "https://github.com/anthonydominguez86/react-employee-directory"><img src= {Image5} class="rounded float-right" alt="project4" style={{margin: "20px"}} height="170" width="250"></img></a>

        <h3>Note Taker</h3> 
        <p>HTML5 | CSS3 | Express | Routing | JS </p>
        <a href= "https://guarded-bastion-41842.herokuapp.com/"><img src= {Image6} class="rounded float-left" alt="project3" style={{margin: "20px"}} height="170" width="250"></img></a>
        <a href= "https://github.com/anthonydominguez86/note-taker-express"><img src= {Image7} class="rounded float-right" alt="project4" style={{margin: "20px"}} height="170" width="250"></img></a>

        <h3>E-commerce Backend</h3>
        <p>Express | Node  | MySQL | JSON | Postman </p>
        <a href= "https://drive.google.com/file/d/1T-Jn6DlHpZge_yvpi0eaUClufl8Ats7i/view?usp=sharing"><img src= {Image8} class="rounded float-left" alt="project3" style={{margin: "20px"}} height="170" width="250"></img></a>
        <a href= "https://github.com/anthonydominguez86/e-commerce-backend"><img src= {Image9} class="rounded float-right" alt="project4" style={{margin: "20px"}} height="170" width="250"></img></a>
        
        <h3>Local Weather Dashboard</h3>
        <p>HTML5 | CSS3 | Bootstrap | API | JS </p>
        <a href= "https://anthonydominguez86.github.io/weather-dashboard-week-6/"><img src= {Image10} class="rounded float-left" alt="weather" style={{margin: "20px"}} height="170" width="250"></img></a> 
        <a href= "https://github.com/anthonydominguez86/weather-dashboard-week-6"><img src= {Image11} class="rounded float-right" alt="weather2" style={{margin: "20px"}} height="170" width="250"></img></a>    
    </aside>
    </div>

    );
}

export default Portfolio;