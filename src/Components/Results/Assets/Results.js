import "./Results.css";


import {useState, useEffect} from 'react';


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


export default function Results()
{


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

    if(scrolling>6418)
    {
        counter++;
        margining=16;
    }

    if(scrolling>9045)
    {
        counter++;
        margining=32;
    }    

    if(scrolling>11656)
    {
        counter++;
        margining=-0.8;
        marginingY=-3;
    }   

    useEffect(()=>{

        window.addEventListener("scroll",handleScrolling);



    },[]);

    return (
        <>
        <div className="ResultsContain">
        <div className="Results">
        <h1 className="ResultsScroll">Results:{scrolling}</h1>
        <h1 className="ResultingPara" style={{transform:`translateX(${margining}vw) translateY(${marginingY}vh)`}}>{headingList[counter]}</h1>
        </div>

        <div className="SVGresults">
        <div className="SVGResult1" style={{transform:`translateY(${-scrolling*0.3}px)`,position:"relative",top:"15vh"}}>
        <Lottie animationData={IcecreamResults1} loop={true} />
        </div> 
        <div className="SVGResult2" style={{transform:`translateY(${scrolling*0.45}px)`,position:"relative",top:"-2vh",left:"-20vw"}}>
        <Lottie animationData={IcecreamResults2} loop={true} />
        </div> 
        <div className="SVGResult3" style={{transform:`translateY(${-scrolling*0.1}px)`,position:"relative",top:"15vh"}}>
        <Lottie animationData={IcecreamResults3} loop={true} />
        </div> 
        </div>


        <div className="SVGresults">
        <div className="SVGResult4" style={{transform:`translateY(${scrolling*0.45}px)`,position:"relative",top:"10vh",left:"80vw"}}>
        <Lottie animationData={DonutResults1} loop={true} />
        </div> 
        <div className="SVGResult5" style={{transform:`translateY(${-scrolling*0.45}px)`,position:"relative",top:"35vh",left:"68vw"}}>
        <Lottie animationData={DonutResults2} loop={true} />
        </div> 
        </div>


        <div className="MenuOptionsResults">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.1} top="0vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.45} top="10vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.1} top="0vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>


        <div className="SVGResult6" style={{transform:`translateY(${-scrolling*0.45}px)`,position:"absolute",top:"240vh",left:"35vw"}}>
        <Lottie animationData={CookieCreame} loop={true} />
        </div>


        <div className="MenuOptionsResults">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.18} top="20vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.2} top="-10vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>

        <div className="SVGResults">
        <div className="SVGResult7" style={{transform:`translateY(${-scrolling*0.45}px) rotate(-12deg)`,position:"absolute",top:"580vh",left:"35vw"}}>
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
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.15} top="25vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.2} top="-90vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.1} top="25vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>



        <div className="MenuOptionsResults ">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.08} top="10vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.35} top="-162vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.6} top="340vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>


        <div className="SVGResult11" style={{transform:`translateY(${-scrolling*0.55}px)`,position:"absolute",top:"1430vh",left:"70vw"}}>
        <Lottie animationData={HotDrink} loop={true} />   
        </div>


        <div className="SVGResult12" style={{transform:`translateY(${scrolling*0.55}px)`,position:"absolute",top:"420vh",left:"0vw"}}>
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
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.2} top="280vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY M COOKIE" offset={scrolling} constant={-0.1} top="-105vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>


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


        <div className="MenuOptionsResults Menu5">
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.1} top="150vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.0} top="0vh" SRC={Dessert2} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={0.3} top="450vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        </div>

        <div className="MenuOptionsResults">
        <MenuOption Name="SUBWAY W COOKIE" offset={scrolling} constant={-0.1} top="-160vh" SRC={Dessert1} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
        <MenuOption Name="SUBWAY COOKIE" offset={scrolling} constant={-0.2} top="-320vh" SRC={Dessert3} Price="$7.99" Recipe="110 g unsalted butter melted 150 g light brown sugar 115 g granulated sugar 1 large egg 1 tsp vanilla extract 180 g plain flour 1/2 tsp bicarbonate of soda 1/2 tsp salt 200 g chocolate chips milk or dark"/>
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
        </div>

        
        </div>


        </>
    )
}