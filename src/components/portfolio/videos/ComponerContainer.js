import React, { useState, useRef, useEffect} from "react"

import { Link } from "react-router-dom"

export default function ComponerContainer({video, route}) {
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
        <video ref={videu} loop playsInline className="project-img" alt="react-expenses">
        <source src={video} type="video/mp4" className="kuku" />
    </video>
        {isHovered && <Link to={route} className="linki">
            Abrir
        </Link>}
    </div>
  )

}
