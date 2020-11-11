import React, { Fragment, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";





function Hero({ hasLoaded, contextu }) {

  const hero = useRef(null)
  const tituloHero = useRef(null)
  const btnPnp = useRef(null)
  const nombreH = useRef(null)
  const overflowWrap = useRef(null)



  useEffect(() => {
    tituloHero.current.classList.add("fuera")
  }, [])
  return (
    <Fragment>


      <div className="hero" ref={hero}>



        <p>Hi, I'm Manel</p>
        <h1 className="titulo-nombre" ref={nombreH}></h1>

        <div className="wrap-titleH" ref={overflowWrap}>
          <h1 ref={tituloHero} className="titulo-nameB">
            I turn any design into code
        </h1>
        </div>

        <Button className="btn-principal" variant="contained" size="large" ref={btnPnp} onClick={() => { contextu("portfolio") }}>My work</Button>

      </div>

    </Fragment>
  );
}
export default Hero

