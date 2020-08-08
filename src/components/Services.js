import React, {useEffect, useRef} from 'react'
import {IoIosSpeedometer} from "react-icons/io"
import {MdAccessibility} from "react-icons/md"
import {AiFillMobile} from "react-icons/ai"

export default function Services() {
    const carta1 = useRef(null)
    const carta2 = useRef(null)
    const carta3 = useRef(null)
    const arrCarta = [carta1, carta2, carta3]


    useEffect(()=>{
       let kaka = setTimeout(()=>{
            const observu = new IntersectionObserver (items=>{
                let counter = 0
            items.forEach(item=>{  
                if(item.isIntersecting){
                    counter = counter + 200
                    setTimeout(()=>{
                        item.target.classList.add("visibleC")
                    }, counter)
                    
                }
            })
            }, {threshold: 0.2})
        
                arrCarta.forEach(item=>{
                   
                    observu.observe(item.current)
                })
        }, 2)
return ()=>{
    clearTimeout(kaka)
}
    },[])

    
    return (
        <div className="container-services">
        <div className="cont-services">
            <div className="cartaSkill" ref={carta1}>
                <IoIosSpeedometer className="iconCard" />
                <h3>Performance</h3>
                <p>I use a set of modern technologies to build fast and performance web applications</p>
            </div>
            <div className="cartaSkill" ref={carta2}>
                <AiFillMobile className="iconCard" />
                <h3>Responsive Design First</h3>
                <p>A good web appication is a system where data, logic and ui components are interrelated. requires complex relationship between components and data.  where data flows through components which can require similar logic or not.</p>
            </div>
            <div className="cartaSkill" ref={carta3}>
                <MdAccessibility className="iconCard" />
                <h3>Accesibilidad</h3>
                <p>
                    Good functionality and and amazing experience doesn't mean give up a nice Ui. Controling component data better gives a more flexibility i a way to make ui components react to any change you want.</p>
            </div>
        </div>
        </div>
    )
}


