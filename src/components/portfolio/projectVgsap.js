import React, { useState, useEffect, useRef, Fragment, useContext } from "react";
import { Link } from "react-router-dom"
import {Context} from "../Context"

import SuspenseHOC from "./videos/suspenseHOC"

const ExpenseTrackerr = React.lazy(() => import("./videos/ExpenseTracker"))
const MemoryCardss = React.lazy(() => import("./videos/memoryCards"))
const GithubFinder = React.lazy(() => import("./videos/githubFinder"))
const CalorieTracker = React.lazy(() => import("./videos/CalorieTracker"))
const WeatherApp = React.lazy(() => import("./videos/WeatherApp"))
const Pomodoro = React.lazy(() => import("./videos/Pomodoro"))



const Project = () => {
  
  const {hasBeenLoaded} = useContext(Context)
  const [isHovered, setIsHovered] = useState(false);
  const [diip, setDiip]= useState(false)
  const [hasBeenHovered, setHasBeenHovered] = useState(false)
  const [numElem, setNumElem] = useState(0)
  const [displayVideo, setDisplayVideo] = useState(false)
  const proj1 = useRef(null)
  const proj2 = useRef(null)
  const proj3 = useRef(null)
  const proj4 = useRef(null)
  const proj5 = useRef(null)
  const proj6 = useRef(null)

  const listaRef = [proj1, proj2, proj3, proj4, proj5, proj6]
  const hover = () => {
    setIsHovered(true);
  };
  const unSelect = () => {
    setIsHovered(false);
  };
 

  useEffect(() => {
    setHasBeenHovered(true)
    setTimeout(()=>{
      setDiip(true)
      
    }, 1000)
  }, [])

  return (
    <Fragment>{diip &&  (<Fragment>
      
      <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj1}>
        <Link to="/expenses" className="linkProject">
          {hasBeenHovered && <p className="titulo-project">Expense Tracker</p>}
        </Link>
        <SuspenseHOC fallback={<div>Loadind...</div>}>
          <ExpenseTrackerr />
        </SuspenseHOC>

      </div>
      <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj2}>
        <Link to="/music" className="linkProject">
          <p className="titulo-project">Memory Cards</p>
        </Link>
        {hasBeenHovered && <SuspenseHOC >
          <MemoryCardss />
        </SuspenseHOC>}

      </div>
      <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj3}>
        <Link to="/calories" className="linkProject">
          <p className="titulo-project">Calorie Tracker</p>
        </Link>
        {hasBeenHovered && <SuspenseHOC >
          <CalorieTracker />
        </SuspenseHOC>}
      </div>
      <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj4}>
        <Link to="/githubFinder" className="linkProject">
          <p className="titulo-project">Github Finder</p>
        </Link>
        {hasBeenHovered && <SuspenseHOC >
          <GithubFinder />
        </SuspenseHOC>}
      </div>
      <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj5}>
        <Link to="/weatherApp" className="linkProject">
          <p className="titulo-project">Weather App</p>
        </Link>
        {hasBeenHovered && <SuspenseHOC >
          <WeatherApp />
        </SuspenseHOC>}
      </div>
      <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj6}>
        <Link to="/pomodoroClock" className="linkProject">
          <p className="titulo-project">Pomodoro Clock</p>
        </Link>
        {hasBeenHovered && <SuspenseHOC >
          <Pomodoro/>
        </SuspenseHOC>}
      </div>
    </Fragment>)}</Fragment>
   
  );
};

export default Project;
