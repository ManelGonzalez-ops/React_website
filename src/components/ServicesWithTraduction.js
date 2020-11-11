import React, { useEffect, useRef, useContext} from 'react'
import { IoIosSpeedometer } from "react-icons/io"
import { MdAccessibility } from "react-icons/md"
import { AiFillMobile } from "react-icons/ai"
import { useTranslation } from "react-i18next"
import {Context} from "./Context"
import SpeedIcon from '@material-ui/icons/Speed';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther'
import AccessibleIcon from '@material-ui/icons/Accessible';

export default function Services() {

    const contexto = useContext(Context)

    const { t, i18n } = useTranslation()

    const carta1 = useRef(null)
    const carta2 = useRef(null)
    const carta3 = useRef(null)
    const arrCarta = [carta1, carta2, carta3]


    useEffect(() => {
        let kaka = setTimeout(() => {
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
        return () => {
            clearTimeout(kaka)
        }
    }, [])

    const handleLenguage =(lan)=>{
        i18n.changeLanguage(lan)
    }

    return (
        <div ref={contexto && contexto.sobreMi}>
            <div className="button-wrapper">
                <button onClick={() => { handleLenguage("en") }}>Ingles</button>
                <button onClick={() => { handleLenguage("chi") }}>Chino</button>
                <button onClick={() => { handleLenguage("ko") }}>Koreano</button>
            </div>
            <div className="container-services">
                <div className="cont-services">
                    <div className="cartaSkill" ref={carta1}>
                        <SpeedIcon className="iconCard" />
                        <h3>sdhgsdshjs</h3>
                        <p>{t("Thanks.1")}</p>
                    </div>
                    <div className="cartaSkill item2" ref={carta2}>
                        <DevicesOtherIcon className="iconCard " />
                        <h3>Responsive Design First</h3>
                        <p>{t("Koko.1")}</p>
                    </div>
                    <div className="cartaSkill item3" ref={carta3}>
                        <AccessibleIcon className="iconCard" />
                        <h3>Accesibilidad</h3>
                        <p>
                            {t("Kaka.1")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


