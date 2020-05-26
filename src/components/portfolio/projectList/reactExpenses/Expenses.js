import React, { Component, Fragment } from 'react';
import './expenses.css';
import HeaderMoney from "./Components/HeaderMoney"
import TransactionList from "./Components/TransactionList"
import Inputs from "./Components/Inputs"
import Popup from "./Components/Popup"
import InfoHoverable from '../../../../utils/infoHoverable/infoHoverable';



class Expenses extends Component {

  state = {
    registro: [],
    amount: "",
    texto: ""
  }

  componentWillMount = () => {
    if (localStorage.getItem("registro") !== undefined) {

      this.setState({
        registro: this.fromLocalStorage()
      })
    }
    else {
      this.setState({
        registro: []
      })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  toLocalStorage = (object) => {
    localStorage.setItem("registro", JSON.stringify(object))
  }
  fromLocalStorage = () => {

    const koko = localStorage.getItem("registro")
    const kaka = JSON.parse(koko)
    return kaka
  }



  submitNew = () => {
    const { amount, texto } = this.state
    if (amount == "" || texto == "") {
      this.setState({ incorrecto: true })
      setTimeout(() => {
        this.setState({ incorrecto: false })
      }, 2000)

    } else {
      const nuevoObjeto = {
        amount: this.state.amount,
        texto: this.state.texto
      }

      this.setState((prev) => {
        if (prev.registro === null) {
          return { registro: [nuevoObjeto] }
        }
        else {
          return { registro: [...prev.registro, nuevoObjeto] }
        }
      }
        , () => this.toLocalStorage(this.state.registro))
    }


  }
  deleteFromState = (id, e) => {
    const kaka = Object.assign([], this.state.registro)

    kaka.splice(id, 1)

    this.setState({
      registro: kaka
    })
    this.toLocalStorage(kaka)
  }

  Income = (props) => {
    let ingreso = 0
    props.datos.forEach(item => {
      if (item.amount >= 0) {
        ingreso += item.amount
      }
    })
    return ingreso
  }

  ingresosTotales = this.state.registro

  

  render() {
    const texto = "Le permite añadir ingresos y gastos de modo que estos se descuentan automáticamente, obteniendo el saldo total. Está pequeña aplicación fue desarrollada utilizando React. Persiste los datos en el LocalStorage por lo que la información queda guardada en el buscador."
    return (
      <Fragment>
      <div className="App-expenses">
        <h1>Expense Tracker</h1>
        <div className="containerPrincipal">
          <HeaderMoney datos={this.state.registro} />
          
          <TransactionList registro={this.state.registro} deleteFromState={this.deleteFromState} />
        
          
          <Popup incorrecto={this.state.incorrecto} />
          <Inputs handleChange={this.handleChange} texto={this.state.texto} amount={this.state.amount} submitNew={this.submitNew} />
        </div>
      </div>
      <InfoHoverable textu={texto}/>
      </Fragment>
    );

  }

}

export default Expenses;
