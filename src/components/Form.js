import React, { useEffect, useRef, useContext, useState } from 'react'
import { Context } from "./Context"
import { wrap } from 'gsap'

export default function Form() {
    const { contacto } = useContext(Context)

    const input1 = useRef(null)
    const wrapName = useRef(null)
    const [nameVal, setNameVal] = useState("")
    const input2 = useRef(null)
    const input3 = useRef(null)
    const wrapMail = useRef(null)
    const [mailVal, setMailVal] = useState("")
    const input4 = useRef(null)
    
   
    const submitBtn = useRef(null)
    const addclass = e => {
        console.log("VAAA O NO")

        e.target.nextSibling.classList.add("activo")
    }
    const removeClass = e => {
        e.target.nextSibling.classList.remove("activo")
    }
    const setLabel = e => {
        e.target.parentElement.previousElementSibling.style.willChange = "transform, opacity"  //MEJORA MUCHO EL RENDIMIENTO!!!
        e.target.parentElement.previousElementSibling.classList.add("activo")

    }

    const inputa = [input1, input2, input3, input4]

    const checkRegex = (e) => {
        let isValidSubmit;
        if(!nameVal){
            wrapName.current.classList.add("failed")
            e.preventDefault()
        }
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


        const re = regex.test(mailVal)
        console.log(mailVal)
        if (!re) {
            console.log("cagaste")
            wrapMail.current.classList.add("failed")
            e.preventDefault()
        } else {
            if (wrapMail.current.classList.contains("failed")) {
                wrapMail.current.classList.remove("failed")
            }
        }
    }
    useEffect(() => {
       
        inputa.forEach(item => {
            item.current.addEventListener("focus", addclass)
            item.current.addEventListener("blur", removeClass)
            item.current.addEventListener("mouseover", setLabel)
            item.current.addEventListener("focus", setLabel)
        })
        return () => {
            inputa.forEach(item => {
                item.current.removeEventListener("focus", addclass)
                item.current.removeEventListener("blur", removeClass)
                item.current.removeEventListener("mouseover", setLabel)
                item.current.removeEventListener("focus", setLabel)
            })
        }
    }, [])


    return (
        <div ref={contacto}>

            <form className="container__form" name="theFoorm" method="post" >
                <input type="hidden" name="form-name" value="form1" />
                <h2>Contact Form</h2>

                <label className="label-contact" htmlFor="fname">First Name</label>
                <div className="wrap" ref={wrapName}><input type="text" id="fname" name="fname" ref={input1} onChange={(e)=>{setNameVal(e.target.value)}} value={nameVal} /><div className="remark"></div><p className="error">Lo siento, pero tiene que facilitar un nombre</p></div>

                <label className="label-contact" htmlFor="lname">Last Name</label>
                <div className="wrap"><input type="text" id="lname" name="lname" ref={input2} /><div className="remark"></div></div>

                <label className="label-contact" htmlFor="email">Email Address</label>
                <div className="wrap" ref={wrapMail}><input type="text" id="email" name="email" ref={input3} onChange={(e) => { setMailVal(e.target.value) }} value={mailVal} /><div className="remark"></div>
                    <p className="error">Lo siento, el campo es requerido y tiene que ser valido</p></div>
                <label className="label-contact" htmlFor="message">Mensaje</label>
                <div className="wrap"><textarea type="text" id="message" name="message" ref={input4} className="textarea" /><div className="remark special"></div>
                </div>
                <button type="submit" className="cta" onClick={checkRegex}>Enviar</button>
            </form>

        </div>

    )
}

