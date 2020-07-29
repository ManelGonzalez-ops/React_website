import React, { Fragment, useLayoutEffect, useRef, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Project from "./project";
import Project from "./projectVgsap";
import { Context } from "../Context";
import SuspenseHOC from "./videos/suspenseHOC";
import MainPart from "./MainPart"


export default function App() {
  let context = useContext(Context)
  const tituloT = useRef(null)

  const [seeMore, setSeeMore] = useState(false)


  useLayoutEffect(() => {
    if ('IntersectionObserver' in window) {
      const observerT = new IntersectionObserver(item => {
        if (item[0].isIntersecting)
          item[0].target.classList.add("visibleB")
      }, { threshold: 0.5 })

      observerT.observe(tituloT.current)
    }
  }, [])


  return (
    <Fragment>

      <div className="componente-project" ref={context && context.portfolio}>
        <div className="title-container colocadorSkill" ref={tituloT}><span className="title-line"></span>
          <h1 className="titulo__componente">Portfolio</h1>
        </div>
        <MainPart />
        <div className="seemore-container">
          <button onClick={() => { 
            setSeeMore(prev => !prev)}}>Show more work</button>
        </div>
        <div className="contenedor-project">
            
        {seeMore && <Project />}
        
        </div>

      </div>

    </Fragment>
  );
}
