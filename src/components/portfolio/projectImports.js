

import video1 from "../../images/video1.mp4"
import video2 from "../../images/calorieTraker.mp4"
import video3 from "../../images/Pomodoro.mp4"
import video4 from "../../images/memoryCards.mp4"
import video5 from "../../images/weatherApp.mp4"
import video6 from "../../images/githubFinder.mp4"



const componentArray = [
    {
        name: "Pomodoro Clock",
        video: video3,
        route: "/pomodoroClock" 
    }
   ,
    {
        name: "Memory Cards",
        video: video2,
        route: "/music" 
    },
    {
        name: "Github Finder",
        video: video6,
        route: "/githubFinder" 
    },
    {
        name: "Calorie Tracker",
        video: video4,
        route: "/calories" 
    },
    {
        name: "Weather App",
        video: video5,
        route: "/weatherApp" 
    },
    {
        name: "Expense Tracker",
        video: video1,
        route: "/expenses"
    }
   
]

export default componentArray



