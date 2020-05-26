import React, {useEffect, useRef} from 'react'
import {IoIosSpeedometer} from "react-icons/io"
import {MdAccessibility} from "react-icons/md"
import {AiFillMobile} from "react-icons/ai"

export default function Services() {
    const carta1 = useRef(null)
    const carta2 = useRef(null)
    const carta3 = useRef(null)
    const arrCarta = [carta1, carta2, carta3]

    var observu = new IntersectionObserver(items=>{
        let counter = 0
    items.forEach(item=>{  
        if(item.isIntersecting){
            counter = counter + 200
            setTimeout(()=>{
                item.target.classList.add("visibleC")
            }, counter)
            
        }
    })
    })

    useEffect(()=>{
        arrCarta.forEach(item=>{
            console.log(item, "hola")
            observu.observe(item.current)
        })
    },[])

    
    return (
        <div className="container-services">
        <div className="cont-services">
            <div className="cartaSkill" ref={carta1}>
                <IoIosSpeedometer className="iconCard" />
                <h3>Rendimiento</h3>
                <p>Aseguro tiempos de carga mínimos haciendo que los usuarios puedan acceder mediante cualquier dispositivo, sin tener que esperar y puedan centrarse en lo importante. </p>
            </div>
            <div className="cartaSkill" ref={carta2}>
                <AiFillMobile className="iconCard" />
                <h3>Responsive Design First</h3>
                <p>Lidio con la complejidad propia de aplicaciones que requieren ser ricas en interacciones, maquetación de interfaces complejas, e implementar funcionalidad como servicio </p>
            </div>
            <div className="cartaSkill" ref={carta3}>
                <MdAccessibility className="iconCard" />
                <h3>Accesibilidad</h3>
                <p>hago webs siguiendo las practicas establecidas por la W3C,
                    evitando la penalización de los motores de busqueda y asegurandole al usuario una experiencia agradable y justa.</p>
            </div>
        </div>
        </div>
    )
}


