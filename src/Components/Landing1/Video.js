import "./Landing22.css";
import Final from "../Assets/final.mp4";
import React, {useRef, useEffect} from "react"
export default function Video({srcVideo})
{


    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <>
        <div className="Section">
        {/* <video src={srcVideo} className="final" autoPlay loop muted></video> */}

        <video
            className="final"
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline>
            <source src={srcVideo} type="video/mp4"/>
        </video>
        </div>
        </>
    )
}