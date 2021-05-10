import React from "react";

function Portfolio() {
    return(
    <div>
    <aside>
        <h1>Portfolio</h1>
        <hr></hr>
        <h5>Click the images below to check out the website and GitHub repository</h5>
        <hr></hr>
        {/* <p>Ment2Trade</p> */}
        <a href= "https://rhubarb-cake-73090.herokuapp.com/"><img src="./assets/screenshot8.png" class="rounded float-left" alt="project" style={{margin: "20px"}} height="170" width="250"></img></a> 
        <a href= "https://github.com/Milan1422/A-Brave-Dolphin-App"><img src= "./assets/screenshot10.png" class="rounded float-right" alt="project2" style={{margin: "20px"}} height="170" width="250"></img></a>
        {/* <hr></hr> */}
        {/* <p>The Practical Exchange</p> */}
        <a href= "https://milan1422.github.io/The-Practical-Exchange/"><img src= "./assets/Practical Exchange3.png" class="rounded float-left" alt="project3" style={{margin: "20px"}} height="170" width="250"></img></a>
        <a href= "https://github.com/Milan1422/The-Practical-Exchange"><img src= "./assets/Practical Exchange5.png" class="rounded float-right" alt="project4" style={{margin: "20px"}} height="170" width="250"></img></a>
        {/* <hr></hr> */}
        {/* <p>Password Generator</p> */}
        <a href= "https://anthonydominguez86.github.io/weather-dashboard-week-6/"><img src= "./assets/weather dash 3.png" class="rounded float-left" alt="weather" style={{margin: "20px"}} height="170" width="250"></img></a> 
        <a href= "https://github.com/anthonydominguez86/weather-dashboard-week-6"><img src= "./assets/weather dash 4.png" class="rounded float-right" alt="weather2" style={{margin: "20px"}} height="170" width="250"></img></a>    
    </aside>
    </div>

    );
}

export default Portfolio;