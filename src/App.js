import React, { useLayoutEffect, useContext, useRef} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './css/main.css';
import './css/portfolio.css'; //dentro de src
import Nav from "./components/navigation/Nav"
import Hero from "./components/Hero"
import Services from "./components/Services"
// import Studies from "./components/Studies"

import Portfolio from "./components/portfolio/Portfolio"
import Expenses from "./components/portfolio/projectList/reactExpenses/Expenses"

import Skills from "./components/Skills"
import MusicSlider from "./components/portfolio/projectList/memoryMusic/memoryCards"
import CalorieTraker from './components/portfolio/projectList/calorieTraker/CalorieTraker';
import GithubFinder from './components/portfolio/projectList/githubFinder/GithubFinder';
import WeatherApp from './components/portfolio/projectList/weatherApp/WeatherApp';
import PomodoroClock from "./components/portfolio/projectList/PomodoroClock/PomodoroClock"
import { Context } from "./components/Context"
import IconSection from "./components/iconSection/IconSection"
import Footer from "./components/footer/Footer"

import imagenHq from "./images/IMG-20190806-WA0018.jpg"
import imagenLq from "./images/lowqimg.jpg"
import ImagenPnp from "./images/ImagenPnp"

import FormFormik from "./components/FormFormik"

// const Yo = React.lazy(() => import("./images/manelPhoto.js"))
function App() {

  const appRef = useRef(null)
  const contactoContainer = useRef(null)
  let context = useContext(Context)



  const navegar = (concepto) => {
    switch (concepto) {
      case "home":
        window.scrollTo({ top: appRef.current.offsetTop, behavior: "smooth" })
        return
      case "portfolio":
        window.scrollTo({ top: context.portfolio.current.offsetTop, behavior: "smooth" })
        return
      case "skills":
        window.scrollTo({ top: context.skills.current.offsetTop, behavior: "smooth" })
        return
      case "sobremi":
        window.scrollTo({ top: context.sobreMi.current.offsetTop, behavior: "smooth" })
        return
      case "contacto":
        window.scrollTo({ top: contactoContainer.current.offsetTop, behavior: "smooth" })
        return
      default: return
    }
  }

  const updateWidth = () => {
    console.log("mama")
    context.setViewWidth(window.innerWidth)
  }



  useLayoutEffect(() => {


    window.addEventListener("resize", updateWidth)

    return () => document.removeEventListener("resize", updateWidth)


  }, [])



  return (
    <Router>
      <div className="App" ref={appRef} >

        <Switch>
          <Route exact path="/expenses" component={Expenses}></Route>
        </Switch>
        <Switch>
          <Route exact path="/music" component={MusicSlider}
          ></Route>
        </Switch>
        <Switch>
          <Route exact path="/calories" component={CalorieTraker}
          />
        </Switch>
        <Switch>
          <Route exact path="/githubFinder" component={GithubFinder}
          />
        </Switch>
        <Switch>
          <Route path="/weatherApp" component={WeatherApp}
          />
        </Switch>
        <Switch>
          <Route path="/pomodoroClock" component={PomodoroClock}
          />
        </Switch>
        <Switch>
          <Route path="/" exact>

          <Nav contextu={navegar} bodyRef={appRef} /> 
            <div className="thefondo">

              <ImagenPnp
                lq={imagenLq}
                hq={imagenHq}
              />
            

              <Hero hasLoaded={context && context.hasbeenLoaded} contextu={navegar} />

            </div>

            <Services />
            <Portfolio />

            <Skills />

           

            <div className="responsive-container" ref={contactoContainer}>
              <FormFormik />
              <IconSection
                movileDisplay={(context.viewWidth || window.innerWidth) > 900 ? "block" : "none"} innerWidth={context.viewWidth} />
            </div>
            <Footer />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;

