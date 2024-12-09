import "./Landing1.css";

import Fish from "../Assets/fish.mp4";


import Dining from "../Assets/dining.json";

import Lottie from "lottie-react";

import Vert1 from "../Assets/cus2.jpg";
import Vert2 from "../Assets/cus3.jpg";
import Vert3 from "../Assets/cus5.jpg";
import Vert4 from "../Assets/dining1.jpg";
import Vert5 from "../Assets/dining2.jpg";
import Vert6 from "../Assets/Res.jpg";

import Hor1 from "../Assets/chef1.jpg";
import Hor2 from "../Assets/chef2.jpg";
import Hor3 from "../Assets/chef3.jpg";
import Hor4 from "../Assets/cus1.jpg";
import Hor5 from "../Assets/cus4.jpg";
import Hor6 from "../Assets/dining3.jpg"; 

import Stars from "../Assets/stars.json";
import Stars1 from "../Assets/stars1.json";
import Stars2 from "../Assets/stars2.json";

import ChefsKiss from "../Assets/ChefsKiss.json";

import { useEffect, useState } from "react";

export default function Landing1()
{
    return (
        <>
        <div className="BigBoi">
        
        <div className="CityOfStars">
        <div className="Stars">
        <Lottie animationData={Stars} loop={true} />
      
        
        </div>
        <div className="Stars1">
        <Lottie animationData={Stars1} loop={true} />
        </div>

        <div className="Stars2">
        <Lottie animationData={Stars1} loop={true} />
        </div>
        </div>

        <h1 className="Logo">LA LA LAND</h1>
       
        <div className="Fishing">

        <video src={Fish} className="Fish1" autoPlay loop muted></video>   

        </div>




        {/* <p className="about">Cabalar is the happiest place on earth, or at least in Lancaster City. As a combination butchery meets burger spot with a real happy bar, we pair our mouthwatering burgers, sandwiches, fries, and sides with some mighty tasty bevvies, all made with the best ingredients!</p>    



        <div className="abouttime">
            <p>Hours of Operation:</p>
            <p>Thursday - Sunday: 11-9</p>
            <p>Monday - Wednesday: Closed</p>
            <p></p>
        </div> */}


            <div className="Text1">
            <p className="About1">Cabalar is the happiest place on earth, or at least in Lancaster City. As a combination butchery meets burger spot with a real happy bar, we pair our mouthwatering burgers, sandwiches, fries, and sides with some mighty tasty bevvies, all made with the best ingredients!</p>    
            
            <div className="AboutTime1">
            <p>Hours of Operation:</p>
            <p>Thursday - Sunday: 11-9</p>
            <p>Monday - Wednesday: Closed</p>
            <p></p>
            </div>
            {/* <div className="ChefsKiss">
            <Lottie animationData={ChefsKiss} loop={true} />
            </div> */}
            </div>



         </div>
        </>
    )
}