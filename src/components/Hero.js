import React, { Link, Fragment, useState, useEffect, useRef, Suspense } from "react";
import useTypewriter from "react-typewriter-hook";
import gsap from "gsap"
const MyPhoto = React.lazy(() => import("../images/manelPhoto"))

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

  // useEffect(() => {
  //   let animationPnp = setTimeout(() => {
  //     setIsMAsked(true)
  //   }, 3000)
  //   setIsLoaded(true)
  //   return () => {
  //     clearTimeout(animationPnp)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (isLoaded) {
  //     if(hasLoaded){
  //       tituloHero.current.style.transform = "translateY(-35px)"
  //       btnPnp.current.style.opacity = "1"
  //       btnPnp.current.style.transform = "translateY(-50px)"
  //       if (overflowWrap.current) {
  //         overflowWrap.current.style.overflow = "visible"
  //       }
     
  //     }else{
  //       introTimeline.to([fmask.current, smask.current], {
  //         width: "0vw",
  //         height: "100vh",
  //         delay: -0.3,
  //         duration: 1,
  //         skewX: 4,
  //         right: 0,
  //         ease: "power3.inOut",
  //         stagger: {
  //           amount: 0.1
  //         }
  //       })
  //         .to([tituloHero.current], {
  //           y: 0,
  //           duration: 0.5,
  //           ease: "power3.out",
  //           stagger: {
  //             amount: 0.2
  //           },
  //           onComplete: () => {
  //             if (overflowWrap.current) {
  //               overflowWrap.current.style.overflow = "visible"
  //             }
  
  //           }
  //         },
  //         )
  
  //       gsap.timeline().to([btnPnp.current], {
  //         duration: 0.5,
  //         delay: 1,
  //         y: 0,
  //         opacity: 1
  //       })
  //     }
  //       gsap.timeline().to(nombreH.current, {
  //       delay: 0.35,
  //       opacity: 1,
  //       duration: 3,
  //       ease: "power3.out"
  //     })
      
  //     setTimeout(() => {
  //       document.querySelector(".titulo-nombre").style.mixBlendMode = "normal"
      
  //     }, 300)   
      
  //   }
  // }, [isLoaded])
  // useEffect(
  //   () => {
  //     intervalRef.current = setInterval(() => {
  //       // index = index + 1 > 2 ? 0 : ++index + 1;
  //       index = index > 2 ? 0 : ++index;
  //       setMagicName(MagicOcean[index]);
  //     }, 5000);
  //     return ()=>{
  //       clearInterval(intervalRef.current);
  //     }

  //   },
  //   []
  // );

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

