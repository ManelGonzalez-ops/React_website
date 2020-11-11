import React, { useEffect, useRef, Fragment, useContext } from 'react'
import "../css/scss-folder/skills/skills.css"
import { Context } from "../components/Context"
import Skill from "./SkillUnit"

export default function Skills() {

    let context = useContext(Context)
   

    const title = useRef(null)




    useEffect(() => {
        if ('IntersectionObserver' in window) {

           

            const tituloObs = new IntersectionObserver(item => {
                if (item[0].isIntersecting) {
                    item[0].target.classList.add("visibleB")
                }
            })

          

            tituloObs.observe(title.current)

        }
    }, [])

    const data = [
        {
            svg: SvgSass,
            title: "Sass / Scss"
        },
        {
            svg: SvgReact,
            title: "React"
        },
        {
            svg: SvgJavascript,
            title: "Javascript"
        },
        {
            svg: Webpack,
            title: "Webpack"
        },
        {
            svg: SvgCss,
            title: "CSS"
        },
        {
            svg: SvgHtml,
            title: "HTML5"
        },
        {
            svg: SvgGit,
            title: "Git & Github"
        },
        {
            svg: SvgNode,
            title: "React"
        },
        {
            svg: Express,
            title: "Express"
        },
        {
            svg: Figma,
            title: "Figma"
        },
        {
            svg: Django,
            title: "Django"
        },
        {
            svg: SvgPython,
            title: "Python"
        },
        {
            svg: Reduxx,
            title: "Redux"
        },
        {
            svg: Mongo,
            title: "MongoDb"
        }

    ]

    return (
        <Fragment>
            <div className="colocador" ref={context && context.skills}>
                <div className="title-container colocadorSkill" ref={title}><span className="title-line"></span>
                    <h1 className="titulo__componente">Skills</h1>
                </div>
            </div>
            <div className="skill-container">

                {data.map((item, index)=><Skill key={index} info={item}/>)}
                
            </div>
        </Fragment>
    )
}

const SvgSass = () => (<svg xmlns="http://www.w3.org/2000/svg" width="120" viewBox="0 0 512 384"><path fill="#CF649A" d="M440.6 220.6c-17.9.101-33.4 4.4-46.4 10.801-4.8-9.5-9.6-17.801-10.399-24-.9-7.2-2-11.601-.9-20.2C384 178.6 389 166.4 389 165.4c-.101-.9-1.101-5.3-11.4-5.4s-19.2 2-20.2 4.7-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.101-17.601-.899-7.199-2-11.6-.899-20.199 1.1-8.601 6.1-20.8 6.1-21.8-.1-.9-1.1-5.3-11.399-5.4-10.301-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3C281.9 201.4 256.9 257 250.4 271.5c-3.3 7.4-6.199 13.3-8.3 17.3-2.1 4-.1.3-.3.7-1.8 3.4-2.8 5.3-2.8 5.3v.101c-1.4 2.5-2.9 4.899-3.601 4.899-.5 0-1.5-6.7.2-15.899 3.7-19.301 12.7-49.4 12.601-50.5 0-.5 1.699-5.801-5.801-8.5-7.3-2.7-9.899 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.899-15.5-33.899c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.899-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1L117.9 251.9c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.601-101.8 78.3-39 141-28.3 151.899-4.5 15.5 34-33.5 97.2-114.899 106.3-31 3.5-47.301-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.899 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8C121.4 27.4 75.8 50.8 43 81.5 4 117.9-2.2 149.7.4 162.9c9.101 47.1 74 77.8 100 100.5-1.3.699-2.5 1.399-3.6 2-13 6.399-62.5 32.3-74.9 59.699-14 31 2.2 53.301 13 56.301 33.4 9.3 67.6-7.4 86.1-34.9 18.399-27.5 16.2-63.2 7.7-79.5l-.301-.6 10.2-6c6.601-3.9 13.101-7.5 18.8-10.601-3.199 8.7-5.5 19-6.699 34-1.4 17.601 5.8 40.4 15.3 49.4 4.2 3.899 9.2 4 12.3 4 11 0 16-9.101 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1a36.13 36.13 0 0 0 1.2-1.899v-.2c3-5.2 9.7-17.1 19.7-36.8 12.899-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.199 7.601 6.999 15.9 10.699 24-3 4.2-4.8 6.601-4.8 6.601l.1.1c-2.399 3.2-5.1 6.601-7.899 10-10.2 12.2-22.4 26.101-24 30.101-1.9 4.699-1.5 8.199 2.2 11 2.7 2 7.5 2.399 12.6 2 9.2-.601 15.6-2.9 18.8-4.301 5-1.8 10.7-4.5 16.2-8.5 10-7.399 16.1-17.899 15.5-31.899-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.801-2.601 2.7-4 15.8-23.101 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.899 6.5 5.7 13.601 9.1 20.601-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.899.8 9.5-1 13.699-2.8 5.2-1.7 11.5-4.601 17.301-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.899-8.2 49.6-5.7 44.5 5.2 53.3 33 51.601 44.6-1.7 11.601-11 18-14.101 20-3.1 1.9-4.1 2.601-3.8 4 .4 2.101 1.8 2 4.5 1.601 3.7-.601 23.4-9.5 24.2-30.899 1.2-27.504-24.9-57.504-71.2-57.205zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.801-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.199 9.1-5.5.6-.399 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.601-1.5-9-25.8-1.101-49.8 4-12.101 12.5-26.5 17.5-32.101 8.101-9 16.9-12 19.101-8.3 2.6 4.801-9.9 39.601-13.1 47.401zm88.7 42.4c-2.2 1.101-4.2 1.9-5.1 1.301-.7-.4.899-1.9.899-1.9s11.1-11.9 15.5-17.4c2.5-3.199 5.5-6.899 8.7-11.1v1.2C313.6 292.1 299.8 301.7 293.6 305.6zm68.399-15.6c-1.6-1.2-1.399-4.9 4-16.5 2.101-4.6 6.9-12.3 15.2-19.6 1 3 1.601 5.899 1.5 8.6-.099 18-12.899 24.7-20.7 27.5z" /></svg>)

