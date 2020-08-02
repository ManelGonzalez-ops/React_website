import React, { Fragment, useEffect, useRef, useState } from 'react'
import "./iconSection.css"
import styled from "styled-components"

export default function IconSection({movileDisplay, innerWidth}) {
  
  const icn1 = useRef(null)
  const icn2 = useRef(null)
  const icn3 = useRef(null)

  const icnArr = [icn1, icn2, icn3]


  const observer = new IntersectionObserver(items => {
    items.forEach(item => {
      console.log("hooola AHORA")
      console.log(item)
      if (item.isIntersecting) {
        console.log("Porrfiin funca")
        item.target.style.willChange = "transform, opacity"
        item.target.childNodes[0].style.willChange = "transform, opacity"
        item.target.classList.add("onVisible")
      }
    })
  }, { threshold: 0})


  useEffect(()=>{

    if(icn1 && icn2 && icn3){
      
      icnArr.forEach(itemmm => {
        
        observer.observe(itemmm.current)
      })
    }

  }, [icn1, icn2, icn3, innerWidth])

  const setDisplay = (props) => (`
      display: ${props.vista};
    `)
  const IconoContainer = styled.div`
    ${props => setDisplay(props)};
   
    `

  return (
    <IconoContainer vista={movileDisplay}>
      <a href="https://linkedin.com/in/manelgonzalezescrig" target="_blank" rel="noopener noreferrer" className="icn-circle" ref={icn1}>
        <Linkedin />
      </a>
      <a href="https://codesandbox.io/u/ManelGonzalez-ops/sandboxes" rel="noopener noreferrer" target="_blank" className="icn-circle" ref={icn2}>
        <CodeSandbox />
      </a>
      <a href="https://github.com/ManelGonzalez-ops" rel="noopener noreferrer" target="_blank" className="icn-circle" ref={icn3}>
        <Github />
      </a>
    </IconoContainer>
  )
}


const Linkedin = () =>
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 0H2C0.89375 0 0 0.89375 0 2V48C0 49.1063 0.89375 50 2 50H48C49.1063 50 50 49.1063 50 48V2C50 0.89375 49.1063 0 48 0ZM14.8312 42.6063H7.4125V18.7437H14.8312V42.6063ZM11.125 15.4813C10.2745 15.4813 9.44318 15.2291 8.73605 14.7566C8.02892 14.2841 7.47777 13.6125 7.15232 12.8268C6.82686 12.0411 6.74171 11.1765 6.90762 10.3424C7.07354 9.50824 7.48308 8.74206 8.08444 8.14069C8.68581 7.53932 9.45199 7.12979 10.2861 6.96387C11.1202 6.79796 11.9848 6.88311 12.7705 7.20857C13.5563 7.53402 14.2278 8.08517 14.7003 8.7923C15.1728 9.49943 15.425 10.3308 15.425 11.1812C15.4187 13.5562 13.4938 15.4813 11.125 15.4813ZM42.6063 42.6063H35.1937V31C35.1937 28.2313 35.1438 24.675 31.3375 24.675C27.4813 24.675 26.8875 27.6875 26.8875 30.8V42.6063H19.4813V18.7437H26.5938V22.0063H26.6937C27.6812 20.1313 30.1 18.15 33.7125 18.15C41.225 18.15 42.6063 23.0937 42.6063 29.5187V42.6063V42.6063Z" fill="#2867B2"/>
</svg>


const CodeSandbox = () =>
  <svg width="50%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16724 12.5L25.9454 0L47.7313 12.5L47.9188 37.3937L25.9454 50L4.16724 37.5V12.5ZM8.52036 17.6672V27.5797L15.486 31.4531V38.7781L23.7625 43.5641V26.3281L8.52036 17.6672ZM43.3922 17.6672L28.1501 26.3266V43.5625L36.4188 38.7766V31.4609L43.3938 27.5797L43.3922 17.6672ZM10.6938 13.7531L25.9125 22.3875L41.1625 13.6797L33.0985 9.09844L25.9938 13.1516L18.8485 9.05L10.6938 13.7531Z" fill="rgb(36, 36, 36)" />
  </svg>

const Github = () => <svg id="Bold" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="50%" xmlns="http://www.w3.org/2000/svg" fill="#24292e"><path d="m12.29 21.499c3.73 0 8.94.09 10.835-3.701.715-1.449.875-3.122.875-4.7h-.001c0-2.073-.575-4.047-1.95-5.651.255-.766.385-1.573.385-2.385 0-1.064-.24-1.598-.73-2.563-2.24 0-3.69.42-5.39 1.742-1.31-.311-2.67-.455-4.02-.455-1.495 0-2.986.154-4.435.495-1.725-1.336-3.175-1.781-5.44-1.781-.484.965-.729 1.499-.729 2.563 0 .811.125 1.632.385 2.414-1.38 1.589-2.075 3.548-2.075 5.621 0 1.578.281 3.266 1.01 4.701 1.97 3.835 7.49 3.7 11.28 3.7zm-5.289-9.99c.95 0 1.865.168 2.8.297 3.418.52 5.215-.297 7.31-.297 2.339 0 3.675 1.915 3.675 4.087 0 4.349-4.015 5.012-7.53 5.012h-2.41c-3.5 0-7.52-.667-7.52-5.012 0-2.172 1.334-4.087 3.675-4.087z" /><path d="m16.655 18.323c1.29 0 1.835-1.692 1.835-2.727s-.545-2.727-1.835-2.727-1.835 1.692-1.835 2.727.545 2.727 1.835 2.727z" /><path d="m7.47 18.323c1.29 0 1.835-1.692 1.835-2.727s-.546-2.726-1.835-2.726-1.835 1.692-1.835 2.727.545 2.726 1.835 2.726z" /></svg>




