import React, { Fragment, useState, useContext, useEffect, useRef } from "react"
import { FaPlay, FaStepForward, FaVolumeUp, FaRegWindowClose, FaRegWindowMinimize, FaPause } from "react-icons/fa"
import RangeForm from "./Components/RangeForm"
import { Context } from "./Context"
import AudioCom from "./Components/AudioCom"
import Animation from "./customHookAnimate"
import InfoHoverable from "../../../../utils/infoHoverable/infoHoverable"

const Pomodoro = () => {

  const [isOpen, refContenedor, setIsOpen] = Animation()
  const contenedor = useRef(null)
  const [opciones, setOpciones] = useState(false) //Comprobar si está en opciones
  const [isPlayed, setIsPlayed] = useState(false) // Comprobar si el play está activado
  const [ronda, setRonda] = useState(1) // Comprobar en que ronda está
  //hook auxiliar para cambiar el texto de la UI
  const [worked, setWorked] = useState(false) //Hook auxiliar Comprobar para saber en que subronda estamos
  const { work, longBreak, shortBreak, range } = useContext(Context)
  const [minutos, setMinutos] = useState(work)  //minutos de la UI para nueva ronda
  const [segundos, setSegundos] = useState(0)   //segundos de la UI pra nueva ronda 
  const [initialTime, setInitialTime] = useState(work) //Hook que guarda el tiempo inicial de la subronda
  const [theinterval, setTheinterval] = useState("")  //Hook auxiliar para limpiar intervalo
  const [intervalRango, setIntervalRango] = useState("")
  const [tiempo, setTiempo] = useState("")  //Estado principal de la app, realmente mide el tiempo de cada ronda, 
  const [time, setTime] = useState(`${work}:00`)  //Hook para actualizar la UI
  const [sumatorioRango, setSumatorioRango] = useState(0)
  const [ring, setRing] = useState(false)
  const [color, setColor] = useState("var(--circle-color)")
  const [roundName, setRoundName] = useState("Work")

  useEffect(() => {
    setTime(`${work}:00`)
    setTiempo(work)
    setRonda(1)
    setRoundName("Work")
    setSegundos(0)
    clearInterval(theinterval)
    setIsPlayed(false)
    setInitialTime(() => work * 60)
    setSumatorioRango(0)

  }, [work, longBreak, shortBreak, range])


  useEffect(() => {
    console.log(minutos, "mama")
    setTime(`${work}:00`)
  }, [])



  const optionsMenu = opciones ? "options" : ""
  const desplegado = opciones ? "menu-desplegado" : ""

  const transicionar = () => {
    contenedor.current.classList.add("animated")
    setTimeout(() => {
      contenedor.current.classList.remove("animated")
    }, 700)
  }

  const pasar = () => {

    setTimeout(() => {

      clearInterval(theinterval)
      setSumatorioRango(0)

      setIsPlayed(false)
      setSegundos(0)
      if (ronda < range) {
        setWorked(prev => !prev)
        if (worked) {
          setTiempo(work)
          setTime(`${work}:00`)
          setRoundName("Work")
          setRonda(prev => prev + 1)
          setInitialTime(() => work * 60)
        } else {
          setTiempo(shortBreak)
          setMinutos(shortBreak)
          setTime(`${shortBreak}:00`)
          setRoundName("short-break")
          setInitialTime(() => shortBreak * 60)
        }

      }
      else {
        if (!worked) {
          setTiempo(longBreak)
          setTime(`${longBreak}:00`)
          setRoundName("long-break")
          setInitialTime(() => longBreak * 60)
        }
      }
    }, 200)
    setTimeout(() => {
      timerColor()
    }, 400)
    transicionar()
  }


  const timerColor = () => {
    switch (roundName) {
      case "short-break":
        setColor("var(--circle-color)")
        break
      case "Work":
        if (range === ronda) {
          setColor("var(--long-color)")
        } else {
          setColor("var(--short-color)")
        }
        break
    }
  }

  const timer = (tiempo) => {
    console.log("me estas cagando?")
    setMinutos(tiempo)
    let keke;
    if (isPlayed) {

      keke = setInterval(() => {

        setSegundos(prev => prev - 1)

      }, 1000)
      console.log(sumatorioRango, "sumatorio rango")
      setTheinterval(keke)     //Importante Estamos utilizando el hook para poder limpiar el intervalo sin demasiados dolores de cabeza, ya que el intervalo queda atrapado por el bloque IF
    }
    else {
      clearInterval(theinterval)   //Importante
    }
  }


  const reset = () => {
    setTiempo(work)
    setTime(`${work}:00`)
    setRonda(1)
    setRoundName("Work")
    clearInterval(theinterval)
    setIsPlayed(false)
    setSegundos(0)
    setWorked(false)
    setSumatorioRango(0)
    transicionar()

  }

  useEffect(() => {
    timer(tiempo)

  }, [isPlayed])


  useEffect(() => {
    let rangoIntervalo
    let porcentaje = (753.98 / (initialTime * 20))
    if (isPlayed) {
      rangoIntervalo = setInterval(() => {
        console.log("holaaaa")
        setSumatorioRango(prev => prev + porcentaje)
      }, 50)
      setIntervalRango(rangoIntervalo)
    }
    else {
      clearInterval(intervalRango)
    }
    return ()=>{
      clearTimeout(rangoIntervalo)
    }

  }, [isPlayed])



  useEffect(() => {
    let ringTimeout
    if (isPlayed) {
      if (segundos < 10) {
        if (segundos <= 0) {
          if (minutos > 0) {
            setMinutos(prev => prev - 1)
            setSegundos(prev => prev + 60)
            setTiempo(minutos)
          }
          // Importante actualizar el tiempo cuando está en play en cada una de las situaciones
          if (minutos <= 0) { //minutos <= 0
            clearInterval(theinterval)
            setIsPlayed(prev => !prev)

            setTime(`${minutos}:00`)
            setRing(prev => !prev)
            console.log("RIIIIIIIING a trueeeeee")
            ringTimeout = setTimeout(() => {
              setRing(prev => !prev)
              console.log("cuuuuuuuuuuuuumelañ")
            }, 5000)
          }
        }
        setTiempo(minutos)    //
        setTime(`${minutos}:0${segundos}`)
      } else {
        setTiempo(minutos)    //
        setTime(`${minutos}:${segundos}`)
      }
    } else {
      clearInterval(theinterval)
    }
    return()=>{
      clearTimeout(ringTimeout)
    }

  }, [segundos])



const texto = "Esta aplicación pretende calcar la funcionalidad de una Alarma para optimizar las sesiones de trabajo. Puede elegir el tiempo de las rondas de trabajo, descanso corto y descanso largo a la vez del número de rondas, de manera que puede personalizarse la sesión de trabajo como mejor crea conveniente. Esta aplicación está escrita en React, utilizando Hooks."
  return (
    <Fragment>

<div className="pomodoro">
      <div className="overlay">
        <div className={"capa"} ref={refContenedor}>
          <div className="container" >

            <div className="cabeza">
              <div className={`header ${optionsMenu}`} onClick={() => setOpciones(prev => !prev)}><span className="long"></span><span className="short"></span></div>
              <div className="heade">Pomotroid</div>
              <div className="head"><FaRegWindowMinimize onClick={() => setIsOpen(false)} /></div>
              <div className="hea"><FaRegWindowClose /></div>
            </div>

            <div className={`menu ${desplegado}`}>
              <div className="wrapper">
                <h3>Timer</h3>
                <RangeForm />
              </div>
            </div>

            <div className="wrapper-move" ref={contenedor}>
              <div className="circle" ><h3>{time}</h3>
                <p>{roundName}</p>
                <svg id="thesvg" width="250" height="250" strokeDashoffset={sumatorioRango} >
                  <circle cx="125" cy="125" r="120" stroke={color} strokeWidth="10" fill="none" />
Sorry, your browser does not support inline SVG.
</svg>
              </div>
              <div className="play" onClick={() => setIsPlayed(prev => !prev)} >
                {
                  isPlayed ?
                    <FaPause fontSize="1rem" className="pausi" />
                    :
                    <FaPlay fontSize="1rem" className="paly" />
                }
              </div>
            </div>
            <div className="footer">
              <div className="derecha">
                <div className="counter">{`${ronda}/${range}`}</div>
                <div className="reset" onClick={reset}>Reset</div>
              </div>
              <div className="izquierda">
                <div className="pass" onClick={pasar}><FaStepForward /></div>
                <div className="volume"><FaVolumeUp /></div>

              </div>
            </div>
            <AudioCom roundName={roundName} ring={ring} />

          </div>
        </div>
      </div>
      {!isOpen && <button className="btn-openP" onClick={() => setIsOpen(true)}>ABRIR</button>}
      </div>
      <InfoHoverable textu={texto}/>
    </Fragment>
  )
}

export default Pomodoro