import React, { useState, useRef} from 'react'

const Context = React.createContext()

function ContextProv(props) {
    const portfolio = useRef(0)
    const skills = useRef(0)
    const sobreMi = useRef(0)
    const contacto = useRef(0)
    const navigation = useRef(0)
    
    const [hasbeenLoaded, setHasbeenLoaded] = useState(false)
    const [viewWidth, setViewWidth] = useState(window.innerWidth)
    //avoid Nav's multiple rerenders on scrollpos change when button view more //work is toggled
   
    return (
        <Context.Provider value={{portfolio, skills, sobreMi, contacto, navigation, hasbeenLoaded, setHasbeenLoaded, viewWidth, setViewWidth}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProv, Context}