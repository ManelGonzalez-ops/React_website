import React, {useState, useEffect} from 'react'

export default function WindowWidth() {
    const [width, setWidth] = useState()
   
const listenWindow =()=>{
        setWidth(window.innerWidth)
}
    useEffect(()=>{
        window.addEventListener("resize", listenWindow)
        return ()=> window.removeEventListener("resize", listenWindow)
    },[])
    return (
        <div>
            <span className="clientWidth">
            {width}
            </span>
        </div>
    )
}
