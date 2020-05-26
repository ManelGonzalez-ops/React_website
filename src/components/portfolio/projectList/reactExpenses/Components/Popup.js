import React from 'react'
import Modal from "react-modal"

function Popup(props) {
    return (
        <div>
        <Modal className="modal-expenses" isOpen={props.incorrecto} ariaHideApp={false}>
            <p>Faltan campos que rellenar</p>
        </Modal>
        </div>
    )
}

export default Popup