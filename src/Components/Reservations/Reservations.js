import "./Reservations.css";

import Videoing from "./reservevideo1.mp4";

import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';

import {useState,useEffect} from "react";

import Table from "./table.json";

import Lottie from "lottie-react";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

import BoobaTea from "../Assets/New_Assets/Bobba.json";

export default function Reservations()
{


    const [text, setText] = useState('');  // State to hold the text input value
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');

    



    // Handle input change
    const handleChange = (e) => {
      setText(e.target.value);
    };


    const handleChange1 = (e) => {
        setText1(e.target.value);
      };

      const handleChange2 = (e) => {
        setText2(e.target.value);
      };
    
      const handleChange3 = (e) => {
        setText3(e.target.value);
      };
    
      const handleChange4 = (e) => {
        setText4(e.target.value);
      };
  

      const [size, setSize] = useState("23%");

    
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 460) {
            setSize("65%"); 
            console.log("69 police");
          } else {
            setSize("23%"); 
          }
        };
        handleResize();

        // Set up the event listener for resizing
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <>
        <div className="Reservations">
        <div className="ReservationsContain">
            <div className="ReservationsFourm">

            <input type="text" id="simple-textbox" value={text} onChange={handleChange} placeholder="First Name" />
            <input type="text" id="simple-textbox" value={text1} onChange={handleChange1} placeholder="Last Name" />
            <input type="text" id="simple-textbox" value={text2} onChange={handleChange2} placeholder="Email" />
            <input type="text" id="simple-textbox" value={text3} onChange={handleChange3} placeholder="Phone-Number" />
            <input type="text" id="simple-textbox" value={text4} onChange={handleChange4} style={{height:"7%"}} placeholder="Anything else you want to tell us?" />
            
            <LocalizationProvider dateAdapter={AdapterDayjs} sx={{'& .css-1k4oq0i-MuiPaper-root-MuiPickersPopper-paper':{backgroundColor:"rgb(255,240,194)"}}}>
            <DemoContainer components={['DateTimePicker', 'DateTimePicker']}  sx={{'& .css-1k4oq0i-MuiPaper-root-MuiPickersPopper-paper':{backgroundColor:"rgb(255,240,194)"}}}>
            <DateTimePicker className="Dating" label="Time and Date" sx={{width:size ,position:"absolute",top:"73%",left:"11%",  '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {color: "black",border:"black"},'& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{borderColor:"black"}, '& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{borderColor:"black"}, '& .css-1k4oq0i-MuiPaper-root-MuiPickersPopper-paper':{backgroundColor:"#0000"}, '& .css-144rneq-MuiButtonBase-root-MuiIconButton-root-MuiClock-amButton':{backgroundColor:"black"}, '& .css-1k4oq0i-MuiPaper-root-MuiPickersPopper-paper':{backgroundColor:"rgb(255,240,194)"} }}  viewRenderers={{ hours: renderTimeViewClock, minutes: renderTimeViewClock, seconds: renderTimeViewClock,}}/>
            </DemoContainer>
            </LocalizationProvider>

            </div>



            <div className="ReservationsVideoContain">
            <video src={Videoing} className="finalreservations" autoPlay loop muted></video>
            </div>
            
        </div> 
        <button className="Submit">Submit</button>
        
        <div className="Table" >
        <Lottie animationData={Table} loop={true} />
        </div> 

        <div className="BoobaTea" >
        <Lottie animationData={BoobaTea} loop={true} />
        </div>

        </div>       
        </>
    )
}