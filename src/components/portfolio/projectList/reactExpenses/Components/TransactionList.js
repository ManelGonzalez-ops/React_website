import React, { Fragment } from 'react'

 function TransactionList(props) {

     const GeneraLista =()=>{
         return(props.registro.map((item, index) =>
            <li key={index} className={item.amount >= 0 ? "verde item": "rojo item"}>
                <span className="textt">{item.texto}</span><span className="amountt">{item.amount}</span>
                <button className="cerrar" onClick={props.deleteFromState.bind(this, index)}>
                X
                </button>
            </li>
        )

         )
     }
      const TransactionLabel =()=> props.registro? <Fragment><span className="texta">Concepto</span>
      <span className="amounta">Cantidad</span></Fragment>
      :
      ""

    return (
        <div className="transactionContainer">
            <h3>History</h3>
           
        <ul className="listTransaction">
            <TransactionLabel/>
        {props.registro && <GeneraLista/>}
        </ul>
        </div>
    )
}


export default TransactionList