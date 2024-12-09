// import "./MenuOption.css";

import "./MenuOption22.css";
import gsap from "gsap";
import {useState,useEffect} from 'react';
import { useFetcher } from "react-router-dom";


export default function MenuOption({Name,Recipe,Price,SRC,Margin,offset,constant,top})
{
var count=0;
const [animationVariable,setAnimationVariable]=useState(0);

useEffect(()=>{
    console.log(animationVariable)
})
    return (
        <>
        <div className="box" style={{marginTop:{Margin},transform:`translateY(${-offset*constant}px)`,position:"relative",top:top}}>
         <div className="boxHeading">
            <h1 className="Food">{Name}</h1>
         </div>
         <div className="boxRecipe">
            <p className="Recipe">{Recipe}</p>
         </div>
        
         <div className="priceBox">
         
         <div className="Boxprice1">
         </div>

         <div className="Boxprice2">
         <h1 className="Price">{Price}</h1>   
         </div>   
         
         </div>

         <div className="BoxImage">
         <img src={SRC} className="ImgBox">
         </img>
         </div>

        </div>

        <div className="IphoneBox">
        <div className="SmallPhoneBox">
        <img src={SRC} className="ImgBoxIphone">
        </img>
        <div className="IphoneTextBox">
        <h1 className="IphoneFood">{Name}</h1>
        <h1 className="IphonePrice">{Price}</h1>   
        </div>
        </div>
        </div>

        </>
    )
}