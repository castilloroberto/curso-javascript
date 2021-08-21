import { d } from "./constantes.js";

export default function responsive(id='',mobileContent,desktopContent) {

    let breakPoint = matchMedia('(min-width:1024px)')
    function breakListener(event) {
        if (event.matches) {
            d.getElementById(id).innerHTML = desktopContent
            
        } else {

            d.getElementById(id).innerHTML = mobileContent
        }
    }
    breakPoint.addEventListener('change',breakListener)
    breakListener(breakPoint)

}