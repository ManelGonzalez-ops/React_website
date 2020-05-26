
import React from "react"
import Card from "./card";

const GenerateCards = props => {
  let tot = [];
  for (let i = 0; i <= 10; i++) {
    tot.push(<Card bodyWidth={props.bodyWidth} activeCard={props.activeCard} id={i} key={i}/>);
   
  }
  return tot;
};

export default GenerateCards