const SvgReact = () => <svg viewBox="175.7 78 490.6 436.9" width="120" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" /><circle cx="420.9" cy="296.5" r="45.7" /></g></svg>
const SvgJavascript = () => <svg className="javascriptJ" width="120" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 0h256v256H0V0z" fill="#F7DF1E" /><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" /></svg>

const SvgCss = () => <svg width="105" viewBox="0 0 256 361" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M127.844 360.088L23.6621 331.166L0.445068 70.7661H255.555L232.314 331.126L127.844 360.088V360.088Z" fill="#264DE4" />
    <path d="M212.417 314.547L232.277 92.0569H128V337.95L212.417 314.547V314.547Z" fill="#2965F1" />
    <path d="M53.6689 188.636L56.5309 220.573H128V188.636H53.6689Z" fill="#EBEBEB" />
    <path d="M47.917 123.995L50.82 155.932H128V123.995H47.917V123.995Z" fill="#EBEBEB" />
    <path d="M128 271.58L127.86 271.617L92.292 262.013L90.018 236.542H57.958L62.432 286.688L127.853 304.848L128 304.808V271.58Z" fill="#EBEBEB" />
    <path d="M60.4839 0H99.1639V16.176H76.6599V32.352H99.1659V48.527H60.4839V0Z" fill="black" />
    <path d="M106.901 0H145.582V14.066H123.077V16.879H145.582V49.231H106.902V34.46H129.407V31.647H106.9V0H106.901Z" fill="black" />
    <path d="M153.319 0H192V14.066H169.495V16.879H192V49.231H153.319V34.46H175.824V31.647H153.32V0H153.319Z" fill="black" />
    <path d="M202.127 188.636L207.892 123.995H127.89V155.932H172.892L169.986 188.636H127.89V220.573H167.217L163.509 261.993L127.889 271.607V304.833L193.362 286.688L193.842 281.292L201.348 197.212L202.127 188.636V188.636Z" fill="white" />
</svg>


const SvgHtml = () => <svg width="105" viewBox="0 0 256 361" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M255.555 70.766L232.314 331.126L127.844 360.088L23.6621 331.166L0.445068 70.766H255.555Z" fill="#E44D26" />
    <path d="M128 337.95L212.417 314.547L232.277 92.057H128V337.95Z" fill="#F16529" />
    <path d="M82.82 155.932H128V123.995H47.917L48.681 132.563L56.531 220.573H128V188.636H85.739L82.82 155.932V155.932Z" fill="#EBEBEB" />
    <path d="M90.018 236.542H57.958L62.432 286.688L127.853 304.848L128 304.808V271.58L127.86 271.617L92.292 262.013L90.018 236.542V236.542Z" fill="#EBEBEB" />
    <path d="M24.1799 0H40.4099V16.035H55.2569V0H71.4879V48.558H55.2579V32.298H40.4109V48.558H24.1809V0H24.1799Z" fill="black" />
    <path d="M92.8299 16.103H78.5439V0H123.358V16.103H109.063V48.558H92.8329V16.103H92.8319H92.8299Z" fill="black" />
    <path d="M130.47 0H147.393L157.803 17.062L168.203 0H185.133V48.558H168.969V24.49L157.803 41.755H157.523L146.35 24.49V48.558H130.47V0Z" fill="black" />
    <path d="M193.21 0H209.445V32.508H232.269V48.558H193.209V0H193.21Z" fill="black" />
    <path d="M127.89 220.573H167.217L163.509 261.993L127.889 271.607V304.833L193.362 286.688L193.842 281.292L201.348 197.212L202.127 188.636H127.89V220.573Z" fill="white" />
    <path d="M127.89 155.854V155.932H205.033L205.673 148.754L207.129 132.563L207.892 123.995H127.89V155.855V155.854Z" fill="white" />
