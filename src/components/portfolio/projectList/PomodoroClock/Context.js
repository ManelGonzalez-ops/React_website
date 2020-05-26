import React, { Component} from 'react'
const Context = React.createContext()

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
        console.log(this.state)
        return (
            <Context.Provider value={{work, longBreak, shortBreak, range, cambiarDrag}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export {ContextoProv, Context}