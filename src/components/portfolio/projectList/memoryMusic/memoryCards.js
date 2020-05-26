import React, { useEffect, useRef, useState, Fragment } from 'react'
import "./memoryCards.css"
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"
import InfoHoverable from "../../../../utils/infoHoverable/infoHoverable"

export default function MemoryMusic() {

    const [questionVal, setQuestionVal] = useState("")
    const [answerVal, setAnswerVal] = useState("")
    const [registro, setRegistro] = useState([])
    const [preguntando, setPreguntando] = useState(false)
    const question = useRef(null)
    const submitNew = useRef(null)
    const answer = useRef(null)
    const btnAdd = useRef(null)
    const container = useRef(null)
    const popup = useRef(null)
    const clearBtn = useRef(null)
    const titulo = useRef(null)
    const primero = useRef(null)
    const segundo = useRef(null)
    const derecha = useRef(null)
    const izquierda = useRef(null)
    const cartaT = useRef(null)
    const bodyMusic = useRef(null)
    let numId = 0;

    let contador = 0;

    class Ui {

        desaparecerBtns = function () {
            submitNew.current.style.display = "none"
            clearBtn.current.style.display = "block"
            titulo.current.style.color = "black"
            btnAdd.current.style.display = "inline"
        }
        aparecerBtn = function () {
            submitNew.current.style.display = "block"
            clearBtn.current.style.display = "none"
            titulo.current.style.color = "#FFF"
            btnAdd.current.style.display = "none"
        }

    }
    const ui = new Ui();

    function introducir() {
        numId = numId + 1

        //crear(carta.data)
        carta.stackear(question.current.value, answer.current.value, numId)
        let listaCartas = document.getElementById("listaCartas")
        let nuevacarta = document.createElement("div")
        nuevacarta.classList.add("cardLeft")
        nuevacarta.id = numId
        if (numId == 1) {
            nuevacarta.classList.add("cardActive")

        }
        nuevacarta.innerHTML = `
    <p class="pregunta">${question.current.value}</p>


    <p class="respuesta">${answer.current.value}</p>`

        listaCartas.appendChild(nuevacarta)

        cambiarBodyR(numId)

    }

    function generateCard(question, answer, id) {
        carta.stackear(question, answer, id, false)
        let listaCartas = document.getElementById("listaCartas")
        let nuevacarta = document.createElement("div")
        nuevacarta.classList.add("cardLeft")
        nuevacarta.id = id
        if (id == 1) {
            nuevacarta.classList.add("cardActive")

        }
        nuevacarta.innerHTML = `
    <p class="pregunta">${question}</p>


    <p class="respuesta">${answer}</p>`

        listaCartas.appendChild(nuevacarta)

        numId = id  //el ultimo id sera e

    }




    class Carta {
        constructor(pregunta, respuesta) {
            this.pregunta = pregunta
            this.respuesta = respuesta
        }

        data = []


        stackear(pregunta, respuesta, id, añadir = true) {
            let muestra = {
                pregunta: pregunta,
                respuesta: respuesta,
                iden: id
            }
            if (añadir) {
                storage.toLocalStorage(muestra)
            }
            this.data.push(muestra)
            setRegistro(this.data)
        }

        clearCards() {
            localStorage.setItem("musicSlider", [])
            cartaT.current.innerHTML = ""
            setRegistro("")
        }
    }

    class LocalStorage {

        getLocalStorage = () => {
            if (!localStorage.getItem("musicSlider")) {
                console.log("mama")
                let kuku = []
                localStorage.setItem("musicSlider", JSON.stringify(kuku))
            } else {
                const sto = localStorage.getItem("musicSlider")
                const parsedSto = JSON.parse(sto)
                parsedSto.forEach(item => {
                    console.log(item.pregunta, item.respuesta, item.iden)
                    generateCard(item.pregunta, item.respuesta, parseInt(item.iden))
                })
                cambiarBodyR(numId)
            }

        }

        toLocalStorage(data) {
            console.log(data)
            const actualStorage = localStorage.getItem("musicSlider")
            const theStorage = JSON.parse(actualStorage)
            theStorage.push(data)
            localStorage.setItem("musicSlider", JSON.stringify(theStorage))
            console.log(localStorage)

        }
    }

    function crear(inputs) {
        inputs.forEach()
    }


    const carta = new Carta();
    const storage = new LocalStorage()

    function cambiarBodyW() {
        setPreguntando(false)
        container.current.style.display = "none"
        popup.current.style.display = "flex"
        bodyMusic.current.style.backgroundColor = "cornflowerblue"
        ui.aparecerBtn()

    }

    function cambiarBodyR(segun, primer = 1) {
        setPreguntando(true)
        console.log(container.current)
        container.current.style.display = "block"
        popup.current.style.display = "none"
        bodyMusic.current.style.backgroundColor = "white"
        primero.current.innerText = primer
        segundo.current.innerText = segun
        ui.desaparecerBtns()
    }


    function girar() {

        console.log("fase1")
        const cartaActiva = document.querySelector(".cardActive")
        cartaActiva.classList.toggle("girador")

    }


    function haciaAdelante() {
        if ((parseInt(segundo.current.innerText) - parseInt(primero.current.innerText)) >= 1) {
            let keke = parseInt(primero.current.innerText)
            keke++
            primero.current.innerText = keke
            localizarCartaD(keke)
        }
        contador = 0

    }


    function haciaAtras() {
        console.log("vas o que")
        if (parseInt(primero.current.innerText) > 1) {
            let keke = parseInt(primero.current.innerText)
            keke--
            primero.current.innerText = keke
            localizarCartaI(keke)
        }
        contador = 0
    }

    function localizarCartaD(id) {
        carta.data.forEach((card) => {
            if (card.iden === id) {

                document.getElementById(id - 1).className = "card"
                document.getElementById(id).className = "card cardActive"
                console.log(card.pregunta)
            }
        })
    }
    function localizarCartaI(id) {
        carta.data.forEach((card) => {
            if (card.iden === id) {

                document.getElementById(id + 1).className = "cardLeft"
                document.getElementById(id).className = "cardLeft cardActive"

            }
        })
    }
useEffect(()=>{
}, [registro])

    useEffect(() => {
        storage.getLocalStorage()
        submitNew.current.addEventListener("click", introducir)
        btnAdd.current.addEventListener("click", cambiarBodyW)
        cartaT.current.addEventListener("click", girar)
        izquierda.current.addEventListener("click", haciaAtras)
        derecha.current.addEventListener("click", haciaAdelante)
        clearBtn.current.addEventListener("click", () => {
            carta.clearCards()
        })
    }, [])

    console.log(carta.data.length, "HHHHHHHHHHHola")

    const texto = "Esta aplicación juega con la perspectiva 3D que podemos dar a nuestros elementos con un poco de CSS. Permite al usuario crear cartas con texto a dos caras reversibles y que van a ser agrupadas en un carrusel de cartas con cierto aspecto tridimensional. Esta aplicación persiste en el localStorage por lo que hasta que no clicke en el botón Clear All, las cartas permanecerán"
    return (
        <Fragment>
        <div className="music-container" ref={bodyMusic}>
            <h1 className="titulo" ref={titulo}>Memory Cards
            <div className="button-wrapper"><button className={registro.length? "btn-add": "btn-add actived"} id="btn-add" ref={btnAdd}>Add new card</button>
            <button className="btn-clear" ref={clearBtn}>Clear Cards</button></div>
            </h1>
            <div className="container-card" ref={container}>
                <div id="listaCartas" ref={cartaT}>
                </div>
                <p className="separ"> <span id="primero" ref={primero}>1</span>/<span id="segundo" ref={segundo}>4</span></p>
            </div>
          
            <div className="popup" ref={popup}>
                <div className="form-group-music">
                    <label htmlFor="question">Question</label>
                    <input id="question" cols="50" rows="5" ref={question} value={questionVal} placeholder="write a question" name={questionVal} onChange={(e) => setQuestionVal(e.target.value)} />
                </div>
                <div className="form-group-music">
                    <label htmlFor="answer">Answer</label>
                    <input id="answer" cols="50" rows="5" ref={answer} name={answerVal} placeholder="white an answer" value={answerVal} onChange={(e) => setAnswerVal(e.target.value)} />
                </div>
                <button className="submit-card" id="submit" ref={submitNew}><i className="fas fa-plus"></i> Add card</button>
                
            </div>
            {preguntando? <Fragment>
            <span className="left" ref={izquierda}><AiOutlineLeft /></span>
            <span className="right" ref={derecha}><AiOutlineRight /></span></Fragment>
            :
            <Fragment>
            <span className="left hidden" ref={izquierda}><AiOutlineLeft /></span>
            <span className="right hidden" ref={derecha}><AiOutlineRight /></span></Fragment>}
        </div>
        <InfoHoverable texty={texto}/>
        </Fragment>
    )
}
