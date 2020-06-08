import React, { useState, useRef, useEffect, Fragment } from "react"
import video1 from "../../../images/Pomodoro.mp4"
import { Link } from "react-router-dom"

const Pomodoro = () => {
    const videu = useRef(null)
    const [isHovered, setIsHovered] = useState(false)

    const activate = () => {
        setIsHovered(true)
    }
    const desactivate = () => {
        setIsHovered(false)
    }


    useEffect(() => {
        if (isHovered) {
            videu.current.play()
        } else {
            videu.current.pause()
        }
    }, [isHovered])
    return (
    <div className="wrapper-img" onMouseEnter={activate} onMouseLeave={desactivate}>
        <video ref={videu} loop muted playsInline className="project-img" alt="react-expenses">
        <source src={video1} type="video/mp4" className="kuku" />
    </video>
        {isHovered && <Link to="/pomodoroClock" className="linki">
            Abrir
        </Link>}
    </div>)

}

export default Pomodoro