import React, {Fragment, useEffect, useRef} from 'react'
import "./iconSection.css"

export default function IconSection() {
    const icn1 = useRef(null)
    const icn2 = useRef(null)
    const icn3 = useRef(null)
    const icnArr = [icn1, icn2, icn3]
    const observer = new IntersectionObserver(items=>{
        items.forEach(item=>{
            if(item.isIntersecting){
                item.target.style.willChange = "transform, opacity"
                item.target.childNodes[0].style.willChange = "transform, opacity"
                item.target.classList.add("onVisible")
            }
        })
    },{threshold: 0.8})

    useEffect(()=>{
        icnArr.forEach(item=>{
            observer.observe(item.current)
        })
    })
    return (
        <Fragment>
            <a href="https://linkedin.com/in/manelgonzalezescrig" target="_blank" rel="noopener noreferrer" className="icn-circle" ref={icn1}>
                  <Linkedin />
                </a>
                <a href="https://codesandbox.io/u/ManelGonzalez-ops/sandboxes" rel="noopener noreferrer" target="_blank" className="icn-circle" ref={icn2}>
                  <CodeSandbox />
                </a>
                <a href="https://github.com/ManelGonzalez-ops" rel="noopener noreferrer" target="_blank" className="icn-circle" ref={icn3}>
                  <Github />
                </a>
        </Fragment>
    )
}

const Linkedin = () =>
  <svg width="50%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M42.5938 42.6109H35.1984V31.0062C35.1984 28.2391 35.1406 24.6828 31.3313 24.6828C27.475 24.6828 26.8875 27.6844 26.8875 30.8016V42.6094H19.4828V18.7484H26.5953V22.0031H26.6906C27.6844 20.1234 30.1016 18.1469 33.7078 18.1469C41.2094 18.1469 42.6016 23.0859 42.6016 29.5078V42.6094L42.5938 42.6109ZM11.1172 15.4875C10.552 15.4877 9.99231 15.3764 9.4702 15.16C8.94808 14.9435 8.4738 14.6262 8.07451 14.2262C7.67522 13.8262 7.35877 13.3513 7.14328 12.8288C6.9278 12.3063 6.81752 11.7464 6.81875 11.1813C6.81968 10.3305 7.07283 9.49922 7.54619 8.79238C8.01955 8.08555 8.69187 7.53493 9.47814 7.21017C10.2644 6.88541 11.1293 6.80107 11.9635 6.96783C12.7977 7.13459 13.5637 7.54495 14.1647 8.14704C14.7657 8.74912 15.1747 9.51589 15.3399 10.3504C15.5052 11.1849 15.4193 12.0496 15.0931 12.8353C14.7669 13.621 14.2151 14.2923 13.5074 14.7644C12.7997 15.2365 11.9679 15.4881 11.1172 15.4875V15.4875ZM14.8266 42.6109H7.40625V18.75H14.8266V42.6109ZM46.3062 0H3.6875C1.65156 0 0 1.61094 0 3.60469V46.3969C0 48.3906 1.65156 50.0016 3.6875 50.0016H46.2984C48.3313 50.0016 50 48.3906 50 46.3969V3.60469C50 1.61094 48.3313 0 46.2984 0H46.3062Z" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>

const CodeSandbox = () =>
  <svg width="50%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16724 12.5L25.9454 0L47.7313 12.5L47.9188 37.3937L25.9454 50L4.16724 37.5V12.5ZM8.52036 17.6672V27.5797L15.486 31.4531V38.7781L23.7625 43.5641V26.3281L8.52036 17.6672ZM43.3922 17.6672L28.1501 26.3266V43.5625L36.4188 38.7766V31.4609L43.3938 27.5797L43.3922 17.6672ZM10.6938 13.7531L25.9125 22.3875L41.1625 13.6797L33.0985 9.09844L25.9938 13.1516L18.8485 9.05L10.6938 13.7531Z" fill="black" />
  </svg>

const Github =()=>(<svg id="Bold" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="50%" xmlns="http://www.w3.org/2000/svg"><path d="m12.29 21.499c3.73 0 8.94.09 10.835-3.701.715-1.449.875-3.122.875-4.7h-.001c0-2.073-.575-4.047-1.95-5.651.255-.766.385-1.573.385-2.385 0-1.064-.24-1.598-.73-2.563-2.24 0-3.69.42-5.39 1.742-1.31-.311-2.67-.455-4.02-.455-1.495 0-2.986.154-4.435.495-1.725-1.336-3.175-1.781-5.44-1.781-.484.965-.729 1.499-.729 2.563 0 .811.125 1.632.385 2.414-1.38 1.589-2.075 3.548-2.075 5.621 0 1.578.281 3.266 1.01 4.701 1.97 3.835 7.49 3.7 11.28 3.7zm-5.289-9.99c.95 0 1.865.168 2.8.297 3.418.52 5.215-.297 7.31-.297 2.339 0 3.675 1.915 3.675 4.087 0 4.349-4.015 5.012-7.53 5.012h-2.41c-3.5 0-7.52-.667-7.52-5.012 0-2.172 1.334-4.087 3.675-4.087z"/><path d="m16.655 18.323c1.29 0 1.835-1.692 1.835-2.727s-.545-2.727-1.835-2.727-1.835 1.692-1.835 2.727.545 2.727 1.835 2.727z"/><path d="m7.47 18.323c1.29 0 1.835-1.692 1.835-2.727s-.546-2.726-1.835-2.726-1.835 1.692-1.835 2.727.545 2.726 1.835 2.726z"/></svg>)




