import "./Results.css";


import {useState, useEffect,useRef} from 'react';


import MenuOption from "../Landing1/MenuOption";

import Dessert1 from "./Assets/dessert1.jpg";
import Dessert2 from "./Assets/dessert2.jpg";
import Dessert3 from "./Assets/dessert3.jpg";

import Lottie from "lottie-react";

import IcecreamResults1 from "./Assets/IcecreamResults1.json";
import IcecreamResults2 from "./Assets/IcecreamResults2.json";
import IcecreamResults3 from "./Assets/IcecreamHeart.json";
import DonutResults1 from "./Assets/DonutHappy1.json";
import DonutResults2 from "./Assets/DonutHappy2.json";
import CookieCreame from "./Assets/CookiesandCream.json";
import Appetizer1 from "./Assets/Appetizer.json";
import Appetizer2 from "./Assets/Appetizer1.json";
import HotDrink from "./Assets/HotDrink.json";

import TacoResults from "./Assets/Taco.json";
import SandwichMan from "./Assets/Mr.Sandwich.json";
import PastaMan from "./Assets/Pasta.json";
import Chocolatecoffie from "./Assets/chocolatecoffie.json";
import Bobba from "./Assets/Bobba.json";
import HappyBurgerResults from  "./Assets/HappyBurger.json";
import FriesResults from "./Assets/Fries.json";

import Buger from "./Assets/Buger.json";
import Buger1 from "./Assets/Buger1.json";

import Pizzaria from "./Assets/Pizza.json";
import Pizzaing from  "./Assets/Pizzaing1.json";
import Pizzaing1 from "./Assets/pizzaing.json";

import Cupcake from "./Assets/cupcake.json";

import CoffeeDuke from "./Assets/Coffee_Dog.json";
 
