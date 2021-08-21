import { d } from "./constantes.js"

export function startReloj(reloj,btnstart,btnStop) {

    reloj = d.querySelector(reloj)
    let interval = undefined;
    
    d.addEventListener('click',({target})=>{
        
        if (target.matches(btnstart) ) {
            
            reloj.textContent = new Date().toLocaleTimeString();    
            interval = setInterval(() => {

                reloj.textContent = new Date().toLocaleTimeString();    

            },1000)

            disableBtn(target,btnStop)
        }

        if (target.matches(btnStop) ) {
         
            clearInterval(interval)
            disableBtn(target,btnstart)
        }
        
        
    })
    
    
     
}

function disableBtn(target,btnDisable) {
    target.disabled = true;
    d.querySelector(btnDisable).disabled = false;
}

export function startAlarma(srcAudio,btnStart,btnStop) {

    const $audio = d.createElement('audio')
    $audio.src = srcAudio
    let alarma = undefined;
    let interval = undefined;
    d.addEventListener('click',({target}) => {


        if (target.matches(btnStart)) {
            
            let res = prompt('Ingrese el tiempo en segundos en que iniciara la alarma',0);
            res = res ? Number(res) : 0
            
            if (!isNaN(res)) {
                disableBtn(target,btnStop)
                
                alarma = setTimeout(() => {
                    
                    $audio.play()
    
                }, res*1000);
               
                d.getElementById('contador').textContent = res;
                
                const contador = d.getElementById('contador')
                contador.textContent = res;

                interval = setInterval(() => {
                    res--
                    contador.textContent = res;
                    if (res == 0) {
                        clearInterval(interval)
                    }
                    
    
                }, 1000);

            } else {
                
                alert('Valor invalido\nIngrese un numero ')
            
            }

            

            
        }
        
        if (target.matches(btnStop)) {
            
            disableBtn(target,btnStart)
            clearTimeout(alarma)
            clearInterval(interval)
            $audio.currentTime = 0
            $audio.pause()
        }
    })
    
}
