import { d } from "./constantes.js";



export function eventosTeclado(caja = ' ', circulo = ' ') {
    caja = d.getElementById(caja.slice(1))
    circulo = d.getElementById(circulo.slice(1))
    let x = 0, y = 0
    d.addEventListener('keydown', (e) => {

        const limitCaja = caja.getBoundingClientRect(),
            limitCirculo = circulo.getBoundingClientRect()
        


        if (!e.ctrlKey) {

            if (
                e.key == "ArrowRight"
                && limitCirculo.right < limitCaja.right
            ) {
                e.preventDefault()
                x++
            }


            if (
                e.key == "ArrowLeft"
                && limitCirculo.left > limitCaja.left
            ) {
                x--
                e.preventDefault()

            }

            if (
                e.key == "ArrowUp"
                && limitCirculo.top > limitCaja.top
            ) {
                y--
                e.preventDefault()

            }



            if (
                e.key == "ArrowDown"
                && limitCirculo.bottom < limitCaja.bottom
            ) {
                y++
                e.preventDefault()

            }


            circulo.style.transform = `translate(${x * 5}px,${y * 5}px)`
            if (e.key == "p") {
                let res = prompt('Hola ingrese su nombre:')
                alert(`Gracias ${res}`)

            }

            if (e.key == "a") {

                alert(`Esta es una alerta`)

            }

            if (e.key == "c") {

                let res = confirm(`Quieres recargar la pagina?`)
                if (res) {
                    location.reload()
                }
            }
        }

    })


}