</svg>



const SvgGit = () => <svg className="gitG" width="120" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" ><path d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" fill="#DE4C36" /></svg>

const SvgNode = () => <svg className="nodeN" width="120" viewBox="0 0 256 282" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="#8CC84B"><path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" /><path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" /></g></svg>


const Figma = () => <svg width="90" viewBox="0 0 144 216" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 108C0 88.1178 16.1178 72 36 72H72V144H36C16.1178 144 0 127.882 0 108Z" fill="#A04FF0" />
    <path d="M0 36C0 16.1178 16.1178 0 36 0H72V72H36C16.1178 72 0 55.8823 0 36Z" fill="#ED2727" />
    <path d="M72 0H108C127.882 0 144 16.1178 144 36C144 55.8823 127.882 72 108 72H72V36V0Z" fill="#F96262" />
    <path d="M0 180C0 160.118 16.1178 144 36 144H72V180C72 199.882 55.8823 216 36 216C16.1178 216 0 199.882 0 180Z" fill="#24E287" />
    <circle cx="108" cy="108" r="36" fill="#2DDEDE" />
</svg>

const SvgPython = () => <svg className="pythonP" width="120" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><defs><linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a"><stop stopColor="#387EB8" offset="0%" /><stop stopColor="#366994" offset="100%" /></linearGradient><linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b"><stop stopColor="#FFE052" offset="0%" /><stop stopColor="#FFC331" offset="100%" /></linearGradient></defs><path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#a)" /><path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#b)" /></svg>

const Django = () => <svg width="100" viewBox="0 0 128 163" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M57.392 0H84.031V122.095C70.386 124.676 60.341 125.692 49.4725 125.692C16.9365 125.658 0 111.123 0 83.206C0 56.3085 17.965 38.852 45.804 38.852C50.124 38.852 53.415 39.192 57.392 40.2105V0ZM58.3255 62.2135C55.2055 61.1945 52.6345 60.855 49.343 60.855C35.8695 60.855 28.087 69.0735 28.087 83.4765C28.087 97.4995 35.527 105.243 49.172 105.243C52.12 105.243 54.52 105.077 58.3255 104.567V62.2135V62.2135Z" fill="#2BA977" />
    <path d="M127.593 42.1299V103.261C127.593 124.314 126.016 134.438 121.388 143.166C117.068 151.558 111.377 156.849 99.6174 162.694L74.8984 151.045C86.6579 145.58 92.3489 140.751 95.9834 133.382C99.7884 125.846 100.988 117.117 100.988 94.1594V42.1304H127.593V42.1299Z" fill="#2BA977" />
    <path d="M98.304 0H124.943V27.0675H98.304V0Z" fill="#2BA977" />
</svg>

