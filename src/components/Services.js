import React, { useEffect, useRef, useContext } from 'react'
import { Context } from "./Context"


export default function Services() {

    const contexto = useContext(Context)

    const carta1 = useRef(null)
    const carta2 = useRef(null)
    const carta3 = useRef(null)
    const arrCarta = [carta1, carta2, carta3]


    useEffect(() => {
        let intersector = setTimeout(() => {
            const observu = new IntersectionObserver(items => {
                let counter = 0
                items.forEach(item => {
                    if (item.isIntersecting) {
                        counter = counter + 100
                        setTimeout(() => {
                            item.target.classList.add("visibleC")
                        }, counter)
                    }
                })
            }, { threshold: 0.2 })

            arrCarta.forEach(item => {

                observu.observe(item.current)
            })
        }, 2)
        arrCarta.forEach(item=>{
            item.current.addEventListener("mouseenter", ()=>{
                console.log("entered")
                item.current.addEventListener("mousemove", (e)=>{
                    console.log("moving")
                    item.current.style.transition = "none"
                    let xAxis = (window.innerWidth/2 - e.clientX)/ 22
                    let yAxis = (window.innerHeight/2 - e.clientY)/ 22
                    item.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
                })
                item.current.addEventListener("mouseleave", ()=>{
                    item.current.style.transition = "transform 0.5s ease"
                    item.current.style.transform = "rotateY(0deg) rotateX(0deg)"
                })
            })
        })
        return () => {
            clearTimeout(intersector)
        }
    }, [arrCarta])

   

    return (
        <div ref={contexto && contexto.sobreMi}>
            
            <div className="container-services">
                <div className="cont-services">
                    <div className="cartaSkill" ref={carta1}>
                        {/* <SpeedIcon className="iconCard" /> */}
                        <h3>Performance <br></br> & complexity</h3>
                        <p>I am specializated building Applications with React for me the fastest way it to build a highly scalable applications with complex states and complex UI structures.
                            </p>
                    </div>
                    <div className="cartaSkill item2" ref={carta2}>
                        {/* <DevicesOtherIcon className="iconCard " /> */}
                        <h3>Accesibility</h3>
                        <p>I develop following the Responsive Design First, ensuring a great portability across devices. At the same time I adapt designer's prototypes into browser's compatible builds.</p>
                    </div>
                    <div className="cartaSkill item3" ref={carta3}>
                        {/* <AccessibleIcon className="iconCard" /> */}
                        <h3>Adaptation</h3>
                        <p>
                            I use a set of modern technologies to build fast, accessible and highly featured web applications. For that I try to keep up to date with last tecnologies to implement them when they make a real difference.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


