import React, { Link, Fragment, useState, useEffect, useRef, Suspense } from "react";
import useTypewriter from "react-typewriter-hook";
import gsap from "gsap"
const MyPhoto = React.lazy(() => import("../images/manelPhoto"))

const MagicOcean = [
  "UI/UX designer",
  "Front End web Developer",
  "Soon a cross platform Front End developer as well"
];
let index = 0;

const introTimeline = gsap.timeline()
const otherTimeline = gsap.timeline()

function Hero({hasLoaded, contextu}) {
  const [magicName, setMagicName] = useState("Front end developer");
  //auxiliar to avoid gsap lag onload
  const [isLoaded, setIsLoaded] = useState(false)
  
  const [isMasked, setIsMAsked] = useState(false)
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  const icn1 = useRef(null)
  const icn2 = useRef(null)
  const icn3 = useRef(null)
  const icn4 = useRef(null)
  const hero = useRef(null)
  const tituloHero = useRef(null)
  const fmask = useRef(null)
  const smask = useRef(null)
  const btnPnp = useRef(null)
  const nombreH = useRef(null)
  const overflowWrap = useRef(null)

  useEffect(() => {
    let animationPnp = setTimeout(() => {
      setIsMAsked(true)
    }, 3000)
    setIsLoaded(true)
console.log("Holaa nena")
    return () => {
      clearTimeout(animationPnp)
    }
  }, [])

  useEffect(() => {
    if (isLoaded) {
      if(hasLoaded){
        introTimeline.from([tituloHero.current], {
          y: 90,
          duration: 0,
          ease: "power3.out",
          stagger: {
            amount: 0.2
          },
          onComplete: () => {
            if (overflowWrap.current) {
              overflowWrap.current.style.overflow = "visible"
            }

          }
        },
        )

      gsap.timeline().to([btnPnp.current], {
        duration: 0,
        y: 0,
        opacity: 1
      })
     
      }else{
        introTimeline.to([fmask.current, smask.current], {
          width: "0vw",
          height: "100vh",
          duration: 1,
          skewX: 4,
          right: 0,
          ease: "power3.inOut",
          stagger: {
            amount: 0.15
          }
        })
          .to([tituloHero.current], {
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: {
              amount: 0.2
            },
            onComplete: () => {
              if (overflowWrap.current) {
                overflowWrap.current.style.overflow = "visible"
              }
  
            }
          },
          )
  
        gsap.timeline().to([btnPnp.current], {
          duration: 0.5,
          delay: 1,
          y: 0,
          opacity: 1
        })
      }
        gsap.timeline().to(nombreH.current, {
        delay: 0.35,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      })
      
      setTimeout(() => {
        document.querySelector(".titulo-nombre").style.mixBlendMode = "normal"
      
      }, 300)   
      
    }
  }, [isLoaded])
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
  return (
    <Fragment>
      {!hasLoaded && <Fragment><div className="firstMask" ref={fmask}></div>
      <div className="secondMask" ref={smask}></div></Fragment>}

      <div className="hero" ref={hero}>
      
        <Suspense fallback={<div>...loading</div>}>
          <MyPhoto />
        </Suspense>
        
        
        <h1 className="titulo-nombre" ref={nombreH}>Manel Gonzalez Escrig</h1>

        <div className="wrap-titleH" ref={overflowWrap}>
          <h1 ref={tituloHero} className="titulo-nameB">
            Front end developer
        </h1>
        </div>

        <button className="btn-principal" ref={btnPnp} onClick={()=>{contextu("portfolio")}}>My work</button>

      </div>
      
    </Fragment>
  );
}
export default Hero

