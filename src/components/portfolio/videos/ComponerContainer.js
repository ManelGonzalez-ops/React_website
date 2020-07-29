import React, { useState, useRef, useEffect, Suspense, Fragment } from "react"
import SuspenseHOC from "./suspenseHOC"
import { Link } from "react-router-dom"

export default function ComponerContainer({ video, route }) {
    const videu = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const [hasLoaded, setHasLoaded] = useState(false)

    const activate = () => {
        setIsHovered(true)
    }
    const desactivate = () => {
        setIsHovered(false)
    }



    useEffect(() => {
        if (videu && videu.current) {
            if (isHovered) {
                videu.current.play()
            } else {
                videu.current.pause()
            }
        }
    }, [isHovered])
    return (

        <div className="wrapper-img" onMouseEnter={activate} onMouseLeave={desactivate} >

            <video ref={videu} loop playsInline
                className="project-img"
                alt="react-expenses"
                width="300"
                height="220"
                onCanPlay={() => { setHasLoaded(true) }}>
                
                <source src={video}
                    type="video/mp4"
                    width="300"
                height="220"
                    
                />
            </video>
            {!hasLoaded &&
                <Spiner/>}

            {hasLoaded && isHovered && <Link to={route} className="linki">
                Abrir
        </Link>}
        </div>

    )

}



const Spiner = () => <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="red" className="spiner">
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.6s"
                    repeatCount="indefinite" />
            </path>
        </g>
    </g>
</svg>

const Spinner2 = () =>
<svg class="material-spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" className="spiner">
   
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>


const Spinner = ({ size = 400 }) => (
    <div
      className="spinner spiner"
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
    />
  );
  