const Express = () => <svg className="express" width="200" viewBox="0 0 512 149" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.332 115.629V58.648H74.476V55.315H3.332V3.332H78.974V0H0V118.961H79.64V115.629H3.333H3.332ZM143.787 33.322L114.297 72.143L85.472 33.323H81.14L112.297 74.643L78.14 118.96H82.139L114.295 77.14L146.618 118.96H150.783L116.461 74.641L147.784 33.321H143.786L143.787 33.322ZM160.781 148.285V94.97H161.114C163.114 102.745 167.057 108.993 172.944 113.714C178.831 118.434 186.328 120.795 195.436 120.795C201.323 120.795 206.544 119.601 211.098 117.213C215.652 114.825 219.456 111.576 222.511 107.466C225.565 103.356 227.898 98.58 229.509 93.137C231.119 87.695 231.925 81.974 231.925 75.977C231.925 69.534 231.091 63.591 229.425 58.149C227.759 52.706 225.343 47.985 222.178 43.987C219.012 39.988 215.18 36.877 210.681 34.657C206.183 32.435 201.101 31.324 195.436 31.324C191.104 31.324 187.078 31.963 183.357 33.24C179.636 34.518 176.332 36.322 173.444 38.655C170.539 41.0059 168.011 43.787 165.946 46.902C163.836 50.068 162.225 53.539 161.114 57.316H160.781V33.322H157.449V148.285H160.781V148.285ZM195.436 117.628C184.996 117.628 176.609 114.046 170.278 106.882C163.947 99.718 160.781 89.415 160.781 75.975C160.781 70.421 161.559 65.145 163.114 60.147C164.669 55.149 166.918 50.761 169.861 46.985C172.805 43.208 176.443 40.209 180.774 37.988C185.106 35.766 189.994 34.655 195.436 34.655C200.99 34.655 205.85 35.766 210.015 37.988C214.18 40.209 217.624 43.236 220.345 47.068C223.066 50.9 225.121 55.288 226.51 60.23C227.898 65.173 228.592 70.421 228.592 75.975C228.592 80.974 227.954 85.945 226.676 90.887C225.399 95.83 223.427 100.273 220.761 104.217C218.096 108.159 214.681 111.38 210.515 113.88C206.349 116.379 201.323 117.628 195.436 117.628V117.628ZM250.252 118.961V70.477C250.252 65.812 250.918 61.257 252.252 56.815C253.584 52.372 255.639 48.456 258.416 45.069C261.193 41.681 264.719 39.015 268.996 37.071C273.272 35.127 278.354 34.322 284.241 34.655V31.323C279.131 31.213 274.661 31.767 270.829 32.989C266.996 34.211 263.692 35.877 260.915 37.988C258.138 40.098 255.917 42.569 254.251 45.402C252.586 48.2305 251.351 51.2905 250.585 54.482H250.252V33.322H246.92V118.962H250.252V118.961ZM288.406 76.808H360.049C360.272 70.921 359.689 65.257 358.3 59.814C356.912 54.371 354.69 49.539 351.636 45.319C348.581 41.098 344.638 37.71 339.806 35.155C334.974 32.6 329.226 31.323 322.562 31.323C317.785 31.323 313.12 32.323 308.566 34.323C304.012 36.322 300.013 39.237 296.57 43.069C293.127 46.901 290.35 51.594 288.24 57.149C286.13 62.702 285.074 69.033 285.074 76.142C285.074 82.473 285.796 88.388 287.24 93.886C288.684 99.384 290.905 104.161 293.904 108.215C296.904 112.269 300.764 115.407 305.484 117.628C310.204 119.85 315.897 120.905 322.562 120.794C332.336 120.794 340.556 118.044 347.22 112.547C353.885 107.048 357.828 99.301 359.05 89.304H355.718C354.274 98.746 350.58 105.827 344.638 110.547C338.695 115.268 331.226 117.628 322.228 117.628C316.119 117.628 310.954 116.573 306.733 114.463C302.513 112.353 299.069 109.464 296.403 105.799C293.738 102.133 291.766 97.829 290.489 92.886C289.211 87.944 288.517 82.584 288.406 76.808ZM356.717 73.476H288.407C288.739 67.478 289.85 62.091 291.738 57.315C293.627 52.538 296.098 48.456 299.153 45.069C302.207 41.681 305.762 39.099 309.816 37.321C313.87 35.544 318.23 34.655 322.895 34.655C328.449 34.655 333.335 35.683 337.557 37.738C341.777 39.793 345.304 42.598 348.137 46.152C350.969 49.706 353.107 53.844 354.551 58.564C355.995 63.285 356.717 68.256 356.717 73.476ZM429.194 58.648H432.526C432.526 49.095 429.749 42.153 424.196 37.821C418.641 33.489 411.088 31.323 401.536 31.323C396.204 31.323 391.706 31.99 388.04 33.323C384.375 34.655 381.376 36.377 379.043 38.487C376.711 40.597 375.045 42.93 374.045 45.485C373.045 48.04 372.545 50.484 372.545 52.816C372.545 57.481 373.378 61.202 375.045 63.979C376.711 66.756 379.321 68.922 382.875 70.477C385.319 71.587 388.095 72.587 391.206 73.477C394.316 74.365 397.926 75.309 402.036 76.308C405.701 77.198 409.311 78.086 412.866 78.974C416.42 79.863 419.558 81.057 422.279 82.556C425.001 84.056 427.222 85.972 428.944 88.305C430.665 90.637 431.526 93.692 431.526 97.468C431.526 101.134 430.666 104.244 428.944 106.798C427.237 109.34 424.99 111.473 422.363 113.047C419.697 114.657 416.725 115.823 413.449 116.545C410.172 117.267 406.979 117.628 403.869 117.628C393.761 117.628 386.013 115.379 380.626 110.881C375.239 106.382 372.546 99.301 372.546 89.637H369.213C369.213 100.412 372.129 108.298 377.96 113.297C383.792 118.295 392.428 120.794 403.869 120.794C407.534 120.794 411.227 120.377 414.949 119.544C418.669 118.711 422.002 117.351 424.945 115.462C427.863 113.6 430.314 111.092 432.109 108.132C433.942 105.132 434.859 101.467 434.859 97.135C434.859 93.025 434.053 89.693 432.443 87.138C430.832 84.584 428.722 82.473 426.111 80.807C423.501 79.141 420.558 77.836 417.281 76.892C413.986 75.9424 410.681 75.0257 407.367 74.142C403.289 73.0721 399.207 72.017 395.121 70.977C391.623 70.088 388.374 69.033 385.375 67.811C382.487 66.589 380.182 64.84 378.46 62.563C376.738 60.286 375.878 57.037 375.878 52.816C375.878 52.039 376.1 50.65 376.544 48.651C376.988 46.651 378.044 44.624 379.71 42.569C381.376 40.515 383.93 38.682 387.374 37.071C390.817 35.461 395.538 34.655 401.536 34.655C405.646 34.655 409.394 35.1 412.782 35.988C416.17 36.877 419.086 38.293 421.529 40.237C423.973 42.181 425.861 44.652 427.194 47.651C428.527 50.651 429.194 54.316 429.194 58.648V58.648ZM506.335 58.648H509.667C509.667 49.095 506.891 42.153 501.337 37.821C495.783 33.489 488.23 31.323 478.677 31.323C473.346 31.323 468.847 31.99 465.182 33.323C461.516 34.655 458.517 36.377 456.185 38.487C453.852 40.597 452.186 42.93 451.186 45.485C450.186 48.04 449.687 50.484 449.687 52.816C449.687 57.481 450.52 61.202 452.187 63.979C453.852 66.756 456.463 68.922 460.017 70.477C462.461 71.587 465.237 72.587 468.347 73.477C471.457 74.365 475.067 75.309 479.177 76.308C482.843 77.198 486.453 78.086 490.007 78.974C493.562 79.863 496.699 81.057 499.421 82.556C502.142 84.056 504.364 85.972 506.085 88.305C507.807 90.637 508.668 93.692 508.668 97.468C508.668 101.134 507.807 104.244 506.085 106.798C504.378 109.34 502.131 111.473 499.505 113.047C496.838 114.657 493.867 115.823 490.59 116.545C487.314 117.267 484.12 117.628 481.01 117.628C470.902 117.628 463.155 115.379 457.768 110.881C452.38 106.382 449.687 99.301 449.687 89.637H446.355C446.355 100.412 449.27 108.298 455.102 113.297C460.933 118.295 469.569 120.794 481.01 120.794C484.676 120.794 488.369 120.377 492.09 119.544C495.81 118.711 499.143 117.351 502.087 115.462C505.005 113.6 507.456 111.092 509.251 108.132C511.084 105.132 512 101.467 512 97.135C512 93.025 511.195 89.693 509.584 87.138C507.974 84.584 505.864 82.473 503.253 80.807C500.643 79.141 497.699 77.836 494.423 76.892C491.128 75.9424 487.823 75.0257 484.509 74.142C480.431 73.0721 476.349 72.017 472.263 70.977C468.764 70.088 465.515 69.033 462.516 67.811C459.628 66.589 457.323 64.84 455.602 62.563C453.88 60.286 453.019 57.037 453.019 52.816C453.019 52.039 453.241 50.65 453.686 48.651C454.13 46.651 455.186 44.624 456.851 42.569C458.517 40.515 461.072 38.682 464.515 37.071C467.959 35.461 472.679 34.655 478.678 34.655C482.788 34.655 486.536 35.1 489.924 35.988C493.312 36.877 496.227 38.293 498.671 40.237C501.115 42.181 503.003 44.652 504.336 47.651C505.669 50.651 506.336 54.316 506.336 58.648H506.335Z" fill="#222222" />
</svg>

