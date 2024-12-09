// import "./Landing2.css";
import "./Landing22.css";
import Lottie from "lottie-react";

import ChefsKiss from "../Assets/ChefsKiss.json";

import Vert1 from "../Assets/cus2.jpg";
import Vert2 from "../Assets/cus3.jpg";
import Vert3 from "../Assets/cus5.jpg";
import Vert4 from "../Assets/dining1.jpg";
import Vert5 from "../Assets/dining2.jpg";
import Vert6 from "../Assets/Res.jpg";
import Vert7 from "../Assets/Vert7.jpg";


import Hor1 from "../Assets/chef1.jpg";
import Hor2 from "../Assets/chef2.jpg";
import Hor3 from "../Assets/chef3.jpg";
import Hor4 from "../Assets/cus1.jpg";
import Hor5 from "../Assets/cus4.jpg";
import Hor6 from "../Assets/dining3.jpg";

import Story from "../Assets/story1.jpg";

import Burger from "../Assets/Burger.jpg";

import Waffle from "../Assets/Waffle.jpg";

import Cookie from "../Assets/Cookie.jpg";

import Food_Walks from "../Assets/Food_Walks.json";

import { useState,useEffect } from "react";

import Food_Truck from "../Assets/FoodTruck.jpg";

import Pan from "../Assets/Pasta.json";

import Happy_Burger from "../Assets/HappyBurger.json";

import gsap from "gsap";

import MenuOption from "./MenuOption.js";

import Sandwich from "../Assets/Mr.Sandwich.json";

import Bobba from "../Assets/New_Assets/Bobba.json";
import Bread from "../Assets/New_Assets/Bread.json";
import Burger1 from "../Assets/New_Assets/Burger.json";
import Coffee from "../Assets/New_Assets/Coffee_Dog.json";
import Fries from "../Assets/New_Assets/Fries.json";
import Icecream from "../Assets/New_Assets/New_Assets/Icecream1.json";
import Kitchen from "../Assets/New_Assets/Kitchen.json";
import Taco from "../Assets/New_Assets/Taco.json";

import Pasta from "../Assets/Pasta.json";
import Burger2 from "../Assets/New_Assets/Burger1.json";
import Burger3 from "../Assets/New_Assets/Burger2.json";
import Stars1 from "../Assets/stars.json";
import Stars2 from "../Assets/stars1.json";
import Stars3 from "../Assets/stars2.json";
import Bread1 from "../Assets/New_Assets/New_Assets/Bread1.json";
import Dishing from "../Assets/New_Assets/New_Assets/Dishing.json";
import Donut1 from "../Assets/New_Assets/New_Assets/Donut1.json"; 
import Donut2 from "../Assets/New_Assets/New_Assets/Donut2.json";
import Pizza from "../Assets/New_Assets/New_Assets/Pizza.json";
import Icecream1 from "../Assets/New_Assets/Icecream.json";

import Clouds from "../Assets/replicant3.json";


import {IconFeFacebook} from "./Facebook.js";

import {IconPhYoutubeLogoFill} from "./Youtube.js"

import { IconAntDesignInstagramFilled } from "./Instagram.js"

import {IconFeTwitter } from "./Twitter.js"

import {IconFePinterest} from "./Pinterest.js"

import Final from "../Assets/final.mp4";
import { SystemSecurityUpdate } from "@mui/icons-material";

import Video from "./Video.js";

import Slider from "./Slider.js";

var replacement=0;
var old=0;
var move=0;
var moveString="";

