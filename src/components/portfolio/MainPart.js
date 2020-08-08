import React from 'react'

import ContentMain from "./ContentMain"
import { SvgReact, Node, Redux, Mongo, Postgres, Django, Mysql, Socket, Javascript } from "./svgs"
import NodeEcommerce from "../../images/nodeEcommerce.png"
import PythonEcommerce from "../../images/Python_Ecommerce.png"
import chatta from "../../images/chatta.png"

const data = [
    {
        title: "Node & React Ecommerce",
        text: "Modern Full Stack app which contains the main functonality needed by modern ecommerce such as clear and interactive interface, powered with a flexible purchase process that optimize sells",
        tech: [
            {
                name: "React",
                component: SvgReact
            },
            {
                name: "Node",
                component: Node
            },
            {
                name: "Redux",
                component: Redux
            },
            {
                name: "MongoDb",
                component: Mongo
            }
        ],
        img: NodeEcommerce
        ,
        urls: {
            web: "https://distracted-borg-05149b.netlify.app",
            code: "https://github.com/ManelGonzalez-ops/mern-ecommerce",
        }
        
    },
    {
        title: "Chatta, the anonimous chat",

        text: "A simple real time chat app built with React, Node and Mysql. The objective of this project was to learn how to use websockets and their capabilities for future side-projects",
        tech: [
            { name: "React", component: SvgReact },
            { name: "Node", component: Node },
            { name: "Socket.io", component: Socket },
            { name: "Mysql", component: Mysql },

        ],
        img: chatta
        ,
        urls: {
            web: "https://elegant-leakey-b744fc.netlify.app",
            code: "https://github.com/ManelGonzalez-ops/Chatta_frontend",
        }
    }

    ,
    {
        title: "Python Ecommerce",
        text: "This is a server side rendered Python web application. Some of their fetures: uthentification, Authorization, payment, order tracking and database Validation",
        tech: [
            { name: "Django", component: Django },
            { name: "Postgres", component: Postgres },
            { name: "Javascript", component: Javascript },

        ],
        img: PythonEcommerce,
        urls: {
            web: "https://manel-pythonecommerce.herokuapp.com/",
            code: "https://github.com/ManelGonzalez-ops/Python-Ecommerce",
        }
    }
]



const MainPart = () => {


    return (
        <div className="upper-positionator">
            {data.map((item, index) => {
                let val = index === data.length - 1 ? 0.2 : 0.5;
                return (<ContentMain key={index} info={{ item, index, threshold: val }} />)
            }



            )}

        </div>
    )
}

export default React.memo(MainPart)


