import React, { useEffect, useContext, useRef, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './css/main.css';
import './css/portfolio.css'; //dentro de src
import Nav from "./components/navigation/Nav"
import WindowWidth from "./utils/window_width"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Studies from "./components/Studies"
import Form from "./components/Form"

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



function App(props) {

  const appRef = useRef(null)

  let { portfolio, contacto, sobreMi, skills, hasbeenLoaded } = useContext(Context)

  const navegar = (concepto) => {

    switch (concepto) {
      case "home":
        window.scrollTo({ top: appRef.current.offsetTop, behavior: "smooth" })
        return
      case "portfolio":
        window.scrollTo({ top: portfolio.current.offsetTop, behavior: "smooth" })
        return
      case "skills":
        window.scrollTo({ top: skills.current.offsetTop, behavior: "smooth" })
        return
      case "sobremi":
        window.scrollTo({ top: sobreMi.current.offsetTop, behavior: "smooth" })
        return
      case "contacto":
        window.scrollTo({ top: contacto.current.offsetTop, behavior: "smooth" })
        return
      default: return
    }



  }

  useEffect(() => {
    appRef.current.style.opacity = 1
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
            <Hero hasLoaded={hasbeenLoaded} contextu={navegar} />
            
            <div className="ameba-wrapper1">
        
            </div>
            <Services />
            <Portfolio />
            <div className="ameba-wrapper2">
            
            </div>
            <Skills />
            <Studies />
            <div className="responsive-container">
              <Form />
              <IconSection />
            </div>
            <Footer />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;

