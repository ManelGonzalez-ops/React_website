import React, { useState, useEffect, useRef, Fragment, Suspense } from "react";

import {Link} from "react-router-dom"



const ExpenseTrackerr = React.lazy(()=>import("./videos/ExpenseTracker"))
const MemoryCardss = React.lazy(()=>import("./videos/memoryCards"))
const GithubFinder = React.lazy(()=>import("./videos/githubFinder"))
const CalorieTracker = React.lazy(()=>import("./videos/CalorieTracker"))
const WeatherApp = React.lazy(()=>import("./videos/WeatherApp"))
const Pomodoro = React.lazy(()=>import("./videos/Pomodoro"))



const Project = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasBeenHovered, setHasBeenHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
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
  let observer = new IntersectionObserver(elem =>{
    let counter = 0
    elem.forEach((element, index)=>{
     
      if(element.isIntersecting){
        counter = counter + 200
        
          setHasBeenHovered(true)
        
        setTimeout(()=>{
          
          element.target.classList.add("visibleB")
          
        }, counter)

        // setTimeout(()=>{
        //   setHasBeenHovered(true)
        // }, 1200)
      }
  }, {threshold: 0.8})
  })

  useEffect(()=>{
    
    listaRef.forEach(project=>{
      // console.log(project.current)
      
      observer.observe(project.current)
    },[])
   let kako = setTimeout(()=>{
setIsLoading(false)
    }, 1000)
    return ()=>{
      clearTimeout(kako)
      
    }

  },[])

  return (
    <Fragment>
    <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj1}>
    <Link to="/expenses" className="linkProject">
      {hasBeenHovered && <p className="titulo-project">Expense Tracker</p>}
      </Link>
     <Suspense fallback={<div>Loadind...</div>}>
        <ExpenseTrackerr hovered={isHovered}/>
      </Suspense>
      
    </div>
    <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj2}>
    <Link to="/music" className="linkProject">
      <p className="titulo-project">Memory Cards</p>
      </Link>
     {hasBeenHovered && <Suspense fallback={<div>Loading...</div>}>
    <MemoryCardss hovered={isHovered}/>
      </Suspense>}
      
    </div>
    <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj3}>
      <Link to="/calories" className="linkProject">
      <p className="titulo-project">Calorie Tracker</p>
      </Link>
      {hasBeenHovered && <Suspense fallback={<div>Loading...</div>}>
    <CalorieTracker hovered={isHovered}/>
      </Suspense>}
    </div>
    <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj4}>
      <Link to="/githubFinder" className="linkProject">
      <p className="titulo-project">Github Finder</p>
      </Link>
      {hasBeenHovered && <Suspense fallback={<div>Loading...</div>}>
    <GithubFinder hovered={isHovered}/>
      </Suspense>}
    </div>
    <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj5}>
      <Link to="/weatherApp"  className="linkProject">
      <p className="titulo-project">Weather App</p>
      </Link>
      {hasBeenHovered &&<Suspense fallback={<div>Loading...</div>}>
    <WeatherApp hovered={isHovered}/>
      </Suspense>}
    </div>
    <div className="project" onMouseEnter={hover} onMouseLeave={unSelect} ref={proj6}>
      <Link to="/pomodoroClock" className="linkProject">
      <p className="titulo-project">Pomodoro Clock</p>
      </Link>
      {hasBeenHovered && <Suspense fallback={<div>Loading...</div>}>
    <Pomodoro hovered={isHovered}/>
      </Suspense>}
    </div>
    </Fragment>
  );
};

export default Project;
