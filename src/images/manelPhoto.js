import React, {useState, useEffect} from 'react'
import imagen from "./IMG-20190806-WA0018.jpg"
import styled from "styled-components"


export default function ManelPhoto() {

   

    
    const ImagenPnp = styled.img`
    position: absolute;
	width: 70%;
	mix-blend-mode: darken;
	backdrop-filter: blur(30px);
	top: 0;
	opacity: 0.7;
	overflow: hidden;
	left: 40%;
    object-fit: fill;
    
    `

    return (

        <ImagenPnp className="foto-layer" src={imagen} alt="Manel.jpg" />

    )
}


