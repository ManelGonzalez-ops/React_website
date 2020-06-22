import React, {useRef, useEffect, useState, useContext} from 'react'
import BannerContact from "./contact-banner/BannerContact"
import {Context} from "./Context"
export default function Studies() {
    const {sobreMi} = useContext(Context)
    const tituloE = useRef("")
    const [windowWidth, setWindowWidth] = useState("")
    const tituloObs = new IntersectionObserver(item=>{
        if(item[0].isIntersecting){
            item[0].target.classList.add("visibleB")
        }
    }, {threshold: 0.5})

    const checkWidth =()=>{
        
        setWindowWidth(window.innerWidth)
    }
    useEffect(()=>{
        tituloObs.observe(tituloE.current)
        window.addEventListener("resize", checkWidth)
        setWindowWidth(window.innerWidth)
        return ()=>{
            window.removeEventListener("resize", checkWidth)
        }
    }, [])
    useEffect(()=>{
        setWindowWidth(window.innerWidth)
    }, [windowWidth])
    return (
        <div className="cont-estudios" ref={sobreMi}>
            <div className="title-container" ref={tituloE}><span className="title-line"></span>
                <h1 className="titulo__componente">Sobre mí</h1>
            </div>
            <div className="section-wrapper">
            <div className="timeline-wrapper">
            <div className="linea">
            </div>
            <ul className="timelinen">
                <li className="content-text rounded waves-light first">
                    <div className="cabecera">
                        <span>2019</span>
                        <p className="line-title">CEPI-BASE</p>
                    </div>
                    <p className="line-text">Técnico de Aplicaciones con Python </p>
                </li>


                <li className="content-text rounded waves-light kaka second">
                    <div className="cabecera cabecera-d">
                        <span>2018</span>
                        <p className="line-title puta-palabra">Universitat Autónoma de Barcelona</p>
                    </div>
                    <p className="line-text">
                        Administración y dirección de empresas</p>
                </li>


                <li className="content-text rounded waves-light third">
                    <div className="cabecera">
                        <span>2013</span>
                        <p className="line-title">Stucom</p>
                    </div>
                    <p className="line-text">Bachiller de ciencías y tecnología</p>
                </li>

            </ul>
            </div>

        {windowWidth > 1000 ? <BannerContact/> : ""}
            </div>
        </div>
    )
}
