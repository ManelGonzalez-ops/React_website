import React from 'react'
import {MdAdd} from "react-icons/md"

function Inputs(props) {
    return (
        <div className="inputsContainer">
            <h4 className="titulo"><MdAdd className="add-exp"/> Add new transaction</h4>
            <div className="form-group">
                <label >Text</label>
                <input type="text" className="inputtt-exp" name="texto" placeholder="..." onChange={props.handleChange} value={props.texto}/>
            </div>
            <div className="form-group">
                <label >Amount</label>
                <input className="inputt-exp" type="number" name="amount" placeholder="..."
                onChange={props.handleChange} value={props.amount}/>
            </div>
            
            <button onClick={props.submitNew}>Añadir</button>
        </div>
    )
}

export default Inputs