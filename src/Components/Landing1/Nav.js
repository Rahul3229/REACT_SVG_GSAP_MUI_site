import "./Landing22.css";
import "./Nav.css";
import {NavLink} from "react-router-dom";
import gsap from "gsap";

import ListIcon from '@mui/icons-material/List';

import MenuIcon from '@mui/icons-material/Menu';

import CancelIcon from '@mui/icons-material/Cancel';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import Lottie from "lottie-react";

import one from "../Assets/one.json";
import two from "../Assets/two.json";
import three from "../Assets/three.json";
import four from "../Assets/four.json";
import five from "../Assets/five.json";
import six from "../Assets/six.json";
import kabab from "../Assets/kabab.json";

import Replicant1 from "../Assets/replicant1.json";
import Replicant2 from "../Assets/replicant2.json";
import Replicant3 from "../Assets/replicant3.json";
import Replicant4 from "../Assets/replicant4.json";

export default function Nav()
{

    const Starting=()=>
    {
     gsap.to(".MobileButtons",{y:"110%",ease: "bounce.out",duration:2});   
    }

    const Closing=()=>
    {
    gsap.to(".MobileButtons",{y:"0%",duration:0.5});
    }

    return (
        <>
        
        <div className="Nav">
        <h1 className="Logo StoryHeading1">CAB<span>ALAR</span></h1>
        

        <button className="NavButton1"><NavLink style={{textDecoration:"none",color:"inherit"}} to="/">Home</NavLink></button>

        <button className="NavButton2"><NavLink style={{textDecoration:"none",color:"inherit"}} to="/Menu">Menu</NavLink></button>

        <button className="NavButton2"><NavLink style={{textDecoration:"none",color:"inherit"}} to="/Reservations">Reservations</NavLink></button>

        
        </div>
        
        <div className="MobileNav">

        <button className="Start" onClick={Starting}><MenuIcon sx={{color:"black"}}/></button>

        <h1 className="Logo StoryHeading1">CAB<span>ALAR</span></h1>

        <div className="MobileButtons">
        <NavLink style={{textDecoration:"none",color:"inherit", width:"100%"}} to="/"><button className="NavButton1" onClick={Closing}>Home</button></NavLink>
        
        <div className="oneSVG" >
        <Lottie animationData={one} loop={true} />
        </div>
        
        <NavLink style={{textDecoration:"none",color:"inherit"}} to="/Menu"><button className="NavButton2" onClick={Closing}>Menu</button></NavLink>
        
        <div className="twoSVG" >
        <Lottie animationData={kabab} loop={true} />
        </div>
        
        <NavLink style={{textDecoration:"none",color:"inherit"}} to="/Reservations"><button className="NavButton2" onClick={Closing}>Reservations</button></NavLink>
        
        <div className="threeSVG" >
        <Lottie animationData={six} loop={true} />
        </div>
        
        {/* <button className="CloseButton" onClick={Closing}><CancelOutlinedIcon sx={{color:"black",fontSize:"15vw",fontWeight:"10px"}}/></button> */}


        <div className="Replicants">
        <Lottie animationData={Replicant4} loop={true} />
        </div>    

        <button className="CloseButton" onClick={Closing} >        
       
        <div className="StupidCloseButton">
            
        </div>
       
        </button>


        </div>

        
        
        </div>
        
        </>
    )
}