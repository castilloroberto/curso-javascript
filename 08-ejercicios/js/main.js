import { d } from "./constantes.js"
import { countdown } from "./countdown.js"
import { eventosTeclado } from "./eventosTeclado.js"
import { menuAmburgesa } from "./menuAmburgesa.js"
import { startAlarma, startReloj } from "./relojes.js"
import responsive from "./responsiveContent.js"
import openTester from "./responsiveTester.js"
import { scrollTop } from "./scrollTop.js"
import { changeTheme } from "./theme.js"




d.addEventListener('DOMContentLoaded', () => {


    menuAmburgesa('nav.menu','#btn-menu','nav.menu a')

    startReloj('#reloj','#iniciar-reloj','#detener-reloj')

    startAlarma('assets/Michael-Jackson-Smooth-Criminal.mp3','#iniciar-alarma','#detener-alarma')


    eventosTeclado('#caja','#circulo')

    countdown('countdown','August 31,2021 9:35:00','Cuenta terminada')

    responsive(
        'youtube',
        `
        <a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="nofollow">Yotube</a>
        `,
        `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `

    )
    responsive(
        'gmaps',
        `
        <a href="https://goo.gl/maps/ZeXviydcFAChWTmc6" target="_blank" rel="nofollow">Google Maps</a>
        `,
        `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7741.21354339495!2d-86.5734989!3d14.041307900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6e682f41002fdb%3A0xc0bd71b9e939c454!2sRestaurante%20Ovi%20%26%20Ser!5e0!3m2!1ses!2shn!4v1629468370339!5m2!1ses!2shn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        `
    )

    openTester('responsive-tester')
    scrollTop('btn-scroll-top')

    changeTheme('btn-theme')

})

