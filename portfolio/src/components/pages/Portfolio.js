import React from "react";
import Image from "../assets/screenshot8.png"
import Image1 from "../assets/screenshot10.png"
import Image2 from "../assets/Practical Exchange3.png"
import Image3 from "../assets/Practical Exchange5.png"
import Image4 from "../assets/weather dash 3.png"
import Image5 from "../assets/weather dash 4.png"



function Portfolio() {
    return(
    <div>
    <aside>
        <h1>Portfolio</h1>
        <hr></hr>
        <h5>Click the images below to check out the website and GitHub repository</h5>
        <hr></hr>
        {/* <p>Ment2Trade</p> */}
        <a href= "https://rhubarb-cake-73090.herokuapp.com/"><img src={Image} class="rounded float-left" alt="project" style={{margin: "20px"}} height="170" width="250"></img></a> 
        <a href= "https://github.com/Milan1422/A-Brave-Dolphin-App"><img src= {Image1} class="rounded float-right" alt="project2" style={{margin: "20px"}} height="170" width="250"></img></a>
        {/* <hr></hr> */}
        {/* <p>The Practical Exchange</p> */}
        <a href= "https://milan1422.github.io/The-Practical-Exchange/"><img src= {Image2} class="rounded float-left" alt="project3" style={{margin: "20px"}} height="170" width="250"></img></a>
        <a href= "https://github.com/Milan1422/The-Practical-Exchange"><img src= {Image3} class="rounded float-right" alt="project4" style={{margin: "20px"}} height="170" width="250"></img></a>
        {/* <hr></hr> */}
        {/* <p>Password Generator</p> */}
        <a href= "https://anthonydominguez86.github.io/weather-dashboard-week-6/"><img src= {Image4} class="rounded float-left" alt="weather" style={{margin: "20px"}} height="170" width="250"></img></a> 
        <a href= "https://github.com/anthonydominguez86/weather-dashboard-week-6"><img src= {Image5} class="rounded float-right" alt="weather2" style={{margin: "20px"}} height="170" width="250"></img></a>    
    </aside>
    </div>

    );
}

export default Portfolio;