import React, { useEffect, useRef } from "react";
// import randomColor from "randomcolor";
import styled from "styled-components";

const Card = props => {
  const cartaRef = useRef(null);

  //Buena tecnica en caso de que queramos scalar más de una carta, entonces scalariamos aquellasque esten dentro del "rango" que definamos.

  // const comprobar = () => {
  //   const middleLeft = props.bodyWidth / 2 - 200;
  //   const middleRight = props.bodyWidth / 2 + 50;
  //   const principioCarta = cartaRef.current.getBoundingClientRect().left
  //   const posicionAbsoluta = principioCarta + cartaRef.current.getBoundingClientRect().width - 260
  //   console.log(principioCarta, "principioCarta");
  //   console.log(posicionAbsoluta, "posicion absoluta");
  //   console.log(props.bodyWidth);
  //   if (principioCarta >= middleLeft && posicionAbsoluta <= middleRight) {
  //     console.log("JDFSKLBHLFBJSKBDFLDSBJFNDLIFJKNDLFKJNLDKJFBFNFLNKJH");
  //     cartaRef.current.style.transform = "scale(1.3)";
  //   } else {
  //     cartaRef.current.style.transform = "scale(1)";
  //   }
  // };

  const checkar = () => {
    if (props.activeCard === props.id) {
      cartaRef.current.style.willChange = "transform";
      cartaRef.current.style.transform = "scale(1.3)";
    } else {
      cartaRef.current.style.transform = "scale(1)";
    }
    cartaRef.current.style.willChange = "auto";
  };
  useEffect(() => {
    checkar();
  }, [props.activeCard]);

  return <Carta ref={cartaRef}>{props.id}</Carta>;
};

export default Card;

const Carta = styled.div`
  width: 200px;
  height: 200px;
  flex: 0 0 auto;
  border-radius: 1em;
  position: relative;
  margin: 1em;
  transition: all 0.5s ease;
  ${props => colorear(props)}
`;

const colorear = props => `
background: lightblue;`;
