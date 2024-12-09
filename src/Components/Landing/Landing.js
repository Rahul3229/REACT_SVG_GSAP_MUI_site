import Fish from "../Assets/fish.mp4";
import "./Landing.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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

import { useEffect, useState } from "react";

import gsap from "gsap";
import { stringify } from "ajv";

var abc=0;
var def=0;
var hij=0;
var stringing="";
export default function Landing()
{

    const [variable,setVariable]=useState(0);
    const [count, setCount] = useState(0);

    const Increase=()=>{
        abc++;
        def=def-60;
        stringing=def+"vw";
        setVariable(stringing);
        gsap.to(".ImageContainer",{x:stringing,transition:0.5});
        console.log(stringing);
    }

    const Decrease=()=>{
        abc--;
        def=def+60;
        stringing=def+"vw";
        setVariable(stringing);
        gsap.to(".ImageContainer",{x:stringing,transition:0.5});
        console.log(stringing);
    }

    useEffect(()=>{
        
        // const intervalId = setInterval(() => {
        //     setCount((prevCount) => prevCount + 600);
        //   }, 10); // 
      
        // gsap.to(".ImageContainer",{x:-count,transition:0.5,delay:1.0});
    })

    return (
        <>
        <div className="Fishing">
        <video src={Fish} className="Fish1" autoPlay loop muted></video>   
        <video src={Fish} className="Fish2" autoPlay loop muted></video>   
        </div>




            <Grid container  direction={"column"} sx={{height:"500vh", width:"100vw"}}>
            
            
            <Grid item sm={0.5}>
            </Grid>


            <Grid item container>
            
            <Grid item sm={0.2}>

            </Grid>

            <Grid item sm={5} sx={{}}>
            <p className="midnight">Cabalar is the happiest place on earth, or at least in Lancaster City. As a combination butchery meets burger spot, we have a full bar, pairing tasty bevvies with our mouthwatering burgers, sandwiches, fries, and shakes, all made with the best ingredients.</p>
            </Grid>        

            <Grid item sm={2.2}>

            </Grid>

            <Grid container direction={"column"} item sm={4} sx={{position:"relative",top:"1rem"}}>
            <Grid item>
            <p className="midnight1">Hours of Operation:</p>
            </Grid>
            
            <Grid item sx={{position:"relative",top:"-4.1rem",width:"90%"}}>
            <p className="midnight1">Thursday - Sunday: 11-9 Monday - Wednesday: Closed</p>
            </Grid>

            <Grid item  sx={{border:"0.1rem solid black",width:"70%", position:"relative",top:"-6.1rem"}} >
            <Lottie animationData={Dining} loop={true} />
            </Grid>

            </Grid>

            </Grid>


            <Grid item sm={1.5}>

            </Grid>


            {/* <Grid container spacing={3} >
            
            <Grid item sm={4} >
            <img src={Cus2} className="Cus2"></img>
            </Grid>

            <Grid item sm={4} sx={{position:"relative",left:"-1.5rem",top:"5rem"}}>
            <img src={Cus1} className="Cus1"></img>
            </Grid>

            <Grid item sm={4}>
            <img src={Cus3} className="Cus3"></img>
            </Grid>
            
            </Grid> */} 
                

            <Grid item sm={12} sx={{position:"relative",top:"70vh",left:"-43vw"}}>
           
            <div className="ImageContainer">
            <img src={Vert1} className="Image1"></img>
            <img src={Hor1} className="Image2"></img>
            <img src={Vert2} className="Image1"></img>
            <img src={Hor2} className="Image2"></img>
            <img src={Vert3} className="Image1"></img>
            <img src={Hor3} className="Image2"></img>
            <img src={Vert4} className="Image1"></img>
            <img src={Hor4} className="Image2"></img>
            <img src={Vert5} className="Image1"></img>
            <img src={Hor5} className="Image2"></img>   
            <img src={Vert6} className="Image1"></img> 
            <img src={Hor6} className="Image2"></img>  
            

   
            </div>     

            </Grid>    


            </Grid>


                     
            <button className="left" onClick={Decrease}>Left</button> 
            <button className="right" onClick={Increase}>Right</button>      

        </>
    )
}