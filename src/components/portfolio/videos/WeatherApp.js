import React, {useState, useRef, useEffect} from "react"
import video1 from "../../../images/weatherApp.mp4"

 const WeatherApp =({hovered})=>{
    const videa = useRef(null)

    
useEffect(()=>{
if(hovered){
    videa.current.play()
}else{
    videa.current.pause()
}
},[hovered])
     return (<video ref={videa} loop muted playsInline className="project-img" alt="react-expenses">
<source src={video1} type="video/mp4" className="kuku"/>
</video>)

}

export default WeatherApp