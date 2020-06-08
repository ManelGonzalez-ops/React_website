import React, { useState, useRef} from 'react'

const Context = React.createContext()

function ContextProv(props) {
    const portfolio = useRef(null)
    const skills = useRef(null)
    const sobreMi = useRef(null)
    const contacto = useRef(null)
    const navigation = useRef(null)
    
    const [hasbeenLoaded, setHasbeenLoaded] = useState(false)
    
   
    return (
        <Context.Provider value={{portfolio, skills, sobreMi, contacto, navigation, hasbeenLoaded, setHasbeenLoaded}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProv, Context}