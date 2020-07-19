import React from "react";
import "./banner.css";
import { FiCodesandbox } from "react-icons/fi";
import { FaMap } from "react-icons/fa";
import {
  AiFillMessage,
  AiFillPhone,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
export default function BannerContact() {
  return (
    
    <div className="carta-contacto">
      <h1>Contacto</h1>
      <ul>
        <li className="mapa">
          <FaMap className="mapaIcn" />
          <p>Calle Doctor Trueta</p>
          <p>08005</p>
          <p>Barcelona/Spain</p>
        </li>
        <li className="mensaje">
          <AiFillMessage className="msg" />
          manelgonzalezescrig@gmail.com
        </li>
        <li className="telefono">
          <AiFillPhone className="phone" />
          682406917
        </li>
      </ul>
    <a href={process.env.PUBLIC_URL + "images/cvManelGonzalez.pdf"} download className="contact-btnN" >Mi CV</a>
      <h3>También estoy en...</h3>
      <div className="icon-wrap">
        <a href="https://codesandbox.io/u/ManelGonzalez-ops/sandboxes" target="_blank" rel="noopener noreferrer"><FiCodesandbox className="icon-c" /></a>
        <a href="https://linkedin.com/in/manelgonzalezescrig" rel="noopener noreferrer" target="_blank"><AiFillLinkedin className="icon-c"/></a>
        <a href="https://github.com/ManelGonzalez-ops" rel="noopener noreferrer"><AiFillGithub className="icon-c"/></a>
      </div>
    </div>
  );
}
