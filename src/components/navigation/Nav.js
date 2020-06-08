import React, { Fragment } from 'react'
import Manel from "../../images/manel.jpg"


export default class Nav extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            navOpen: false,
            show: true,
            scrollPos: 0,
            anularNav: false
        }
        this.navRef = null
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            window.addEventListener("scroll", this.handleScroll);
        }, 2000)

    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        
        
        if (document.body.getBoundingClientRect().top <= -1250) {
            if(this.navRef.style.position !== "fixed"){
                this.navRef.style.position = "fixed"
                this.navRef.style.visibility = "hidden"
                this.navRef.style.background = "#3503AB"
                
                document.querySelector("#yosvg").childNodes.forEach(path=>{
                    path.style.fill = "#fff"
                })
                document.querySelector(".listaNav").childNodes.forEach(li=>{
                    li.style.color = "#fff"
                })
                //no nos queda otra que esconder el nav la decima de segundo que cambia a pisicoje
                setTimeout(()=>{
                    this.navRef.style.visibility = "visible"
                }, 300)
            }
            const { scrollPos } = this.state;
            this.setState({
                show: document.body.getBoundingClientRect().top > scrollPos,
                scrollPos: document.body.getBoundingClientRect().top,
                
            });
        }
        else{
            if(this.navRef.style.position !== "absolute"){
                this.navRef.style.position = "absolute"
                this.navRef.style.background = "none"
                document.querySelector("#yosvg").childNodes.forEach(path=>{
                    path.style.fill = "#3503AB"
                })
                document.querySelector(".listaNav").childNodes.forEach(li=>{
                    li.style.color = "#3503ab"
                })
            }
            
        }
    }


    changeNav = () => {
        this.setState(prev => {
            return { navOpen: !prev.navOpen }
        }
        )
    }

    switchState = (seccion) => {
        this.setState({ navOpen: false })
        this.props.contextu(seccion)
    }



    render() {

        const CloseNav = () => (
            <svg viewBox="0 0 24 24" id="exit-btn" className="exit-btn" height="32px" width="32px" onClick={this.changeNav}>
                <path id="exit" fill="red" d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" />
            </svg>)

        const MaskNav = () => {
            return this.state.navOpen ?
                <div className="mask-nav">
                    <CloseNav /></div> : ""
        }

        const ListMovil = () =>
            this.state.navOpen ?
                <ul className="list-movil">
                    <li onClick={() => this.switchState("home")}>Home</li>
                    <li onClick={() => this.switchState("portfolio")}>Portfolio</li>
                    <li onClick={() => this.switchState("skills")}>Skills</li>
                    <li onClick={() => this.switchState("sobremi")}>Sobre mi</li>
                    <li onClick={() => this.switchState("contacto")}>Contacto</li>
                </ul>
                :
                ""

        return (
            <Fragment>
                <MaskNav />

                <header className={this.state.show ? "" : "navClosed"} ref={ref=>{this.navRef = ref}}>
                    <h1 onClick={() => this.switchState("home")}><YoSvg /></h1>
                    {/* <a className="nameN" href="#">Manel González <span>Escrig</span></a> */}
                    <nav>
                        <ul className="listaNav">
                            <li onClick={() => this.switchState("portfolio")}>Portfolio</li>
                            <li onClick={() => this.switchState("skills")}>Skills</li>
                            <li onClick={() => this.switchState("sobremi")}>Sobre mi</li>
                            <li onClick={() => this.switchState("contacto")}>Contacto</li>
                        </ul>

                        <span onClick={this.changeNav}><Hamburguer /></span>

                    </nav>

                </header>
                <ListMovil />

            </Fragment>
        )
    }
}


const Hamburguer = () => (
    <svg id="burger" viewBox="0 0 32 32">
        <path fill="black" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
    </svg>
)

const YoSvg = () => <svg width="204" id="yosvg" viewBox="0 0 204 165" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M151.486 149.729L113.836 149.4L113.891 143.072L144.722 143.341L144.858 127.662L116.348 127.413L116.4 121.437L144.911 121.686L145.063 104.179L113.705 103.905L113.759 97.7531L151.937 98.0862L151.486 149.729Z" fill="#3503AB" />
    <path d="M168.931 36.8547C172.54 41.559 174.753 46.3246 175.568 51.1513C176.773 58.1338 174.531 64.693 168.84 70.8289L163.687 64.1132C166.718 60.4875 168.078 56.7541 167.766 52.913C167.478 49.0545 165.834 45.1708 162.834 41.2619C159.277 36.6257 154.539 34.0508 148.62 33.5372C142.719 33.0464 136.326 35.4429 129.439 40.7267C123.485 45.2956 119.636 50.3255 117.891 55.8164C116.17 61.2898 117.576 66.9809 122.11 72.8898C125.58 77.4123 129.756 80.148 134.636 81.097C139.557 82.0513 144.975 80.313 150.891 75.882L138.858 60.2009L144.483 55.8849L161.355 77.8725L134.56 98.4325L131.212 94.0691L136.399 87.489C132.116 87.1293 128.805 86.438 126.467 85.4152C122.501 83.7286 118.757 80.5899 115.234 75.9991C110.683 70.0676 108.688 63.492 109.251 56.2724C110.494 47.9165 115.32 40.5125 123.728 34.0602C132.114 27.6254 140.528 24.7799 148.97 25.5235C157.011 26.2143 163.664 29.9914 168.931 36.8547Z" fill="#3503AB" />
    <path d="M10.6172 45.7109H30.6562L60.3281 133.039L89.7891 45.7109H109.617V149H96.3281V88.0391C96.3281 85.9297 96.375 82.4375 96.4688 77.5625C96.5625 72.6875 96.6094 67.4609 96.6094 61.8828L67.1484 149H53.2969L23.625 61.8828V65.0469C23.625 67.5781 23.6719 71.4453 23.7656 76.6484C23.9062 81.8047 23.9766 85.6016 23.9766 88.0391V149H10.6172V45.7109Z" fill="#3503AB" />
</svg>

// <img className="iconoMain" src={Manel} alt="error" />