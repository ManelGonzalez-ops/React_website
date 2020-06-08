import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import './expenses.css';
import HeaderMoney from "./Components/HeaderMoney"
import TransactionList from "./Components/TransactionList"
import Inputs from "./Components/Inputs"
import Popup from "./Components/Popup"
import InfoHoverable from '../../../../utils/infoHoverable/infoHoverable';
import { Context } from '../../../Context';



const Expenses =()=> {
  const {setHasbeenLoaded} = useContext(Context)
 
  const [texto, setTexto] = useState("")
  const [amount, setAmount] = useState("")
  const [registro, setRegistro] = useState("")
  const [incorrecto, setIncorrecto] = useState(false)
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [info, setInfo] = useState("")

  const handleChange = (e) => {
    const {value} = e.target
    setInput1(value)
  }
  const handleChangeL = (e) => {
    const {value} = e.target
    setInput2(value)
  }
 
  
  const toLocalStorage = (object) => {
    localStorage.setItem("registro", JSON.stringify(object))
  }
  const fromLocalStorage = () => {

    const koko = localStorage.getItem("registro")
    const kaka = JSON.parse(koko)
    return kaka
  }



  const submitNew = () => {
    
    if (input1 === "" || input2 === "") {
      setIncorrecto(true)
      setTimeout(() => {
        setIncorrecto(false)
      }, 2000)

    } else {
      const nuevoObjeto = {
        amount: input2,
        texto: input1
      }

     
    setRegistro(()=>{
      if(registro === null){
        return [nuevoObjeto]
      }else{
        return [...registro, nuevoObjeto]
      }
    })
  }

  
}
  const deleteFromState = (id, e) => {
    const nuevaInstancia = Object.assign([], registro)

    nuevaInstancia.splice(id, 1)

    setRegistro(nuevaInstancia)
    toLocalStorage(nuevaInstancia)
  }

  const Income = (props) => {
    let ingreso = 0
    props.datos.forEach(item => {
      if (item.amount >= 0) {
        ingreso += item.amount
      }
    })
    return ingreso
  }
 useEffect(()=>{
  toLocalStorage(registro)
 }, [registro])
  useEffect(()=>{
    
    if (localStorage.getItem("registro") !== undefined) {

      setRegistro(fromLocalStorage())
    }
    else {
      setRegistro([])
    }

    setHasbeenLoaded(true)
    setInfo("Le permite añadir ingresos y gastos de modo que estos se descuentan automáticamente, obteniendo el saldo total. Está pequeña aplicación fue desarrollada utilizando React. Persiste los datos en el LocalStorage por lo que la información queda guardada en el buscador.")
  }, [])
    
    return (
      <Fragment>
      <div className="App-expenses">
        <h1>Expense Tracker</h1>
        <div className="containerPrincipal">
          <HeaderMoney datos={registro} />
          
          <TransactionList registro={registro} deleteFromState={deleteFromState} />
        
          
          <Popup incorrecto={incorrecto} />
          <Inputs handleChange={handleChange} handleChangeL={handleChangeL} texto={texto} amount={amount} input1={input1} input2={input2}submitNew={submitNew} />
        </div>
      </div>
      <InfoHoverable textu={info}/>
      </Fragment>
    );

  }



export default Expenses;
