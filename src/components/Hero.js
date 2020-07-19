import React, { Link, Fragment, useState, useEffect, useRef, Suspense } from "react";
import useTypewriter from "react-typewriter-hook";
import gsap from "gsap"

const MagicOcean = [
  "I build fast Interfaces",
  "Front End web Developer",
  "Soon a cross platform Front End developer as well"
];
let index = 0;

const introTimeline = gsap.timeline()


function Hero({hasLoaded, contextu}) {
  const [magicName, setMagicName] = useState("Front end developer");
  //auxiliar to avoid gsap lag onload
  const [isLoaded, setIsLoaded] = useState(false)
  
  const [isMasked, setIsMAsked] = useState(false)
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  const hero = useRef(null)
  const tituloHero = useRef(null)
  const fmask = useRef(null)
  const smask = useRef(null)
  const btnPnp = useRef(null)
  const nombreH = useRef(null)
  const overflowWrap = useRef(null)

  

  useEffect(()=>{
tituloHero.current.classList.add("fuera")
  }, [])
  return (
    <Fragment>
      {/* {!hasLoaded && <Fragment><div className="firstMask" ref={fmask}></div>
      <div className="secondMask" ref={smask}></div></Fragment>} */}

      <div className="hero" ref={hero}>
      
        {/* <Suspense fallback={<div>...loading</div>}>
          <MyPhoto />
        </Suspense> */}
        
        <p>Hi, I'm Manel</p>
        <h1 className="titulo-nombre" ref={nombreH}></h1>

        <div className="wrap-titleH" ref={overflowWrap}>
          <h1 ref={tituloHero} className="titulo-nameB">
           I turn any design into code
        </h1>
        </div>
        
        <button className="btn-principal" ref={btnPnp} onClick={()=>{contextu("portfolio")}}>My work</button>

      </div>
      
    </Fragment>
  );
}
export default Hero

