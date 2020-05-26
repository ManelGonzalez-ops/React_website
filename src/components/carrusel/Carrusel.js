
import React, { useState, useEffect, useRef} from "react";
import "./carrusel.css";


import GenerateCards from "./GenerateCards"


export default function Carrusel() {
  const [offsetR, setOffsetR] = useState(0);
  const bodyRef = useRef(null)
  const [bodyWidth, setBodyWidth] = useState(0);
  const [activeCard, setactiveCard] = useState(0)
  const goRight = () => {
    if(activeCard === 0){
      return
    }else{
      setOffsetR(prev => prev + 231);
      setactiveCard(prev=>prev-1)
    }
  };

  const goLeft = () => {
    if(activeCard === 10){
      return
    }else{
      setOffsetR(prev => prev - 231);
      setactiveCard(prev=>prev+1)
    }
    
  };

 
  useEffect(() => {
    document.querySelector(
      ".card-container-slider"
    ).style.willChange = "transform"
    document.querySelector(
      ".card-container-slider"
    ).style.transform = `translateX(${offsetR}px)`;
    document.querySelector(
      ".card-container-slider"
    ).style.willChange = "auto"
  }, [offsetR])

  useEffect(()=>{
setBodyWidth(window.innerWidth)
  },[])
  

  return (
    <div className="mi-carrusel" ref={bodyRef}>
      <div className="card-container-slider">
        <GenerateCards bodyWidth={bodyWidth} activeCard={activeCard}/>
      </div>
      <span className="right-slider" onClick={goRight} />
      <span className="left-slider" onClick={goLeft} />
    </div>
  );
}
