import React, {useEffect, useRef} from "react";
import "./infoHoverable.css";
import {AiOutlineInfo} from "react-icons/ai"

export default function InfoHoverable({textu}) {
  const infoWrap = useRef(null)
 
  return (
    <div className="container-clip" ref={infoWrap}>
      <AiOutlineInfo className="icon-path"/>{textu}
    </div>
  );
}
