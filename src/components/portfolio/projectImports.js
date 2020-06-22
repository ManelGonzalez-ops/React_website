

import video1 from "../../images/video1.mp4"
import video2 from "../../images/calorieTraker.mp4"
import video3 from "../../images/Pomodoro.mp4"
import video4 from "../../images/memoryCards.mp4"
import video5 from "../../images/weatherApp.mp4"
import video6 from "../../images/githubFinder.mp4"


// const ExpenseTrackerr = React.lazy(() => import("./videos/ExpenseTracker"))
// const MemoryCardss = React.lazy(() => import("./videos/memoryCards"))
// const GithubFinder = React.lazy(() => import("./videos/githubFinder"))
// const CalorieTracker = React.lazy(() => import("./videos/CalorieTracker"))
// const WeatherApp = React.lazy(() => import("./videos/WeatherApp"))
// const Pomodoro = React.lazy(() => import("./videos/Pomodoro"))



const componentArray = [
    {
        name: "Expense Tracker",
        video: video1,
        route: "/expenses"
    },
    {
        name: "Memory Cards",
        video: video2,
        route: "/music" 
    },
    {
        name: "Github Finder",
        video: video3,
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
        name: "Pomodoro Clock",
        video: video6,
        route: "/pomodoroClock" 
    }
]

export default componentArray



