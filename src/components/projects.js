import React from "react";
import './projects.css'
import petmateapp1 from '../Pics/petmate-1.png'
import petmateapp2 from '../Pics/petmate-2.png'
import petmateapp3 from '../Pics/petmate-3.png'
import petmatewebsite from '../Pics/petmate-website.png'

function Projects(){
    return(
        <div className="container-projects">
            <div className="details-2">
                <div className="project">
                    <div className="images">
                    <img src={petmateapp1} alt="Start up page" className="img-petmate"></img>
                    <img src={petmateapp2} alt="Start up page" className="img-petmate"></img>
                    <img src={petmateapp3} alt="Start up page" className="img-petmate"></img>
                    </div>
                    <div className="descrip">
                        <h1>PetMate</h1>
                        <p>Petmate is a pet management mobile app made with React Native, JavaScript and Node JS</p>
                    </div>
                </div>
                <div className="project">
                    <div className="images">
                    <img src={petmatewebsite} alt="Start up page" className="img-webpetmate"></img>
                    </div>
                    <div className="descrip">
                    <h1>PetMate Website</h1>
                    <p>PetMate webite made with HTML and CSSs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;