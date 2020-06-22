import React, { Fragment, useEffect, useRef, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Project from "./project";
import Project from "./projectVgsap";
import { Context } from "../Context"

export default function App() {
  let { portfolio } = useContext(Context)
  const tituloT = useRef(null)
    const observerT = new IntersectionObserver(item=>{
      if(item[0].isIntersecting)
  item[0].target.classList.add("visibleB")
    },{threshold: 0.5})

  useEffect(() => {

    observerT.observe(tituloT.current)
  }, [])
  return (
    <Fragment>

      <div className="componente-project" ref={portfolio}>
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
