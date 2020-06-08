import React, { Component} from 'react'
const ContextP = React.createContext()

class ContextoProv extends Component {

    state = {
        work: 5,
        longBreak: 20,
        shortBreak: 30,
        range: 3

    }

    cambiarDrag = (e) => {
        const { name, value } = e.target
        
        this.setState(() => {
            return { [name]: Math.floor(parseInt(value)) }
        })
    
    }

    

    render() {
        const {work, longBreak, shortBreak, range} = this.state
        const {cambiarDrag} = this
        return (
            <ContextP.Provider value={{work, longBreak, shortBreak, range, cambiarDrag}}>
                {this.props.children}
            </ContextP.Provider>
        )
    }
}

export {ContextoProv, ContextP}