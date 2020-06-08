import React, { Fragment, useEffect, useState, useContext} from 'react'
import "./githubFinder.css"
import InfoHoverable from "../../../../utils/infoHoverable/infoHoverable"
import {Context} from "../../../Context"


export default function GithubFinder() {

    const {setHasbeenLoaded} = useContext(Context)

    const [inputGit, setInputGit] = useState("")

    let contenedor,
    cuerpo,
    perfil,
    gitFSection;

    useEffect(()=>{
         contenedor = document.querySelector("#git-titulo")
     cuerpo = document.querySelector(".search-container")
    perfil = document.getElementById("profile-git")
     gitFSection = document.getElementById("git-result")
        const searchUser = document.getElementById('git-search')
        searchUser.addEventListener('keyup', init_App); 
        setHasbeenLoaded(true)
        return(()=>{
            searchUser.removeEventListener('keyup', init_App)
        })
    }, [])

    class Github {
        constructor() {
          this.client_id = 'a73b1c1c96114cf35c3d';
          this.client_secret = '8c27f32581bc542d744a42737548e585cb010938';
          
          this.repos_count = 5
          this.sortt = "created: asc"
        }
      
        async getUser(user) {
          const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
          const profileRepos = await fetch(`https://api.github.com/users/${user}/repos?${this.repos_count}&sort=${this.sortt}client_id=${this.client_id}&client_secret=${this.client_secret}`);
          
          const profile = await profileResponse.json();
          const repos = await profileRepos.json()
      
          return {
            profile,
            repos
          }
        }
      }
      
     

      class Ui {

        showAlert() {
            const alerta = document.createElement("div")
            alerta.className = "alerta"
            alerta.innerText = "Usuario no encontrado"
            cuerpo.insertBefore(alerta, contenedor)
            setTimeout(() => {
                alerta.remove()
            }, 2000)
        }
    
        cleanProfile() {
            document.querySelector(".git-first-section").innerHTML = "<h1>Usuario no encontrado</h1>"
        }
    
        displayProfile(user) {
    
            gitFSection.innerHTML = `
                    <div class="git-left">
                        <img class="git-img" src="${user.profile.avatar_url}" alt="github user"/>
                        <a href="${user.profile.html_url}" class="git-visit">Ver perfil</a>
                    </div>
                    <div class="git-right">
                        <div class="git-btnsC">
                            <button class="git-btns">Public Repos: ${user.profile.public_repos}</button>
                            <button class="git-btns">Public Gists: ${user.profile.public_gists}</button>
                            <button class="git-btns">Followers: ${user.profile.followers}</button>
                            <button class="git-btns">Following: ${user.profile.following}</button>
                        </div>
                        <div class="git-contact">
                            <ul>
                                <li class="git-contactI">Company: ${user.profile.company}</li>
                                <li class="git-contactI">Website/Blog: ${user.profile.blog}</li>
                                <li class="git-contactI">Location: ${user.profile.location}</li>
                                <li class="git-contactI">Member Since: ${user.profile.created_at}</li>
                            </ul>
                        </div>
                    </div>
            ` 
    
        }
    
        displayRepo(repo) {
    
            let mamal = ""
            repo.forEach(repu => {
                mamal += `
                <li class="git-item">
                   <a href="${repu.html_url}">${repu.name}</a>
                   <button class="git-btns">Stars: ${repu.stargazers_count}</button>
                   <button class="git-btns">Watcher:${repu.watchers} </button>
                   <button class="git-btns">Forks: ${repu.forks_count}</button>
                </li> 
             `
            })
            perfil.innerHTML += mamal
    
        }
    }

    

    
const github = new Github;
const ui = new Ui;
 


    const init_App = e => {
        const userText = e.target.value;
      if (document.querySelector(".alerta")){
          document.querySelector(".alerta").remove()
          console.log("kaka")
      }
      
      if(userText !== ''){
       // Make http call
       github.getUser(userText)
        .then(data => {
            console.log(data.repos)
          if(data.profile.message === 'Not Found') {
            // Show alert
            ui.cleanProfile()
            ui.showAlert()
    
          } else {
            // Show profile
            ui.displayProfile(data)
            ui.displayRepo(data.repos)
            console.log(data.profile)
          }
        }).catch((e)=> console.log(e, "cagaste"))
      } else {
        // Clear profile
        document.getElementById("git-result").innerHTML = ""
        document.getElementById("profile-git").innerHTML = ""
        
      }
    }

    

   const texto = "Esta aplicación le busca usuarios de github por su nombre de usuario y le muestra de una manera rápida sus principales stats organizados en una UI generada dinámicamente, a la vez de un link para visitar su perfil real de github. Utiliza la API de github, la cual está limitada a 100 solicitudes por minuto así que si no funciona es porque algún visitante las ha gastado en el minuto entrante, asi que prueba un poco más tarde :)"
    
    return (
        <Fragment>
            <nav className="git-nav">
                <h3 className="git-nanL">
                    Github Finder
        </h3>
            </nav>
            <section className="git-section">

                <div className="search-container">
                    <h1 id="git-titulo">
                        Search Github Users
            </h1>
                    <div className="git-fgroup">
                        <label htmlFor="git-search" className="git-label">
                            Enter a username to fetch a user profile and repos
                </label>
                        <input type="text" id="git-search" className="git-search" name="git-search" placeholder="github usename.." value={inputGit} onChange={e=>setInputGit(e.target.value)}/>
                    </div>
                </div>
                <div className="git-results" id="git-result"></div>

                <div className="git-rest">
                    <ul className="git-list" id="profile-git">

                    </ul>
                </div>
            </section>
            <InfoHoverable textu={texto}/>
        </Fragment >
    )
}
