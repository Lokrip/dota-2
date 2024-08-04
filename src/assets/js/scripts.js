import Modificator from "./modificator.js"

const initLoadComponents = () => {
   Modificator.MenuOpen()
   Modificator.parallax()
}

window.addEventListener('load', initLoadComponents)