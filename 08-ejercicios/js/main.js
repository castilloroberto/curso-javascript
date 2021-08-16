import { d } from "./constantes.js"
import { menuAmburgesa } from "./menuAmburgesa.js"
import { startAlarma, startReloj } from "./relojes.js"




d.addEventListener('DOMContentLoaded', () => {


    menuAmburgesa('nav.menu','#btn-menu','nav.menu a')

    startReloj('#reloj','#iniciar-reloj','#detener-reloj')

    startAlarma('#seccion1 audio','#iniciar-alarma','#detener-alarma')

})

