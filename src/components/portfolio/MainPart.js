import React, { useEffect, useRef, Fragment } from 'react'
import NodeEcommerce from "../../images/nodeEcommerce.png"
import ContentMain from "./ContentMain"
import { SvgReact, Node, Redux, Mongo, Postgres, Django, Mysql, Socket, Javascript } from "./svgs"

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
    },
    {
        title: "Node & React Ecommercdfdfe",
        text: "Modern Full Stack app which contains the main functonality needed by modern ecommerce such as clear and interactive interface, powered with a flexible purchase process that optimize sells",
        tech: [
            { name: "React", component: SvgReact },
            { name: "Node", component: Node },
            { name: "Socket.io", component: Socket },
            { name: "Mysql", component: Mysql },

        ],
        img: NodeEcommerce
    }
    ,
    {
        title: "Node & React Ecommercdfdfe",
        text: "Modern Full Stack app which contains the main functonality needed by modern ecommerce such as clear and interactive interface, powered with a flexible purchase process that optimize sells",
        tech: [
            { name: "Django", component: Django },
            { name: "Postgres", component: Postgres },
            { name: "Javascript", component: Javascript },

        ],
        img: NodeEcommerce
    }
]



const MainPart =()=> {

    const renders = useRef(0)
    
    return (
        <div className="upper-positionator">
            <h1>Contador: {renders.current++}</h1>
            {data.map((item, index) => {
                let val = index === data.length - 1 ? 0.2 : 0.5;
                return (<ContentMain key={index} info={{ item, index, threshold: val }} />)
            }



            )}

        </div>
    )
}

export default React.memo(MainPart)


