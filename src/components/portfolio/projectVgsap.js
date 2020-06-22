import React, { useState, useEffect, useRef, Fragment, useContext } from "react";
import { Link } from "react-router-dom"


import SuspenseHOC from "./videos/suspenseHOC"
import proyectos from "./projectImports"

import ComponerContainer from "./videos/ComponerContainer"
// const ExpenseTrackerr = React.lazy(() => import("./videos/ExpenseTracker"))
//     const MemoryCardss = React.lazy(() => import("./videos/memoryCards"))
//     const GithubFinder = React.lazy(() => import("./videos/githubFinder"))
//     const CalorieTracker = React.lazy(() => import("./videos/CalorieTracker"))
//     const WeatherApp = React.lazy(() => import("./videos/WeatherApp"))
//     const Pomodoro = React.lazy(() => import("./videos/Pomodoro"))


const Project = () => {
  
  
  return (
    
    <Fragment>{ proyectos.map((componente, index)=>(
      <SuspenseHOC><div key={index} className="project">
        <Link to="/expenses" className="linkProject">
    <p className="titulo-project">{componente.name}</p>
        </Link>
          <ComponerContainer video={componente.video} route={componente.route}/>
      </div>
      </SuspenseHOC>
    ))   
    }</Fragment>
   
  );
};

export default Project;





