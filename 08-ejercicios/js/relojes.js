import { d } from "./constantes.js"

export function startReloj(reloj,btnstart,btnStop) {

    reloj = d.querySelector(reloj)
    let interval;
    
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

export function startAlarma(audio,btnStart,btnStop) {

    audio = d.querySelector(audio)
    d.addEventListener('click',({target}) => {


        if (target.matches(btnStart)) {

            audio.play()
            disableBtn(target,btnStop)
            
        }
        
        if (target.matches(btnStop)) {
            
            disableBtn(target,btnStart)
            audio.pause()
        }
    })
    
}
