import React, { useRef, useEffect, useState, useContext } from 'react'
import { BsCodeSlash } from "react-icons/bs"
import { FaEye } from "react-icons/fa"
import { Context } from "../Context"


export default function ContentMain({ info }) {

    const { viewWidth } = useContext(Context)

    const [isMasked, setIsMasked] = useState(false)
    const title = useRef(null)
    const text = useRef(null)
    const tech = useRef(null)
    const imagen = useRef(null)


    const count = useRef(0.5)

    const arrDom = [title, text, tech, imagen]

    const observer = new IntersectionObserver(items => {

        items.forEach(item => {
            count.current = count.current - 0.3
            console.log(item)
            if (item.isIntersecting) {
                item.target.classList.add("visible")
                console.log(item.target, "ISINTERSECTIIIIIIIIIIINGGG")
            }
        })

    }, { threshold: info.threshold })

    // useEffect(()=>{

    //     observer.observe()
    // },[])


    useEffect(() => {
        if (title && title.current && text && tech && imagen) {
            arrDom.forEach(item => {
                observer.observe(item.current)
            })
        }

    }, [title, text, tech, imagen, viewWidth])


    return (


        <div className={info.index % 2 === 0 ? "content" : "content reversed"}
            key={info.index}>

            <div className="image__block" >

                {viewWidth < 800 && <h2 className="reveal" ref={title}>{info.item.title}</h2>}

                <div className="image reveal"
                    onMouseOver={() => { setIsMasked(true) }}
                    onMouseOut={() => { setIsMasked(false) }}
                    ref={imagen}
                >
                    <img className="actual-img" src={info.item.img} alt={info.item.title}
                        style={{ width: "100%" }}
                    />
                    <div className={isMasked ? "layer visible" : "layer"}></div>
                    <div className="inner-btn-section">

                        <a target="_blanck" href={info.item.urls.web} className={isMasked ? "visible" : ""}>
                            <FaEye className="icon" />
                        </a>

                        <a target="_blanck" href={info.item.urls.code} className={isMasked ? "visible" : ""}>
                            <BsCodeSlash className="icon" />
                        </a>
                    </div>
                </div>

            </div>

            <div className="text__block">

                {viewWidth > 800 && <h2 className="reveal" ref={title}>{info.item.title}</h2>}
                <div ref={tech} className="tech-container reveal">
                    <h5 className="titulo-tech">Built with:</h5>
                    <ul className="tech " >{info.item.tech.map((tec, index) =>
                        <li key={index}>
                            <span><strong>{tec.name}</strong></span>
                            <tec.component /></li>
                    )}</ul>
                </div>
                <p className="descripcion reveal" ref={text}>{info.item.text}</p>

                <div className="btn-group">
                    <a href={info.item.urls.web} target="_blank" rel="noopener noreferrer">
                        <button className="first" target="_blank" rel="noopener noreferrer">Visit</button>
                    </a>
                    <a href={info.item.urls.code} target="_blank" rel="noopener noreferrer">
                        <button
                            className="last">Source Code</button>
                    </a>
                </div>

            </div>



        </div>
    )
}






























