import { useState, useEffect, useRef } from 'react'

export default function Animation() {
    const refContenedor = useRef(null)
    const refBoton = useRef(null)
    const [isOpen, setIsOpen] = useState(true)

    function cerrar() {
        
            refContenedor.current.classList.remove("cajapeqe")
            refContenedor.current.classList.add("cambio")
            setTimeout(() => {
                refContenedor.current.style.opacity = 0
                refContenedor.current.classList.remove("cambio")
                
            }, 500)
    }

    function abrir() {
        refContenedor.current.style.opacity = 1
        console.log("xupa")
        refContenedor.current.classList.add("cajapeqe")
        
        
    }

    useEffect(() => {
        if(isOpen){
            abrir()
        }
       else{
           cerrar()
       }
       
    }, [isOpen])
    return [isOpen, refContenedor, setIsOpen]
}