export default function Results()
{

    var move=0;
    var move1="-210vh";
    var move2="660vh";
    var move3=0;
    var move4="160vh";
    var move5="460vh";
    var move6="1210vh";

    const [scrolling,setScrolling]=useState(0);

    const handleScrolling=()=>setScrolling(window.scrollY);

    const headingList=["DESSERTS","APPETIZERS","SHAKES&DRINKS","SANDWICHES","PIZZAS","AROUND THE WORLD"];

    var counter=0;
    var margining=26;
    var marginingY=3;

    if(scrolling>710)
    {
        counter++; 
        margining=21;
    }
          
    if(scrolling>3220)
    {
        counter++;
        margining=9;
    }

    if(scrolling>6750)
    {
        counter++;
        margining=16;
    }

    if(scrolling>9250)
    {
        counter++;
        margining=32;
    }    

    if(scrolling>13656)
    {
        counter++;
        margining=-0.8;
        marginingY=-3;
    }   

    if(window.screen.height>870)
    {
        move=240;
        move1="-175vh";
        move2="570vh";
        move3=420;
        move4="130vh";
        move5="410vh";
        move6="1020vh";
    }

    useEffect(()=>{

        window.addEventListener("scroll",handleScrolling);



    },[]);


    const Desserts = useRef(null);
    const Appetizers = useRef(null);
    const ShakesandDrinks = useRef(null);
    const Sandwiches = useRef(null);
    const Pizzas = useRef(null);

    const [width, setWidth]=useState(0);
    const [height, setHeight]=useState(0);
    var count=0;

    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
        console.log("width:"+window.screen.width+",height:"+window.screen.height);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    return (
        <>
        <div className="ResultsContain">
        <div className="Results">
        {

        // console.log(windowDimensions.width+","+windowDimensions.height)
        console.log(window.screen.width+","+window.screen.height)
        }
        <div className="ResultsScroll">
        {/* <h1>Results:{scrolling}</h1>    */}
        
        <div className="ButtonResults">
        <button className="ButRes1" onClick={()=>window.scroll({top:0,behavior:'smooth'})}>Desserts</button>
        <button className="ButRes1" onClick={()=>window.scroll({top:2698,behavior:'smooth'})}>Appetizers</button>
        <button className="ButRes1" onClick={()=>window.scroll({top:5988,behavior:'smooth'})}>Shakes and Drinks</button>
        <button className="ButRes1" onClick={()=>window.scroll({top:8625+move,behavior:'smooth'})}>Sandwiches</button> 
        <button className="ButRes1" onClick={()=>window.scroll({top:11340+move3,behavior:'smooth'})}>Pizzas</button>   
        </div>

        </div>    
        
        <h1 className="ResultingPara" style={{transform:`translateX(${margining}vw) translateY(${marginingY}vh)`}}>{headingList[counter]}</h1>
        </div>


        {/* <div ref={Desserts} className="Desserts">
        <div className="SVGresults">
        <div  className="SVGResult1" style={{transform:`translateY(${-scrolling*0.3}px)`,position:"relative",top:"5vh"}}>
        <Lottie animationData={IcecreamResults1} loop={true} />
        </div> 
        <div className="SVGResult2" style={{transform:`translateY(${scrolling*0.45}px)`,position:"relative",top:"-12vh",left:"-20vw"}}>
        <Lottie animationData={IcecreamResults2} loop={true} />
        </div> 
        <div className="SVGResult3" style={{transform:`translateY(${-scrolling*0.1}px)`,position:"relative",top:"5vh"}}>
        <Lottie animationData={IcecreamResults3} loop={true} />
        </div> 
        </div>


        <div className="SVGresults">
        <div className="SVGResult4" style={{transform:`translateY(${scrolling*0.45}px)`,position:"relative",top:"0vh",left:"80vw"}}>
        <Lottie animationData={DonutResults1} loop={true} />
        </div> 
        <div className="SVGResult5" style={{transform:`translateY(${-scrolling*0.45}px)`,position:"relative",top:"10vh",left:"68vw"}}>
        <Lottie animationData={DonutResults2} loop={true} />
        </div> 
        </div>


        <div className="MenuOptionsResults">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.1} top="-10vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.45} top="0vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.1} top="-10vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>


        <div className="SVGResult6" style={{transform:`translateY(${-scrolling*0.45}px)`,position:"absolute",top:"230vh",left:"35vw"}}>
        <Lottie animationData={CookieCreame} loop={true} />
        </div>


        <div className="MenuOptionsResults">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.18} top="10vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.2} top="-23vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>

        </div>


        <div ref={Appetizers} className="Appetizers">

        <div  className="SVGResults">
        <div  className="SVGResult7" style={{transform:`translateY(${-scrolling*0.45}px) rotate(-12deg)`,position:"absolute",top:"580vh",left:"35vw"}}>
        <Lottie animationData={Appetizer1} loop={true} />   
        </div>
        <div className="SVGResult8" style={{transform:`translateY(${scrolling*0.45}px)`,position:"absolute",top:"400vh",left:"60vw"}}>
        <Lottie animationData={Appetizer2} loop={true} />   
        </div>
        </div>


        <div className="SVGResults">
        <div className="SVGResult9" style={{transform:`translateY(${scrolling*0.45}px)`,position:"absolute",top:"240vh",left:"25vw"}}>
        <Lottie animationData={TacoResults} loop={true} />   
        </div>
        <div className="SVGResult10" style={{transform:`translateY(${-scrolling*0.55}px)`,position:"absolute",top:"620vh",left:"10vw"}}>
        <Lottie animationData={SandwichMan} loop={true} />   
        </div>
        </div>


        <div className="MenuOptionsResults Menu2">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.15} top="30vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.2} top="-90vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.1} top="25vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>



        <div className="MenuOptionsResults ">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.08} top="10vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.35} top="-162vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.6} top="320vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>
        
        </div>



        <div ref={ShakesandDrinks} className="ShakesandDrinks">
        <div className="SVGResult11" style={{transform:`translateY(${-scrolling*0.55}px)`,position:"absolute",top:"1430vh",left:"70vw"}}>
        <Lottie animationData={HotDrink} loop={true} />   
        </div>

        <div className="SVGDuke1" style={{transform:`translateY(${scrolling*0.35}px)`,position:"absolute",top:"580vh",left:"36vw"}}>
        <Lottie animationData={CoffeeDuke} loop={true} />   
        </div>

        <div className="SVGResult12" style={{transform:`translateY(${scrolling*0.35}px)`,position:"absolute",top:"600vh",left:"10vw"}}>
        <Lottie animationData={Chocolatecoffie} loop={true} />   
        </div>


        <div className="SVGResult13" style={{transform:`translateY(${-scrolling*0.32}px)`,position:"absolute",top:"1300vh",left:"27vw"}}>
        <Lottie animationData={Bobba} loop={true} />   
        </div>


        <div className="MenuOptionsResults Menu3">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.15} top="-100vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.3} top="250vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.7} top="550vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>
        <div className="MenuOptionsResults">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.2} top="277vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY M COOKIE" offset={scrolling} constant={-0.1} top="-105vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>
        </div>


        <div ref={Sandwiches} className="Sandwiches">
        <div className="SVGResult14" style={{transform:`translateY(${scrolling*0.2}px)`,position:"absolute",top:"990vh",left:"29vw"}}>
        <Lottie animationData={HappyBurgerResults} loop={true} />   
        </div>

        <div className="SVGResult15" style={{transform:`translateY(${scrolling*0.2}px)`,position:"absolute",top:"1028vh",left:"54vw"}}>
        <Lottie animationData={FriesResults} loop={true} />   
        </div>


        <div className="SVGResult16" style={{transform:`translateY(${scrolling*0.35}px)`,position:"absolute",top:"880vh",left:"68vw"}}>
        <Lottie animationData={Buger} loop={true} />   
        </div>


        <div className="SVGResult17" style={{transform:`translateY(${scrolling*0.42}px)`,position:"absolute",top:"820vh",left:"10vw"}}>
        <Lottie animationData={Buger1} loop={true} />   
        </div>


        <div className="MenuOptionsResults Menu4">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.2} top="190vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.1} top="100vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY S COOKIE" offset={scrolling} constant={0.8} top="900vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>

        <div className="MenuOptionsResults">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.4} top="458vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.03} top="-62vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.7} top="800vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>
        </div>


        <div ref={Pizzas} className="Pizzas">
        <div className="SVGResult18" style={{transform:`translateY(${scrolling*0.42}px)`,position:"absolute",top:"890vh",left:"0vw"}}>
        <Lottie animationData={Pizzaria} loop={true} />   
        </div>


        <div className="SVGResult19" style={{transform:`translateY(${scrolling*0.3}px)`,position:"absolute",top:"1190vh",left:"70vw"}}>
        <Lottie animationData={Pizzaing1} loop={true} />   
        </div>


        <div className="SVGResult20" style={{transform:`translateY(${scrolling*0.42}px)`,position:"absolute",top:"1000vh",left:"-2vw"}}>
        <Lottie animationData={Pizzaing} loop={true} />   
        </div>


        <div className="MenuOptionsResults Menu5">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.1} top="150vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.0} top="0vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.3} top="450vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>

        <div className="MenuOptionsResults">
        <MenuOption Name="SUBWAY W COOKIE" offset={scrolling} constant={-0.1} top="-160vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.2} top="-320vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>
        </div>


        <div className="MenuOptionsResults Menu6">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.15} top="300vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.19} top="400vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.3} top="600vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>

        <div className="MenuOptionsResults">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.1} top="-180vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY SM COOKIE" offset={scrolling} constant={-0.17} top="-300vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.2} top="-364vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div> */}


        <div ref={Desserts} className="Desserts">
        <div className="SVGresults ">
        <div  className="SVGResult1  Innocence" style={{transform:`translateY(${-scrolling*0.3}px)`,position:"relative",top:"-5vh"}}>
        <Lottie animationData={IcecreamResults1} loop={true} />
        </div> 
        <div className="SVGResult2  Innocence" style={{transform:`translateY(${scrolling*0.45}px)`,position:"relative",top:"-22vh",left:"-20vw"}}>
        <Lottie animationData={IcecreamResults2} loop={true} />
        </div> 
        <div className="SVGResult3  Innocence" style={{transform:`translateY(${-scrolling*0.1}px)`,position:"relative",top:"-15vh",left:"-5vw"}}>
        <Lottie animationData={IcecreamResults3} loop={true} />
        </div> 
        </div>


        <div className="SVGresults">
        <div className="SVGResult4  Innocence" style={{transform:`translateY(${scrolling*0.45}px)`,position:"relative",top:"-10vh",left:"70vw"}}>
        <Lottie animationData={DonutResults1} loop={true} />
        </div> 
        <div className="SVGResult5  Innocence" style={{transform:`translateY(${-scrolling*0.45}px)`,position:"relative",top:"0vh",left:"58vw"}}>
        <Lottie animationData={DonutResults2} loop={true} />
        </div> 
        </div>


        <div className="MenuOptionsResults Menu1 Mac1">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.1} top="-0vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.0} top="0vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.1} top="-0vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>


        <div className="SVGResult6  Innocence" style={{transform:`translateY(${-scrolling*0.45}px)`,position:"absolute",top:"50vh",left:"32vw"}}>
        <Lottie animationData={Cupcake} loop={true} />
        </div>


        <div className="MenuOptionsResults MenuOptionsResults1 Mac2">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.0} top="0vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.1} top="-0vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>

        </div>


        <div ref={Appetizers} className="Appetizers">

        <div  className="SVGResults SVGResultsMac">
        <div  className="SVGResult7  Innocence" style={{transform:`translateY(${-scrolling*0.45}px) rotate(-12deg)`,position:"absolute",top:"560vh",left:"40vw"}}>
        <Lottie animationData={Appetizer1} loop={true} />   
        </div>
        <div className="SVGResult8  Innocence" style={{transform:`translateY(${scrolling*0.45}px)`,position:"absolute",top:"400vh",left:"60vw"}}>
        <Lottie animationData={Appetizer2} loop={true} />   
        </div>
        </div>


        <div className="SVGResults SVGResultsMac">
        <div className="SVGResult9  Innocence" style={{transform:`translateY(${scrolling*0.45}px)`,position:"absolute",top:"240vh",left:"25vw"}}>
        <Lottie animationData={TacoResults} loop={true} />   
        </div>
        <div className="SVGResult10  Innocence" style={{transform:`translateY(${-scrolling*0.55}px)`,position:"absolute",top:"610vh",left:"-2vw"}}>
        <Lottie animationData={SandwichMan} loop={true} />   
        </div>
        </div>


        <div className="MenuOptionsResults Menu2 Mac3">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.25} top="90vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.0} top="-5vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.15} top="50vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>



        <div className="MenuOptionsResults MenuOptionsResults1 MenuOptionsResultsImp Mac4">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.3} top="115vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.1} top="45vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.35} top="-187vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>
        
        </div>



        <div ref={ShakesandDrinks} className="ShakesandDrinks">
        <div className="SVGResult11  MacSvg" style={{transform:`translateY(${scrolling*0.65}px)`,position:"absolute",top:"335vh",left:"55vw"}}>
        <Lottie animationData={HotDrink} loop={true} />   
        </div>

        <div className="SVGDuke1  MacSvg" style={{transform:`translateY(${-scrolling*0.45}px)`,position:"absolute",top:"1235vh",left:"30vw"}}>
        <Lottie animationData={CoffeeDuke} loop={true} />   
        </div>

        <div className="SVGResult12  MacSvg" style={{transform:`translateY(${scrolling*0.35}px)`,position:"absolute",top:"580vh",left:"10vw"}}>
        <Lottie animationData={Chocolatecoffie} loop={true} />   
        </div>


        <div className="SVGResult13  MacSvg" style={{transform:`translateY(${-scrolling*0.32}px)`,position:"absolute",top:"1120vh",left:"67vw"}}>
        <Lottie animationData={Bobba} loop={true} />   
        </div>


        <div className="MenuOptionsResults Menu3">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.0} top="-0vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.1} top="-90vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.25} top="200vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>
        <div className="MenuOptionsResults MenuOptionsResults1">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.12} top="-115vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY M COOKIE" offset={scrolling} constant={-0.0} top="10vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>
        </div>


        <div ref={Sandwiches} className="Sandwiches">
        <div className="SVGResult14  Innocence" style={{transform:`translateY(${scrolling*0.2}px)`,position:"absolute",top:"990vh",left:"29vw"}}>
        <Lottie animationData={HappyBurgerResults} loop={true} />   
        </div>

        <div className="SVGResult15  Innocence" style={{transform:`translateY(${scrolling*0.2}px)`,position:"absolute",top:"1028vh",left:"54vw"}}>
        <Lottie animationData={FriesResults} loop={true} />   
        </div>


        <div className="SVGResult16  Innocence" style={{transform:`translateY(${scrolling*0.35}px)`,position:"absolute",top:"730vh",left:"50vw"}}>
        <Lottie animationData={Buger} loop={true} />   
        </div>


        <div className="SVGResult17  Innocence" style={{transform:`translateY(${scrolling*0.42}px)`,position:"absolute",top:"690vh",left:"3vw"}}>
        <Lottie animationData={Buger1} loop={true} />   
        </div>


        <div className="MenuOptionsResults Menu4">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.1} top="100vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.15} top={move1} SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY S COOKIE" offset={scrolling} constant={0.5} top="560vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>

        <div className="MenuOptionsResults MenuOptionsResults1">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.5} top={move2} SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.1} top="-140vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.3} top="320vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>
        </div>


        <div ref={Pizzas} className="Pizzas">
        <div className="SVGResult18  Innocence" style={{transform:`translateY(${scrolling*0.42}px)`,position:"absolute",top:"915vh",left:"0vw"}}>
        <Lottie animationData={Pizzaria} loop={true} />   
        </div>


        <div className="SVGResult19  Innocence" style={{transform:`translateY(${scrolling*0.3}px)`,position:"absolute",top:"1100vh",left:"70vw"}}>
        <Lottie animationData={Pizzaing1} loop={true} />   
        </div>


        <div className="SVGResult20  Innocence" style={{transform:`translateY(${-scrolling*0.42}px)`,position:"absolute",top:"2220vh",left:"0vw"}}>
        <Lottie animationData={Pizzaing} loop={true} />   
        </div>


        <div className="MenuOptionsResults Menu5">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.1} top={move4} SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.3} top={move5} SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.1} top="-160vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>

        <div className="MenuOptionsResults MenuOptionsResults1">
        <MenuOption Name="SUBWAY W COOKIE" offset={scrolling} constant={0.7} top={move6} SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.15} top="-250vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>
        </div>


        {/* <div className="MenuOptionsResults Menu6">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.15} top="300vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.19} top="400vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.3} top="600vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>

        <div className="MenuOptionsResults">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.1} top="-180vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY SM COOKIE" offset={scrolling} constant={-0.17} top="-300vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.2} top="-364vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div> */}

        
        </div>

        <div className="IphoneResults">
        <h1 className="IphoneDesserts">DESSERTS</h1>  
        
        <div className="IphoneSVG">
        <div  className="SVGResultIphone1  Innocence" >
        <Lottie animationData={IcecreamResults1} loop={true} />
        </div>   
        <div className="SVGResultIphone2  Innocence" >
        <Lottie animationData={IcecreamResults2} loop={true} />
        </div> 
        <div className="SVGResultIphone3  Innocence" >
        <Lottie animationData={IcecreamResults3} loop={true} />
        </div>     
        </div>

        <div className="IphoneOptionsBox1">
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert1}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert2}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert3}></MenuOption>   
        </div>
        <div className="IphoneOptionsBox2">
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert1}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert2}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert3}></MenuOption>   
        </div>

        <h1 className="IphoneDesserts IphoneAppetizers">APPETIZERS</h1>    

        <div className="IphoneSVG">
        <div  className="SVGResultIphone4  Innocence" >
        <Lottie animationData={Appetizer1} loop={true} />
        </div>   
        <div className="SVGResultIphone5  Innocence" >
        <Lottie animationData={Appetizer2} loop={true} />
        </div> 
        <div className="SVGResultIphone6  Innocence" >
        <Lottie animationData={TacoResults} loop={true} />
        </div>     
        </div>    

        <div className="IphoneOptionsBox3">
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert1}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert2}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert3}></MenuOption>   
        </div>
        <div className="IphoneOptionsBox4">
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert1}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert2}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert3}></MenuOption>   
        </div>

        <h1 className="IphoneDesserts IphoneShakesAndDrinks">SHAKES AND DRINKS</h1>    
        <div className="IphoneSVG">
        
        <div className="SVGDukeIphone">
        <Lottie animationData={CoffeeDuke} loop={true} />   
        </div>



        </div>
        <div className="IphoneOptionsBox5">
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert1}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert2}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert3}></MenuOption>   
        </div>
        <div className="IphoneOptionsBox6">
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert1}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert2}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert3}></MenuOption>   
        </div>

        <h1 className="IphoneDesserts IphoneSandwiches">SANDWICHES</h1> 
        <div className="IphoneSVG">
        <div className="SVGResultIphoneSand1  Innocence" >
        <Lottie animationData={HappyBurgerResults} loop={true} />   
        </div>
        <div className="SVGResultIphoneSand2  Innocence" >
        <Lottie animationData={FriesResults} loop={true} />   
        </div>
        <div className="SVGResultIphoneSand3  Innocence" >
        <Lottie animationData={Buger} loop={true} />   
        </div>    
        </div>   
        <div className="IphoneOptionsBox7">
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert1}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert2}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert3}></MenuOption>   
        </div>
        <div className="IphoneOptionsBox8">
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert1}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert2}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert3}></MenuOption>   
        </div>


        <h1 className="IphoneDesserts IphonePizzas">PIZZAS</h1> 

        <div className="SVGResultPizza  Innocence">
        <Lottie animationData={Pizzaria} loop={true} />   
        </div>   
        
        <div className="IphoneOptionsBox9">
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert1}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert2}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert3}></MenuOption>   
        </div>
        <div className="IphoneOptionsBox10">
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert1}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert2}></MenuOption>   
         <MenuOption Name="SUBWAY COOKIE" Price="$7.99" SRC={Dessert3}></MenuOption>   
        </div>
        </div>    

        </>
    )
}