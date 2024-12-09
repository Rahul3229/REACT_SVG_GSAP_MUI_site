import "./Slider.css";

import Vert1 from "../Assets/cus2.jpg";
import Vert2 from "../Assets/cus3.jpg";
import Vert3 from "../Assets/cus5.jpg";
import Vert4 from "../Assets/icecloud.jpg";
import Vert5 from "../Assets/dining2.jpg";
import Vert6 from "../Assets/Res.jpg";
import Vert7 from "../Assets/Vert7.jpg";


import Hor1 from "../Assets/chef1.jpg";
import Hor2 from "../Assets/chef2.jpg";
import Hor3 from "../Assets/chef3.jpg";
import Hor4 from "../Assets/cus1.jpg";
import Hor5 from "../Assets/bread.jpg";
import Hor6 from "../Assets/dining3.jpg";


import { useEffect,useRef,useState } from "react";

import gsap from "gsap";

export default function Slider()
{

    
    const [xPosition, setXPosition] = useState(null);
    const Refer=useRef(null);
    var counter=0;

    useEffect(()=>{

        gsap.fromTo(".Slider",{x:"35%"},{x:"-100%",duration:20,ease: "none",repeat:-1});



    },[]);

    return (
        <>
        <div className="BigSlider">
        <div className="Slider" ref={Refer}>
        <div className="Potrait">
        <img src={Vert1} ></img>  
        </div>    
        <div className="Landscape">
        <img src={Hor1} ></img>
        </div>
        <div className="Potrait">
        <img src={Vert2} ></img> 
        </div>
        <div className="Landscape">
        <img src={Hor2}></img>
        </div>
        <div className="Potrait">
        <img src={Vert3} ></img>   
        </div> 
        <div className="Landscape">
        <img src={Hor4} ></img>
        </div>
        <div className="Potrait">
        <img src={Vert4} ></img>   
        </div> 
        <div className="Landscape">
        <img src={Hor5} ></img>
        </div>
        </div>


        {/* <div className="Slider1">
        <div className="Potrait">
        <img src={Vert1} ></img>  
        </div>    
        <div className="Landscape">
        <img src={Hor1} ></img>
        </div>
        <div className="Potrait">
        <img src={Vert2} ></img> 
        </div>
        <div className="Landscape">
        <img src={Hor2}></img>
        </div>
        <div className="Potrait">
        <img src={Vert3} ></img>   
        </div> 
        <div className="Landscape">
        <img src={Hor4} ></img>
        </div>
        </div> */}

        </div>

        </>

        
    )
}