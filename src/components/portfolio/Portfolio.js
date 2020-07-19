import React, { Fragment, useLayoutEffect, useRef, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Project from "./project";
import Project from "./projectVgsap";
import { Context } from "../Context"

export default function App() {
  let context = useContext(Context)
  const tituloT = useRef(null)
   

  useLayoutEffect(() => {
    if ('IntersectionObserver' in window) {
    const observerT = new IntersectionObserver(item=>{
      if(item[0].isIntersecting)
  item[0].target.classList.add("visibleB")
    },{threshold: 0.5})
    observerT.observe(tituloT.current)
  }
}, [])
  return (
    <Fragment>

      <div className="componente-project" ref={context && context.portfolio}>
      <div className="title-container colocadorSkill" ref={tituloT}><span className="title-line"></span>
                <h1 className="titulo__componente">Portfolio</h1>
            </div>
        <div className="contenedor-project">
          <Project />
        </div>

      </div>

    </Fragment>
  );
}