const Reduxx = () => <svg xmlns="http://www.w3.org/2000/svg" width="120" viewBox="0 0 256 244" preserveAspectRatio="xMidYMid"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" fill="#764ABC" />
</svg>



const Mongo = () => <svg width="200" viewBox="0 0 512 146" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M476.713 60.463c-.46.092-.922 1.107-.922 1.66-.092 3.692-.184 13.474-.184 20.118 0 .185.276.554.553.554 1.384.092 4.706.184 7.567.184 3.968 0 6.275-.553 7.568-1.106 3.321-1.662 4.89-5.261 4.89-9.23 0-8.95-6.275-12.365-15.596-12.365-.646-.092-2.49-.092-3.876.185zm23.81 41.25c0-9.136-6.737-14.212-18.918-14.212-.554 0-4.43-.092-5.353.092-.277.093-.645.278-.645.555 0 6.551-.093 16.98.184 21.04.184 1.753 1.477 4.245 3.046 4.983 1.66.923 5.444 1.107 8.028 1.107 7.29 0 13.658-4.06 13.658-13.565zm-42.634-46.325c.922 0 3.69.276 10.796.276 6.737 0 12.089-.184 18.641-.184 8.028 0 19.102 2.86 19.102 14.857 0 5.906-4.153 10.613-9.597 12.92-.276.092-.276.276 0 .368 7.751 1.939 14.581 6.737 14.581 15.78 0 8.86-5.537 14.489-13.566 17.996-4.891 2.122-10.981 2.86-17.164 2.86-4.707 0-17.349-.553-24.362-.368-.738-.278.646-3.6 1.291-4.153 1.662-.093 2.953-.185 4.707-.739 2.492-.645 2.768-1.384 3.137-5.167.185-3.23.185-14.674.185-22.794 0-11.166.093-18.733 0-22.424-.092-2.86-1.107-3.784-3.137-4.338-1.57-.276-4.153-.646-6.276-.922-.462-.462 1.107-3.6 1.662-3.968zm-53.248 57.399c2.216 1.752 6.553 2.49 10.429 2.49 4.983 0 9.966-.921 14.765-5.26 4.891-4.428 8.305-11.257 8.305-22.146 0-10.429-3.968-18.919-12.089-23.901-4.614-2.862-10.52-4.06-17.349-4.06-2.03 0-3.968.092-5.167.645-.278.185-.923 1.015-.923 1.476-.185 1.846-.185 16.057-.185 24.363 0 8.582 0 20.579.185 21.963 0 1.385.645 3.507 2.03 4.43zm-20.948-57.4c1.754 0 8.49.277 11.72.277 5.815 0 9.967-.276 20.948-.276 9.228 0 16.98 2.491 22.517 7.197 6.736 5.814 10.244 13.843 10.244 23.624 0 13.935-6.368 21.964-12.736 26.578-6.366 4.706-14.672 7.474-26.484 7.474-6.275 0-17.072-.184-26.024-.277h-.092c-.461-.83.738-4.06 1.476-4.152 2.4-.277 3.046-.37 4.246-.83 1.937-.739 2.307-1.754 2.584-5.168.276-6.368.184-14.027.184-22.702 0-6.182.092-18.272-.093-22.148-.276-3.229-1.66-4.06-4.429-4.614-1.384-.276-3.23-.646-5.813-.922-.37-.647 1.291-3.507 1.752-4.06z" fill="#8E714E" /><path d="M272.033 116.385c-2.307-.277-3.968-.645-5.998-1.568-.277-.185-.739-1.107-.739-1.477-.184-3.23-.184-12.458-.184-18.64 0-4.984-.83-9.321-2.953-12.366-2.492-3.508-6.09-5.537-10.705-5.537-4.06 0-9.505 2.768-14.027 6.644-.092.092-.83.739-.738-.277 0-1.015.185-3.045.277-4.43.093-1.292-.646-1.937-.646-1.937-2.953 1.476-11.258 3.414-14.304 3.69-2.214.463-2.768 2.585-.46 3.323h.092c2.49.738 4.152 1.569 5.443 2.4.923.738.831 1.753.831 2.584.092 6.92.092 17.533-.184 23.347-.092 2.307-.738 3.137-2.4 3.506l.185-.092c-1.292.277-2.307.553-3.876.738-.554.554-.554 3.507 0 4.153 1.015 0 6.367-.277 10.798-.277 6.09 0 9.228.277 10.796.277.646-.738.831-3.507.462-4.153-1.754-.092-3.046-.276-4.245-.646-1.661-.37-2.123-1.199-2.216-3.137-.183-4.892-.183-15.227-.183-22.24 0-1.938.553-2.861 1.106-3.415 2.123-1.845 5.538-3.137 8.583-3.137 2.953 0 4.89.923 6.367 2.123 2.03 1.66 2.676 4.06 2.953 5.813.461 3.968.277 11.812.277 18.641 0 3.691-.277 4.614-1.66 5.075-.647.277-2.308.647-4.246.83-.646.647-.461 3.508 0 4.154 2.676 0 5.814-.277 10.428-.277 5.721 0 9.413.277 10.89.277.46-.554.645-3.23.276-3.969zm25.562-35.25c-4.89 0-7.936 3.783-7.936 9.688 0 5.999 2.676 12.92 10.243 12.92 1.292 0 3.692-.554 4.798-1.846 1.754-1.66 2.954-4.983 2.954-8.49 0-7.659-3.784-12.273-10.059-12.273zm-.646 40.787c-1.845 0-3.138.554-3.968 1.016-3.876 2.49-5.629 4.89-5.629 7.752 0 2.675 1.015 4.797 3.23 6.643 2.676 2.307 6.367 3.415 11.073 3.415 9.413 0 13.566-5.076 13.566-10.058 0-3.508-1.754-5.815-5.352-7.106-2.584-1.108-7.29-1.662-12.92-1.662zm.646 23.994c-5.629 0-9.69-1.2-13.196-3.876-3.415-2.584-4.891-6.46-4.891-9.136 0-.738.185-2.769 1.846-4.614 1.014-1.108 3.23-3.23 8.49-6.829.184-.092.276-.184.276-.37 0-.184-.185-.369-.369-.46-4.337-1.661-5.629-4.338-5.999-5.814v-.185c-.091-.554-.276-1.107.555-1.661.646-.461 1.569-1.015 2.583-1.66 1.569-.924 3.23-1.939 4.245-2.77.185-.184.185-.368.185-.553 0-.185-.185-.37-.37-.461-6.458-2.123-9.688-6.922-9.688-14.12 0-4.706 2.122-8.951 5.905-11.627 2.584-2.03 9.044-4.522 13.289-4.522h.277c4.337.092 6.736 1.015 10.15 2.215 1.846.646 3.6.922 6 .922 3.598 0 5.167-1.107 6.458-2.398.093.184.278.646.37 1.845.092 1.2-.277 2.953-1.2 4.245-.738 1.015-2.399 1.754-4.06 1.754h-.462c-1.661-.185-2.4-.37-2.4-.37l-.368.185c-.092.185 0 .369.092.646l.093.185c.184.83.553 3.321.553 3.968 0 7.567-3.045 10.888-6.275 13.38-3.138 2.307-6.736 3.783-10.797 4.153-.092 0-.46 0-1.292.092-.461 0-1.107.093-1.2.093h-.092c-.738.184-2.583 1.107-2.583 2.675 0 1.384.83 3.046 4.798 3.323.83.092 1.66.092 2.584.185 5.26.368 11.812.83 14.857 1.845 4.245 1.568 6.921 5.352 6.921 9.874 0 6.83-4.89 13.197-13.011 17.164-3.968 1.754-7.937 2.677-12.274 2.677zm52.6-64.32c-1.937 0-3.691.46-4.983 1.383-3.598 2.215-5.444 6.645-5.444 13.104 0 12.09 6.09 20.58 14.765 20.58 2.584 0 4.614-.739 6.367-2.215 2.676-2.216 4.061-6.645 4.061-12.828 0-11.996-5.999-20.025-14.765-20.025zm1.662 39.496c-15.688 0-21.317-11.535-21.317-22.332 0-7.567 3.045-13.381 9.135-17.534 4.338-2.676 9.506-4.152 14.12-4.152 11.996 0 20.394 8.582 20.394 20.948 0 8.397-3.322 15.041-9.69 19.102-3.045 2.03-8.305 3.968-12.643 3.968h.001zM187.411 81.595c-1.938 0-3.691.461-4.984 1.384-3.598 2.215-5.444 6.645-5.444 13.104 0 12.09 6.09 20.58 14.765 20.58 2.584 0 4.614-.739 6.368-2.215 2.675-2.216 4.06-6.645 4.06-12.828 0-11.996-5.906-20.025-14.765-20.025zm1.661 39.497c-15.688 0-21.317-11.535-21.317-22.332 0-7.567 3.045-13.381 9.135-17.534 4.338-2.676 9.506-4.152 14.12-4.152 11.997 0 20.394 8.582 20.394 20.948 0 8.397-3.322 15.041-9.69 19.102-2.953 2.03-8.213 3.968-12.642 3.968zm-105.478-.923c-.185-.276-.37-1.107-.277-2.122 0-.739.185-1.2.277-1.384 1.938-.278 2.953-.555 4.06-.831 1.846-.462 2.584-1.476 2.676-3.783.278-5.537.278-16.058.185-23.348v-.185c0-.83 0-1.846-1.015-2.584-1.477-.922-3.23-1.752-5.537-2.4-.83-.275-1.384-.737-1.292-1.29 0-.554.554-1.2 1.754-1.385 3.045-.277 10.98-2.214 14.118-3.599.185.184.462.739.462 1.477l-.092 1.014c-.093 1.016-.185 2.216-.185 3.415 0 .369.37.646.738.646.185 0 .37-.092.554-.185 5.906-4.614 11.258-6.275 14.026-6.275 4.523 0 8.03 2.123 10.706 6.552.184.278.369.37.646.37.184 0 .46-.092.553-.277 5.445-4.153 10.89-6.645 14.488-6.645 8.582 0 13.658 6.368 13.658 17.165 0 3.045 0 7.013-.092 10.613 0 3.229-.092 6.182-.092 8.305 0 .46.645 1.937 1.66 2.214 1.292.646 3.046.923 5.353 1.292h.092c.185.646-.184 3.045-.553 3.507-.554 0-1.385 0-2.307-.092a136.208 136.208 0 0 0-7.014-.185c-5.721 0-8.674.092-11.536.277-.183-.738-.276-2.953 0-3.507 1.662-.276 2.492-.554 3.508-.83 1.846-.554 2.307-1.385 2.4-3.784 0-1.753.368-16.703-.186-20.302-.553-3.691-3.322-8.028-9.413-8.028-2.307 0-5.905.923-9.412 3.598-.184.185-.37.646-.37.923v.093c.37 1.937.37 4.153.37 7.567v5.998c0 4.153-.093 8.029 0 10.981 0 2.031 1.2 2.492 2.215 2.862.554.091.922.184 1.384.276.83.185 1.661.37 2.953.646.185.37.185 1.569-.092 2.584-.093.554-.278.83-.37.923-3.137-.092-6.367-.185-11.073-.185-1.384 0-3.784.093-5.814.093-1.662 0-3.23.092-4.152.092-.093-.185-.278-.83-.278-1.846 0-.83.185-1.476.37-1.661.461-.092.83-.184 1.292-.184 1.106-.185 2.03-.37 2.952-.554 1.57-.461 2.123-1.292 2.215-3.322.277-4.614.554-17.81-.092-21.133-1.107-5.352-4.152-8.028-9.044-8.028-2.86 0-6.46 1.384-9.412 3.6-.462.368-.831 1.29-.831 2.121v5.445c0 6.644 0 14.95.092 18.549.093 1.106.461 2.399 2.584 2.86.462.092 1.2.277 2.123.37l1.66.276c.186.554.093 2.769-.276 3.507-.923 0-2.03-.092-3.323-.092-1.937-.093-4.429-.185-7.197-.185-3.23 0-5.537.092-7.383.185-1.292-.185-2.307-.185-3.414-.185z" fill="#442D22" /><path d="M35.053 142.317l-3.783-1.293s.462-19.286-6.46-20.67c-4.613-5.353.74-227.013 17.35-.739 0 0-5.722 2.86-6.737 7.752-1.108 4.799-.37 14.95-.37 14.95z" fill="#FFF" /><path d="M35.053 142.317l-3.783-1.293s.462-19.286-6.46-20.67c-4.613-5.353.74-227.013 17.35-.739 0 0-5.722 2.86-6.737 7.752-1.108 4.799-.37 14.95-.37 14.95z" fill="#A6A385" /><path d="M37.084 123.676s33.13-21.779 25.377-67.09c-7.474-32.943-25.1-43.74-27.038-47.893C33.301 5.74 31.27.573 31.27.573l1.385 91.634c0 .093-2.861 28.054 4.43 31.47" fill="#FFF" /><path d="M37.084 123.676s33.13-21.779 25.377-67.09c-7.474-32.943-25.1-43.74-27.038-47.893C33.301 5.74 31.27.573 31.27.573l1.385 91.634c0 .093-2.861 28.054 4.43 31.47" fill="#499D4A" /><path d="M29.333 124.875S-1.767 103.65.079 66.277C1.832 28.903 23.795 10.539 28.04 7.217c2.769-2.953 2.861-4.061 3.046-7.014 1.938 4.153 1.569 62.106 1.845 68.934.83 26.3-1.476 50.756-3.598 55.738z" fill="#FFF" /><path d="M29.333 124.875S-1.767 103.65.079 66.277C1.832 28.903 23.795 10.539 28.04 7.217c2.769-2.953 2.861-4.061 3.046-7.014 1.938 4.153 1.569 62.106 1.845 68.934.83 26.3-1.476 50.756-3.598 55.738z" fill="#58AA50" /></g></svg>

const Webpack = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="120"><path fill="#fff" d="M600 0l530.3 300v600L600 1200 69.7 900V300z" /><path fill="#8ed6fb" d="M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z" /><path fill="#1c78c0" d="m580.8 889.7l-257-141.3v-280l257 148.4v272.9m36.7 0l257-141.3v-280l-257 148.4v272.9m-276.3-453.7l258-141.9 258 141.9-258 149-258-149" /></svg>
