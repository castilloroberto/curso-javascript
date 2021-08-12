import { d } from "./constantes.js"
import { start, startTimer} from "./relojes.js"

const $menu = d.querySelector('.menu')
const $btnMenu = d.getElementById('btn-menu')
let stopTimer = () => ''


d.onclick = ({target}) => {

    if (target == $btnMenu || target.matches('.menu a')) {
        $menu.classList.toggle('menu-visible')

        $btnMenu.textContent = $menu.classList.contains('menu-visible') ? 'X' : '#'
        
    }

    /* ejercicio 2*/
    if (target.matches('#btn-iniciar-reloj')) {
        
        start(target, d.getElementById('btn-detener-reloj'))

        stopTimer = startTimer(d.getElementById('reloj'))
        
    }
    
    if (target.matches('#btn-detener-reloj')) {
        start(target, d.getElementById('btn-iniciar-reloj'))
        //
        stopTimer()
        
    }
    
    if (target.matches('#btn-iniciar-alarma')) {
        start(target, d.getElementById('btn-detener-alarma'))
        
        d.querySelector('#seccion1 audio').play() 
        
    }
    
    if (target.matches('#btn-detener-alarma')) {
        start(target, d.getElementById('btn-iniciar-alarma'))
        d.querySelector('#seccion1 audio').pause() 
        
    }
}