export default function Landing2()
{

    // const [count, setCount] =useState(0);
    const [offset, setOffset]=useState(0);
    // const [offsetAgain, setOffsetAgain]=useState(0);
    // const handleOffset=()=>setOffset(window.pageYOffset);
    
    const handleOffset=()=>setOffset(window.scrollY);
    // const handleOffsetAgain=()=>setOffsetAgain(window.scrollX);
    // const [value, setValue] = useState(0);


    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(()=>{
       

        const handleMouseMove = (event) => {
            setMousePosition({
              x: event.clientX, // Mouse position along X axis
              y: event.clientY, // Mouse position along Y axis
            });
          };
      
          // Adding the event listener
          window.addEventListener('mousemove', handleMouseMove);    


        window.addEventListener("scroll",handleOffset);
            
    },[])



  

    // Effect hook to listen for mouse move events
    // useEffect(() => {
      
  
    //   // Cleanup the event listener when the component is unmounted
    //   return () => {
    //     window.removeEventListener('mousemove', handleMouseMove);
    //   };
    // }, []);



    return (
        <>
        <div className="Contact">
           
           <div className="ContactFill">
            <h1 className="ContactName">CABALAR</h1>
            <div className="ContactSocial">
            <a href="https://wp.scoopwhoop.com/wp-content/uploads/2015/06/567735b26e510a6f3a75bec3_52868676.jpg">  <button className="iconButton" > <IconPhYoutubeLogoFill className="Youtube" style={{position:"relative",color:"rgb(255, 240, 194)"}}/> </button> </a>
            <a href="https://www.boredpanda.com/blog/wp-content/uploads/2018/10/meme11-5bc4991e4d9fe__700.jpg">  <button className="iconButton" >   <IconFeFacebook className="Facebook" style={{position:"relative",color:"rgb(255, 240, 194)"}}/></button> </a>
            <a href="https://i.kym-cdn.com/photos/images/original/002/927/073/f58.jpeg">  <button className="iconButton" >   <IconAntDesignInstagramFilled  className="Instagram" style={{position:"relative",color:"rgb(255, 240, 194)"}}/></button> </a>
            <a href="https://i.pinimg.com/236x/77/eb/c4/77ebc4ac67bcfff605859dc5d6b8bcb2.jpg">  <button className="iconButton" > <IconFeTwitter className="Twitter" style={{position:"relative",color:"rgb(255, 240, 194)"}}/></button> </a>
            <a href="https://images3.memedroid.com/images/UPLOADED180/66e6ec90163c9.jpeg">  <button className="iconButton" >  <IconFePinterest className="Pinterest" style={{position:"relative",color:"rgb(255, 240, 194)"}}/></button> </a>
           </div>
           </div> 
           
        </div>





        <div className="container" style={{transform:`translateY(${-offset*0.5}px)`}}>
        
        <div className="phoneContainer">

       
       
        {/* <div className="Nav">
        <h1 className="Logo StoryHeading1">CAB<span>ALAR</span></h1>
        
            <button className="NavButton1">
            Menu
            </button>
            <button className="NavButton2">
            Reservations
            </button>
        
        </div> */}

 

        <Video srcVideo={Final}/>
        {/* <div className="Section">
        <video src={Final} className="final" autoPlay loop muted></video>
        </div> */}


        <div className="Box">
        
        <div className="Content1">
        <p>Cabalar is the happiest place on earth, or at least in Lancaster City. As a combination butchery meets burger spot with a real happy bar, we pair our mouthwatering burgers, sandwiches, fries, and sides with some mighty tasty bevvies, all made with the best ingredients!</p>
        </div>
        <div className="Content1Big" style={{
    clipPath: `circle(10.0% at ${mousePosition.x}px ${mousePosition.y}px)`,transistion:"1"}}>
        <p>Cabalar is the happiest place on earth, or at least in Lancaster City. As a combination butchery meets burger spot with a real happy bar, we pair our mouthwatering burgers, sandwiches, fries, and sides with some mighty tasty bevvies, all made with the best ingredients!</p>            
        </div>
        
        <div className="Clouds">
        <Lottie animationData={Clouds} loop={true} />    
        </div>

        <div className="Content2">
        <p>Hours of Operation:</p>
        <p>Thursday - Sunday: 11-9</p>
        <p>Monday - Wednesday:</p>
        <p>Closed</p>

        <div className="Chef_SVG" style={{width:"100%",marginTop:"-5%",paddingTop:"-5%"}}>
        {/* <Lottie animationData={ChefsKiss} loop={true} /> */}
        <Lottie animationData={Food_Walks} loop={true} />
        </div>

        </div>        
        
        </div>

        <Slider />


        


        <div className="GoodStory">
        
        <div className="StoryImage" style={{position:"relative",transform:`translateY(${-offset*0.2}px) rotate(6deg)`,top:"50vh"}}>
        <img src={Story}></img>
        <div className="Pan" style={{transform:`translateY(${-offset*0.5}px)`,position:"relative",top:"110vh"}}>
            <Lottie animationData={Pan} loop={true} />
            </div> 
        </div>   

        <div className="Story">
            <h1 className="StoryHeading1">EVERBODY LOVES A</h1>
            <h1 className="StoryHeading1 BigStoryHeading"><span>GOOD STORY</span></h1> 
            <p className="StoryPara">Steve Cabalar was no ordinary high school graduate. He finished high school at the age of 12, leaving everyone in awe of his genius and ambition. At 14, he conquered culinary arts school and opened Lancaster’s beloved burger spot, Cabalar Meat Co. in 2018. Or at least that is what the legends say.</p>           
        </div>

        </div>
        

        <div className="JoyBringer">
            <div className="JoyStory">
            <h1 className="StoryHeading1">BRING JOY</h1>
            <h1 className="StoryHeading1 BigStoryHeading BigStoryHeading2"><span>TO WHEREVER</span></h1>
            <h1 className="StoryHeading1 BigStoryHeading BigStoryHeading1"><span>YOU ARE</span></h1>
            <p className="StoryPara StoryPara1" style={{}}>The Cabalar Food Truck brings handheld happiness to your special event. Whatever the occasion, our smash burgers, chicken sandwiches, and milkshakes are sure to please any crowd.</p>
            </div>
            <div className="JoyPicture">
            <div className="StoryImage StoryImage1" style={{position:"relative",transform:`translateY(${-offset*0.2}px) rotate(6deg)`,top:"55vh"}}>
            <img src={Food_Truck}></img>
            <div className="Pan Burger" style={{transform:`translateY(${-offset*0.5}px)`,position:"relative",top:"152vh"}}>
            <Lottie animationData={Happy_Burger} loop={true} />
            </div> 
        </div>  
            </div>
        </div>

        <div className="MenuIntro">
        <p className="IntroPara">Try our</p>    
        <h1 className="Intro">DIVERSE ARRAY OF FOODS</h1>
        </div>

        <div className="MenuOptions">
        
        <MenuOption Name="SUBWAY COOKIE" offset={offset} constant={0.2} top="60vh" SRC={Cookie} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        
        <MenuOption Name="DUKIE PATTY" SRC={Burger} Price="$14.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        
        <MenuOption Name="BELGIUM WAFFLE" offset={offset} constant={-0.35} top="-130vh" SRC={Waffle} Price="$8.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        
        </div>

        <div className="MenuIntro MenuIntro1 MenuIntro2">
        <p className="IntroPara">Explore our</p>    
        <button className="BuyButton">Menu</button>
        <div className="Sandwich" style={{transform:`translateY(${-offset*0.2}px)`,position:"relative",top:"90vh"}}>
        <Lottie animationData={Sandwich} loop={true} />
        </div>
        </div>

        <div className="MenuOptions">
        <MenuOption Name="SUBWAY COOKIE" offset={offset} constant={0.2} top="60vh" SRC={Cookie} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="DUKIE PATTY" SRC={Burger} Price="$14.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="BELGIUM WAFFLE" offset={offset} constant={-0.2} top="-90vh" SRC={Waffle} Price="$8.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>


        <div className="SvgContainer">

        <div className="SVG5" style={{transform:`translateY(${offset*0.2}px)`,position:"relative",top:"-100vh"}}>
        <Lottie animationData={Fries} loop={true} />        
        </div> 
        <div className="SVG2" style={{transform:`translateY(${-offset*0.5}px)`,position:"relative",top:"260vh"}}>
        <Lottie animationData={Taco} loop={true} />
        </div>    
        <div className="SVG3" style={{transform:`translateY(${offset*0.2}px)`,position:"relative",top:"-120vh"}}>
        <Lottie animationData={Burger1} loop={true} />
        </div>
        <div className="SVG8" style={{transform:`translateY(${-offset*0.2}px)`,position:"relative",top:"100vh"}}>
        <Lottie animationData={Kitchen} loop={true}  className="chef"/>                
        </div>          
        </div>

        <div className="SvgContainer SvgContainer1">
        <div className="SVG6" style={{transform:`translateY(${-offset*0.5}px)`,position:"relative",top:"260vh"}}>
        <Lottie animationData={Coffee} loop={true} />                
        </div>    
        <div className="SVG1" style={{transform:`translateY(${offset*0.35}px)`,position:"relative",top:"-230vh"}}>
        <Lottie animationData={Bobba} loop={true} />
        </div>    
        <div className="SVG4" style={{transform:`translateY(${-offset*0.4}px)`,position:"relative",top:"230vh"}}>
        <Lottie animationData={Icecream} loop={true} />
        </div>  

        <div className="SVG10" style={{transform:`translateY(${-offset*0.25}px)`,position:"relative",top:"140vh"}}>
        <Lottie animationData={Bread} loop={true} />
        </div>  
        </div>


        <div className="SVG11" style={{transform:`translateY(${-offset*0.25}px)`,position:"relative",top:"140vh"}}>
        <Lottie animationData={Donut1} loop={true} />
        </div>
 

        <div className="SVG12" style={{transform:`translateY(${-offset*0.36}px)`,position:"relative",top:"120vh"}}>
        <Lottie animationData={Donut2} loop={true} />
        </div>  

        
        <div className="SVG13" style={{transform:`translateY(${offset*0.5}px)`,position:"relative",top:"-290vh"}}>
        <Lottie animationData={Pizza} loop={true} />
        </div>  
        

        
        <div className="SVG14" style={{transform:`translateY(${-offset*0.6}px)`,position:"relative",top:"120vh"}}>
        <Lottie animationData={Dishing} loop={true} />
        </div>  
       

       
        <div className="SVG15" style={{transform:`translateY(${-offset*0.46}px)`,position:"relative",top:"120vh"}}>
        <Lottie animationData={Bread1} loop={true} />
        </div>  
        



        
        <div className="SVG17" style={{transform:`translateY(${offset*0.26}px)`,position:"relative",top:"120vh"}}>
        <Lottie animationData={Stars2} loop={true} />
        </div> 


        <div className="SVG18" style={{transform:`translateY(${-offset*0.36}px)`,position:"relative",top:"120vh"}}>
        <Lottie animationData={Stars3} loop={true} />
        </div> 



        <div className="FinalSection">
            <h1 className="FinalHeading StoryHeading1">
          <span>  ARTISANAL SWEETS, AUTHENTIC TASTE,</span> GUARANTEED WELL-BEING.
            </h1>
            <p className="FinalPara StoryPara">
            The "cold" processing to obtain almond paste leaves the healthy nutrients naturally contained in almonds unaltered.
            </p>
           
            <div style={{transform:`translateY(${-offset*0.55}px)`,position:"relative",top:"309vh",left:"10vw"}} className="Circluar">
            <svg width="10%" height="10%" viewBox="0 0 400 400" className="circleSvg" >
                <path id="circlePath" d="M 30 200 a 120, 120 0 1, 1 320, 0 a 120, 120 0 1, 1 -320, 0" fill="rgb(255, 240, 194)"></path>
            <text className="textCircle">
                <textPath href="#circlePath">
                 * willy * wonka * certified * fresh * candy * golden * tickets *   
                </textPath>
            </text>
            </svg>
            </div>

        </div>





        <div className="FinalImageContain">
        
        <img src={Vert4} className="FinalImage1" style={{transform:"rotate(-6deg)",top:"-110vh",transform:`translateY(${offset*0.2}px) rotate(6deg)`}}></img>
        
        
        <img src={Vert5} className="FinalImage2" style={{left:"20%",top:"150vh",transform:`translateY(${-offset*0.2}px) rotate(-6deg)`}}></img>        
        
      
        <img src={Hor6} className="FinalImage3" style={{left:"30%",transform:"rotate(-3deg)",transform:`translateY(${-offset*0.5}px) `,top:"350vh"}}></img>         
       
        
        <img src={Vert6} className="FinalImage4" style={{left:"65%",transform:"rotate(-6deg)",top:"230vh",transform:`translateY(${-offset*0.35}px) rotate(-3deg)`}}></img>         
       
        
        <img src={Vert7} className="FinalImage5" style={{left:"73%",transform:"rotate(6deg)",top:"110vh",transform:`translateY(${-offset*0.08}px) rotate(3deg)`}}></img>           
        
        </div>




        </div>
        </div>

        
        </>
    )
}