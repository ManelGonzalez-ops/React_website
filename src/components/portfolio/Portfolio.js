import React, { Fragment, useLayoutEffect, useRef, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Project from "./project";
import Project from "./projectVgsap";
import { Context } from "../Context";

import MainPart from "./MainPart"
import SeeMoreButton from "./SeeMoreBtn"


export default function App() {
  let context = useContext(Context)
  const tituloT = useRef(null)
  const [seeMore, setSeeMore] = useState(false)
  const firstTime = useRef(true)

  const updateRef=()=>{
    firstTime.current = false
  }



  useLayoutEffect(() => {
    if ('IntersectionObserver' in window) {

      const observerT = new IntersectionObserver(item => {
        if (item[0].isIntersecting)
          item[0].target.classList.add("visibleB")
      }, { threshold: 0.2 })
      
      observerT.observe(tituloT.current)
    }

  }, [tituloT])




  return (
    <Fragment>

      <div className="componente-project" ref={context && context.portfolio}>
        <div className="title-container colocadorSkill" ref={tituloT}><span className="title-line"></span>
          <h1 className="titulo__componente">Portfolio</h1>
        </div>
        <MainPart />
        <div className="seemore-container">
          <SeeMoreButton seeMore={seeMore} toggleSeeMore={setSeeMore} setNotFirstTime={updateRef} isFirstTime={firstTime.current}/>
        </div>
        <div className="contenedor-project">

          {seeMore && <Project />}

        </div>

      </div>

    </Fragment>
  );
}
