import React from 'react'
import { Link } from "react-router-dom"
import { FaMap } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import {
    AiFillMessage,
    AiFillPhone,
    AiFillLinkedin,
    AiFillGithub
} from "react-icons/ai";
import "./footer.css"

export default function Footer() {
    return (
        <div className="footer-cont">
            <div className="flex-wrapper">
                
                <ul>
                    <li className="list-item"><span><AiFillPhone /></span>682406917</li>
                    <li className="list-item"><span><FaMap /></span>
                            Barcelona / 08005
                        </li>
                    <li className="list-item"><span><AiFillMessage /></span>manelgonzalezescrig@gmail.com</li>

                </ul>
            </div>
            <div className="flex-wrapperIcn">
                <a href="https://codesandbox.io/u/ManelGonzalez-ops/sandboxes" rel="noopener noreferrer"><FiCodesandbox className="icon-c" /></a>
                <a href="https://linkedin.com/in/manelgonzalezescrig"  rel="noopener noreferrer" target="_blank"><AiFillLinkedin className="icon-c" /></a>
                <a href="https://github.com/ManelGonzalez-ops" rel="noopener noreferrer" target="_blank"><AiFillGithub className="icon-c" /></a>
            </div>
            <p className="copyw">© 2020 Copyright: <Link to="/">gonzalezescrig.com</Link>
                </p>
        </div>
    )
}
