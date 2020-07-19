import React, { useState, useEffect, useRef, Fragment, useContext } from "react";
import { Link } from "react-router-dom"


import SuspenseHOC from "./videos/suspenseHOC"
import proyectos from "./projectImports"

import ComponerContainer from "./videos/ComponerContainer"

//     const Pomodoro = React.lazy(() => import("./videos/Pomodoro"))


const Project = () => {


  return (

    <Fragment>
      {proyectos.map((componente, index) => (

        
          <div className="project" key={index}>
            <Link to="/expenses" className="linkProject">
              <p className="titulo-project">{componente.name}</p>
            </Link>
            <ComponerContainer video={componente.video} route={componente.route} />
          </div>
       
      ))
      }</Fragment>

  );
};

export default Project;





