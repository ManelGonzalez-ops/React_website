import React, { Fragment, useState, useEffect, useRef, useContext } from 'react'
import "./weatherApp.css"
import InfoHoverable from '../../../../utils/infoHoverable/infoHoverable'
import { Context } from '../../../Context'


export default function WeatherApp() {

    const {setHasbeenLoaded} = useContext(Context)
    const [inputWeather, setInputWeather] = useState("")
    const [modalOpen, setModalOpen] = useState(false)
    const maskRef = useRef(null)
    const modalRef = useRef(null)

    let ciudad, estado;

    const displayModal = () => {
        
        setModalOpen(true)
        maskRef.current.classList.add("maskWopen")
        modalRef.current.classList.add("openMw")
    }
    const HideModal = e => {
        
        if(e.target.id === "btn-weathB"){
            e.preventDefault()
        }
       
        maskRef.current.classList.remove("maskWopen")
        modalRef.current.classList.remove("openMw")
        setModalOpen(false)
    }





    class Localsto {

        guardarSto(ciudadd, pais) {
            localStorage.setItem("ciudad", JSON.stringify(ciudadd))
            localStorage.setItem("pais", JSON.stringify(pais))
        }
    }

    class Weatherr {
        constructor() {
            this.myid = "ae97621e3ddc6747f1ecb6d4b9dbbf6c"
        }

        async getApi(city, state) {
            const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${this.myid}`)
            const response = await request.json()
            

            return {
                response
            }

        }

        async getFoto(icono) {
            const imagFet = await fetch(`http://openweathermap.org/img/wn/${icono}@2x.png`)


            return { imagFet }
        }
    }

    class Ui {
        display(data) {
            document.getElementById("city-weath").innerText = data.response.name
            document.getElementById("country-weath").innerText = data.response.sys.country
            document.getElementById("tiempo-weath").innerText = (data.response.main.temp - 273).toFixed(1) + " ºC"
            document.getElementById("hum-weath").innerText = "Relative Humidity: " + (data.response.main.humidity + " %")
           
            document.getElementById("desc-weath").innerText = "General: " + data.response.weather[0].description
            document.getElementById("feel-weath").innerText = "Feels like: " + (data.response.main.feels_like - 273).toFixed(1) + " ºC"
            document.getElementById("win-weath").innerText = "Wind speed: " + (data.response.wind.speed * 1.6).toFixed(1) + " km/h"

            const iconoId = data.response.weather[0].icon

            const imagen = document.getElementById("foto-weath")
            weatherr.getFoto(iconoId)
                .then(dato => {
                    imagen.setAttribute("src", dato.imagFet.url)
                })
        }
    }




    function gestionStorage() {
        // obtener data del localstorage 
        const ciudadSto = localStorage.getItem("ciudad")
        const paisSto = localStorage.getItem("pais")
        if (ciudadSto !== undefined && paisSto !== undefined) {
            displayManagment(JSON.parse(ciudadSto), JSON.parse(paisSto))
        }
        else {
            displayManagment("Barcelona", "españa")
        }
    }

    function displayManagment(ciry, pais) {
        
        weatherr.getApi(ciry, pais)
            .then(data => {
                if (data.message === "city not found") {
                   
                }
                else {
                    ui.display(data)
                    if (ciudad.value !== "" && estado.value !== "") {
                        localSto.guardarSto(ciudad.value, estado.value)


                    }

                }
            }).catch(err => console.log("error, api no fechada"))
    }


    function actualizar(e) {
        e.preventDefault()
        if (ciudad.value === "" || estado.value === "") {
            
        }
        else {
            displayManagment(ciudad.value, estado.value)
        }
    }



    const weatherr = new Weatherr()
    const ui = new Ui()
    const localSto = new Localsto()

    
    const texto = "Esta app le introduces una ciudad y el país y hace un request a una rest API de climatología que envíandonos los datos de la localidad solicitada de vuelta. También persiste en el localStorage. "
    useEffect(()=>{
        if(modalOpen){
            maskRef.current.addEventListener("click", HideModal)
        }
        else{
            maskRef.current.removeEventListener("click", HideModal)
        }
    }, [modalOpen])

    useEffect(() => {
        const title = document.createElement("h1")
        title.id = "city-weath"
        document.querySelector(".header-weath").prepend(title)
        setHasbeenLoaded(true)
        gestionStorage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ciudad = document.getElementById("cityWeath")
        // eslint-disable-next-line react-hooks/exhaustive-deps
        estado = document.getElementById("stateWeath")
       

        const weatherUpdater = document.getElementById("btn-weathI")
        const btnSubmit = document.getElementById("change-weath")
        const svgCloseW = document.getElementById("svg-weath")
        const weathClose = document.getElementById("btn-weathB")
        weatherUpdater.addEventListener("click", actualizar)
        btnSubmit.addEventListener("click", displayModal)
        svgCloseW.addEventListener("click", HideModal)
        weathClose.addEventListener("click", HideModal)
        return () => {
            weatherUpdater.removeEventListener("click", actualizar)
            btnSubmit.removeEventListener("click", displayModal)
            svgCloseW.removeEventListener("click", HideModal)
            weathClose.removeEventListener("click", HideModal)
        }
    }, [])
    return (

        <Fragment>
            <div className="mask-weath" ref={maskRef}></div>
            <section className="main-weath">
                <div className="container-weath">
                    <div className="header-weath" >
                        {/* <h1 id="city-weath">.</h1> */}
                        <p className="country" id="country-weath"></p>
                        <p className="tempe" id="tiempo-weath"></p>
                    </div>
                    <img id="foto-weath" src="" alt="weather"/>
                    <ul>
                        <li id="desc-weath">General</li>
                        <li id="hum-weath">Relative Humidity</li>
                        <li id="feel-weath">Feels Like</li>
                        <li id="win-weath">Wind Speed</li>
                    </ul>
                    <button id="change-weath">Change Location</button>
                </div>
            </section>
            <div className="modal-weath" ref={modalRef}>
                <div className="container">
                    <h1>Change Location</h1>
                    <svg viewBox="0 0 40 40" id="svg-weath">
                        <path stroke="black" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                    </svg>
                </div>
                <form>
                    <div className="form-weath">
                        <label htmlFor="cityWeath">City</label>
                        <input type="text" id="cityWeath" name="cityWeath" placeholder="..." />
                    </div>
                    <div className="form-weath">
                        <label htmlFor="stateWeath">State</label>
                        <input type="text" id="stateWeath" name="stateWeath" placeholder="..." value={inputWeather} onChange={e => { setInputWeather(e.target.value) }} />
                    </div>
                    <div className="container-btn">
                        <button className="btn-weathI" id="btn-weathI">Save Changes</button>
                        <button className="btn-weathB" id="btn-weathB">Close</button>
                    </div>
                </form>
            </div>
            <InfoHoverable textu={texto}/>
        </Fragment>

    )
}
