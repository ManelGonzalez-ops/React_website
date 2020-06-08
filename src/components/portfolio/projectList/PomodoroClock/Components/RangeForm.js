import React, {useContext} from 'react'
import styled from "styled-components"
import {ContextP} from "../Context"


const colors = (props) => (`
    background: ${props.colorLab};
    box-shadow: -400px 0 0 390px ${props.color};`)

const colora = (props) => (`
color: ${props.colorLab}`)

const Kaka = styled.div`
    position: relative;
    font-size: 20px;
   margin: 20px auto;
    .inputRange{
        background-color: var(--bg-dark);
        -webkit-appearance: none;
        height: 15px;
        width: 100%;
        margin-top: 10px;
        overflow: hidden;
        border-radius: 1em;
    }
    .inputRange::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        
        border-radius: 50%;
        height: 15px;
        width: 15px;
        
       border: 2px solid var(--bg-dark);
       transform: scale(1.2);
       ${props => colors(props)}
       
    }
    .inputRange::focus{
        -webkit-appearence: none;
        border: none;
    }
    
    .inputRange ::-moz-range-thumb{
        ${props => colors(props)}
    }
    .labelTime{
        background-color: var(--bg-dark); 
        padding: 0.15em 0.7em;
        border-radius: 2em;
        font-size: 0.9rem;
        margin: 0 0.2em;
    }
    .labelTittle{
        position: absolute;
        font-size: 1em;
        
        right: 5px;
        top: 4px;
        margin: 0 0.2em;
        ${props => colora(props)}
        
    }
    `


function RangeForm() {
    
    
    const {work ,longBreak, shortBreak, range, cambiarDrag} = useContext(ContextP)


   
        
        return (
            <div>

                <Kaka color="rgba(255, 204, 0, 0.9)" colorLab="rgba(255, 204, 0, 0.7)">
                    
                    <span className="labelTime">{Math.floor(parseInt((work)))}:00</span>
                    <span className="labelTittle">Work</span>
                    <input className="inputRange" type="range" step="0.01" min="1" max="60" value="3" name="work" value={work} onChange={cambiarDrag}></input>

                </Kaka>
                <Kaka color="rgba(203, 19, 45, 1)" colorLab="rgba(203, 19, 45, 0.7)">

                    <span className="labelTime">{Math.floor(parseInt((longBreak)))}:00</span>
                    <span className="labelTittle">Long Break</span>
                    <input className="inputRange" type="range" step="0.01" min="1" max="60" value="3" name="longBreak" value={longBreak} onChange={cambiarDrag}></input>

                </Kaka>
                <Kaka color="rgba(58, 61, 232, 1)" colorLab="rgba(58, 61, 232, 0.7)">

                    <span className="labelTime">{Math.floor(parseInt((shortBreak)))}:00</span>
                    <span className="labelTittle">Short Break</span>
                    <input className="inputRange" type="range" step="0.01" min="1" max="60" value="3" name="shortBreak" value={shortBreak} onChange={cambiarDrag}></input>

                </Kaka>
                <Kaka color="var(--color-contrast)" colorLab="var(--color-contrast)">

                    <span className="labelTime">{Math.floor(parseInt((range)))}</span>
                    <span className="labelTittle">Range</span>
                    <input className="inputRange" type="range" step="0.01" min="1" max="10" value="3" name="range" value={range} onChange={cambiarDrag}></input>

                </Kaka>
            </div>
        )
    
}

export default RangeForm