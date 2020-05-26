import React, {useState, useRef, useEffect} from "react"
import video1 from "../../../images/Pomodoro.mp4"

 const Pomodoro =({hovered})=>{
    const videu = useRef(null)

    useEffect(()=>{
        if(hovered){
            videu.current.play()
        }else{
            videu.current.pause()
        }
        },[hovered])
     return (<video ref={videu} loop muted playsInline className="project-img" alt="react-expenses">
<source src={video1} type="video/mp4" className="kuku"/>
</video>)

}

export default Pomodoro